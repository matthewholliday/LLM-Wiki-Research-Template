# How Factory Droid 1.0 Works

[Topics index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created / last updated:** 2026-11-01
- **Evidence checked:** 2026-11-01
- **Evidence type:** Factory's launch research post, release record, SDK documentation, and announcement thread; one public leaderboard; three news analyses
- **Scope:** The Droid 1.0 harness as described at launch on 2026-10-29: programmatic tool calling, the Agent Factory development loop, prompt caching, prompt size, loop safeguards, latency work, and the SDK. No Droid build was installed or tested for this page. Pricing and plan limits were not assessed.
- **Related:** [Programmatic tool calling precedents](programmatic-tool-calling-precedents.md), [Script mode finding](../findings/droid-1-0-script-mode-gains-concentrate-in-many-call-tasks.md), [benchmark finding](../findings/droid-1-0-benchmark-lead-is-vendor-reported.md), [agent harness restart topic](agent-harness-session-rehydration.md), [source ledger](../raw/INDEX.md)

## Research question

How does Factory's Droid 1.0 release work, and how well supported are its claims?

## Short answer

Droid 1.0 is a new version of Factory's agent harness: the prompts, tools, tool-result handling, and loop that wrap whichever model the user selects. Factory announced it on 2026-10-29 alongside CLI and desktop v1.0.0. [S1, S2, S4]

Its main change is **programmatic tool calling (PTC) by default**. Instead of calling one or two tools per model request, the model writes a JavaScript program for a sandboxed **Script** tool. The program calls Droid's tools, filters their results in code, and prints only a summary back to the model. Factory reports one task that went from an estimated 36 requests and about 3.1 million input tokens to 2 requests and about 61,000 tokens. Across production sessions on Claude Opus 5.5, it reports a smaller 15% cost cut. [S1]

The other changes are incremental harness work: an append-only request layout that keeps the provider prompt cache warm, a first request 37% smaller, rules that stop stuck or looping agents, and lower startup and per-session latency. Factory says most changes came from an internal "Agent Factory" loop in which agents propose harness changes that are tested on every affected model family before an engineer merges them. [S1]

All performance figures, including Terminal-Bench 4 wins over Codex, Claude Code, Cursor, OpenCode, and Devin, are Factory's own runs. No independent reproduction was found, and the public Terminal-Bench 4 leaderboard captured on 2026-11-01 lists no Droid entry. See the [benchmark finding](../findings/droid-1-0-benchmark-lead-is-vendor-reported.md). [S5, S6, S7, S8]

## What "1.0" refers to

The 1.0 label marks a milestone more than a single code drop. The CLI and desktop v1.0.0 release record lists modest items: a doctor self-launch check, faster turn preparation with many custom models, multi-line answer editing, and session list fixes. [S2] The launch post attributes its measurements to work spread across earlier releases, for example prompt size from Droid 0.170.0 to 0.250.0 and launch latency from the 2026-08-25 to 2026-10-20 releases. [S1] Droid 1.0 is therefore best read as the name for the accumulated harness state at the end of October 2026.

## How the harness works

### Programmatic tool calling through Script

| Mechanism | What Factory describes [S1] |
| --- | --- |
| Program instead of single calls | The model writes JavaScript that invokes Droid's tools as functions. One Script can make hundreds of tool calls in one model request. |
| Sandbox | The program has no file, network, or system access of its own. Capabilities come only from the exposed tools, which keep their normal permissions. AlphaSignal stresses this point. [S7] |
| Context control | Raw files, search results, and logs stay in program variables. Printed output is size-capped; full results are logged for later search. |
| Concurrency | Independent calls run concurrently, so a batch takes as long as its slowest call. |
| Raw text inputs | File bodies, patches, and commands go in raw input blocks rather than escaped strings, to save tokens and reduce malformed calls. |
| Short edit results | An edit inside a Script returns the same short summary as a direct edit. |
| Long jobs | A Script waits up to 5 minutes, then returns its output so far, or starts in the background. A separate tool waits on, checks, or stops it, and Droid wakes the model when background work ends, so the model does not poll. |
| Per-model default | Script mode is on by default for a listed set of GPT, Claude, and Kimi models, chosen through cross-model testing. |

Factory credits the idea to CodeAct (Wang et al., 2024) and to earlier production versions from Cloudflare, Anthropic, and Codex. [S1] It is not unique to Droid: OpenCode 2.0, announced on 2026-10-12, made a similar "Code Mode" the default for MCP servers. [S6] See [programmatic tool calling: precedents and implementations](programmatic-tool-calling-precedents.md) for the research history and a comparison with Claude, OpenAI, Codex CLI, Cloudflare, goose, OpenCode, smolagents, and Glean. The evidence for when Script mode helps is assessed in the [Script mode finding](../findings/droid-1-0-script-mode-gains-concentrate-in-many-call-tasks.md).

### The Agent Factory loop

Factory describes a five-step loop: add each new model and run behavioral assertions; evaluate every model on the same tasks plus live error logs and user friction; have agents look for failure causes that repeat across tasks and models; draft a change with a stated hypothesis; and test it on every affected model family. An engineer reviews the evidence and decides what ships. [S1]

Proposals must follow stated principles: budget every token, keep large results in files, keep requests append-only for the prompt cache, profile the path to inference, track background work, and always have a next step when stuck. Factory's example of a cross-model tradeoff is line-numbered file reads. They cut one Opus task's cost by 22% but raised costs by 8% on GLM and 32% on Kimi, so line numbers shipped as an option the model requests. [S1]

The post gives no count of changes produced by the loop, no description of the benchmark task sets used inside it, and no failure rate for agent-proposed changes.

### Prompt cache and prompt size

- **Append-only requests.** Newly discovered MCP or connector tools are now appended at the end of the request instead of inserted into the tool list near the top, which had invalidated the cached conversation. Factory reports that a typical production request reads 98% of its input from cache (91.5% weighted by tokens) and that 98.6% of requests are strictly append-only, over 20.4 million CLI requests in the 7 days to 2026-10-22. A monitor flags any request that breaks the cache. Failed requests are retried on the same provider to keep its cache. [S1]
- **Smaller first request.** From 0.170.0 to 0.250.0, a session's first request fell from 20,887 to 13,055 input tokens (37%). Droid now sends 2 tool definitions up front instead of 11 and loads the rest on demand. The system prompt grew 31% (33% in the post's figure) to add guidance on communication and on environment details such as images, connected apps, and personal data. The two measurements used different models and tokenizers; by characters the drop was 35%. [S1]

