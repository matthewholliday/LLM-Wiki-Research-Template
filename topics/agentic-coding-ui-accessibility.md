# Accessibility of Agentic Coding Interfaces

[Topics index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created / last updated:** 2026-11-01
- **Evidence checked:** 2026-11-01
- **Evidence type:** First-party documentation, public issue reports by assistive-technology users, one practitioner essay, and two peer-reviewed or preprint user studies
- **Scope:** Screen reader and low-vision access to interactive agentic coding tools: IDE agents (VS Code with GitHub Copilot, Cursor, Zed), terminal agents (Claude Code, GitHub Copilot CLI, Codex CLI, Kiro CLI, Gemini CLI, OpenCode), and agent desktop apps (Codex app, OpenCode desktop, Warp). Cloud agents that work through pull requests were not assessed.
- **Related:** [Rendering model finding](../findings/rendering-model-predicts-agent-ui-accessibility.md), [agent supervision finding](../findings/agent-autonomy-shifts-accessibility-burden-to-review.md), [source ledger](../raw/INDEX.md)

## Research question

For drawing and canvas support, see the separate [visual-capability comparison](agent-visual-capabilities.md). Availability of visual output does not establish accessibility.

Which agentic coding user interfaces are considered the most accessible, both as specific products and as general interface types such as GUI and TUI?

## Short answer

As of 2026-11-01, the strongest documented options for screen reader users are:

1. **VS Code with GitHub Copilot Chat and agent mode** (GUI IDE). It has the most mature accessibility stack, the only user studies with blind developers found in this review, and chat-specific features such as Accessible View for responses, the accessible diff view, and accessibility signals. [S3, S4, S15, S16]
2. **Terminal agents run in an explicit screen reader mode**, led by Claude Code (`--ax-screen-reader`) and GitHub Copilot CLI (`--screen-reader`), with Kiro CLI offering a similar setting. These modes replace the redrawn full-screen interface with linear, labeled text and numbered menus. [S1, S2, S5, S10]

Codex CLI, Warp, Gemini CLI, and the Codex desktop app have partial support with open problems. Cursor's editor inherits VS Code accessibility, but a 2026 user report describes its agent dialogue as opaque. OpenCode and Zed were reported as largely or entirely unusable with screen readers. [S6, S7, S8, S9, S11, S12, S13]

At the level of interface types, **GUI versus TUI is the wrong split**. The evidence points to rendering model instead: linear, append-only text streams and GUIs built on a real accessibility tree work well; full-screen TUIs that redraw a character grid, and GUIs drawn without an accessibility tree, work poorly. See the [rendering model finding](../findings/rendering-model-predicts-agent-ui-accessibility.md).

No independent comparative benchmark was found. "Considered most accessible" here means best supported by vendor documentation, accessibility-team guidance, and assistive-technology users' public reports, not by a controlled ranking.

## Interface types

| Interface type | Typical examples | Accessibility pattern in the evidence |
| --- | --- | --- |
| Line-oriented CLI stream or headless mode | `claude -p`, `copilot -p`, Claude Code and Copilot CLI screen reader modes | Most reliable terminal pattern. Output appends in order and stays in scrollback. [S1, S2, S14] |
| Full-screen redrawn TUI | Default Claude Code, Codex, OpenCode, and Gemini CLI interfaces | Frequently hostile: spinners, box drawing, cursor jumps, repeated announcements, and alternate screens without scrollback. [S6, S8, S14] |
| GUI on an accessibility-tree platform | VS Code chat and Agents window | Strongest overall, but agent mode still adds focus, review, and status problems. [S4, S15, S16] |
| Fork of an accessible GUI with custom agent panels | Cursor | Editor access is inherited; custom agent surfaces may not be. [S13] |
| GUI drawn without an accessibility tree | Zed (GPUI), Warp | No support (Zed) or app-generated announcements without screen reader navigation (Warp). [S11, S12] |
| Web or desktop chat app with streamed updates | Codex app, OpenCode desktop | Streaming updates can move reading position or stay hidden from assistive technology. [S7, S8] |

## Product comparison

| Product | Interface | Documented accessibility features | Reported problems | Assessment |
| --- | --- | --- | --- | --- |
| VS Code with GitHub Copilot | GUI IDE and Agents window | Automatic screen reader detection, Accessible View for chat responses, accessible diff view, accessibility signals, Accessibility Help for Chat view [S3, S4] | Focus confusion between views, long unsegmented agent responses, unclear agent status, terminal output not clearly announced [S15, S16] | Strongest evidence base |
| Claude Code | Terminal; also VS Code extension | Opt-in screen reader mode with flat text, message labels, numbered menus, typed yes or no prompts, terminal bell, OSC 133 turn markers; magnifier cursor, reduced motion, and daltonized themes [S1] | No automatic detection; some announcements and attached background sessions not adapted [S1] | Strong terminal option; vendor claims not independently validated |
| GitHub Copilot CLI | Terminal | `--screen-reader` flag and `screenReader` setting, `beep`, `mouse: false`, `stream: false`, numbered permission prompts [S2]; redesigned interface auto-enables screen reader support and adds high-contrast and colorblind modes [S5] | No independent user reports collected | Strong terminal option, documented by GitHub's accessibility team |
| Kiro CLI | Terminal | `chat.screenReader` with `auto`, `on`, `off`; cursor follows streaming replies; animation toggle [S10] | Auto-detection covers only local VoiceOver on macOS [S10] | Promising; little user evidence |
| Codex CLI | Terminal | `tui.animations = false`; screen reader detection begun [S6] | Box drawing and decoration announced, repeated speech under JAWS over SSH, history hidden in alternate screen; `--no-alt-screen` workaround user-tested on macOS [S6] | Partial; open feature request |
| Codex app and IDE extension | Desktop GUI, VS Code extension | None found | Screen reader focus jumps to the top during streaming on Windows, also reported in the VS Code extension [S7] | Problematic for streaming output |
| Gemini CLI | Terminal (Ink) | Screen reader work marked complete as an "initial pass" [S9] | Practitioner reports cursor spam, crashes, and input lag with Ink rendering [S14] | Partial and disputed |
| Warp | GUI terminal | VoiceOver announcements, verbosity setting, voice input [S11] | macOS only; standard VoiceOver navigation does not work [S11] | Partial |
| Cursor | GUI IDE (VS Code fork) | Editor works with `ACCESSIBILITY_ENABLED=1` per user report [S13] | Agent dialogue "completely opaque"; AI suggestions unreadable [S13] | Poor for agent use |
| OpenCode | Terminal and desktop GUI | None in core; accessibility mode PR not merged [S8] | Emoji, animation, and menu barriers in TUI; GUI messages unreadable [S8] | Poor |
| Zed | Custom GPU-rendered GUI | None | Staff state Zed does not support screen readers on macOS, Linux, or Windows [S12] | Inaccessible to screen readers |

## Beyond screen readers

Low-vision and color needs are addressed separately in several tools: Claude Code offers a magnifier-friendly cursor, reduced motion, and colorblind themes; Copilot CLI offers high-contrast and colorblind color modes and local voice input; Warp offers voice input. [S1, S5, S11] Evidence for motor, cognitive, or hearing disabilities was not collected.

## Limitations

- Vendor documentation describes intended behavior; it does not prove usability.
- Issue reports are individual experiences with specific versions, screen readers, terminals, and platforms. Some may already be fixed.
- Both user studies examined GitHub Copilot in VS Code in 2024 and 2025, before current terminal screen reader modes existed. Participants were small samples (10 and 16), and one sample was entirely male. [S15, S16]
- The practitioner essay is argumentative and focuses on Linux Speakup and NVDA. [S14]
- JetBrains Junie, Windsurf, Cline, Aider, Factory Droid, and cloud pull-request agents were not assessed. Absence from this page is not evidence of inaccessibility.

## Open questions

- How do current screen reader modes compare in a task-based study with blind developers?
- Does append-only streaming in terminal modes solve the review and status problems found in IDE agent mode, or move them elsewhere?
- How accessible are pull-request-based cloud agents, which rely on mature web code review interfaces?

## Sources

All sources were retrieved on 2026-11-01. Local files are text snapshots from FetchUrl Markdown extraction. See the [source ledger](../raw/INDEX.md) for hashes and limitations.

- **S1:** Anthropic, "Use Claude Code with a screen reader". [Original](https://code.claude.com/docs/en/accessibility), [local](../raw/2026-11-01/claude-code-accessibility.txt).
- **S2:** GitHub Accessibility, "Using Git, GitHub CLI, and Copilot CLI with a Screen Reader", Part 3. [Original](https://accessibility.github.com/documentation/guide/cli/), [local](../raw/2026-11-01/github-cli-screen-reader-guide.txt).
- **S3:** GitHub Accessibility, "Using GitHub Copilot in Visual Studio Code with a Screen Reader". [Original](https://accessibility.github.com/documentation/guide/github-copilot-vsc/), [local](../raw/2026-11-01/github-copilot-vscode-screen-reader-guide.txt).
- **S4:** Microsoft, VS Code "Accessibility" documentation. [Original](https://code.visualstudio.com/docs/configure/accessibility/accessibility), [local](../raw/2026-11-01/vscode-accessibility.txt).
- **S5:** GitHub Changelog, "Copilot CLI: Improved UI, rubber duck, prompt scheduling, and voice input", 2026-06-02. [Original](https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input/), [local](../raw/2026-11-01/copilot-cli-changelog-2026-06-02.txt).
- **S6:** openai/codex issue 20489, "Add a screen-reader-friendly Codex TUI mode". [Original](https://github.com/openai/codex/issues/20489), [local](../raw/2026-11-01/codex-issue-20489-screen-reader-tui.txt).
- **S7:** openai/codex issue 22816, screen reader focus jumps during generation. [Original](https://github.com/openai/codex/issues/22816), [local](../raw/2026-11-01/codex-issue-22816-desktop-focus.txt).
- **S8:** anomalyco/opencode issue 8565, accessibility mode for screen reader users. [Original](https://github.com/anomalyco/opencode/issues/8565), [local](../raw/2026-11-01/opencode-issue-8565-accessibility-mode.txt).
- **S9:** google-gemini/gemini-cli issue 5148, screen reader accessibility parent issue. [Original](https://github.com/google-gemini/gemini-cli/issues/5148), [local](../raw/2026-11-01/gemini-cli-issue-5148-screen-reader.txt).
- **S10:** Kiro, "In-session settings", CLI chat documentation. [Original](https://kiro.dev/docs/cli/chat/settings/), [local](../raw/2026-11-01/kiro-cli-settings.txt).
- **S11:** Warp, "Accessibility" documentation. [Original](https://docs.warp.dev/terminal/more-features/accessibility/), [local](../raw/2026-11-01/warp-accessibility.txt).
- **S12:** zed-industries/zed issue 41138, Windows screen reader accessibility. [Original](https://github.com/zed-industries/zed/issues/41138), [local](../raw/2026-11-01/zed-issue-41138-windows-screen-reader.txt).
- **S13:** Cursor Community Forum, "Accessibility Issues with Screen Readers in Cursor". [Original](https://forum.cursor.com/t/accessibility-issues-with-screen-readers-in-cursor-can-they-be-improved/56823), [local](../raw/2026-11-01/cursor-forum-screen-readers.txt).
- **S14:** Xogium, "The text mode lie: why modern TUIs are a nightmare for accessibility", 2026-01-05. [Original](https://xogium.me/the-text-mode-lie-why-modern-tuis-are-a-nightmare-for-accessibility), [local](../raw/2026-11-01/xogium-text-mode-lie.txt).
- **S15:** Flores-Saviaga et al., "The Impact of Generative AI Coding Assistants on Developers Who Are Visually Impaired", CHI 2025, arXiv 2503.16491v1. [Original](https://arxiv.org/html/2503.16491v1), [local](../raw/2026-11-01/arxiv-2503-16491-genai-visually-impaired.txt).
- **S16:** "Screen Reader Users in the Vibe Coding Era: Adaptation, Empowerment, and New Accessibility Landscape", arXiv 2506.13270v1, 2025-06-16. [Original](https://arxiv.org/html/2506.13270v1), [local](../raw/2026-11-01/arxiv-2506-13270-vibe-coding-screen-readers.txt).

## Revision history

- **2026-11-01:** Initial synthesis.
