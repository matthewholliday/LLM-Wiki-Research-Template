# Evaluating Agent Restart Recovery

[Methods index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created / last updated:** 2026-10-31
- **Status:** Proposed method, not yet executed
- **Related:** [Harness comparison and source bibliography](../topics/agent-harness-session-rehydration.md), [core finding](../findings/session-resume-is-not-execution-recovery.md)

## Purpose and evidence basis

Determine which agent state survives each kind of stop, where work repeats, and whether recovery reconciles external effects. This method is an engineering proposal derived from the documented differences between conversation persistence, serialized run state, graph checkpoints, and workflow replay. It does not report test results.

The [comparison's sources](../topics/agent-harness-session-rehydration.md#sources) supply the relevant failure boundaries: OpenAI event-consumer exit versus cancellation (S5), LangGraph node restart before an interrupt (S7), and Temporal completion-report loss (S10). All were checked on 2026-10-31.

## Setup

1. Pin harness, SDK, model, tool schema, configuration, and operating-system versions.
2. Use a disposable repository and an isolated mock service. Do not test duplicate deployments, payments, or messages against real systems.
3. Record the session/thread/workflow ID, workspace identity, persistence backend, durability settings, and parent/subagent relationships.
4. Give the mock service an operation log and stable idempotency keys. Record attempts separately from accepted effects.
5. Create distinct state markers: a user message, recorded tool result, explicit plan, file edit, shell variable, pending approval, background job, and delegated task where supported. Never use real credentials as markers.
6. Capture durable artifacts and timestamps without logging secrets or user content.

## Failure matrix

Test each supported condition separately. An unsupported case is not a passing case.

| Stop condition | Recovery action | Question |
| --- | --- | --- |
| Clean end of turn and process exit | Resume the saved session | Are conversation and workspace markers retained? |
| Supported approval pause | Persist state, replace the process, then approve | Is the original pending call restored with unchanged arguments? |
| Graceful cancellation during a tool turn | Allow cleanup to finish, then resume | Which results were committed and what runs next? |
| Forced process termination during model output | Restart from durable records | Is partial output retained, discarded, or malformed? |
| Forced termination during a tool | Restart and inspect the mock operation log | Can the harness distinguish not-started, running, and completed work? |
| External success before completion recording | Restart with the acknowledgment deliberately withheld | Does recovery duplicate the effect or reconcile by operation ID? |
| UI or event-consumer disconnect | Reconnect or explicitly cancel | Did the agent continue running without the client? |
| Environment replacement | Restore only documented persisted artifacts | Which files, processes, connections, and dependencies are missing? |
| Changed tool schema or policy | Resume a saved pending call in isolation | Is incompatible or stale state rejected or revalidated? |

Use deterministic barriers in the mock service to place failures before acceptance, after acceptance, and after result persistence. Avoid relying only on approximate timing.

## Measurements and reporting

For every state marker and failure condition, report:

- **Preserved:** Recovered directly from a durable record.
- **Reconstructed:** Rebuilt through documented replay or explicit application setup.
- **Lost:** Absent after restart.
- **Still running externally:** Requires reconnecting or status reconciliation.
- **Unknown / unsupported:** Insufficient evidence or unavailable mechanism.

Record recovery time, repeated model calls, repeated tool attempts, accepted external effects, approval scope, and operator intervention. Keep harness logs and mock-service logs separate so the absence of a local acknowledgment is not mistaken for absence of an external effect.

Repeat trials and report counts, configuration, and failure placement. Do not publish a reliability percentage from a single demonstration. Verify that only one worker owns resumed work when evaluating duplicate execution.

## Limits

A passing clean-pause test does not establish crash recovery. A same-host test does not establish portability. Checkpoint retention does not establish filesystem retention. No finite fault test proves exactly-once behavior for every external system.

This repository has not yet run this protocol. Results should be added as separate findings with exact versions and artifacts, then linked to the [comparison](../topics/agent-harness-session-rehydration.md).
