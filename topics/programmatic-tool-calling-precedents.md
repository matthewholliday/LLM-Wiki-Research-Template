# Programmatic Tool Calling: Precedents and Implementations

[Topics index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created / last updated:** 2026-11-01
- **Evidence checked:** 2026-11-01
- **Evidence type:** Four research papers, vendor engineering posts and API documentation, open-source release notes and changelogs, a protocol guidance page, and practitioner commentary
- **Scope:** Agents that let a model write a program which calls tools, instead of emitting one structured tool call per model request. Covers research precedents from 2022 to 2026 and production implementations found as of 2026-11-01. Code interpreters that run code without calling the agent's tools are mentioned only as background. Nothing was installed or tested.
- **Related:** [How Factory Droid 1.0 works](factory-droid-1-0-harness.md), [finding on when code actions help](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md), [Script mode finding](../findings/droid-1-0-script-mode-gains-concentrate-in-many-call-tasks.md), [source ledger](../raw/INDEX.md)

## Research question

What are the precedents for Droid 1.0's Script mode, and which other agents and platforms use similar features?

## Short answer

Script mode is one implementation of a pattern that now has several names: **programmatic tool calling (PTC)**, **Code Mode**, **code execution with MCP**, and **code actions**. The model writes a short program, a sandbox runs it, the program calls the agent's tools as functions, and only the program's printed output returns to the model.

The idea moved from research to products in three steps:

1. **Research, 2022 to 2024.** PAL (2022) had models write programs as reasoning steps for an interpreter to run. LLMCompiler (2023) planned and ran several function calls in parallel. CodeAct (2024) used executable Python as the agent's whole action space and reported up to 20% higher success than JSON or text actions across 17 models. Hugging Face's smolagents (December 2024) made CodeAct-style "code agents" its main agent type. [S1, S2, S3, S4]
2. **MCP-era products, late 2025.** Cloudflare's "Code Mode" (2025-09-26) turned MCP tools into a TypeScript API for the model to code against. Anthropic described "code execution with MCP" (2025-11-04) and then shipped Programmatic Tool Calling in the Claude API (2025-11-24). Block's open-source goose agent added a Code Mode extension in v1.17.0 (December 2025). [S5, S7, S8, S13, S14]
3. **Coding-agent defaults, 2026.** OpenAI's Responses API offers Programmatic Tool Calling in a hosted V8 runtime, and its Agents API turns it on by default. Codex CLI release notes mention Code Mode from v0.142.2 (2026-06-25) onward. Cloudflare moved Code Mode to the server side for its whole API (2026). The MCP project's client best-practices guide now documents the pattern. OpenCode 2.0 (2026-10-12) put all MCP servers into Code Mode by default, and Factory made Script mode the default in Droid 1.0 (2026-10-29). Glean's enterprise assistant also uses PTC. [S6, S9, S10, S11, S12, S15, S16]

Droid's Script mode is not a new idea. What Factory documents as distinctive is applying the pattern to the coding agent's own built-in tools (file reads, edits, shell, todos), not just MCP or API tools, and choosing the default per model through cross-model testing. Other harnesses may do similar things that their public documents do not show.

## Timeline

| Date | System | What it introduced | Source |
| --- | --- | --- | --- |
| 2022-11 (arXiv v1) | PAL, Program-aided Language Models | Model writes a program as intermediate reasoning; an interpreter computes the answer. Not tool calling as such. | [S1] |
| 2023-12 (arXiv v1) | LLMCompiler | Planner builds a dependency graph of function calls and runs them in parallel; up to 3.7x faster and 6.7x cheaper than ReAct in its tests. A plan format, not general code. | [S2] |
| 2024-02 (arXiv v1; ICML 2024) | CodeAct | Executable Python as a unified action space, with multi-turn revision; up to 20% higher success than JSON/text across 17 models on API-Bank and a new benchmark. | [S3] |
| 2024-12-31 | smolagents (Hugging Face) | Open-source library whose main agent writes actions as Python code; optional sandboxing through E2B. | [S4] |
| 2025-09-26 | Cloudflare Code Mode | Converts MCP tools to a TypeScript API; model code runs in a Workers isolate. | [S5] |
| 2025-11-04 | Anthropic, "Code execution with MCP" | Present MCP servers as code files the agent discovers on demand; filter data in the sandbox. A design proposal without released code. | [S7, S17] |
| 2025-11-24 | Claude API Programmatic Tool Calling | Claude writes Python in Anthropic's code-execution container; tools opt in with `allowed_callers`. | [S8, S9] |
| 2025-12 | goose v1.17.0 Code Mode | Extension that wraps other MCP extensions as JavaScript modules behind three tools. | [S13, S14] |
| 2026-06-25 or earlier | Codex CLI Code Mode | Release notes reference Code Mode cells, nested tool calls, a sandboxed V8 host, and Code Mode tool search. | [S15] |
| 2026, date unconfirmed | OpenAI Responses API PTC | Hosted, isolated V8 runtime; `allowed_callers` per tool; default in the Agents API. | [S10] |
| 2026, date unconfirmed | Cloudflare API MCP server | Server-side Code Mode: two tools, `search()` and `execute()`, cover more than 2,500 endpoints in about 1,000 tokens. | [S6] |
| 2026-07-28 spec version | MCP client best practices | Documents "Programmatic Tool Calling / Code Mode" for MCP hosts, with sandbox and authorization guidance. | [S11] |
| Unknown | Glean Agent Sandbox and PTC | Enterprise assistant runs PTC inside a sandbox through a generic shell tool. | [S12] |
| 2026-10-12 | OpenCode 2.0 Code Mode | `@opencode/codemode` turns MCP servers and OpenAPI endpoints into script functions; on by default for all MCP servers. | [S16] |
| 2026-10-29 | Factory Droid 1.0 Script mode | JavaScript Script tool over Droid's own tools; on by default for listed models. | [S18] |

Dates are publication or release dates from the sources. "Unconfirmed" means the captured page did not state a date. The Codex date is the earliest Code Mode entry on the captured changelog page, which covers releases from 2025-05-19, so Code Mode may have existed earlier without a release-note mention.

## How implementations differ

| System | Language and runtime | Where code runs | Which tools are callable | How it is turned on |
| --- | --- | --- | --- | --- |
| Factory Droid Script | JavaScript, sandbox with no file, network, or system access | Locally, in the Droid harness | Droid's built-in tools plus loaded MCP and connector tools | Default for listed models [S18] |
| Claude API PTC | Python | Anthropic-hosted code-execution container | Custom tools that list a code-execution caller; not MCP connector, computer use, or browser tools | Per tool with `allowed_callers` [S9] |
| OpenAI Responses API PTC | JavaScript, fresh isolated V8 runtime with no Node.js, network, filesystem, or persistent state | OpenAI-hosted | Function, custom, and MCP tools that list `"programmatic"` | Per request and per tool; default in Agents API [S10] |
| Codex CLI Code Mode | JavaScript, sandboxed V8 host | Locally, in a companion or embedded host | MCP and built-in tools, per release notes | Not documented in the captured excerpt [S15] |
| Cloudflare Code Mode | TypeScript or JavaScript in a Dynamic Worker isolate | Client-side (Agents SDK) or server-side (Cloudflare MCP server) | MCP tools, or the full Cloudflare API through `execute()` | Library wrapper or server design [S5, S6] |
| goose Code Mode | JavaScript modules | Locally | goose MCP extensions | Opt-in extension [S13, S14] |
| OpenCode Code Mode | Minimal JavaScript interpreter written for OpenCode | Locally | MCP servers and OpenAPI endpoints | Default for all MCP servers [S16] |
| smolagents CodeAgent | Python | Local executor or sandbox such as E2B | Python tool functions | Agent class choice [S4] |
| Glean | Generic shell and code interpreter | Glean-operated or provider-hosted sandbox | Glean tools through the host agent | Enabled for eligible customers in Thinking mode [S12] |

Two design families are visible:

- **Hosted PTC** (Claude, OpenAI). The model provider runs the code. The application still runs its own tools and returns results to a paused program. Claude pauses up to about 4 minutes for a result before the call times out inside the code; idle containers are reclaimed after about 5 minutes. OpenAI returns a `program` item with a replay `fingerprint`. [S9, S10]
- **Harness-side Code Mode** (Droid, Codex CLI, Cloudflare, goose, OpenCode). The agent runs the sandbox itself and routes calls from the sandbox to tools. This works with any model, which is how Droid and OpenCode apply it across providers. [S5, S16, S18]

## Common design rules

Sources that address safety agree on a broker model:

- **No direct access from the sandbox.** The sandbox has no network or filesystem of its own; every external effect goes through the host's tool functions. Credentials stay with the host. [S6, S10, S11, S18]
- **Authorization per call, not per script.** The MCP guidance says approving a script does not approve every tool call it makes; hosts should apply the same confirmation policy to calls from the sandbox. OpenAI advises using direct calls by default for writes and approval-sensitive actions, making functions idempotent, and requiring approval for high-impact actions whatever the caller. [S10, S11]
- **Limits and output filtering.** Timeouts and memory limits on scripts, and truncation of printed output before it reaches the model. Droid caps printed output and logs full results. [S11, S18]
- **Discovery alongside execution.** Most implementations pair code execution with on-demand tool discovery (file trees, `search()`, or tool search), so definitions as well as results stay out of context. [S6, S7, S8, S11, S13]

## Evidence on effectiveness

See the [finding on when code actions help](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md). In brief, sources agree that gains come from chained and fan-out calls and from large intermediate results, and that single calls or tasks needing judgment on each result benefit little. Reported figures are mostly vendor-measured and not comparable to each other:

- CodeAct: up to 20% higher success than JSON or text actions. [S3]
- Anthropic: average tokens on complex research tasks fell 37%, from 43,588 to 27,297; GIA benchmark score rose from 46.5% to 51.2%. [S8]
- Anthropic's MCP example: tool-definition tokens fell from 150,000 to 2,000. This is mainly a discovery effect. [S7]
- Cloudflare: 99.9% fewer input tokens for its API, against a hypothetical server that would expose every endpoint as a tool. [S6]
- Factory: 15% lower cost on Claude Opus 5.5 in production. [S18]
- "The Bitter Lesson of Tool Calling" (independent of the vendors, 2026): PTC matched or beat JSON tool calling in 11 of 14 models on BFCL v4, with the failures limited to older models. It also used 1.5 times the input tokens on chaining tasks, an overhead that reverses at high fan-out. [S19]

## Commentary and criticism

- Simon Willison called Anthropic's proposal "very solid" and noted that it also keeps sensitive data from passing through the model, but that Anthropic published no code to implement it. [S17]
- A goose developer reports that Code Mode can add round trips, because the model must discover tools and write code before acting. Their advice is to skip it with one or two tools, for single-step tasks, or when speed matters more than keeping context small. [S14]
- Daniel Vaughan's Codex knowledge base summarizes the Bitter Lesson paper. It also says Codex CLI's GPT-5.6 sessions use OpenAI's hosted PTC. That claim is not confirmed by OpenAI sources captured here; Codex's own changelog instead describes a local Code Mode host. [S15, S20, S21]
- No independent security analysis specific to PTC runtimes was found. Cymulate's 2026 sandbox-escape research concerns shell sandboxes in coding agents and was excluded as off-topic. See the [source ledger](../raw/INDEX.md).

## Limitations

- Most sources are vendors describing their own products.
- Dates for several 2026 products could not be pinned down from captured pages.
- Codex CLI evidence is release-note lines only; no Codex documentation page for Code Mode was captured.
- Absence from this list does not mean an agent lacks the feature. Claude Code, Cursor, Gemini CLI, and Devin were not checked in depth.

## Open questions

- Which harnesses apply code-mode execution to built-in file and shell tools, not only to MCP tools?
- How do implementations report partial side effects when a script fails midway?
- Independent, matched comparisons of hosted PTC and harness-side Code Mode on the same tasks.

## Sources

- **S1:** Gao et al., "PAL: Program-aided Language Models", arXiv 2211.10435. Primary, research paper. [Original](https://arxiv.org/abs/2211.10435), [local](../raw/2026-11-01/arxiv-2211-10435-pal.txt).
- **S2:** Kim et al., "An LLM Compiler for Parallel Function Calling", arXiv 2312.04511, ICML 2024. Primary, research paper. [Original](https://arxiv.org/abs/2312.04511), [local](../raw/2026-11-01/arxiv-2312-04511-llmcompiler.txt).
- **S3:** Wang et al., "Executable Code Actions Elicit Better LLM Agents" (CodeAct), arXiv 2402.01030, ICML 2024. Primary, research paper. [Original](https://arxiv.org/abs/2402.01030), [local](../raw/2026-11-01/arxiv-2402-01030-codeact.txt).
- **S4:** Hugging Face, "Introducing smolagents", 2024-12-31. Primary, project announcement. [Original](https://huggingface.co/blog/smolagents), [local](../raw/2026-11-01/huggingface-smolagents-intro.txt).
- **S5:** Cloudflare, "Code Mode: the better way to use MCP", 2025-09-26. Primary, vendor engineering post. [Original](https://blog.cloudflare.com/code-mode), [local](../raw/2026-11-01/cloudflare-code-mode-2025.txt).
- **S6:** Cloudflare, "Code Mode: give agents an entire API in 1,000 tokens". Primary, vendor engineering post. [Original](https://blog.cloudflare.com/code-mode-mcp/), [local](../raw/2026-11-01/cloudflare-code-mode-mcp-server-2026.txt).
- **S7:** Anthropic, "Code execution with MCP: Building more efficient agents", 2025-11-04. Primary, vendor engineering post. [Original](https://www.anthropic.com/engineering/code-execution-with-mcp), [local](../raw/2026-11-01/anthropic-code-execution-with-mcp.txt).
- **S8:** Anthropic, "Introducing advanced tool use", 2025-11-24. Primary, vendor engineering post. [Original](https://www.anthropic.com/engineering/advanced-tool-use), [local](../raw/2026-11-01/anthropic-advanced-tool-use.txt).
- **S9:** Anthropic, "Programmatic tool calling", Claude Platform docs. Primary, API documentation. [Original](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling), [local](../raw/2026-11-01/claude-programmatic-tool-calling-docs.txt).
- **S10:** OpenAI, "Programmatic Tool Calling", API guide. Primary, API documentation. [Original](https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling), [local](../raw/2026-11-01/openai-programmatic-tool-calling-guide.txt).
- **S11:** Model Context Protocol, "Client Best Practices", 2026-07-28 docs version, section "Programmatic Tool Calling / Code Mode". Primary, protocol guidance. [Original](https://modelcontextprotocol.io/docs/2026-07-28/develop/clients/client-best-practices), [local](../raw/2026-11-01/mcp-client-best-practices-2026-07-28.txt).
- **S12:** Glean, "Agent Sandbox & Programmatic Tool Calling". Primary, vendor documentation. [Original](https://docs.glean.com/security/agent-sandbox-ptc), [local](../raw/2026-11-01/glean-agent-sandbox-ptc.txt).
- **S13:** goose, "Code Mode MCP in goose", 2025-12-15. Primary, project blog. [Original](https://goose-docs.ai/blog/2025/12/15/code-mode-mcp/), [local](../raw/2026-11-01/goose-code-mode-mcp-2025-12-15.txt).
- **S14:** goose, "Code Mode Doesn't Replace MCP", 2025-12-21. Primary for goose release facts; secondary practitioner assessment. [Original](https://goose-docs.ai/blog/2025/12/21/code-mode-doesnt-replace-mcp/), [local](../raw/2026-11-01/goose-code-mode-doesnt-replace-mcp.txt).
- **S15:** OpenAI, ChatGPT and Codex changelog, Code Mode lines only. Primary, release notes excerpt. [Original](https://developers.openai.com/codex/changelog), [local excerpt](../raw/2026-11-01/codex-changelog-code-mode-excerpt.txt).
- **S16:** Anomaly, "OpenCode 2.0", 2026-10-12. Primary, release note. [Original](https://anoma.ly/notes/opencode-2-0/), [local](../raw/2026-11-01/opencode-2-0-launch-note.txt).
- **S17:** Simon Willison, "Code execution with MCP: Building more efficient agents", 2025-11-04. Secondary, commentary. [Original](https://simonwillison.net/2025/Nov/4/code-execution-with-mcp/), [local](../raw/2026-11-01/willison-code-execution-with-mcp.txt).
- **S18:** Factory Research, "Droid 1.0: Building a Frontier Harness", 2026-10-29. Primary, vendor research post. [Original](https://factory.com/news/frontier-harness), [local](../raw/2026-11-01/factory-droid-1-0-frontier-harness.txt).
- **S19:** Patel, Sen, Lumer, and Subbiah, "The Bitter Lesson of Tool Calling", arXiv 2608.06370v1, 2026-08-06. Primary, research preprint. [Original](https://arxiv.org/html/2608.06370v1), [local](../raw/2026-11-01/arxiv-2608-06370-bitter-lesson-tool-calling.txt).
- **S20:** Daniel Vaughan, "The Bitter Lesson of Tool Calling ... What It Means for Codex CLI", 2026-08-12. Secondary, practitioner analysis. [Original](https://codex.danielvaughan.com/2026/08/12/bitter-lesson-tool-calling-programmatic-vs-json-codex-cli-mcp-agent-tool-use/), [local](../raw/2026-11-01/vaughan-bitter-lesson-tool-calling.txt).
- **S21:** Daniel Vaughan, "Programmatic Tool Calling: How GPT-5.6's JavaScript Orchestration Layer Cuts Codex CLI Round-Trips", 2026-07-12. Secondary, practitioner analysis. [Original](https://codex.danielvaughan.com/2026/07/12/programmatic-tool-calling-gpt56-codex-cli-javascript-orchestration-fewer-roundtrips-token-cost/), [local](../raw/2026-11-01/vaughan-codex-ptc-gpt56.txt).

## Revision history

- **2026-11-01:** Initial synthesis.
