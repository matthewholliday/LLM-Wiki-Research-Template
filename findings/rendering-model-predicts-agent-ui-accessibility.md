# Rendering Model Predicts Agent UI Accessibility Better Than GUI Versus TUI

[Findings index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created:** 2026-11-01
- **Last updated:** 2026-11-01
- **Evidence collected or checked:** 2026-11-01
- **Evidence type:** First-party documentation, public issue reports, practitioner essay
- **Status:** Supported within the reviewed scope
- **Confidence:** Medium. Sources agree on the mechanism, but there is no controlled comparison across products.
- **Related pages:** [Agentic coding UI accessibility](../topics/agentic-coding-ui-accessibility.md), [agent supervision finding](agent-autonomy-shifts-accessibility-burden-to-review.md)

## Research question

Are terminal interfaces or graphical interfaces more accessible for agentic coding with a screen reader?

## Finding

Neither category is accessible as a class. The deciding factor is how the interface renders and exposes content:

- **Accessible:** linear text that appends to scrollback, and GUIs that publish a native accessibility tree.
- **Inaccessible or fragile:** full-screen TUIs that redraw a character grid, and GUIs drawn without an accessibility tree.

Vendors that made terminal agents accessible did so by abandoning the full-screen TUI in a dedicated mode, not by improving it in place.

## Evidence

1. **Stream versus grid.** A blind practitioner distinguishes the linear CLI stream, described as ideal for screen readers, from TUIs built with frameworks such as Ink, Bubble Tea, or tcell, which move the cursor to update spinners and timers. The essay reports repeated announcements, NVDA crashes, and long input lag in Gemini CLI. [Original](https://xogium.me/the-text-mode-lie-why-modern-tuis-are-a-nightmare-for-accessibility), [local](../raw/2026-11-01/xogium-text-mode-lie.txt).
2. **Claude Code's fix is a linear mode.** Its screen reader mode replaces "boxes, progress animations, and in-place redraws" with "plain, linear text", ignores the `tui` setting, and leaves output in scrollback. Menus become numbered lists. See "What your screen reader hears" and "Answer menus and prompts". [Original](https://code.claude.com/docs/en/accessibility), [local](../raw/2026-11-01/claude-code-accessibility.txt).
3. **Copilot CLI's guidance has the same direction.** GitHub's guide recommends `--screen-reader`, disabling mouse capture, and disabling token streaming so responses arrive as complete blocks. See Part 3, settings list. [Original](https://accessibility.github.com/documentation/guide/cli/), [local](../raw/2026-11-01/github-cli-screen-reader-guide.txt).
4. **Codex users converge on the same workaround.** Reporters describe box drawing announced as content and repeated partial speech over SSH. One user confirmed on Codex CLI 0.164.0 with VoiceOver that `--no-alt-screen` made the full history readable. [Original](https://github.com/openai/codex/issues/20489), [local](../raw/2026-11-01/codex-issue-20489-screen-reader-tui.txt).
5. **OpenCode maintainers place the fix at the rendering layer.** A maintainer declined an app-level accessibility mode as too complex and pointed to future work in the OpenTUI library. [Original](https://github.com/anomalyco/opencode/issues/8565), [local](../raw/2026-11-01/opencode-issue-8565-accessibility-mode.txt).
6. **GUIs without an accessibility tree fail too.** Zed staff state it does not support screen readers on any platform and plan to add AccessKit to its GPUI framework. [Original](https://github.com/zed-industries/zed/issues/41138), [local](../raw/2026-11-01/zed-issue-41138-windows-screen-reader.txt). Warp makes its own announcements, but standard VoiceOver navigation does not work because of its UI framework. [Original](https://docs.warp.dev/terminal/more-features/accessibility/), [local](../raw/2026-11-01/warp-accessibility.txt).
7. **GUIs on accessible platforms do well.** VS Code detects screen readers automatically and provides Accessible View for chat responses and terminal output. [Original](https://code.visualstudio.com/docs/configure/accessibility/accessibility), [local](../raw/2026-11-01/vscode-accessibility.txt).

## Method and context

Sources were found through web searches on 2026-11-01 for screen reader support in named agentic coding tools and for TUI accessibility. Vendor documentation was preferred for feature claims; issue threads were used for user experience. Product versions were recorded where reports gave them.

## Interpretation

A useful question for any agent UI is not "is it a TUI?" but "does new content append without disturbing what is already there, and is structure exposed to assistive technology?" The same test explains why a GUI streaming into a web view can also fail, as in the Codex desktop focus-jump report ([local](../raw/2026-11-01/codex-issue-22816-desktop-focus.txt)).

## Limitations

The practitioner essay is a strong critique by one author. Issue reports may be version-specific. The Codex thread also shows that one Braille user preferred animations because a title-bar character signaled activity, so stripping decoration is not universally better. Individual toggles matter.

## Open questions and next steps

- Test identical tasks across Claude Code, Copilot CLI, Kiro CLI, and Codex CLI modes with NVDA, JAWS, and VoiceOver.
- Check whether fixes at the framework level (OpenTUI, GPUI with AccessKit) ship.

## Sources

See the linked original and local pairs above. The [source ledger](../raw/INDEX.md) records hashes and extraction limits.

## Revision history

- **2026-11-01:** Initial entry.
