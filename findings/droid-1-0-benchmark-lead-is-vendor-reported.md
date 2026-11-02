# Droid 1.0's Benchmark Lead Is Vendor-Reported

[Findings index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created:** 2026-11-01
- **Last updated:** 2026-11-01
- **Evidence collected or checked:** 2026-11-01
- **Evidence type:** Review of a vendor benchmark methodology, comparison with a public leaderboard, and secondary analysis
- **Status:** Supported
- **Confidence:** High that the results are unreplicated; low on whether Droid's lead would hold under independent runs.
- **Related pages:** [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md), [Script mode finding](droid-1-0-script-mode-gains-concentrate-in-many-call-tasks.md)

## Research question

Do Factory's Terminal-Bench 4 results show that the Droid 1.0 harness outperforms native harnesses on the same model?

## Finding

Factory's same-model comparison is documented in detail but run, adjusted, and reported only by Factory. As of 2026-11-01, no independent reproduction was found, and Droid does not appear in the captured public Terminal-Bench 4 leaderboard. The public leaderboard's native-harness scores, run at higher reasoning settings, are close to or above the scores Factory reports for Droid. The results support "Droid was competitive or better under Factory's settings", not a general ranking.

## Evidence

1. **Factory's results.** With GPT-6.1 Sol at high reasoning: Droid 57.6%, Codex 54.0%. With Claude Opus 5.5 at high reasoning: Droid 65.2%, Claude Code 57.6%, Cursor and OpenCode 62.1%. All tasks, default limits, 3 trials per task, 2026-10-23 to 28. Figure 1 and Methodology. [S1]
2. **Adjustments disclosed by Factory.** Trials failing for reasons "outside the harness" were rerun. Opus 5.5 trials stopped by content moderation were rerun on Claude Opus 5. Devin tasks where it stopped to ask a question were counted as passed if Codex passed (4.7 tasks per trial on average). Missing Cursor token usage was estimated from transcripts for two trials. Factory says it counts "only tasks that both harnesses passed in all three trials"; the line sits among the cost and time rules, so it likely applies to those comparisons, but the post does not say so explicitly. High reasoning was chosen because it is the most popular setting on Factory's platform. [S1]
3. **Public leaderboard.** The Terminal-Bench 4.0 leaderboard captured on 2026-11-01 lists Claude Code with Opus 5.5 (max) at 64.8% ± 3.1% and Codex with GPT-6.1 Sol (max) at 58.2% ± 3.1%. Its 23 captured rows contain no Droid or Factory entry. [S2]
4. **Secondary sources.** AICoder states these "are vendor results with no third-party reproduction yet". AlphaSignal says the figures "remain vendor benchmarks" and that independent replication is needed. MarkTechPost labels them self-reported. AlphaSignal's rounded gaps (3.6 and 3.1 points) differ slightly from Factory's stated 3.5 and 3.0, likely from rounding. [S3, S4, S5]

## Method and context

Compared Factory's methodology section with the public leaderboard snapshot and three news analyses, all captured 2026-11-01. Reasoning levels, run dates, and possibly harness versions differ between Factory's runs and the leaderboard, so the numbers are context rather than a direct contradiction.

## Interpretation

Factory's same-model, one-harness-at-a-time design is a reasonable way to isolate harness effects, and its disclosures are more detailed than typical vendor claims. However, the native harnesses score markedly higher on the public leaderboard at max reasoning (for example 64.8% for Claude Code versus 57.6% in Factory's run at high reasoning). The harness gap Factory reports may shrink or reverse at other reasoning settings. Factory's adjustment rules, particularly crediting Devin with passes based on Codex, are judgment calls an independent evaluator might make differently.

## Limitations

- The leaderboard snapshot may be partial and can change; it is not a controlled replication.
- Differences in reasoning settings prevent direct comparison.
- Factory develops its harness with an internal benchmark loop; the post does not state whether Terminal-Bench tasks are excluded from that loop.

## Open questions and next steps

- Check the leaderboard later for a Droid 1.0 submission.
- Compare harnesses at matched max reasoning on the same tasks.

## Sources

- **S1:** Factory Research, "Droid 1.0: Building a Frontier Harness", 2026-10-29, Methodology section. [Original](https://factory.com/news/frontier-harness), [local](../raw/2026-11-01/factory-droid-1-0-frontier-harness.txt). Accessed 2026-11-01.
- **S2:** Terminal-Bench 4.0 leaderboard. [Original](https://www.tbench.ai/), [local](../raw/2026-11-01/terminal-bench-4-leaderboard.txt). Accessed 2026-11-01.
- **S3:** AICoder, "Factory launches Droid 1.0", 2026-10-29. [Original](https://aicoder.com/news/news-20261029-factory-droid-1-0-programmatic-tool-calling-terminal-bench-4-harness), [local](../raw/2026-11-01/aicoder-droid-1-0-news.txt). Accessed 2026-11-01.
- **S4:** AlphaSignal Newsroom, 2026-10-29. [Original](https://alphasignal.ai/news/factory-s-droid-1-0-beats-openai-and-anthropic-agents-while-cutting-costs-51x), [local](../raw/2026-11-01/alphasignal-droid-1-0-analysis.txt). Accessed 2026-11-01.
- **S5:** MarkTechPost, 2026-10-31. [Original](https://www.marktechpost.com/2026/10/31/factory-droid-1-0-frontier-harness/), [local](../raw/2026-11-01/marktechpost-droid-1-0-analysis.txt). Accessed 2026-11-01.

## Revision history

- 2026-11-01: Initial entry.
