# Agent Harness Session Restart and Rehydration

[Topics index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created / last updated:** 2026-10-31
- **Evidence checked:** 2026-10-31
- **Evidence type:** Review of first-party product and framework documentation, not runtime experiments
- **Scope:** Claude Code / Agent SDK, Codex CLI, Factory Droid, OpenAI Agents SDK for Python, LangGraph, and Temporal-backed agents
- **Related:** [Core finding](../findings/session-resume-is-not-execution-recovery.md), [recovery evaluation method](../methods/agent-restart-recovery-evaluation.md), [source ledger](../raw/INDEX.md)

## Summary

**Session resume is not the same as execution recovery.** A coding harness can reload recorded conversation without restoring a shell process, an interrupted tool, or the workspace. Explicit run-state serialization and durable orchestration preserve additional control state, but do not remove the need to reconcile external effects.

This is a synthesis of the documentation below. It is not a claim that every harness has the same storage implementation or crash guarantees. In particular, a documented resume command is evidence of session continuation, not proof of exactly-once tool execution.

## Terms and stop conditions

- **Session restart:** Starting or reconnecting a harness and selecting an existing saved session.
- **Rehydration:** Reconstructing usable agent state from persisted records and runtime dependencies.
- **Graceful pause:** Reaching a supported interruption or completed-turn boundary and allowing persistence to finish.
- **Process crash:** Losing the process before cleanup or persistence necessarily completes.
- **Client disconnect:** Losing the UI or event consumer, which does not necessarily stop the agent.
- **Environment replacement:** Starting on a new machine or container, possibly without the old files or processes.

Keep these cases separate when assessing a product. For example, OpenAI Agents SDK documents that an event consumer can exit while the background run continues, and that cancellation cannot undo tool effects already performed. [S5]

## Four layers of state

This analytical framework separates things often described together as "agent memory":

1. **Conversation:** Messages, recorded tool calls/results, summaries, and explicit decisions.
2. **Control state:** Active agent, pending tools, approvals, graph position, and scheduled work.
3. **Workspace:** Repository contents, uncommitted changes, artifacts, and environment configuration.
4. **Live resources:** Processes, browser sessions, connections, and external jobs.

Restoring one layer does not establish that the others were restored. Claude's explicit separation of conversation persistence from filesystem checkpointing, OpenAI's serialized execution state, LangGraph's graph checkpoints, and Temporal's replay history motivate this distinction. [S1, S4, S6, S9]

## Harness comparison

| Harness | Documented persistence and resume | Preserved versus not established | Important boundary |
| --- | --- | --- | --- |
| **Claude Code / Agent SDK** | Automatically writes conversation history, including prompts, tool calls, tool results, and responses. Continue selects the latest session; resume selects an ID; fork copies history into a new session. [S1] | Recorded conversation survives when transcript storage survives. Session resume does not snapshot or restore filesystem contents. [S1] | Across hosts, transfer transcripts or use a session-store adapter. Shared-store lookup depends on the working directory. Forking history does not isolate file edits. [S1] |
| **Codex CLI** | Supports `codex resume`, `codex exec resume`, and forking. `codex exec --ephemeral` disables persistence of session rollout files. [S2] | Saved sessions can be continued. The reviewed command reference does not establish restoration of live shell processes, partially completed tools, or a byte-identical model context. [S2] | Resume uses saved session selection and working-directory rules. Do not infer crash-safe tool replay from the command's existence. [S2] |
| **Factory Droid** | Supports `droid --resume [sessionId]`, `droid exec -s <session-id>`, and forks. [S3] | Session continuation is documented. The reviewed reference does not establish arbitrary in-flight tool checkpointing or process-memory restoration. [S3] | Workspace retention is separate: interactive worktrees persist; exec removes clean worktrees on exit but preserves dirty ones. The branch is not deleted. [S3] |
| **OpenAI Agents SDK, Python** | A paused run can become a serialized `RunState`, then resume through `Runner`. The snapshot includes pending tools, arguments, and approval decisions. [S4] | More than conversation history can survive, provided the application durably saves and restores the supported state. A snapshot does not authenticate itself or its submitter. [S4] | Streaming supports immediate cancellation or `cancel(mode="after_turn")`. Drain events to let cleanup and persistence settle; arbitrary process death is not equivalent to obtaining and storing a clean state. [S5] |
| **LangGraph** | Checkpointers save graph state at super-step boundaries, with per-task writes supporting recovery of successful parallel nodes. The same `thread_id` identifies saved state. [S6] | Graph state and recorded completed work survive with a persistent backend. In-memory savers lose checkpoints on process restart. [S6, S8] | Resuming `interrupt()` with `Command(resume=...)` restarts the interrupted node from its beginning. Code before the interrupt executes again. [S7] |
| **Temporal-backed agents** | Workers reconstruct workflow state by replaying workflow code against durable event history. This is orchestration infrastructure, not a coding chat harness. [S9] | Recorded activity results survive and completed activities do not execute again merely because of replay. Process memory is reconstructed rather than retained. [S9, S10] | Replay must obey workflow determinism. An activity that acts externally but fails to report completion can retry, so idempotency remains necessary. [S9, S10] |

### Version and evidence caveats

The documentation is rolling and the review did not pin installed package versions. For example, the captured Claude page says cross-directory session-ID lookup changed in CLI v2.1.223; older bundled SDK CLIs can retain earlier lookup behavior. Its session-store guidance also adds a cross-host option beyond manual transcript transfer. Check the deployed version before relying on either behavior. [S1]

Absence of a guarantee in the reviewed Codex or Droid reference is recorded as **not established**, not as proof that the implementation lacks that capability.

## Which state survives a restart?

The following is a conservative operational model, not a verified feature matrix for every product. Rows derived from documentation cite the relevant sources. Other rows are explicitly engineering expectations that should be tested with the linked evaluation method.

| State | Preservation boundary | Evidence / interpretation |
| --- | --- | --- |
| User and assistant messages | Survive if the session was saved and its storage is retained. | Documented directly for Claude; session continuation documented for Codex and Droid. [S1, S2, S3] |
| Completed tool calls and recorded results | Recorded results can be reused; an unrecorded completion is a separate problem. | Claude transcripts, graph checkpoints, and Temporal history preserve different representations of completed work. [S1, S6, S10] |
| Plans, decisions, task progress | Recoverable if encoded in messages, summaries, files, or durable application state. | Interpretation: an unrecorded intention has no durable recovery representation. Do not assume all todo/subagent state is in the transcript. |
| Model internal computation | Do not assume an active inference resumes from its previous internal state. | Not established by these session APIs. Saved model-visible items are not proof of a live inference snapshot. |
| Context supplied to the next model call | May be rebuilt from history or compacted representations rather than reproduced identically. | OpenAI documents history compaction during finalization; exact cross-harness reconstruction was not tested. [S5] |
| Pending tool calls and approvals | Survive only if supported control state was saved. | OpenAI `RunState` explicitly preserves pending calls, arguments, and approvals; LangGraph records interrupts. [S4, S7] |
| Partially streamed assistant response | May be incomplete or absent from durable history. | Not established by this review; persistence may continue after the last visible token. [S5] |
| Files, artifacts, and uncommitted changes | Survive if the workspace survives, independently of the chat. | Claude explicitly separates sessions from filesystem state; Droid specifies worktree lifecycle. [S1, S3] |
| Shell variables, open handles, and in-memory objects | Normally lost when their owning process dies unless separately serialized or reconstructed. | Engineering expectation, not a tested per-harness guarantee. |
| Background processes and external jobs | May die with the environment or continue independently. | Requires reconciliation. Event-consumer exit is not reliable cancellation in OpenAI streaming. [S5] |
| Browser sessions and MCP/network connections | May need reconnection; separately persisted profiles or remote resources can survive. | Engineering expectation; no comprehensive browser/MCP recovery review was performed. |
| Configuration and credentials | Usually reloaded from runtime configuration and credential stores, not recovered from the model. | Engineering expectation. A transcript is not a safe environment backup; keep secrets out of recovery artifacts. |
| Permission policy and approval decisions | Distinguish durable policy from per-call and sticky decisions. | OpenAI documents serialized sticky approvals and warns that context overrides do not clear them. Other harnesses were not audited for this behavior. [S4] |
| Subagent coordination | Needs explicit persistence of delegated work and parent/child relationships. | OpenAI documents nested approval recovery through the outer run. General crash recovery of subagent trees remains untested. [S4] |

## The ambiguous side-effect window

Consider this illustrative failure sequence, not a measured experiment:

```text
1. Agent requests a deployment with operation ID X.
2. Deployment service accepts it.
3. Agent worker dies before recording the successful result.
4. Agent resumes with no recorded acknowledgment.
```

Repeating the tool might deploy twice. Assuming failure might misreport the actual state. Temporal explicitly documents this class of failure for activities: an operation can complete, its worker can crash before reporting completion, and the activity can retry. Recorded completed activities, by contrast, are not rerun merely to replay history. [S10]

**Engineering recommendation:** Use stable operation identifiers, externally enforced idempotency keys, and status lookups. Reconcile externally accepted operations before replaying them. Durable conversation or workflow state alone is not proof of exactly-once external effects. [S10]

LangGraph has another repetition boundary: code before an `interrupt()` runs again when the node resumes. Place non-repeatable work behind an appropriate durable boundary or make it idempotent. [S7]

## Choosing a recovery model

These are interpretations of the documented mechanisms, not benchmark rankings:

- **Return to coding tomorrow:** Saved-session continuation may suffice, provided the workspace is retained.
- **Wait for approval across service restarts:** Persist supported run state or graph checkpoints, including the pending request identity.
- **Survive worker failures during long-running work:** Durable orchestration can reconstruct control state, but tools still need safe retry and reconciliation.
- **Move between hosts:** Preserve conversation, control state, workspace artifacts, and external resource references separately. Recreate runtime dependencies and obtain credentials through the normal credential mechanism.

For a repeatable assessment, use the [restart recovery evaluation method](../methods/agent-restart-recovery-evaluation.md).

## Limitations and open questions

- This is a purposive comparison of six representative systems using ten first-party documentation pages. No independent secondary analysis, source-code audit, or runtime crash testing was performed.
- Vendor documentation establishes intended behavior, not measured reliability. Storage flush timing, retention, disk corruption, and concurrency can change outcomes.
- Packages and deployment versions were not pinned. Recheck these sources for implementation decisions.
- Exact handling of interrupted tools, partial responses, context compaction, and subagent trees in each coding harness remains unresolved.
- Rehydrating into changed code, tool schemas, model versions, or permission policies needs separate compatibility testing.
- A preserved snapshot may include sensitive tool arguments or stale approvals. OpenAI warns that deserialization does not authenticate a snapshot; integrity, ownership, and replay protection belong to the application. [S4]

## Sources

All sources are first-party documentation retrieved and checked on **2026-10-31**. Publication/update dates are unknown unless stated in the extract. Local files preserve selected Markdown paragraphs, not complete original pages. See the [ledger](../raw/INDEX.md) for hashes and ingestion records.

- **S1:** Anthropic, [Work with sessions](https://code.claude.com/docs/en/agent-sdk/sessions), especially "Continue, resume, and fork", "Resume by ID", and "Resume across hosts". [Local extract](../raw/2026-10-31/claude-agent-sdk-sessions.txt).
- **S2:** OpenAI, [Developer commands, CLI](https://learn.chatgpt.com/docs/developer-commands?surface=cli), especially `codex exec`, `--ephemeral`, `codex exec resume`, and `codex resume`. [Local extract](../raw/2026-10-31/codex-cli-commands.txt).
- **S3:** Factory, [Droid CLI reference](https://docs.factory.com/droid-cli/cli-reference.md), especially resume/fork commands and "Git worktrees". [Local extract](../raw/2026-10-31/factory-droid-cli-reference.txt).
- **S4:** OpenAI, [Human-in-the-loop](https://openai.github.io/openai-agents-python/human_in_the_loop/), especially approval flow, serialized state, and trusted snapshot storage. [Local extract](../raw/2026-10-31/openai-agents-human-in-the-loop.txt).
- **S5:** OpenAI, [Streaming](https://openai.github.io/openai-agents-python/streaming/), especially cancellation after the current turn and consumer/run lifetimes. [Local extract](../raw/2026-10-31/openai-agents-streaming.txt).
- **S6:** LangChain, [Checkpointers](https://docs.langchain.com/oss/python/langgraph/checkpointers), especially super-steps and pending writes. [Local extract](../raw/2026-10-31/langgraph-checkpointers.txt).
- **S7:** LangChain, [Interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts), especially "Resuming interrupts". [Local extract](../raw/2026-10-31/langgraph-interrupts.txt).
- **S8:** LangChain, [Persistence](https://docs.langchain.com/oss/python/langgraph/persistence), especially the warning that in-memory savers do not persist between restarts. [Local extract](../raw/2026-10-31/langgraph-persistence.txt).
- **S9:** Temporal Technologies, [Workflow Execution overview](https://docs.temporal.io/workflow-execution), especially replay and workflow cache. [Local extract](../raw/2026-10-31/temporal-workflow-execution.txt).
- **S10:** Temporal Technologies, [Activity Definition](https://docs.temporal.io/activity-definition), especially "Idempotency". [Local extract](../raw/2026-10-31/temporal-activity-definition.txt).

## Revision history

- **2026-10-31:** Initial synthesis of session stop/restart research and state-preservation comparison. Qualified broad conversational statements: restored history does not prove exact context restoration; undocumented capabilities remain unknown; source evidence is documentary rather than experimental.
