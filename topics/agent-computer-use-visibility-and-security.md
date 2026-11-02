# Computer Use, Visibility, and Permissions in Coding Agents

[Topics index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created / last updated:** 2026-11-02
- **Evidence checked:** 2026-11-02
- **Evidence type:** First-party product, API, and security documentation; two peer-reviewed or preprint attack benchmarks; three secondary security analyses. No software was installed or tested.
- **Scope:** Computer-use APIs (Anthropic, OpenAI, Google Gemini), desktop and browser agents (Codex Computer Use, VS Code 1.144 computer use, Claude in Chrome, Playwright MCP), and local coding-agent permission and sandbox systems (Claude Code, Codex, Cursor, Factory Droid, GitHub Copilot).
- **Related:** [Approval layers are not isolation boundaries](../findings/approval-layers-are-not-isolation-boundaries.md), [vendor and independent prompt-injection rates diverge](../findings/vendor-and-independent-prompt-injection-rates-diverge.md), [interface accessibility](agentic-coding-ui-accessibility.md), [visual capabilities](agent-visual-capabilities.md), [Droid 1.0 harness](factory-droid-1-0-harness.md), [source ledger](../raw/INDEX.md)

## Research question

How do AI coding agents and orchestration tools approach computer use and visibility, and how do they handle permissions and security for those capabilities?

"Visibility" has two meanings here, and the page treats both:

1. **Agent perception:** what the agent sees of the screen or page (pixels, accessibility tree, DOM text).
2. **Human oversight:** what the user or administrator can see of the agent's actions (live view, prompts, logs, telemetry).

## Short answer

The reviewed products converge on a layered design, but the layers differ in strength and are often confused:

- **Perception** splits into screenshot-and-coordinate control (Anthropic, OpenAI, Gemini, Codex Computer Use) and structured accessibility-tree control (Playwright MCP, OpenAI's browser toolset). Vendors document screenshots as the general route and structured snapshots as cheaper and more exact where available. [S1-S4, S9, S10]
- **Permission layers** (approval modes, allowlists, risk tiers, and LLM-based auto-review) decide when to ask a human. Several vendors state explicitly that these layers are not security boundaries. [S14, S17, S18, S12]
- **Isolation layers** (Seatbelt, bubblewrap, Landlock, seccomp, MXC, containers, VMs, network proxies) limit what an approved or unapproved action can reach. Coverage varies: some sandboxes confine only shell commands and leave file tools, MCP servers, or hooks outside. Sandboxes default to off in Claude Code and Factory Droid. [S11, S16, S19, S20]
- **Computer use on a real desktop** largely sits outside the coding sandbox. Codex Computer Use and VS Code computer use operate the user's own apps, governed by per-app approval and OS permissions rather than filesystem and network isolation. API vendors instead recommend a VM, container, or isolated browser. [S1-S5]
- **Prompt injection is unsolved.** Vendor figures for their own defended configurations are low (Anthropic reports under 0.08% for one Claude in Chrome configuration), while independent benchmarks of other agents report attack success up to 51% (computer-use) and 100% (browser-use). The numbers are not comparable. [S7, S8, S23, S24]
- **Human visibility** ranges from watching a headed browser to structured OpenTelemetry events for every tool decision. Prompt and tool-input logging are usually off by default for privacy. [S9, S14, S22]

## Perception models

| Approach | Products | How the agent sees | Documented tradeoffs |
| --- | --- | --- | --- |
| Screenshots plus pixel coordinates | Anthropic computer use toolset (`computer_toolset_20260801`), OpenAI `ComputerToolset`, Codex Computer Use | Screenshots; the client must reverse any downscaling before applying coordinates. Anthropic adds a full-resolution regional `zoom`. [S1, S2, S4] | Each screenshot costs about 1,000 to 1,800 input tokens on Anthropic, and coordinates and scrolling can be inaccurate. [S1] |
| Screenshots plus normalized coordinates | Gemini computer use | Coordinates on a 1000 by 1000 grid, scaled client-side; each action carries a stated `intent`. Covers browser, desktop, and Android mobile. [S3] | Pop-ups and layout changes can confuse the model. [S3] |
| Accessibility-tree snapshots | Playwright MCP | Structured tree of roles, names, and element refs; refs expire when the page changes. "No vision models required." [S9, S10] | Lower token cost and exact targeting, but canvases, charts, and image-heavy layouts still need screenshots. An optional vision capability adds coordinate tools. [S10, S9] |
| Page text plus structured controls | OpenAI `BrowserToolset` | Page text with role, label, and reference elements. [S2] | Browser only. |
| Generated automation code | OpenAI (recommended for GPT-6 Astra) | The model writes PyAutoGUI or Playwright code against the environment. [S2] | Links computer use to [programmatic tool calling](programmatic-tool-calling-precedents.md); the code needs its own sandbox. |

Perception and attack surface are linked. VPI-Bench found screenshot-based agents susceptible to instructions rendered in pop-ups, emails, and chat messages, and Anthropic's Claude in Chrome help page warns that anything visible in the working tab becomes conversation content. [S23, S7]

## Where computer use runs

| Product | Environment | Human controls documented |
| --- | --- | --- |
| Anthropic computer use API | Required sandboxed environment; reference Docker image with virtual X11 display. [S1] | Confirm consequential actions before each batched action; iteration limits; action logging recommended. Screenshot classifiers flag likely prompt injection by default. [S1] |
| OpenAI computer use API | "Use an isolated browser or VM" with site and action allowlists; client owns setup and cleanup. [S2] | Sample app lets users watch, take control, return control, or stop. Pending safety checks halt the sample until approval handling is added. [S2] |
| Gemini computer use API | Sandboxed VM or container; dedicated browser profile. [S3] | Per-action `safety_decision` (allow, require confirmation, block); `safety_acknowledgement` returned only after the user confirms. Screenshot injection detection is opt-in and off by default. [S3] |
| Codex Computer Use (ChatGPT desktop app) | User's own macOS or Windows desktop. macOS supports background tasks; Windows uses the foreground session and OpenAI suggests a VM or second device. [S4] | Requires macOS Screen Recording and Accessibility permissions. Per-app approval with optional "Always allow"; admin app allowlists separate from shell sandbox approvals. Cannot drive terminal apps, ChatGPT itself, administrator authentication, or OS privacy prompts. User can stop or take over. [S4] |
| VS Code 1.144 computer use (experimental) | User's own macOS or Windows machine in Copilot-harness sessions. [S5] | Enabled by prompt or `/computer on`, then stays on until `/computer off`. The release does not document app allowlists or injection defenses. [S5] |
| Claude in Chrome | User's Chrome browser. [S6, S7] | Manual, Auto (classifier-screened), and Skip modes; per-site grants and permission history; admin allowlists and blocklists; prohibited categories such as purchases, account creation, and permanent deletion. [S6] |
| Playwright MCP | Local browser, headed by default so users can watch; login state persists. [S9] | No approval model of its own; relies on the host agent. Optional tracing, video, and action recording. [S9] |

The difference between API vendors and desktop products matters. API documentation assumes a disposable environment. The desktop products put the agent on a machine with the user's signed-in accounts, and their main controls are app-level approval and the user's ability to intervene. Codex's documentation states that Computer Use "can affect app and system state outside your project workspace." [S4]

## Coding-agent permission and isolation layers

| Agent | Approval layer | OS isolation | Network | Default | Notable gaps stated by vendor |
| --- | --- | --- | --- | --- | --- |
| Claude Code | Permission modes, including Auto with a classifier; `--dangerously-skip-permissions`. [S12] | Seatbelt (macOS), bubblewrap with optional seccomp (Linux, WSL2); no native Windows. [S11] | Local proxy with an initially empty domain allowlist. [S11] | Sandbox off. [S11] | Sandbox covers shell commands, not file tools, MCP servers, or hooks. Reads include most of the machine unless restricted. Broad allowed domains enable exfiltration. [S11] |
| Codex (CLI and app) | `read-only`, `workspace-write`, `danger-full-access`; `on-request` or `never`; optional `auto_review` reviewer agent. [S14, S15] | Seatbelt, bubblewrap plus seccomp, Windows MXC. [S14] | Off by default; allowlist proxy optional. [S14] | Workspace-write with network off in the Auto preset. [S14] | `.git`, `.agents`, `.codex`, and `.aws` are protected. Full sandbox escalation bypasses the proxy; MCP connections sit outside it. [S14] |
| Cursor | Auto-review (classifier), Allowlist, Run Everything. [S17] | Seatbelt; Landlock and seccomp (bubblewrap fallback) on Linux; WSL2 on Windows. [S16, S17] | Default list of common package domains. [S17] | Varies by mode; Cloud Agents run on dedicated machines without prompts. [S17] | "Auto-review is not a security boundary." [S17] |
| Factory Droid | Autonomy Level Off, Low, Medium, High; `permissionRules` allow, ask, block. [S18] | Seatbelt; bubblewrap plus seccomp; `per-command` or `whole-process` modes. [S19] | Proxy allows only Factory and WorkOS domains plus configured ones. [S19] | Sandbox off until `sandbox.enabled`. [S19] | "Command rules are not operating-system isolation." In `per-command` mode the main process is not isolated, though file tools, MCP, and hooks are checked or wrapped. [S18, S19] |
| GitHub Copilot (local) | Not detailed in the announcement. [S20] | Microsoft MXC maps one policy to native controls on Windows, macOS, and Linux; covers local MCP and language servers where supported. [S20] | Policy-controlled. [S20] | Enterprises can require it. [S20] | Generally available 2026-10-07. [S20] |
| GitHub Copilot cloud agent | Not applicable. | Ephemeral cloud environment. [S21] | Firewall with GitHub hosts and a dependency allowlist on by default. [S21] | On. [S21] | Applies only to Bash processes, not MCP servers or setup steps; "Sophisticated attacks may bypass the firewall." [S21] |

Two vendor productivity claims accompany sandboxing: Anthropic reports that sandboxing "reduces permission prompts by 84%" in internal use, and Cursor reports that sandboxed agents "stop 40% less often." Neither states its method or sample. [S13, S16]

### Sandbox weaknesses found by outside researchers

- **Configuration poisoning.** Cymulate reported that writable agent configuration consumed later outside the sandbox allowed escapes in Claude Code (CVE-2026-25725, fixed in 2.1.2), Gemini CLI, and Codex CLI. It reported the Gemini and Codex issues as unfixed at its May 2026 update, and OpenAI disputed the Codex finding on approval-based grounds. [S26]
- **Path handling.** A Medium analysis of Cato AI Labs findings describes two Cursor sandbox escapes (CVE-2026-50548 and CVE-2026-50549) through an agent-controlled working directory and failed symlink resolution, fixed in Cursor 3.0. The author advocates kernel-enforced Landlock confinement. [S27]

Current vendor documentation reflects these classes: Codex now protects its config directories, and Factory states that sandboxed processes cannot write Droid's settings files. [S14, S19] Whether the reported unfixed issues have since been fixed was not rechecked.

## Human visibility and audit

| Mechanism | Where documented |
| --- | --- |
| Watching the action | Headed browsers in Playwright MCP and Gemini examples; OpenAI sample app with take-control; Codex stop or take-over. [S9, S3, S2, S4] |
| Inline prompts on violation | Factory "Sandbox Violation" prompts with path or domain and a 60-second auto-deny for network prompts, plus a `SANDBOX` footer indicator; Claude Code names the blocked host; Cursor shows path and reason for read approvals. [S19, S11, S17] |
| Review artifacts | Copilot cloud agent adds firewall warnings to the pull request; VS Code Working Set offers Keep or Undo per agent edit (terminal changes excluded); Claude in Chrome keeps permission history. [S21, S5, S6] |
| Auto-review status | Codex desktop shows Reviewing, Approved, Denied, Aborted, Timed out. [S14] |
| Structured telemetry | Claude Code OpenTelemetry `tool_decision`, `tool_result`, `safety_event`, and `permission_mode_changed` events, with prompts, tool inputs, and assistant text redacted by default. Codex has optional OTel export, off by default. [S22, S14] |

Telemetry defaults show a trade-off between audit completeness and privacy. Claude Code's events record which permission mode and classifier made a decision but omit command text unless the operator opts in. [S22] An auditor reconstructing what an agent did may need to enable logging that also captures sensitive content.

## Interpretation

These points are analysis drawn from the evidence above, not vendor statements:

1. **Treat the layers separately when evaluating a tool.** Ask what decides (approval mode or classifier), what confines (OS sandbox, container, VM), what that confinement covers (shell only, or also file tools, MCP, hooks, the agent's own process), and what is recorded. See the [approval layers finding](../findings/approval-layers-are-not-isolation-boundaries.md).
2. **Desktop computer use weakens the coding sandbox model.** Filesystem and network sandboxes protect a workspace. An agent clicking through signed-in desktop apps acts with the user's identity, and the reviewed desktop products rely on app approvals and supervision. For untrusted inputs, the API vendors' advice to use a separate VM or browser profile is the stronger posture.
3. **Structured perception reduces cost and ambiguity, not injection risk.** An accessibility tree still carries attacker-controlled text. None of the reviewed sources measured whether structured snapshots lower injection success compared with screenshots.
4. **Vendor injection metrics describe defended configurations under internal attack sets.** Use them for within-vendor trends, not cross-product comparison. See the [prompt-injection finding](../findings/vendor-and-independent-prompt-injection-rates-diverge.md).

## Limitations and open questions

- All product evidence is rolling documentation captured on 2026-11-02. Model names and tool versions (for example `claude-opus-5-5`, GPT-6 Astra, Gemini 3.8 Flash) are as stated by the sources and were not verified against live APIs.
- No sandboxes, computer-use tools, or attacks were run. Claims of enforcement are vendor descriptions.
- The independent benchmarks tested older or different agents (Claude 3.5 and 3.7 Sonnet, GPT-5, Gemini 2.5) than the current vendor configurations, so they do not measure current products directly.
- Not assessed: Gemini CLI and Antigravity permission docs (beyond Cymulate's report), Windsurf, Cline, Aider, OpenHands, goose, Amazon Kiro, Microsoft Agent Framework, LangGraph human-in-the-loop as a permission layer, and hosted browser sandboxes such as Browserbase.
- Open questions: Do accessibility-tree agents resist injection better than screenshot agents? How do classifier auto-review false-negative rates compare across vendors? Are the Cymulate-reported Gemini CLI and Codex CLI issues fixed? How well do users notice harmful actions in a live view?

## Sources

All retrieved and checked on **2026-11-02** unless noted. Local files are FetchUrl Markdown text snapshots, not original HTML. See the [ledger](../raw/INDEX.md) for hashes.

- **S1:** Anthropic, [Computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool). [Local snapshot](../raw/2026-11-02/anthropic-computer-use-tool.txt).
- **S2:** OpenAI, [Computer use (API guide)](https://developers.openai.com/api/docs/guides/tools-computer-use). [Local snapshot](../raw/2026-11-02/openai-computer-use-guide.txt).
- **S3:** Google, [Computer use (Gemini API)](https://ai.google.dev/gemini-api/docs/computer-use), redirected to AI Studio docs. [Local snapshot](../raw/2026-11-02/gemini-computer-use-api.txt).
- **S4:** OpenAI, [Computer Use (Codex and ChatGPT desktop)](https://developers.openai.com/codex/app/computer-use), redirected to ChatGPT Learn. [Local snapshot](../raw/2026-11-02/codex-computer-use.txt).
- **S5:** Microsoft, [Visual Studio Code 1.144](https://code.visualstudio.com/updates/v1_144), 2026-10-28, "Computer use", "Assisted permissions", and "Working set". [Local snapshot](../raw/2026-11-02/vscode-1-144-image-generation.txt), reused from the visual-capabilities collection.
- **S6:** Anthropic, [Claude in Chrome permissions guide](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide). [Local snapshot](../raw/2026-11-02/claude-in-chrome-permissions.txt).
- **S7:** Anthropic, [Use Claude in Chrome safely](https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely). [Local snapshot](../raw/2026-11-02/claude-in-chrome-safety.txt).
- **S8:** Anthropic, [Mitigating prompt injections in browser use](https://www.anthropic.com/research/prompt-injection-defenses), 2025-11-24 (search index date). [Local snapshot](../raw/2026-11-02/anthropic-browser-prompt-injection-defenses.txt).
- **S9:** Playwright, [Playwright MCP introduction](https://playwright.dev/mcp/introduction). [Local snapshot](../raw/2026-11-02/playwright-mcp-introduction.txt).
- **S10:** Playwright, [Snapshots](https://playwright.dev/mcp/snapshots). [Local snapshot](../raw/2026-11-02/playwright-mcp-snapshots.txt).
- **S11:** Anthropic, [Configure the sandboxed Bash tool](https://code.claude.com/docs/en/sandboxing). [Local snapshot](../raw/2026-11-02/claude-code-sandboxing-docs.txt).
- **S12:** Anthropic, [Choose a sandbox environment](https://code.claude.com/docs/en/sandbox-environments). [Local snapshot](../raw/2026-11-02/claude-code-sandbox-environments.txt).
- **S13:** Anthropic, [Making Claude Code safer with sandboxing](https://www.anthropic.com/engineering/claude-code-sandboxing), 2025-10-20 (search index date). [Local snapshot](../raw/2026-11-02/anthropic-claude-code-sandboxing-engineering.txt).
- **S14:** OpenAI, [Agent approvals and security](https://developers.openai.com/codex/agent-approvals-security). [Local snapshot](../raw/2026-11-02/codex-agent-approvals-security.txt).
- **S15:** OpenAI, [Sandbox](https://developers.openai.com/codex/concepts/sandboxing). [Local snapshot](../raw/2026-11-02/codex-sandboxing.txt).
- **S16:** Cursor, [Implementing a secure sandbox for local agents](https://cursor.com/blog/agent-sandboxing), 2026-02-18 (search index date). [Local snapshot](../raw/2026-11-02/cursor-agent-sandboxing-blog.txt).
- **S17:** Cursor, [Run Modes](https://cursor.com/docs/agent/security/run-modes). [Local snapshot](../raw/2026-11-02/cursor-run-modes.txt).
- **S18:** Factory, [Autonomy Level](https://docs.factory.ai/autonomy-and-safety/auto-run). [Local snapshot](../raw/2026-11-02/factory-autonomy-level.txt).
- **S19:** Factory, [Sandbox](https://docs.factory.com/docs/autonomy-and-safety/sandbox). [Local snapshot](../raw/2026-11-02/factory-droid-sandbox.txt).
- **S20:** GitHub, [Local sandboxing for GitHub Copilot now generally available](https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available/), 2026-10-07. [Local snapshot](../raw/2026-11-02/github-copilot-local-sandboxing-ga.txt).
- **S21:** GitHub, [Customizing or disabling the firewall for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-firewall). [Local snapshot](../raw/2026-11-02/github-copilot-agent-firewall.txt).
- **S22:** Anthropic, [Monitoring (Claude Code)](https://code.claude.com/docs/en/monitoring-usage). [Local snapshot](../raw/2026-11-02/claude-code-monitoring.txt).
- **S23:** Cao et al., [VPI-Bench: Visual Prompt Injection Attacks for Computer-Use Agents](https://arxiv.org/html/2506.02456v2), arXiv v2 2026-03-01, ICLR 2026. [Local snapshot](../raw/2026-11-02/arxiv-2506-02456-vpi-bench.txt).
- **S24:** Wang et al., [Who Pays the Price? Stakeholder-Centric Prompt Injection Benchmarking for Real-world Web Agents (StakeBench)](https://arxiv.org/html/2606.13385v1), arXiv v1 2026-06-11. [Local snapshot](../raw/2026-11-02/arxiv-2606-13385-stakebench.txt).
- **S25:** Gyana Swain, CSO Online, [Prompt injection breaks today's AI agents, study warns](https://www.csoonline.com/article/4184455/prompt-injection-breaks-todays-ai-agents-study-warns.html), 2026-06-12. Secondary report on S24. [Local snapshot](../raw/2026-11-02/csoonline-prompt-injection-agents-study.txt).
- **S26:** Kalendarov, Zamir, and Beber, Cymulate, [The Race to Ship AI Tools Left Security Behind. Part 1: Sandbox Escape](https://cymulate.com/blog/the-race-to-ship-ai-tools-left-security-behind-part-1-sandbox-escape/), last updated 2026-05-03, retrieved 2026-11-01. [Local snapshot](../raw/2026-11-01/cymulate-sandbox-escape-part-1.txt).
- **S27:** Hideaki Takahashi, [A Cursor Sandbox Escape Shows Why AI Agents Need Kernel Boundaries](https://medium.com/@Koukyosyumei/a-cursor-sandbox-escape-shows-why-ai-agents-need-kernel-boundaries-281efdb56396), Medium, 2026-07-07. Secondary analysis of Cato AI Labs findings. [Local snapshot](../raw/2026-11-02/koukyosyumei-cursor-sandbox-escape.txt).

## Revision history

- 2026-11-02: Initial synthesis.
