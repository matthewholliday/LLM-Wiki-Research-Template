# Vendor and Independent Prompt-Injection Rates Diverge

[Findings index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created:** 2026-11-02
- **Last updated:** 2026-11-02
- **Evidence collected or checked:** 2026-11-02
- **Evidence type:** Comparison of vendor-reported metrics with two independent attack benchmarks
- **Status:** Supported; the numbers are not directly comparable
- **Confidence:** Medium. The divergence is clear, but systems, dates, and methods differ
- **Related pages:** [Computer use, visibility, and permissions](../topics/agent-computer-use-visibility-and-security.md), [approval layers finding](approval-layers-are-not-isolation-boundaries.md)

## Research question

How resistant are computer-use and browser agents to prompt injection, according to vendors and independent researchers?

## Finding

Vendor-reported attack success rates for their own defended configurations are low, while independent benchmarks of other agent setups report high rates. Both kinds of source agree that no reviewed agent is immune. The figures measure different systems with different attack sets, so they cannot be used to rank products.

## Evidence

| Source | System tested | Method | Reported attack success |
| --- | --- | --- | --- |
| Anthropic research post [S1] | Claude browser use, Sonnet 4 to Opus 4.5 | Internal adaptive Best-of-N attacker, 100 attempts per environment | 8.0% to 13.8% model-only; 1.4% to 2.4% with improved safeguards |
| Anthropic help center [S2] | Claude in Chrome, Opus 4.8 configuration | Internal testing combining known effective attacks; sample not stated | Under 0.08% |
| VPI-Bench [S3] | Browser-Use with six models; Anthropic Computer-Use with Sonnet 3.5 and 3.7 | 306 visual injection cases on five recreated platforms, three runs, LLM judges checked against humans | Up to 51.3% for computer-use agents and up to 100% for browser-use agents |
| StakeBench [S4] | NanoBrowser and BrowserUse with GPT-5 and Gemini 2.5 Flash | 264 cases, 3,168 adversarial runs | 41.67% to 68.16% indirect; over 79% direct |

Anthropic's own post states that "No browser agent is immune to prompt injection." [S1] VPI-Bench found added system-prompt defenses gave no significant overall benefit. [S3] StakeBench reports that "not a single attack objective is reliably resisted" and that attack success and task disruption are only weakly linked, so a task that completes normally can still have been compromised. [S4, S5]

Gemini's screenshot injection detection is opt-in and off by default; Anthropic's computer use screenshot classifiers are on by default. [S6, S7]

## Method and context

Collected vendor pages and arXiv benchmarks on 2026-11-02. CSO Online's report was used to identify StakeBench and cross-checked against the paper. The benchmarks tested older or open-framework agents, not the vendor configurations with their latest classifiers.

## Interpretation

Vendor numbers show trend within one product under one internal attack suite. Independent numbers show the attack surface of agents without product-specific defenses. A deployment decision should assume injection will sometimes succeed and rely on isolation, narrow permissions, and confirmation of consequential actions rather than on a low reported rate.

## Limitations

No attacks were reproduced. Vendor methods are partly undisclosed. Independent benchmarks predate the latest models. Comparisons across these sources are illustrative only.

## Open questions and next steps

- Run an independent benchmark such as VPI-Bench against current defended products.
- Measure whether accessibility-tree perception changes injection success relative to screenshots.

## Sources

Checked 2026-11-02; see the [ledger](../raw/INDEX.md).

- **S1:** Anthropic, [Mitigating prompt injections in browser use](https://www.anthropic.com/research/prompt-injection-defenses). [Local snapshot](../raw/2026-11-02/anthropic-browser-prompt-injection-defenses.txt).
- **S2:** Anthropic, [Use Claude in Chrome safely](https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely). [Local snapshot](../raw/2026-11-02/claude-in-chrome-safety.txt).
- **S3:** Cao et al., [VPI-Bench](https://arxiv.org/html/2506.02456v2), arXiv v2 2026-03-01. [Local snapshot](../raw/2026-11-02/arxiv-2506-02456-vpi-bench.txt).
- **S4:** Wang et al., [StakeBench](https://arxiv.org/html/2606.13385v1), arXiv v1 2026-06-11. [Local snapshot](../raw/2026-11-02/arxiv-2606-13385-stakebench.txt).
- **S5:** Gyana Swain, CSO Online, [Prompt injection breaks today's AI agents, study warns](https://www.csoonline.com/article/4184455/prompt-injection-breaks-todays-ai-agents-study-warns.html), 2026-06-12. [Local snapshot](../raw/2026-11-02/csoonline-prompt-injection-agents-study.txt).
- **S6:** Google, [Computer use (Gemini API)](https://ai.google.dev/gemini-api/docs/computer-use). [Local snapshot](../raw/2026-11-02/gemini-computer-use-api.txt).
- **S7:** Anthropic, [Computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool). [Local snapshot](../raw/2026-11-02/anthropic-computer-use-tool.txt).

## Revision history

- 2026-11-02: Initial entry.