### Bounded autonomy

Rules in the loop, not the model, decide what happens when a run goes wrong. On Factory-managed Anthropic streams, 4 minutes of silence counts as a dropped stream and is retried. Three turns with no visible output stop the run. Three identical tool calls trigger a nudge and six stop the loop, unless the repeats return new results. Compaction summaries now have room for 16,000 tokens instead of 8,000, because Factory estimated a third or more were filling the old limit. Long-running work can move to the background while the model sleeps until a wake-up reminder. [S1]

### Latency and process model

Factory reports median time to first paint falling from 1,839 to 488 ms and time to accept a prompt from 1,876 to 618 ms, mostly from precompiled code and a Bun 1.4.2 upgrade. Multiple sessions now share one daemon process, adding about 20 MB each instead of about 350 MB per process. Median quit time fell from 648 to 30 ms by handing pending telemetry and session sync to a detached process. Per-turn preparation was cut to 24 ms by caching the connected-app list, and `droid exec` reaches its first model request in a median 646 ms instead of 1,741 ms. [S1]

### Surfaces and SDK

Droid 1.0 ships in the macOS and Windows desktop app, the terminal UI, and the `@factory/droid-sdk` TypeScript SDK. [S1] Factory's SDK documentation says the SDK runs the same harness as the CLI and app. It can start `droid` as a Node subprocess or connect to an existing daemon, and offers one-shot `run()`, persistent and resumable sessions, streaming messages, model and session discovery, permission and AskUser handlers, and in-process MCP tools. Runtime objects such as handlers and MCP servers are not saved with a session and must be reattached on resume. [S3] The SDK source is Apache-2.0 licensed; MarkTechPost reports the main product license as not disclosed. [S8]

## Claimed results

| Claim | Figure | Basis |
| --- | --- | --- |
| Terminal-Bench 4, GPT-6.1 Sol | Droid 57.6% at $0.79 per passed task; Codex 54.0%, OpenCode 51.0%, Devin 45.0% | Factory runs, 3 trials per task, 2026-10-23 to 28 [S1] |
| Terminal-Bench 4, Claude Opus 5.5 | Droid 65.2% at $4.73; Cursor and OpenCode 62.1%, Devin 59.6%, Claude Code 57.6% | Same [S1] |
| Time per passed task | 16% to 26% less than all others on Opus 5.5; 10% more than Codex on GPT-6.1 Sol | Same [S1] |
| Script mode cost | 15% lower than direct calls on Opus 5.5 | Factory production data [S1] |
| Linear cleanup example | 2 requests and ~61,000 tokens versus an estimated 36 requests and ~3.1M tokens | One internal session; direct side modeled [S1, S4] |

