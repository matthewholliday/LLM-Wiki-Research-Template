---
slug: /
sidebar_label: Wiki index
---

# Wiki Index

This is the entry point for the project's research questions, evidence, and conclusions.

| Section | Contents |
| --- | --- |
| [Topics](topics/INDEX.md) | Subject overviews, concepts, comparisons, and syntheses |
| [Methods](methods/INDEX.md) | Research approaches, analytical methods, and evaluation criteria |
| [Findings](findings/INDEX.md) | Individual conclusions supported by documented evidence |

## Authoring resources

- [Repository overview](README.md)
- [Agent instructions and research standards](AGENTS.md)
- [Research finding template](templates/research-finding.md)
- [Raw sources and ingestion ledger](raw/INDEX.md)
- [Research queue](RESEARCH-QUEUE.md)

## Research highlights

- [Drawing and visual capabilities in coding agents](topics/agent-visual-capabilities.md): Which agents have native image generation, which need canvas integrations, and how orchestrator graph rendering differs.
- [Visual output is not editable canvas control](findings/visual-output-is-not-editable-canvas-control.md): Generating a picture, editing shapes, and embedding a canvas are separate capabilities.

- [Agent harness session restart and rehydration](topics/agent-harness-session-rehydration.md): What survives restart across six harnesses and orchestration systems.
- [Session resume does not establish execution recovery](findings/session-resume-is-not-execution-recovery.md): Source-backed distinction between conversation, control state, workspace, and external effects.
- [Accessibility of agentic coding interfaces](topics/agentic-coding-ui-accessibility.md): Which coding agents and interface types work with screen readers.
- [Rendering model predicts agent UI accessibility](findings/rendering-model-predicts-agent-ui-accessibility.md): Linear streams and accessibility trees matter more than GUI versus TUI.
- [How Factory Droid 1.0 works](topics/factory-droid-1-0-harness.md): Script-based programmatic tool calling, the Agent Factory loop, and how far its claims are verified.
- [Droid 1.0's benchmark lead is vendor-reported](findings/droid-1-0-benchmark-lead-is-vendor-reported.md): Same-model Terminal-Bench 4 wins are unreplicated and use high, not max, reasoning.
- [Programmatic tool calling precedents](topics/programmatic-tool-calling-precedents.md): Where Script mode comes from and who else ships Code Mode or PTC.
- [Evaluating agent restart recovery](methods/agent-restart-recovery-evaluation.md): Proposed failure-injection protocol, not yet executed.
