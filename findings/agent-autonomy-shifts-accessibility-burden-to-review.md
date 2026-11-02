# Agent Autonomy Shifts the Accessibility Burden to Review and Status

[Findings index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created:** 2026-11-01
- **Last updated:** 2026-11-01
- **Evidence collected or checked:** 2026-11-01
- **Evidence type:** Two qualitative user studies with blind and low-vision developers, supported by product documentation
- **Status:** Supported for GitHub Copilot in VS Code; untested for other tools
- **Confidence:** Medium. Findings are consistent across two studies but come from small samples and one product.
- **Related pages:** [Agentic coding UI accessibility](../topics/agentic-coding-ui-accessibility.md), [rendering model finding](rendering-model-predicts-agent-ui-accessibility.md)

## Research question

When screen reader users move from code completion to agentic modes, where do accessibility barriers appear?

## Finding

Even in the best-supported IDE, agentic features move the hard part from writing code to supervising the agent. Screen reader users struggled most with reviewing multi-file changes, knowing where focus was, knowing what the agent was doing, and trusting results across views. Several participants moved back toward less autonomous modes to regain control.

## Evidence

1. **Mode preference shifted toward control.** In a study of 16 screen reader users, Agent mode was used most during initial tasks. In the two-week follow-up, 12 of 15 participants reported frequent use of Ask mode, 10 of Agent mode, and 5 of Edit mode. Participants described Ask mode as safer because it confirms before editing files. Section 4, Figure 6. [Original](https://arxiv.org/html/2506.13270v1), [local](../raw/2026-11-01/arxiv-2506-13270-vibe-coding-screen-readers.txt).
2. **Review and status were the main barriers.** The same study reports that Agent mode results arrived in long, unsegmented responses, status notifications were unclear, most participants preferred external terminals to the built-in one, and one participant found terminal output was not clearly announced. Participants valued the Accessible View and the structured message list, and one compared Copilot favorably with Cursor's "unstructured layout". Sections 5.2 to 5.4. Same source.
3. **Context switching and cognitive load.** A CHI 2025 study of 10 visually impaired developers using Copilot in VS Code found productivity benefits alongside difficulty navigating between code and AI chat windows, and overload from continuous suggestions. Authors propose "AI timeouts". Sections 4 and 5; limitations in 5.3. [Original](https://arxiv.org/html/2503.16491v1), [local](../raw/2026-11-01/arxiv-2503-16491-genai-visually-impaired.txt).
4. **Products now add status cues.** Claude Code's screen reader mode rings the terminal bell when a reply finishes, a prompt needs an answer, or a long tool finishes, and reads diffs line by line in approval prompts. [Original](https://code.claude.com/docs/en/accessibility), [local](../raw/2026-11-01/claude-code-accessibility.txt). Copilot CLI's `beep` setting serves the same purpose. [Original](https://accessibility.github.com/documentation/guide/cli/), [local](../raw/2026-11-01/github-cli-screen-reader-guide.txt).

## Method and context

Both studies examined GitHub Copilot in VS Code, conducted remotely with participants' own screen readers. The 2025 CHI study had 10 male participants; the vibe coding preprint had 16 participants (13 totally blind, 3 low vision) plus a two-week diary phase. Neither study tested terminal agents.

## Interpretation

Accessibility for agentic tools needs more than readable text. It needs announced state changes, segmented change summaries, stable focus, and user control over interruptions. These needs apply to both GUI and terminal agents.

## Limitations

Small, specialized samples; one product; versions from 2024 and 2025. Product features have changed since.

## Open questions and next steps

- Repeat the review and status tasks with terminal screen reader modes.
- Study pull-request-based cloud agents, where review happens in web code review tools.

## Sources

See the linked original and local pairs above. The [source ledger](../raw/INDEX.md) records hashes and extraction limits.

## Revision history

- **2026-11-01:** Initial entry.