## Assessment

- **Mechanisms are clearly documented; outcomes are not independently verified.** The launch post explains each design choice and publishes its benchmark methodology, including harness versions and adjustments. Every number comes from Factory. [S1]
- **Secondary coverage adds little independent evidence.** AICoder, AlphaSignal, and MarkTechPost restate Factory's figures. AICoder and AlphaSignal state that they are vendor results without third-party reproduction; AlphaSignal adds a reasoned view of which task shapes suit Script mode. [S6, S7, S8]
- **The headline token reduction is an estimate on one favorable task.** The broad production figure is 15%. See the [Script mode finding](../findings/droid-1-0-script-mode-gains-concentrate-in-many-call-tasks.md).
- **Benchmark comparisons use Factory's settings.** Factory ran every harness at high reasoning, while the public leaderboard lists native harnesses at max or xhigh reasoning with higher scores. See the [benchmark finding](../findings/droid-1-0-benchmark-lead-is-vendor-reported.md).

## Relationship to other research

The SDK's `resumeSession()` restores conversation, working directory, and settings but not runtime handlers [S3]. That is consistent with the [session restart topic](agent-harness-session-rehydration.md) and the finding that [session resume is not execution recovery](../findings/session-resume-is-not-execution-recovery.md). Script programs that make many side-effecting calls raise the same idempotency question; Factory's Linear example stops at the first unexpected change but the post does not describe resumption of a partly finished Script. [S1]

## Open questions

- Independent Terminal-Bench 4 runs of Droid 1.0 on the public leaderboard, at the same reasoning settings as native harnesses.
- How often Scripts fail, and how partial side effects are reported when a Script errors or times out mid-batch.
- Whether Script mode helps or hurts on short interactive tasks and on models where it is off by default.
- How the Agent Factory's benchmark sets are kept separate from Terminal-Bench 4, to rule out tuning on the evaluation.
- Hands-on testing of the published latency and memory figures.

## Sources

- **S1:** Factory Research, "Droid 1.0: Building a Frontier Harness", 2026-10-29. Primary source, vendor research post. [Original](https://factory.com/news/frontier-harness), [local](../raw/2026-11-01/factory-droid-1-0-frontier-harness.txt).
- **S2:** Factory, CLI v1.0.0 and Desktop v1.0.0 release record, 2026-10-29. Primary source. [Original](https://docs.factory.com/docs/changelog/releases/1.0.0.json), [local](../raw/2026-11-01/factory-changelog-cli-1-0-0.txt).
- **S3:** Factory, "Droid TypeScript SDK" documentation. Primary source. [Original](https://docs.factory.com/sdk/typescript.md), [local](../raw/2026-11-01/factory-droid-typescript-sdk-docs.txt).
- **S4:** Factory on X, Droid 1.0 announcement thread, 2026-10-29. Primary source. [Original](https://x.com/FactoryAI/status/2115934579446182213), [local](../raw/2026-11-01/factory-x-droid-1-0-thread.txt).
- **S5:** Terminal-Bench 4.0 leaderboard, captured 2026-11-01. Primary data, third-party benchmark. [Original](https://www.tbench.ai/), [local](../raw/2026-11-01/terminal-bench-4-leaderboard.txt).
- **S6:** AICoder, "Factory launches Droid 1.0", 2026-10-29. Secondary analysis. [Original](https://aicoder.com/news/news-20261029-factory-droid-1-0-programmatic-tool-calling-terminal-bench-4-harness), [local](../raw/2026-11-01/aicoder-droid-1-0-news.txt).
- **S7:** AlphaSignal Newsroom, "Factory's Droid 1.0 Beats OpenAI and Anthropic Agents While Cutting Costs 51x", 2026-10-29. Secondary analysis. [Original](https://alphasignal.ai/news/factory-s-droid-1-0-beats-openai-and-anthropic-agents-while-cutting-costs-51x), [local](../raw/2026-11-01/alphasignal-droid-1-0-analysis.txt).
- **S8:** MarkTechPost, "Meet Factory Droid 1.0: A Model-Independent Coding Agent Harness", 2026-10-31. Secondary analysis. [Original](https://www.marktechpost.com/2026/10/31/factory-droid-1-0-frontier-harness/), [local](../raw/2026-11-01/marktechpost-droid-1-0-analysis.txt).

## Revision history

- **2026-11-01:** Initial synthesis.
- **2026-11-01:** Linked the new programmatic tool calling precedents topic.
