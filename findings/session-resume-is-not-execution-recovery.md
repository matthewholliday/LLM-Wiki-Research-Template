# Session Resume Does Not Establish Execution Recovery

[Findings index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created:** 2026-10-31
- **Last updated:** 2026-10-31
- **Evidence collected or checked:** 2026-10-31
- **Evidence type:** First-party documentation review
- **Status:** Supported within the reviewed documentary scope
- **Confidence:** High for the distinction between documented persistence mechanisms; runtime recovery reliability was not measured
- **Related pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md), [evaluation method](../methods/agent-restart-recovery-evaluation.md)

## Research question

Does resuming an agent session imply that its interrupted execution, workspace, and external effects have also been restored?

## Finding

No such implication is established by the reviewed documentation. Conversation persistence, execution-state persistence, workspace retention, and external-effect reconciliation are different mechanisms. A saved-session command alone is insufficient evidence of crash-safe tool recovery or exactly-once effects.

This does not mean coding harnesses lack recovery features. It means their documented session-resume interfaces should not be treated as guarantees about unexamined state.

## Evidence

1. **Conversation is not filesystem state.** Anthropic states that sessions preserve conversation, not the filesystem, and that forking a conversation does not isolate file edits. See "Work with sessions", especially the introduction and fork sections. [Original](https://code.claude.com/docs/en/agent-sdk/sessions), [local extract](../raw/2026-10-31/claude-agent-sdk-sessions.txt).
2. **Control state can have an explicit serialization boundary.** OpenAI documents `RunState` snapshots containing approval decisions, pending calls, and arguments, with explicit serialization and resume steps. See "Human-in-the-loop". [Original](https://openai.github.io/openai-agents-python/human_in_the_loop/), [local extract](../raw/2026-10-31/openai-agents-human-in-the-loop.txt).
3. **Resume can repeat code.** LangGraph documents that the interrupted node restarts from its beginning, executing pre-interrupt code again. See "Resuming interrupts". [Original](https://docs.langchain.com/oss/python/langgraph/interrupts), [local extract](../raw/2026-10-31/langgraph-interrupts.txt).
4. **Durable replay does not remove external-effect ambiguity.** Temporal documents that completed activities are not rerun during replay, but an activity can be retried if its worker dies after completing the operation and before reporting completion. See "Idempotency". [Original](https://docs.temporal.io/activity-definition), [local extract](../raw/2026-10-31/temporal-activity-definition.txt).

## Method and context

The parent [topic](../topics/agent-harness-session-rehydration.md) compares six representative systems using ten first-party documentation pages retrieved on 2026-10-31. The four sources above directly support this narrower finding. Sources are rolling documentation; installed implementations were not version-pinned or tested.

## Interpretation

Assess recovery at each persistence boundary rather than asking only whether a harness "has memory". A robust design records pending operation identity and reconciles external status before repeating consequential work. Idempotency keys can make retries safe when enforced by the external service.

## Limitations

This is documentary evidence, not a runtime experiment or source-code audit. Retention settings, partial writes, process supervision, storage configuration, and product versions can change observed behavior. No comparative failure rates or universal ranking are supported.

## Open questions and next steps

- Run the [evaluation protocol](../methods/agent-restart-recovery-evaluation.md) against pinned harness versions.
- Establish per-product behavior for interrupted tools, partial responses, and subagent trees.
- Test cross-host resume separately from same-workspace continuation.

## Sources

The four original/local source pairs in Evidence were checked on 2026-10-31. Publication/update dates are unknown. Hashes, extraction limitations, and ingestion state are recorded in the [source ledger](../raw/INDEX.md).

## Revision history

- **2026-10-31:** Initial source-backed finding, explicitly separated from unperformed crash testing.
