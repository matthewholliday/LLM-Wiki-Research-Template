# Droid 1.0 Script Mode Gains Concentrate in Many-Call Tasks

[Findings index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created:** 2026-11-01
- **Last updated:** 2026-11-01
- **Evidence collected or checked:** 2026-11-01
- **Evidence type:** Review of a vendor research post, with secondary analysis
- **Status:** Supported within vendor-reported scope
- **Confidence:** Medium for the mechanism, low for the size of the gains. Factory explains the mechanism clearly, but all measurements are its own and the largest figures are modeled.
- **Related pages:** [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md), [benchmark finding](droid-1-0-benchmark-lead-is-vendor-reported.md)

## Research question

How much does Droid 1.0's programmatic tool calling (Script mode) reduce model requests, tokens, and cost, and on which tasks?

## Finding

Script mode reduces requests and context mainly on tasks with many tool calls whose results can be filtered in code. Factory's own production figure is a **15% cost reduction** on Claude Opus 5.5. The widely repeated **51-fold** token reduction comes from one favorable internal task, and its direct-call side is an estimate, not a measured run. Gains should be expected to be small for short or open-ended work.

## Evidence

1. **Production average.** Factory: "Script mode cuts Droid's cost by 15% on Claude Opus 5.5. Most Scripts are small, and the per-task savings concentrate in the 12.5% of them that make six or more tool calls." Section "Script mode". [S1]
2. **Linear cleanup.** 151 issues moved and verified with 312 tool calls. The Script took 2 requests and about 61,000 tokens. The direct-call comparison, 36 requests and about 3.1 million tokens, is "modeled" at 10 calls per request with about 28,000 tokens of fixed instructions re-sent each time; at 3 calls per request it would be 107 requests. Figure 3 and Methodology. [S1, S3]
3. **CI sweep.** 550 tool calls over 5,384 jobs in 2 requests, versus an estimated 59 to 187. Under 0.1% of tool results reached the model's context. [S1]
4. **Small replay.** A failing-test fix with GPT-6.1 Sol made the same 15 tool calls in 5 model calls instead of 10, finishing in 41.6 s instead of 56.8 s. Factory states that the direct run places the same calls one or two per model call, so it is a reconstruction rather than an independent run. Figure 2. [S1]
5. **Model dependence.** Factory enables Script mode by default only for a listed set of models, and reports that a related optimization (line-numbered reads) lowered cost on one model but raised it 8% and 32% on two others. [S1]
6. **Secondary assessment.** AlphaSignal rates bulk triage, CI sweeps, migrations, and repository-wide refactors as strong fits; open-ended debugging as mixed; and short interactive edits as limited. It notes that generated scripts can still have faulty assumptions or unsafe retries, so side-effecting tools need narrow permissions and idempotency controls. [S2]

## Method and context

Source review of Factory's launch post, its X thread, and three news analyses, captured 2026-11-01. Figures refer to Droid as of late October 2026 and to models named in the post. No Droid sessions were run for this finding.

## Interpretation

The mechanism is plausible and matches the prompt economics Factory describes: each direct request re-sends instructions and history, so collapsing many calls into one program saves the most when calls are numerous and results are bulky. The 15% production figure is the better guide to typical savings; the 51-fold figure illustrates an upper range for batch work.

## Limitations

- All numbers are vendor-reported and unreplicated.
- The largest comparisons model the direct-call side rather than measuring it.
- Factory does not report Script failure rates, retries, or token cost of failed programs.
- The 15% figure covers one model; results on other models were not given.

## Open questions and next steps

- Run matched tasks with Script mode on and off, on several models, and measure requests, tokens, cost, and success.
- Measure how partial side effects are reported when a Script fails mid-batch.

## Sources

- **S1:** Factory Research, "Droid 1.0: Building a Frontier Harness", 2026-10-29. [Original](https://factory.com/news/frontier-harness), [local](../raw/2026-11-01/factory-droid-1-0-frontier-harness.txt). Accessed 2026-11-01.
- **S2:** AlphaSignal Newsroom, "Factory's Droid 1.0 Beats OpenAI and Anthropic Agents While Cutting Costs 51x", 2026-10-29. [Original](https://alphasignal.ai/news/factory-s-droid-1-0-beats-openai-and-anthropic-agents-while-cutting-costs-51x), [local](../raw/2026-11-01/alphasignal-droid-1-0-analysis.txt). Accessed 2026-11-01.
- **S3:** Factory on X, Droid 1.0 announcement thread, 2026-10-29. [Original](https://x.com/FactoryAI/status/2115934579446182213), [local](../raw/2026-11-01/factory-x-droid-1-0-thread.txt). Accessed 2026-11-01.

## Revision history

- 2026-11-01: Initial entry.
