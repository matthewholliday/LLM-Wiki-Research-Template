# Code Actions Help Most for Chained and Fan-Out Calls

[Findings index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created:** 2026-11-01
- **Last updated:** 2026-11-01
- **Evidence collected or checked:** 2026-11-01
- **Evidence type:** Review of research papers, vendor documentation and measurements, and practitioner reports
- **Status:** Supported within reviewed scope
- **Confidence:** Medium. Independent and vendor sources agree on the direction, but measurements use different tasks and metrics and most are vendor-run.
- **Related pages:** [Programmatic tool calling topic](../topics/programmatic-tool-calling-precedents.md), [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md), [Script mode finding](droid-1-0-script-mode-gains-concentrate-in-many-call-tasks.md)

## Research question

When does letting a model call tools from a program (programmatic tool calling, Code Mode, code actions) outperform one structured tool call per model request?

## Finding

The advantage grows with the number of dependent or parallel calls and with the size of intermediate results that code can filter. For single calls, short tasks, or steps where each result needs fresh model judgment, sources report little gain and sometimes added overhead. Older or weaker code models can do worse with code actions.

## Evidence

1. **Independent benchmark.** "The Bitter Lesson of Tool Calling" found PTC matched or beat JSON tool calling in 11 of 14 models on BFCL v4. The gap over JSON widened with chain length, reaching 18.8 points at 12 or more calls. At very high fan-out, JSON tool calling fell to 0% enumeration accuracy at 100 parallel calls on one model while PTC held 100%. Vaughan's summary table shows the cost of failure on older models, such as GPT-4o dropping 26.9 points. The three models that failed were older OpenAI models that wrote escaped newlines into scripts. The paper notes that the benchmark's stubs echo arguments rather than run real APIs, that ablation samples are small, and that PTC used 1.5 times the input tokens on chaining. [S1, S2]
2. **Research precedent.** CodeAct reported up to 20% higher success than JSON or text actions across 17 models. LLMCompiler reported up to 3.7x lower latency and 6.7x lower cost than ReAct by running independent calls in parallel. [S3, S4]
3. **Vendor guidance converges.** Anthropic: most useful for large datasets that need only summaries, three or more dependent calls, filtering before the model sees results, and parallel operations; less useful for single calls or when the model should see every intermediate result. OpenAI: use PTC for predictable control flow that code can shrink to a structured result; use direct calls for single lookups, adaptive search, writes, approval-sensitive actions, and final citation checks. [S5, S6]
4. **Practitioner report.** A goose developer saw context use fall from 16% to 3% of the window on one task, but warns that Code Mode can add round trips and is not worth it with one or two tools or for single-step tasks. [S7]
5. **Factory's production data.** Script mode cut Droid's cost 15% on Claude Opus 5.5, with savings concentrated in the 12.5% of Scripts that made six or more calls. [S8]

## Method and context

Sources were collected on 2026-11-01 from searches for programmatic tool calling, Code Mode, and code actions, then read for effect sizes and stated conditions. The papers use BFCL v4, API-Bank, and other benchmarks; vendor figures use internal tasks. Numbers are not directly comparable.

## Interpretation

The shared mechanism is cost per model request. Each direct call re-sends context and passes the full result through the model. Code removes that per-call cost and keeps bulky data in variables, so savings scale with call count and result size. The fixed costs of discovering tools and writing code remain, which explains the small or negative effect on short tasks.

## Limitations

- Only one of the sources is independent of the vendors and directly compares the two modes across models, and it is a preprint.
- Effects on safety, such as unreviewed side effects in a batch, are not measured by any source.

## Open questions and next steps

- Matched end-to-end tests with real side-effecting tools, measuring success, cost, and recovery from mid-script failure.

## Sources

- **S1:** Patel et al., "The Bitter Lesson of Tool Calling", arXiv 2608.06370v1. [Original](https://arxiv.org/html/2608.06370v1), [local](../raw/2026-11-01/arxiv-2608-06370-bitter-lesson-tool-calling.txt). Accessed 2026-11-01.
- **S2:** Daniel Vaughan, summary of the paper, 2026-08-12. [Original](https://codex.danielvaughan.com/2026/08/12/bitter-lesson-tool-calling-programmatic-vs-json-codex-cli-mcp-agent-tool-use/), [local](../raw/2026-11-01/vaughan-bitter-lesson-tool-calling.txt). Accessed 2026-11-01.
- **S3:** Wang et al., CodeAct, arXiv 2402.01030. [Original](https://arxiv.org/abs/2402.01030), [local](../raw/2026-11-01/arxiv-2402-01030-codeact.txt). Accessed 2026-11-01.
- **S4:** Kim et al., LLMCompiler, arXiv 2312.04511. [Original](https://arxiv.org/abs/2312.04511), [local](../raw/2026-11-01/arxiv-2312-04511-llmcompiler.txt). Accessed 2026-11-01.
- **S5:** Anthropic, "Introducing advanced tool use", 2025-11-24, section "When to use Programmatic Tool Calling". [Original](https://www.anthropic.com/engineering/advanced-tool-use), [local](../raw/2026-11-01/anthropic-advanced-tool-use.txt). Accessed 2026-11-01.
- **S6:** OpenAI, "Programmatic Tool Calling" guide, section "Choose when to use Programmatic Tool Calling". [Original](https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling), [local](../raw/2026-11-01/openai-programmatic-tool-calling-guide.txt). Accessed 2026-11-01.
- **S7:** goose, "Code Mode Doesn't Replace MCP", 2025-12-21. [Original](https://goose-docs.ai/blog/2025/12/21/code-mode-doesnt-replace-mcp/), [local](../raw/2026-11-01/goose-code-mode-doesnt-replace-mcp.txt). Accessed 2026-11-01.
- **S8:** Factory Research, "Droid 1.0: Building a Frontier Harness", 2026-10-29. [Original](https://factory.com/news/frontier-harness), [local](../raw/2026-11-01/factory-droid-1-0-frontier-harness.txt). Accessed 2026-11-01.

## Revision history

- 2026-11-01: Initial entry.
