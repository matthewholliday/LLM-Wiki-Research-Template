# Approval Layers Are Not Isolation Boundaries

[Findings index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created:** 2026-11-02
- **Last updated:** 2026-11-02
- **Evidence collected or checked:** 2026-11-02
- **Evidence type:** First-party documentation review with two secondary vulnerability reports
- **Status:** Supported within documentary scope
- **Confidence:** High that vendors draw this distinction; enforcement strength was not tested
- **Related pages:** [Computer use, visibility, and permissions](../topics/agent-computer-use-visibility-and-security.md), [Droid 1.0 harness](../topics/factory-droid-1-0-harness.md)

## Research question

Do approval modes, allowlists, and classifier reviews in coding agents provide security isolation, or only decide when to ask a human?

## Finding

They decide when to ask. Cursor, Factory, Claude Code, and Codex each separate an approval layer from an OS-level isolation layer, and several state directly that the approval layer is not a boundary. Isolation layers are themselves partial: their coverage of file tools, MCP servers, hooks, and the agent's own process differs, and the reviewed sandboxes ship off by default in Claude Code and Factory Droid.

## Evidence

- Cursor: "Auto-review is not a security boundary," and the classifier can make mistakes. [S1]
- Factory: "Command rules are not operating-system isolation"; prefixes can miss equivalent spellings or script contents. Its sandbox documentation calls the sandbox defense in depth "not ... a hard boundary around untrusted code" and recommends a container or VM for untrusted code. [S2, S3]
- Claude Code: permission modes decide whether actions prompt, while isolation constrains reach; with `--dangerously-skip-permissions` the docs recommend enclosing the process in a container, VM, or sandbox runtime. The Bash sandbox is off by default and does not cover file tools, MCP servers, or hooks. [S4, S5]
- Codex: separates sandbox modes from approval policies; full sandbox escalation can bypass its command proxy, and MCP connections sit outside it. [S6]
- GitHub Copilot cloud agent: the firewall applies only to Bash processes, and "Sophisticated attacks may bypass the firewall." [S7]
- Outside reports show escapes through the gap between layers: agent-writable configuration later read by an unsandboxed host process (Claude Code CVE-2026-25725, fixed in 2.1.2; Gemini CLI and Codex CLI reported unfixed in May 2026), and Cursor path-handling escapes fixed in Cursor 3.0. [S8, S9]

## Method and context

Reviewed vendor documentation captured on 2026-11-02 and two secondary vulnerability write-ups. Sources were chosen as the primary permission and sandbox pages for each agent. See the [topic page](../topics/agent-computer-use-visibility-and-security.md) for the full comparison.

## Interpretation

When assessing an agent, ask three questions separately: who approves an action, what confines it, and which tool surfaces the confinement covers. A high autonomy setting combined with no OS sandbox relies entirely on the model and classifier behaving well. Classifier-based auto-review shifts approval from humans to models, which reduces prompts but adds a component the vendors themselves say can err.

## Limitations

No sandbox was tested. Vendor descriptions may lag or lead shipped behavior. The secondary reports describe specific versions; fix status for the Gemini CLI and Codex CLI reports was not rechecked after May 2026.

## Open questions and next steps

- Measure classifier auto-review false-negative rates under adversarial inputs.
- Test whether each sandbox blocks writes to the agent's own configuration and hook files.
- Compare per-command and whole-process isolation for MCP and hook coverage.

## Sources

Checked 2026-11-02 unless noted; see the [ledger](../raw/INDEX.md).

- **S1:** Cursor, [Run Modes](https://cursor.com/docs/agent/security/run-modes). [Local snapshot](../raw/2026-11-02/cursor-run-modes.txt).
- **S2:** Factory, [Autonomy Level](https://docs.factory.ai/autonomy-and-safety/auto-run). [Local snapshot](../raw/2026-11-02/factory-autonomy-level.txt).
- **S3:** Factory, [Sandbox](https://docs.factory.com/docs/autonomy-and-safety/sandbox), "Security limitations". [Local snapshot](../raw/2026-11-02/factory-droid-sandbox.txt).
- **S4:** Anthropic, [Choose a sandbox environment](https://code.claude.com/docs/en/sandbox-environments). [Local snapshot](../raw/2026-11-02/claude-code-sandbox-environments.txt).
- **S5:** Anthropic, [Configure the sandboxed Bash tool](https://code.claude.com/docs/en/sandboxing). [Local snapshot](../raw/2026-11-02/claude-code-sandboxing-docs.txt).
- **S6:** OpenAI, [Agent approvals and security](https://developers.openai.com/codex/agent-approvals-security). [Local snapshot](../raw/2026-11-02/codex-agent-approvals-security.txt).
- **S7:** GitHub, [Customizing or disabling the firewall for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-firewall). [Local snapshot](../raw/2026-11-02/github-copilot-agent-firewall.txt).
- **S8:** Cymulate, [The Race to Ship AI Tools Left Security Behind. Part 1: Sandbox Escape](https://cymulate.com/blog/the-race-to-ship-ai-tools-left-security-behind-part-1-sandbox-escape/), updated 2026-05-03, retrieved 2026-11-01. [Local snapshot](../raw/2026-11-01/cymulate-sandbox-escape-part-1.txt).
- **S9:** Hideaki Takahashi, [A Cursor Sandbox Escape Shows Why AI Agents Need Kernel Boundaries](https://medium.com/@Koukyosyumei/a-cursor-sandbox-escape-shows-why-ai-agents-need-kernel-boundaries-281efdb56396), 2026-07-07. [Local snapshot](../raw/2026-11-02/koukyosyumei-cursor-sandbox-escape.txt).

## Revision history

- 2026-11-02: Initial entry.
