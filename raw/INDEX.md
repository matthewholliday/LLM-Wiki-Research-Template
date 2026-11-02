# Raw Source Ledger

[Wiki index](../INDEX.md)

Store downloaded sources and user-supplied research documents in this folder. Preserve originals after ingestion. This ledger tracks provenance and processing; it is not itself a document to ingest.

## Source records

Source records follow the conventions below. The first collection concerns agent harness restart and rehydration.

For each source, add a level-three heading with a stable descriptive identifier and record:

- **File:** Relative link to the local source, or `Unavailable` for an unsuccessful retrieval.
- **Title:** Document title.
- **Role:** Primary source, secondary analysis, or user-supplied material; explain uncertain classification.
- **Origin:** Original URL or supplied file origin.
- **Author or publisher:** Known attribution, otherwise `Unknown`.
- **Published or updated:** Source date, otherwise `Unknown`.
- **Retrieved or supplied:** Date obtained, using the user's local date.
- **SHA-256:** Hash of the actual file bytes; omit when no file was obtained.
- **Status:** `pending`, `partial`, `blocked`, `ingested`, or `excluded`.
- **Ingested:** Date of successful ingestion, when applicable.
- **Wiki pages:** Relative links to the research that uses this source.
- **Notes:** Relevant version, snapshot format, duplicate or revision relationships, extraction limitations, exclusions, or remaining work.

For changed content, preserve the prior evidence history and record the new hash and ingestion state. An `ingested` status applies only to the recorded bytes and linked wiki coverage. Identical content may share coverage, but retain distinct origins when they matter.

## Agent harness restart research, 2026-10-31

These ten first-party sources support the [harness comparison](../topics/agent-harness-session-rehydration.md). Files preserve selected paragraphs from FetchUrl Markdown extraction as `.txt` attachments, not original HTML or complete page archives. Text attachments keep raw evidence outside the rendered documentation while allowing downloads from the site. Selection retained session, persistence, restart, interruption, cancellation, checkpoint, replay, retry, and idempotency material. Navigation, large embedded page metadata, and unrelated paragraphs were omitted; extracted examples can be incomplete. No source code was executed. Rolling documentation was not mapped to installed package versions. These are vendor claims, not independent crash-test results.

### claude-agent-sdk-sessions

- **File:** [Local source extract](2026-10-31/claude-agent-sdk-sessions.txt).
- **Title:** Work with sessions.
- **Role:** Primary source, first-party product/framework documentation.
- **Origin:** https://platform.claude.com/docs/en/agent-sdk/sessions (redirected to https://code.claude.com/docs/en/agent-sdk/sessions).
- **Author or publisher:** Anthropic.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-10-31.
- **SHA-256:** `a79f61dcccb169cd62119f127106194db3528f224ab18dae25049108118ff3b5`.
- **Status:** `ingested`.
- **Ingested:** 2026-10-31.
- **Wiki pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md); [core finding](../findings/session-resume-is-not-execution-recovery.md).
- **Notes:** Selected Markdown extract; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-10-31.

### codex-cli-commands

- **File:** [Local source extract](2026-10-31/codex-cli-commands.txt).
- **Title:** Developer commands, CLI.
- **Role:** Primary source, first-party product/framework documentation.
- **Origin:** https://learn.chatgpt.com/docs/developer-commands?surface=cli.
- **Author or publisher:** OpenAI.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-10-31.
- **SHA-256:** `0c525864f0be253d20b3932854ba89afcac94a96462b7735e9224d94eb78ff5c`.
- **Status:** `ingested`.
- **Ingested:** 2026-10-31.
- **Wiki pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md).
- **Notes:** Selected Markdown extract; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-10-31.

### factory-droid-cli-reference

- **File:** [Local source extract](2026-10-31/factory-droid-cli-reference.txt).
- **Title:** Droid CLI reference.
- **Role:** Primary source, first-party product/framework documentation.
- **Origin:** https://docs.factory.com/droid-cli/cli-reference.md.
- **Author or publisher:** Factory.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-10-31.
- **SHA-256:** `362c1a731ba0c53803f8c143dd561f8eb645b84faa0e73dc8a9c1b69321d4ce5`.
- **Status:** `ingested`.
- **Ingested:** 2026-10-31.
- **Wiki pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md).
- **Notes:** Selected Markdown extract; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-10-31.

### openai-agents-human-in-the-loop

- **File:** [Local source extract](2026-10-31/openai-agents-human-in-the-loop.txt).
- **Title:** Human-in-the-loop.
- **Role:** Primary source, first-party product/framework documentation.
- **Origin:** https://openai.github.io/openai-agents-python/human_in_the_loop/.
- **Author or publisher:** OpenAI.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-10-31.
- **SHA-256:** `cb5bbe11d32b250fe9c8e2c6fd06d6ddf9923b84f9c4c072bbc7f6a7d97c7f8e`.
- **Status:** `ingested`.
- **Ingested:** 2026-10-31.
- **Wiki pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md); [core finding](../findings/session-resume-is-not-execution-recovery.md).
- **Notes:** Selected Markdown extract; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-10-31.

### openai-agents-streaming

- **File:** [Local source extract](2026-10-31/openai-agents-streaming.txt).
- **Title:** Streaming.
- **Role:** Primary source, first-party product/framework documentation.
- **Origin:** https://openai.github.io/openai-agents-python/streaming/.
- **Author or publisher:** OpenAI.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-10-31.
- **SHA-256:** `ff424e950b1af80cfb27fea56ae33d19cd9a62af4e3ad6ecccc5aa22b371bbd5`.
- **Status:** `ingested`.
- **Ingested:** 2026-10-31.
- **Wiki pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md).
- **Notes:** Selected Markdown extract; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-10-31.

### langgraph-checkpointers

- **File:** [Local source extract](2026-10-31/langgraph-checkpointers.txt).
- **Title:** Checkpointers.
- **Role:** Primary source, first-party product/framework documentation.
- **Origin:** https://docs.langchain.com/oss/python/langgraph/checkpointers.
- **Author or publisher:** LangChain.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-10-31.
- **SHA-256:** `7a0e1137abb9b770d3df11bff27b9a5197f253425e892dd29791453b309b3514`.
- **Status:** `ingested`.
- **Ingested:** 2026-10-31.
- **Wiki pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md).
- **Notes:** Selected Markdown extract; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-10-31.

### langgraph-interrupts

- **File:** [Local source extract](2026-10-31/langgraph-interrupts.txt).
- **Title:** Interrupts.
- **Role:** Primary source, first-party product/framework documentation.
- **Origin:** https://docs.langchain.com/oss/python/langgraph/interrupts.
- **Author or publisher:** LangChain.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-10-31.
- **SHA-256:** `e6a199b9ffe4ef7c54e9b7407d16c9785e1f21be53d4c2c3f932ca07c7ff02c4`.
- **Status:** `ingested`.
- **Ingested:** 2026-10-31.
- **Wiki pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md); [core finding](../findings/session-resume-is-not-execution-recovery.md).
- **Notes:** Selected Markdown extract; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-10-31.

### langgraph-persistence

- **File:** [Local source extract](2026-10-31/langgraph-persistence.txt).
- **Title:** Persistence.
- **Role:** Primary source, first-party product/framework documentation.
- **Origin:** https://docs.langchain.com/oss/python/langgraph/persistence.
- **Author or publisher:** LangChain.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-10-31.
- **SHA-256:** `2cf1b3e3f52f8bc9496c08d51363407f2bd04d9e676985de696a29bbc74842f2`.
- **Status:** `ingested`.
- **Ingested:** 2026-10-31.
- **Wiki pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md).
- **Notes:** Selected Markdown extract; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-10-31.

### temporal-workflow-execution

- **File:** [Local source extract](2026-10-31/temporal-workflow-execution.txt).
- **Title:** Temporal Workflow Execution overview.
- **Role:** Primary source, first-party product/framework documentation.
- **Origin:** https://docs.temporal.io/workflow-execution.
- **Author or publisher:** Temporal Technologies.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-10-31.
- **SHA-256:** `14d9bff7d5750641f5ab3558c35e7e2acd8209a48ed2dace4356f3a77383ce43`.
- **Status:** `ingested`.
- **Ingested:** 2026-10-31.
- **Wiki pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md).
- **Notes:** Selected Markdown extract; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-10-31.

### temporal-activity-definition

- **File:** [Local source extract](2026-10-31/temporal-activity-definition.txt).
- **Title:** Activity Definition.
- **Role:** Primary source, first-party product/framework documentation.
- **Origin:** https://docs.temporal.io/activity-definition.
- **Author or publisher:** Temporal Technologies.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-10-31.
- **SHA-256:** `37d0ad10024111f689b95c73b52ff1fb87a9a9556f6e6030ab17226cdfe66fb5`.
- **Status:** `ingested`.
- **Ingested:** 2026-10-31.
- **Wiki pages:** [Harness comparison](../topics/agent-harness-session-rehydration.md); [core finding](../findings/session-resume-is-not-execution-recovery.md).
- **Notes:** Selected Markdown extract; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-10-31.

## Agentic coding UI accessibility research, 2026-11-01

These sixteen sources support the [accessibility topic](../topics/agentic-coding-ui-accessibility.md). Files are full-page FetchUrl Markdown snapshots saved as `.txt`, with a provenance header and long CSS lines removed. They are not original HTML. Issue threads reflect their state on the capture date. Vendor pages describe intended behavior, not tested usability. No software was installed or tested.

### claude-code-accessibility

- **File:** [Local source snapshot](2026-11-01/claude-code-accessibility.txt).
- **Title:** Use Claude Code with a screen reader.
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://code.claude.com/docs/en/accessibility.
- **Author or publisher:** Anthropic.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `4ba23e2524918871814835bd1977af93b53bbdcbbc3af4786b40b36a227c87f1`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [rendering finding](../findings/rendering-model-predicts-agent-ui-accessibility.md); [autonomy finding](../findings/agent-autonomy-shifts-accessibility-burden-to-review.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### github-cli-screen-reader-guide

- **File:** [Local source snapshot](2026-11-01/github-cli-screen-reader-guide.txt).
- **Title:** Using Git, GitHub CLI, and Copilot CLI with a Screen Reader.
- **Role:** Primary source, first-party accessibility guidance.
- **Origin:** https://accessibility.github.com/documentation/guide/cli/.
- **Author or publisher:** GitHub.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `04a125bb2250cc516d829fb6c627b01aaef4eb28c10bc546223cdbef0627f00a`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [rendering finding](../findings/rendering-model-predicts-agent-ui-accessibility.md); [autonomy finding](../findings/agent-autonomy-shifts-accessibility-burden-to-review.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### github-copilot-vscode-screen-reader-guide

- **File:** [Local source snapshot](2026-11-01/github-copilot-vscode-screen-reader-guide.txt).
- **Title:** Using GitHub Copilot in Visual Studio Code with a Screen Reader.
- **Role:** Primary source, first-party accessibility guidance.
- **Origin:** https://accessibility.github.com/documentation/guide/github-copilot-vsc/.
- **Author or publisher:** GitHub.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `e446d7704ae2f26706cd8c1aaecf17f089b31603fc436657d645e0dd8c5056b2`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### vscode-accessibility

- **File:** [Local source snapshot](2026-11-01/vscode-accessibility.txt).
- **Title:** Accessibility (VS Code documentation).
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://code.visualstudio.com/docs/configure/accessibility/accessibility.
- **Author or publisher:** Microsoft.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `4baf95395e363eab1ad17810b83eee3397db838af9a9129bf6ea9bff8b02da0b`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [rendering finding](../findings/rendering-model-predicts-agent-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### copilot-cli-changelog-2026-06-02

- **File:** [Local source snapshot](2026-11-01/copilot-cli-changelog-2026-06-02.txt).
- **Title:** Copilot CLI: Improved UI, rubber duck, prompt scheduling, and voice input.
- **Role:** Primary source, first-party release note.
- **Origin:** https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input/.
- **Author or publisher:** GitHub.
- **Published or updated:** 2026-06-02, editor note 2026-06-03.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `62d6d34fcde22b914f186674777d35887d0f538812620f89cad0993cea105b2f`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### codex-issue-20489-screen-reader-tui

- **File:** [Local source snapshot](2026-11-01/codex-issue-20489-screen-reader-tui.txt).
- **Title:** Add a screen-reader-friendly Codex TUI mode (issue 20489).
- **Role:** Primary source, user reports and maintainer replies.
- **Origin:** https://github.com/openai/codex/issues/20489.
- **Author or publisher:** openai/codex contributors.
- **Published or updated:** Opened 2026-04-30; thread ongoing.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `23db1d0d35ff3bda7ac7f7e2f7ef27dc3f7d17e3b2d758c636cccc26d25385eb`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [rendering finding](../findings/rendering-model-predicts-agent-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### codex-issue-22816-desktop-focus

- **File:** [Local source snapshot](2026-11-01/codex-issue-22816-desktop-focus.txt).
- **Title:** Accessibility: screen reader focus jumps to the top while Codex is generating output (issue 22816).
- **Role:** Primary source, user reports.
- **Origin:** https://github.com/openai/codex/issues/22816.
- **Author or publisher:** openai/codex contributors.
- **Published or updated:** Opened 2026-05-15.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `ea5a1d094d278f0abe46fdec4eb24e3a5210c1320d049db38f625094884fe2b0`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [rendering finding](../findings/rendering-model-predicts-agent-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### opencode-issue-8565-accessibility-mode

- **File:** [Local source snapshot](2026-11-01/opencode-issue-8565-accessibility-mode.txt).
- **Title:** Accessibility mode for screen reader users (issue 8565).
- **Role:** Primary source, user reports and maintainer replies.
- **Origin:** https://github.com/anomalyco/opencode/issues/8565.
- **Author or publisher:** anomalyco/opencode contributors.
- **Published or updated:** Opened 2026-01-15.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `1cddf9f307aaed356c45060dd7173116ffc713c77d6026daa01ee982766467c2`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [rendering finding](../findings/rendering-model-predicts-agent-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### gemini-cli-issue-5148-screen-reader

- **File:** [Local source snapshot](2026-11-01/gemini-cli-issue-5148-screen-reader.txt).
- **Title:** Make gemini CLI accessible to screen reader users (issue 5148).
- **Role:** Primary source, maintainer tracking issue.
- **Origin:** https://github.com/google-gemini/gemini-cli/issues/5148.
- **Author or publisher:** google-gemini/gemini-cli maintainers.
- **Published or updated:** Opened 2025-07-29.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `e55dfbd58c64e28a3af59ac18a586cf88b0969a5c2b993675fb852ea4799089f`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### kiro-cli-settings

- **File:** [Local source snapshot](2026-11-01/kiro-cli-settings.txt).
- **Title:** In-session settings (Kiro CLI chat).
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://kiro.dev/docs/cli/chat/settings/.
- **Author or publisher:** Kiro (AWS).
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `e22432dbbb561ba619f8d751ffade54c3bbec9c06b3154fc837a26cad19db707`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### warp-accessibility

- **File:** [Local source snapshot](2026-11-01/warp-accessibility.txt).
- **Title:** Accessibility (Warp documentation).
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://docs.warp.dev/terminal/more-features/accessibility/.
- **Author or publisher:** Warp.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `709afa70f71e74adc7941eeb6488e0d76f9409a925a8e51a73da96b44f376c76`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [rendering finding](../findings/rendering-model-predicts-agent-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### zed-issue-41138-windows-screen-reader

- **File:** [Local source snapshot](2026-11-01/zed-issue-41138-windows-screen-reader.txt).
- **Title:** Windows: Screen reader accessibility missing completely (issue 41138).
- **Role:** Primary source, user report and staff replies.
- **Origin:** https://github.com/zed-industries/zed/issues/41138.
- **Author or publisher:** zed-industries/zed contributors.
- **Published or updated:** Opened 2025-10-24.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `548c20bfb7b4e7a1bafc11315c3359855257e8efb716f887b255efcdfe9b85c9`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [rendering finding](../findings/rendering-model-predicts-agent-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### cursor-forum-screen-readers

- **File:** [Local source snapshot](2026-11-01/cursor-forum-screen-readers.txt).
- **Title:** Accessibility Issues with Screen Readers in Cursor: Can They Be Improved?.
- **Role:** Primary source, user forum reports.
- **Origin:** https://forum.cursor.com/t/accessibility-issues-with-screen-readers-in-cursor-can-they-be-improved/56823.
- **Author or publisher:** Cursor Community Forum users.
- **Published or updated:** Posts dated 2025-02-27 to 2026-04-06.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `0cd95a7f93d66bba65a52c0267f245082fafad407c84e9a8e57faf1d9a741e03`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### xogium-text-mode-lie

- **File:** [Local source snapshot](2026-11-01/xogium-text-mode-lie.txt).
- **Title:** The text mode lie: why modern TUIs are a nightmare for accessibility.
- **Role:** Secondary analysis, practitioner essay by a screen reader user; primary for the author's reported experiences.
- **Origin:** https://xogium.me/the-text-mode-lie-why-modern-tuis-are-a-nightmare-for-accessibility.
- **Author or publisher:** Xogium (The Inclusive Lens).
- **Published or updated:** 2026-01-05.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `dbcb3f6889d93c5eb6b72a9313be6071294966460af27ef2be11ec4be55183a6`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [rendering finding](../findings/rendering-model-predicts-agent-ui-accessibility.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### arxiv-2503-16491-genai-visually-impaired

- **File:** [Local source snapshot](2026-11-01/arxiv-2503-16491-genai-visually-impaired.txt).
- **Title:** The Impact of Generative AI Coding Assistants on Developers Who Are Visually Impaired.
- **Role:** Primary source, qualitative user study (CHI 2025); secondary for its literature review.
- **Origin:** https://arxiv.org/html/2503.16491v1.
- **Author or publisher:** Flores-Saviaga et al.; Microsoft Research.
- **Published or updated:** 2025-03-10 (v1).
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `047bcbfe2b755539a80227d7b4f27a9be4d78a7cca363feb4c1cab2ed43be56c`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [autonomy finding](../findings/agent-autonomy-shifts-accessibility-burden-to-review.md).
- **Notes:** Full-page text snapshot; see collection notes above.

### arxiv-2506-13270-vibe-coding-screen-readers

- **File:** [Local source snapshot](2026-11-01/arxiv-2506-13270-vibe-coding-screen-readers.txt).
- **Title:** Screen Reader Users in the Vibe Coding Era: Adaptation, Empowerment, and New Accessibility Landscape.
- **Role:** Primary source, qualitative user study preprint.
- **Origin:** https://arxiv.org/html/2506.13270v1.
- **Author or publisher:** arXiv 2506.13270 authors.
- **Published or updated:** 2025-06-16 (v1).
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `9abf83df55c27204768bd7f7dd3289e2899185d32d67da643265638e3f4438b7`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Accessibility topic](../topics/agentic-coding-ui-accessibility.md); [autonomy finding](../findings/agent-autonomy-shifts-accessibility-burden-to-review.md).
- **Notes:** Full-page text snapshot; see collection notes above.

## Factory Droid 1.0 research, 2026-11-01

These eight sources support the [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md). Files are full-page FetchUrl Markdown snapshots saved as `.txt`, with a provenance header and lines over 3,000 characters removed. They are not original HTML. Performance figures are Factory's own unless stated. No Droid build was installed or tested. Searches found no independent reproduction of the benchmark results and no in-depth independent critique; community threads found were older than the release.

### factory-droid-1-0-frontier-harness

- **File:** [Local source snapshot](2026-11-01/factory-droid-1-0-frontier-harness.txt).
- **Title:** Droid 1.0: Building a Frontier Harness.
- **Role:** Primary source, vendor research post and benchmark report.
- **Origin:** https://factory.com/news/frontier-harness (also reached from https://factory.ai/news/frontier-harness).
- **Author or publisher:** Factory Research.
- **Published or updated:** 2026-10-29.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `2c1c4e319833a161beadba31832daaf8025a7885158952cd571a718436978aaf`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md); [Script mode finding](../findings/droid-1-0-script-mode-gains-concentrate-in-many-call-tasks.md); [benchmark finding](../findings/droid-1-0-benchmark-lead-is-vendor-reported.md); [PTC topic](../topics/programmatic-tool-calling-precedents.md); [code actions finding](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md).
- **Notes:** Interactive figures appear as flattened text.

### factory-changelog-cli-1-0-0

- **File:** [Local source snapshot](2026-11-01/factory-changelog-cli-1-0-0.txt).
- **Title:** CLI v1.0.0 and Desktop v1.0.0 release record.
- **Role:** Primary source, first-party release note.
- **Origin:** https://docs.factory.com/docs/changelog/releases/1.0.0.json.
- **Author or publisher:** Factory.
- **Published or updated:** 2026-10-29.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `66bd7a9c887648cdc41b2dc438995848eec2519bfc6bb92e495dc32cc8fc701a`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md).
- **Notes:** Text snapshot of a JSON record, not the original response bytes.

### factory-droid-typescript-sdk-docs

- **File:** [Local source snapshot](2026-11-01/factory-droid-typescript-sdk-docs.txt).
- **Title:** Droid TypeScript SDK.
- **Role:** Primary source, first-party SDK documentation.
- **Origin:** https://docs.factory.com/sdk/typescript.md.
- **Author or publisher:** Factory.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `783deebe2d4f8c579352c23275234fadfc5aeba78ab674effee507f16816f757`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md).
- **Notes:** Rolling documentation; not mapped to an SDK version.

### factory-x-droid-1-0-thread

- **File:** [Local source snapshot](2026-11-01/factory-x-droid-1-0-thread.txt).
- **Title:** Introducing Droid 1.0 (X thread).
- **Role:** Primary source, vendor announcement.
- **Origin:** https://x.com/FactoryAI/status/2115934579446182213.
- **Author or publisher:** Factory (@factory).
- **Published or updated:** 2026-10-29.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `690e7a2fe2d67ce2f4b73f421b07f573ff998655567a6252bcd740903b1149ec`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md); [Script mode finding](../findings/droid-1-0-script-mode-gains-concentrate-in-many-call-tasks.md).
- **Notes:** Includes one top reply as rendered by the fetcher; engagement counts reflect capture time.

### terminal-bench-4-leaderboard

- **File:** [Local source snapshot](2026-11-01/terminal-bench-4-leaderboard.txt).
- **Title:** Terminal-Bench 4.0 leaderboard.
- **Role:** Primary data, third-party benchmark leaderboard.
- **Origin:** https://www.tbench.ai/.
- **Author or publisher:** Terminal-Bench.
- **Published or updated:** Unknown; rows dated to 2026-09-29.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `fc98518cb3337cfae084d0923f06a64eff92946152d4498c73b102acab8e1dfe`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md); [benchmark finding](../findings/droid-1-0-benchmark-lead-is-vendor-reported.md).
- **Notes:** Snapshot shows 23 rows and may be partial. No Droid entry in the captured rows.

### aicoder-droid-1-0-news

- **File:** [Local source snapshot](2026-11-01/aicoder-droid-1-0-news.txt).
- **Title:** Factory launches Droid 1.0: programmatic tool calling by default.
- **Role:** Secondary analysis, news report.
- **Origin:** https://aicoder.com/news/news-20261029-factory-droid-1-0-programmatic-tool-calling-terminal-bench-4-harness.
- **Author or publisher:** AICoder.
- **Published or updated:** 2026-10-29.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `5b462ced42cdc6b1944d4e59b7bfae3259900d11caa8caafac4e18caa029814e`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md); [benchmark finding](../findings/droid-1-0-benchmark-lead-is-vendor-reported.md).
- **Notes:** Page also contains unrelated news items, including the OpenCode 2.0 note cited in the topic.

### alphasignal-droid-1-0-analysis

- **File:** [Local source snapshot](2026-11-01/alphasignal-droid-1-0-analysis.txt).
- **Title:** Factory's Droid 1.0 Beats OpenAI and Anthropic Agents While Cutting Costs 51x.
- **Role:** Secondary analysis, news analysis.
- **Origin:** https://alphasignal.ai/news/factory-s-droid-1-0-beats-openai-and-anthropic-agents-while-cutting-costs-51x.
- **Author or publisher:** AlphaSignal Newsroom.
- **Published or updated:** 2026-10-29.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `23a5f1497120ad94db57e9002885a0fb289b4d02da67582266fe846b6b98c95e`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md); [Script mode finding](../findings/droid-1-0-script-mode-gains-concentrate-in-many-call-tasks.md); [benchmark finding](../findings/droid-1-0-benchmark-lead-is-vendor-reported.md).
- **Notes:** Restates vendor figures; adds task-fit and safety commentary.

### marktechpost-droid-1-0-analysis

- **File:** [Local source snapshot](2026-11-01/marktechpost-droid-1-0-analysis.txt).
- **Title:** Meet Factory Droid 1.0: A Model-Independent Coding Agent Harness.
- **Role:** Secondary analysis, news analysis.
- **Origin:** https://www.marktechpost.com/2026/10/31/factory-droid-1-0-frontier-harness/.
- **Author or publisher:** MarkTechPost.
- **Published or updated:** 2026-10-31.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `590debcc658b8c02a0d4a902031efa51751a2a05be6a4dc555a1f0c4cd35b2be`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [Droid 1.0 topic](../topics/factory-droid-1-0-harness.md); [benchmark finding](../findings/droid-1-0-benchmark-lead-is-vendor-reported.md).
- **Notes:** Snapshot includes cookie banner text and advertising.

## Programmatic tool calling precedents research, 2026-11-01

These twenty sources, plus the reused [Droid 1.0 launch post](#factory-droid-1-0-frontier-harness), support the [PTC topic](../topics/programmatic-tool-calling-precedents.md) and the [code actions finding](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md). Files are FetchUrl Markdown snapshots saved as `.txt` with a provenance header and lines over 3,000 characters removed, except the Codex changelog excerpt. arXiv sources are abstract or HTML pages, not PDFs. No software was installed or tested.

### arxiv-2211-10435-pal

- **File:** [Local source snapshot](2026-11-01/arxiv-2211-10435-pal.txt).
- **Title:** PAL: Program-aided Language Models.
- **Role:** Primary source, research paper (abstract page).
- **Origin:** https://arxiv.org/abs/2211.10435.
- **Author or publisher:** Gao et al.
- **Published or updated:** 2022-11 (v1); ICML 2023.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `5444a1021ece385a78e37c04c52c3d3b981acb25513f71a9721bede9ad6adbcd`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** Abstract page only; full paper not read.

### arxiv-2312-04511-llmcompiler

- **File:** [Local source snapshot](2026-11-01/arxiv-2312-04511-llmcompiler.txt).
- **Title:** An LLM Compiler for Parallel Function Calling.
- **Role:** Primary source, research paper (abstract page).
- **Origin:** https://arxiv.org/abs/2312.04511.
- **Author or publisher:** Kim et al.
- **Published or updated:** 2023-12 (v1); ICML 2024.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `1c9a5f1f959cebea635b345385bc94e78d0549293cf5dbd9256d325730607bf1`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md); [code actions finding](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md).
- **Notes:** Abstract page only; full paper not read.

### arxiv-2402-01030-codeact

- **File:** [Local source snapshot](2026-11-01/arxiv-2402-01030-codeact.txt).
- **Title:** Executable Code Actions Elicit Better LLM Agents.
- **Role:** Primary source, research paper (abstract page).
- **Origin:** https://arxiv.org/abs/2402.01030.
- **Author or publisher:** Wang et al.
- **Published or updated:** 2024-02-01 (v1); ICML 2024.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `8118772bf2255e793e89d51334eda1287aa5d0c5c11ef8e57d8378e280bd5765`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md); [code actions finding](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md).
- **Notes:** Abstract page only; full paper not read.

### huggingface-smolagents-intro

- **File:** [Local source snapshot](2026-11-01/huggingface-smolagents-intro.txt).
- **Title:** Introducing smolagents, a simple library to build agents.
- **Role:** Primary source, project announcement.
- **Origin:** https://huggingface.co/blog/smolagents.
- **Author or publisher:** Hugging Face.
- **Published or updated:** 2024-12-31.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `ed1bdaa7af10953678a70adf8d76103c266b0e9be905945bbc8c46a7724f6484`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** Benchmark chart is an image and was not extracted.

### cloudflare-code-mode-2025

- **File:** [Local source snapshot](2026-11-01/cloudflare-code-mode-2025.txt).
- **Title:** Code Mode: the better way to use MCP.
- **Role:** Primary source, vendor engineering post.
- **Origin:** https://blog.cloudflare.com/code-mode.
- **Author or publisher:** Cloudflare.
- **Published or updated:** 2025-09-26 (from search index; not stated in snapshot).
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `d9fe316f28fa0b0ac2bc8b25403f0c39ea51637e9dd058106a6a82225ef5e56a`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** Snapshot includes unrelated blog sidebar items.

### cloudflare-code-mode-mcp-server-2026

- **File:** [Local source snapshot](2026-11-01/cloudflare-code-mode-mcp-server-2026.txt).
- **Title:** Code Mode: give agents an entire API in 1,000 tokens.
- **Role:** Primary source, vendor engineering post.
- **Origin:** https://blog.cloudflare.com/code-mode-mcp/.
- **Author or publisher:** Cloudflare.
- **Published or updated:** Unknown. Search index showed 2026-07-15; an InfoQ report dated 2026-04-16 covers the launch, so the post may be earlier.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `5230c452082e3ace5e9d6bf717c06f482609167ac604bf18b152d145b6b53303`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** Token comparison is against a hypothetical server exposing every endpoint as a tool.

### anthropic-code-execution-with-mcp

- **File:** [Local source snapshot](2026-11-01/anthropic-code-execution-with-mcp.txt).
- **Title:** Code execution with MCP: Building more efficient agents.
- **Role:** Primary source, vendor engineering post.
- **Origin:** https://www.anthropic.com/engineering/code-execution-with-mcp (redirected to /research/).
- **Author or publisher:** Anthropic.
- **Published or updated:** 2025-11-04.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `7cac6d7707722f7e0322943dedf7b936419d2228c7f853b7ca7821137cd1da1f`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** None.

### anthropic-advanced-tool-use

- **File:** [Local source snapshot](2026-11-01/anthropic-advanced-tool-use.txt).
- **Title:** Introducing advanced tool use on the Claude Developer Platform.
- **Role:** Primary source, vendor engineering post.
- **Origin:** https://www.anthropic.com/engineering/advanced-tool-use (redirected to /research/).
- **Author or publisher:** Anthropic.
- **Published or updated:** 2025-11-24.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `4d1a471517fe0f71eff42c63d19e3f3d798bfc41654c73181b0e7b59a578d760`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md); [code actions finding](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md).
- **Notes:** Measurements are Anthropic internal tests.

### claude-programmatic-tool-calling-docs

- **File:** [Local source snapshot](2026-11-01/claude-programmatic-tool-calling-docs.txt).
- **Title:** Programmatic tool calling (Claude Platform docs).
- **Role:** Primary source, API documentation.
- **Origin:** https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling.
- **Author or publisher:** Anthropic.
- **Published or updated:** Unknown; references tool version code_execution_20260120.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `8a20579c184d4214938c91e73e19ba567d86aed6bb175084c141900ef5fbb500`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** Rolling documentation.

### openai-programmatic-tool-calling-guide

- **File:** [Local source snapshot](2026-11-01/openai-programmatic-tool-calling-guide.txt).
- **Title:** Programmatic Tool Calling (OpenAI API guide).
- **Role:** Primary source, API documentation.
- **Origin:** https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling.
- **Author or publisher:** OpenAI.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `18ba7d1fcb2b2e42ec2c62c181aecf62bae4dd504f7a47e2ef81bc6408d7bdea`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md); [code actions finding](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md).
- **Notes:** Rolling documentation; launch date not stated.

### mcp-client-best-practices-2026-07-28

- **File:** [Local source snapshot](2026-11-01/mcp-client-best-practices-2026-07-28.txt).
- **Title:** Client Best Practices (Model Context Protocol docs).
- **Role:** Primary source, protocol guidance.
- **Origin:** https://modelcontextprotocol.io/docs/2026-07-28/develop/clients/client-best-practices.
- **Author or publisher:** Model Context Protocol project.
- **Published or updated:** 2026-07-28 docs version.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `6ac366a50b1eab74c8afb863b5b96a3ba3f5b2e51897edcf49c62b7ce6430d6e`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** Only the progressive discovery and PTC sections were used.

### glean-agent-sandbox-ptc

- **File:** [Local source snapshot](2026-11-01/glean-agent-sandbox-ptc.txt).
- **Title:** Agent Sandbox & Programmatic Tool Calling.
- **Role:** Primary source, vendor documentation.
- **Origin:** https://docs.glean.com/security/agent-sandbox-ptc.
- **Author or publisher:** Glean.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `6835e45a3901f43d62c9286368cc495dafcb09cf77cdc585c99f3f3bc2901133`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** None.

### goose-code-mode-mcp-2025-12-15

- **File:** [Local source snapshot](2026-11-01/goose-code-mode-mcp-2025-12-15.txt).
- **Title:** Code Mode MCP in goose.
- **Role:** Primary source, project blog.
- **Origin:** https://goose-docs.ai/blog/2025/12/15/code-mode-mcp/.
- **Author or publisher:** Alex Hancock, goose project.
- **Published or updated:** 2025-12-15.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `73be58f9358fd0e5b82fd009dc1366d8997d78c4c05cae32521e9ba830aed26a`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** None.

### goose-code-mode-doesnt-replace-mcp

- **File:** [Local source snapshot](2026-11-01/goose-code-mode-doesnt-replace-mcp.txt).
- **Title:** Code Mode Doesn't Replace MCP (Here's What It Actually Does).
- **Role:** Primary for goose release facts; secondary practitioner assessment.
- **Origin:** https://goose-docs.ai/blog/2025/12/21/code-mode-doesnt-replace-mcp/.
- **Author or publisher:** goose project.
- **Published or updated:** 2025-12-21.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `9b4364a06ec34b4885a1744a2f3de698c2c7ed90d299b08917e5721cf80d04c3`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md); [code actions finding](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md).
- **Notes:** Single-task anecdote for context-use figures.

### codex-changelog-code-mode-excerpt

- **File:** [Local source snapshot](2026-11-01/codex-changelog-code-mode-excerpt.txt).
- **Title:** ChatGPT and Codex changelog, Code Mode lines.
- **Role:** Primary source, release notes excerpt.
- **Origin:** https://developers.openai.com/codex/changelog.
- **Author or publisher:** OpenAI.
- **Published or updated:** Entries 2026-06-25 to 2026-10-29.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `7c61955c13a5129eaad223f2e518b8d5669d5c847a40d31c68f2782c50823fd3`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** Filtered excerpt, not a full snapshot; see file header. The full page covered 193 dated entries from 2025-05-19.

### opencode-2-0-launch-note

- **File:** [Local source snapshot](2026-11-01/opencode-2-0-launch-note.txt).
- **Title:** OpenCode 2.0.
- **Role:** Primary source, release note.
- **Origin:** https://anoma.ly/notes/opencode-2-0/.
- **Author or publisher:** Anomaly.
- **Published or updated:** 2026-10-12.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `2c37dda3280851a1cdb09b0e973605adf833aeaf36326d60ada42890dfdbe7d7`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** Extraction splits most words onto separate lines with hyphenation breaks; content is readable but awkward.

### willison-code-execution-with-mcp

- **File:** [Local source snapshot](2026-11-01/willison-code-execution-with-mcp.txt).
- **Title:** Code execution with MCP: Building more efficient agents (commentary).
- **Role:** Secondary analysis, practitioner commentary.
- **Origin:** https://simonwillison.net/2025/Nov/4/code-execution-with-mcp/.
- **Author or publisher:** Simon Willison.
- **Published or updated:** 2025-11-04.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `cea06001e32564eac0a1c772767dc2d255592573da392020b02bd9f2bd68dd74`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** None.

### arxiv-2608-06370-bitter-lesson-tool-calling

- **File:** [Local source snapshot](2026-11-01/arxiv-2608-06370-bitter-lesson-tool-calling.txt).
- **Title:** The Bitter Lesson of Tool Calling.
- **Role:** Primary source, research preprint.
- **Origin:** https://arxiv.org/html/2608.06370v1.
- **Author or publisher:** Patel, Sen, Lumer, and Subbiah.
- **Published or updated:** 2026-08-06 (v1).
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `0b40cf4170cea34817a575758f0e454523345f9025898e60b076738f89e33429`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md); [code actions finding](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md).
- **Notes:** HTML version; tables partly flattened.

### vaughan-bitter-lesson-tool-calling

- **File:** [Local source snapshot](2026-11-01/vaughan-bitter-lesson-tool-calling.txt).
- **Title:** The Bitter Lesson of Tool Calling: Why Programmatic Tool Use Outperforms JSON, and What It Means for Codex CLI.
- **Role:** Secondary analysis, practitioner summary.
- **Origin:** https://codex.danielvaughan.com/2026/08/12/bitter-lesson-tool-calling-programmatic-vs-json-codex-cli-mcp-agent-tool-use/.
- **Author or publisher:** Daniel Vaughan.
- **Published or updated:** 2026-08-12.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `58fd24d93f906f6bd8cdc7b659a9ed81c0d05c2952dd8ce026bdd8ce4858312d`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md); [code actions finding](../findings/code-actions-help-most-for-chained-and-fan-out-calls.md).
- **Notes:** Unofficial Codex knowledge base.

### vaughan-codex-ptc-gpt56

- **File:** [Local source snapshot](2026-11-01/vaughan-codex-ptc-gpt56.txt).
- **Title:** Programmatic Tool Calling: How GPT-5.6's JavaScript Orchestration Layer Cuts Codex CLI Round-Trips and Token Costs.
- **Role:** Secondary analysis, practitioner guide.
- **Origin:** https://codex.danielvaughan.com/2026/07/12/programmatic-tool-calling-gpt56-codex-cli-javascript-orchestration-fewer-roundtrips-token-cost/.
- **Author or publisher:** Daniel Vaughan.
- **Published or updated:** 2026-07-12.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `41b82ef9c5fd5b32ef9caaa837ee66eae6ac2c1ccaa0e6beb0ae0d2dc9866943`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-01.
- **Wiki pages:** [PTC topic](../topics/programmatic-tool-calling-precedents.md).
- **Notes:** Claims that Codex CLI uses hosted PTC are not confirmed by captured OpenAI sources.

### cymulate-sandbox-escape-part-1

- **File:** [Local source snapshot](2026-11-01/cymulate-sandbox-escape-part-1.txt).
- **Title:** The Race to Ship AI Tools Left Security Behind. Part 1: Sandbox Escape.
- **Role:** Secondary analysis, security research blog.
- **Origin:** https://cymulate.com/blog/the-race-to-ship-ai-tools-left-security-behind-part-1-sandbox-escape/.
- **Author or publisher:** Ilan Kalendarov, Ben Zamir, and Elad Beber; Cymulate Research Lab.
- **Published or updated:** Last updated 2026-05-03.
- **Retrieved or supplied:** 2026-11-01.
- **SHA-256:** `2aca4f68f593fe8c8c466adb8abbf19232c72b826a0ef969f23df5fd7db4acb1`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [approval layers finding](../findings/approval-layers-are-not-isolation-boundaries.md); mentioned in the [PTC topic](../topics/programmatic-tool-calling-precedents.md) as excluded from that research.
- **Notes:** Collected while searching for PTC security analysis. It concerns configuration-based escapes from shell sandboxes in coding agents, not PTC runtimes, so it was excluded from the 2026-11-01 PTC research. On 2026-11-02 it was reused for the computer use and permissions research, where it is relevant; the earlier exclusion applies to the PTC topic only. Primary for its own disclosure timelines; fix status after 2026-05-03 not rechecked.

## Agent drawing and visual capabilities, 2026-11-02

These 13 sources support the [visual-capability comparison](../topics/agent-visual-capabilities.md). Twelve primary sources document product, SDK, or integration behavior; one secondary release report adds context but no independent runtime validation. Files are FetchUrl Markdown text snapshots, not original HTML; extraction whitespace was normalized where needed. Lines of 10,000 or more characters were omitted to exclude oversized embedded metadata or content; omitted lines occurred in the Claude Code and LangGraph snapshots. Navigation and unrelated material can remain. No source code or generation examples were executed. Rolling documentation was not mapped to installed versions. Only this collection is ingested by this update.

### factory-droid-image-generation

- **File:** [Local text snapshot](2026-11-02/factory-droid-image-generation.txt).
- **Title:** Image generation.
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://docs.factory.com/droid-cli/image-generation.md.
- **Author or publisher:** Factory.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `b7c960088be5a423c94b71c45746415b8cd3e750e2e482d444dea80edad4214b`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md); [canvas-control finding](../findings/visual-output-is-not-editable-canvas-control.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.
### cursor-2-4-image-generation

- **File:** [Local text snapshot](2026-11-02/cursor-2-4-image-generation.txt).
- **Title:** Subagents, Skills, and Image Generation, Cursor 2.4.
- **Role:** Primary source, vendor release announcement.
- **Origin:** https://cursor.com/changelog/2-4.
- **Author or publisher:** Cursor.
- **Published or updated:** 2026-01-22.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `8c58f11b163c64c6e522eb5bff993934ab3a7fb8d887be6fd6ee32d87ffc2aad`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

### codex-image-generation

- **File:** [Local text snapshot](2026-11-02/codex-image-generation.txt).
- **Title:** Image generation, Codex URL redirected to ChatGPT Learn.
- **Role:** Primary source, first-party multi-surface product documentation.
- **Origin:** https://developers.openai.com/codex/image-generation (redirected to https://learn.chatgpt.com/docs/image-generation?surface=app).
- **Author or publisher:** OpenAI.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `7585353009364382b92a1a17c9eb66e2f1b29b763bbb41fe02fe18a2c8e6701c`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

### claude-code-tools-visual-capabilities

- **File:** [Local text snapshot](2026-11-02/claude-code-tools-visual-capabilities.txt).
- **Title:** Tools reference.
- **Role:** Primary source, first-party tool inventory.
- **Origin:** https://code.claude.com/docs/en/tools-reference.
- **Author or publisher:** Anthropic.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `4ffd68d39a58d80b60075274f117f04ff74ce73c9f2b1ada9b896019cd996a7a`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

### vscode-1-144-image-generation

- **File:** [Local text snapshot](2026-11-02/vscode-1-144-image-generation.txt).
- **Title:** Visual Studio Code 1.144.
- **Role:** Primary source, first-party release notes.
- **Origin:** https://code.visualstudio.com/updates/v1_144.
- **Author or publisher:** Microsoft.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `0d9b8f6b44de8c890a9fcfa64b1b80c5fbc40cb7b36065e5d952f67fc0768bef`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md); [computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02. Reused on 2026-11-02 for its computer use, assisted permissions, and working set sections.

### gemini-cli-nanobanana

- **File:** [Local text snapshot](2026-11-02/gemini-cli-nanobanana.txt).
- **Title:** Nano Banana, Gemini CLI extension README.
- **Role:** Primary source, extension repository documentation.
- **Origin:** https://github.com/gemini-cli-extensions/nanobanana.
- **Author or publisher:** Gemini CLI extensions project.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `cfdb12b9bf4ca7345eef486d76db78efd0f526e97f7cde8950e8ed53dc316736`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

### excalidraw-mcp

- **File:** [Local text snapshot](2026-11-02/excalidraw-mcp.txt).
- **Title:** Excalidraw MCP App Server README.
- **Role:** Primary source, official integration repository documentation.
- **Origin:** https://github.com/excalidraw/excalidraw-mcp.
- **Author or publisher:** Excalidraw.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `a2913f6282bfce9ec25e94fc604def670cfa80a07a424241b50bdfd1fa9d8b69`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

### drawio-ai-assistants

- **File:** [Local text snapshot](2026-11-02/drawio-ai-assistants.txt).
- **Title:** draw.io for AI assistants.
- **Role:** Primary source, first-party integration documentation.
- **Origin:** https://www.drawio.com/mcp/.
- **Author or publisher:** draw.io / JGraph.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `897e20126881ac2d866b964dee30d501447b48bb41a85e145464dea18ef2db0b`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md); [canvas-control finding](../findings/visual-output-is-not-editable-canvas-control.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

### figma-mcp-write-to-canvas

- **File:** [Local text snapshot](2026-11-02/figma-mcp-write-to-canvas.txt).
- **Title:** Write to canvas.
- **Role:** Primary source, first-party API and integration documentation.
- **Origin:** https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/.
- **Author or publisher:** Figma.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `29d9ff11b33856eb4bb66e959f218180adc89c81009c6313328a7eb413eadb66`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md); [canvas-control finding](../findings/visual-output-is-not-editable-canvas-control.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

### tldraw-agent-starter-kit

- **File:** [Local text snapshot](2026-11-02/tldraw-agent-starter-kit.txt).
- **Title:** Agent starter kit.
- **Role:** Primary source, first-party starter-kit documentation.
- **Origin:** https://tldraw.dev/starter-kits/agent.
- **Author or publisher:** tldraw.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `0c1f9b3c184923f14025c4cb8e7582c0a8aeaa87806d96c0974f48c81398b2e0`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md); [canvas-control finding](../findings/visual-output-is-not-editable-canvas-control.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

### openai-agents-sdk-visual-tools

- **File:** [Local text snapshot](2026-11-02/openai-agents-sdk-visual-tools.txt).
- **Title:** Tools, OpenAI Agents SDK.
- **Role:** Primary source, first-party SDK documentation.
- **Origin:** https://openai.github.io/openai-agents-python/tools/.
- **Author or publisher:** OpenAI.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `b34c26358f5a0137b25ef35d46d19d73f48cebe7ca2d36e155442137b056b5f8`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

### langgraph-graph-visualization

- **File:** [Local text snapshot](2026-11-02/langgraph-graph-visualization.txt).
- **Title:** Use the graph API.
- **Role:** Primary source, first-party framework documentation.
- **Origin:** https://docs.langchain.com/oss/python/langgraph/use-graph-api.
- **Author or publisher:** LangChain.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `78a917274c7a93c9f6a83792636447538daa79ffeea6d655df4d1f6538912059`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md); [canvas-control finding](../findings/visual-output-is-not-editable-canvas-control.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

### visual-studio-magazine-1-144

- **File:** [Local text snapshot](2026-11-02/visual-studio-magazine-1-144.txt).
- **Title:** VS Code 1.144 Unleashes Copilot Fusion, AI Image Generation and Computer Use.
- **Role:** Secondary analysis, release report; not independent capability testing.
- **Origin:** https://visualstudiomagazine.com/articles/2026/10/28/vs-code-1-144-unleashes-copilot-fusion-ai-image-generation-and-computer-use.aspx.
- **Author or publisher:** David Ramel / Visual Studio Magazine.
- **Published or updated:** 2026-10-28.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `273d9ef2b76d1bb09aea8342db43a25a6c29ac7cd3d7f428f245346b8e523bfe`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Visual-capability comparison](../topics/agent-visual-capabilities.md).
- **Notes:** Text snapshot; see collection limitations above. Wiki build, local-link checks, source hashes, and rendered attachment checks passed on 2026-11-02.

## Computer use, visibility, and permissions research, 2026-11-02

These 25 new sources, plus the reused [VS Code 1.144 release notes](#vscode-1-144-image-generation) and [Cymulate sandbox escape report](#cymulate-sandbox-escape-part-1), support the [computer use topic](../topics/agent-computer-use-visibility-and-security.md). Files are FetchUrl Markdown text snapshots, not original HTML, with a provenance header; lines of 10,000 or more characters were omitted and counted in each header. Navigation text can remain. No software, sandbox, or attack was run. Rolling documentation was not mapped to installed versions; model names are as stated by the sources.

### anthropic-computer-use-tool

- **File:** [Local text snapshot](2026-11-02/anthropic-computer-use-tool.txt).
- **Title:** Computer use tool.
- **Role:** Primary source, first-party API documentation.
- **Origin:** https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool.
- **Author or publisher:** Anthropic.
- **Published or updated:** Unknown; documents `computer_toolset_20260801`.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `2d204ee6cab985a575f9e38fa7dd7200e6c487cdb6a77aa98a7eb9072722e0c5`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [prompt-injection finding](../findings/vendor-and-independent-prompt-injection-rates-diverge.md).
- **Notes:** Rolling documentation.

### openai-computer-use-guide

- **File:** [Local text snapshot](2026-11-02/openai-computer-use-guide.txt).
- **Title:** Computer use (OpenAI API guide).
- **Role:** Primary source, first-party API documentation.
- **Origin:** https://developers.openai.com/api/docs/guides/tools-computer-use.
- **Author or publisher:** OpenAI.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `74dbcb1af9ddd4bcb482f0790340028b032fd2713680d214e0eea312bac344a8`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** Rolling documentation; includes navigation text.

### gemini-computer-use-api

- **File:** [Local text snapshot](2026-11-02/gemini-computer-use-api.txt).
- **Title:** Computer use (Gemini API).
- **Role:** Primary source, first-party API documentation.
- **Origin:** https://ai.google.dev/gemini-api/docs/computer-use (redirected to https://aistudio.google.com/docs/computer-use).
- **Author or publisher:** Google.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `1729f0a17812735e36fb34ba47707754fa0fcd6e713cd8360923875cec3ff5b6`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [prompt-injection finding](../findings/vendor-and-independent-prompt-injection-rates-diverge.md).
- **Notes:** Captured from the preview AI Studio docs experience.

### codex-computer-use

- **File:** [Local text snapshot](2026-11-02/codex-computer-use.txt).
- **Title:** Computer Use (ChatGPT Learn).
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://developers.openai.com/codex/app/computer-use (redirected to https://learn.chatgpt.com/docs/computer-use).
- **Author or publisher:** OpenAI.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `3edebf123cd614f70690eb779174c163408cfa94bf1ec3383071a77eb5d55744`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** Multi-surface page covering ChatGPT Work and Codex.

### codex-agent-approvals-security

- **File:** [Local text snapshot](2026-11-02/codex-agent-approvals-security.txt).
- **Title:** Agent approvals and security.
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://developers.openai.com/codex/agent-approvals-security (redirected to https://learn.chatgpt.com/docs/agent-approvals-security).
- **Author or publisher:** OpenAI.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `4cf70d3c7b6c4f79de3b127471069d41b22fb5c084e4c7a576c906bd76ef2661`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [approval layers finding](../findings/approval-layers-are-not-isolation-boundaries.md).
- **Notes:** Rolling documentation.

### codex-sandboxing

- **File:** [Local text snapshot](2026-11-02/codex-sandboxing.txt).
- **Title:** Sandbox (ChatGPT Learn).
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://developers.openai.com/codex/concepts/sandboxing (redirected to https://learn.chatgpt.com/docs/sandboxing?surface=app).
- **Author or publisher:** OpenAI.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `053d053e0b09f6d69262479a51dd9aeea2493f7e5bee611b5f518e9b0aa4a82e`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** App-surface view of the page.

### claude-code-sandboxing-docs

- **File:** [Local text snapshot](2026-11-02/claude-code-sandboxing-docs.txt).
- **Title:** Configure the sandboxed Bash tool.
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://code.claude.com/docs/en/sandboxing.
- **Author or publisher:** Anthropic.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `0784e257fd6f7e534d63c92bc3dbf372177dad5ffcd462a2970fa5958830abc9`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [approval layers finding](../findings/approval-layers-are-not-isolation-boundaries.md).
- **Notes:** One oversized line omitted.

### claude-code-sandbox-environments

- **File:** [Local text snapshot](2026-11-02/claude-code-sandbox-environments.txt).
- **Title:** Choose a sandbox environment.
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://code.claude.com/docs/en/sandbox-environments.
- **Author or publisher:** Anthropic.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `66eaa580c8d5d45b372b4c6f1dc3322628a70debcc131cd27b5c00228e4f22f6`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [approval layers finding](../findings/approval-layers-are-not-isolation-boundaries.md).
- **Notes:** One oversized line omitted.

### anthropic-claude-code-sandboxing-engineering

- **File:** [Local text snapshot](2026-11-02/anthropic-claude-code-sandboxing-engineering.txt).
- **Title:** Making Claude Code safer with sandboxing.
- **Role:** Primary source, vendor engineering post.
- **Origin:** https://www.anthropic.com/engineering/claude-code-sandboxing (redirected to /research/).
- **Author or publisher:** Anthropic.
- **Published or updated:** 2025-10-20 (from search index).
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `2638696c096cfbec35cc037d9024a3e0ea80caddab9b836a570afae9a004c4d6`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** 84% prompt-reduction figure is internal; method not stated.

### claude-in-chrome-permissions

- **File:** [Local text snapshot](2026-11-02/claude-in-chrome-permissions.txt).
- **Title:** Claude in Chrome permissions guide.
- **Role:** Primary source, first-party help documentation.
- **Origin:** https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide.
- **Author or publisher:** Anthropic.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `dd8aedbafc7861354c1c7311a6e9e2c7497cbb6a7f3887b9f998989a9e3bf94e`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** None.

### claude-in-chrome-safety

- **File:** [Local text snapshot](2026-11-02/claude-in-chrome-safety.txt).
- **Title:** Use Claude in Chrome safely.
- **Role:** Primary source, first-party help documentation.
- **Origin:** https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely.
- **Author or publisher:** Anthropic.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `ab17328d6701461ac4d9d77426dcde959a5951286293755d4ced2a876eb497bd`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [prompt-injection finding](../findings/vendor-and-independent-prompt-injection-rates-diverge.md).
- **Notes:** Under-0.08% figure is internal; sample not stated.

### anthropic-browser-prompt-injection-defenses

- **File:** [Local text snapshot](2026-11-02/anthropic-browser-prompt-injection-defenses.txt).
- **Title:** Mitigating prompt injections in browser use.
- **Role:** Primary source, vendor research post.
- **Origin:** https://www.anthropic.com/research/prompt-injection-defenses.
- **Author or publisher:** Anthropic.
- **Published or updated:** 2025-11-24 (from search index).
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `bd0faddab0d5909826809a6459689cc97c3c73d74c5be4e1c51d1a35c26a0c3a`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [prompt-injection finding](../findings/vendor-and-independent-prompt-injection-rates-diverge.md).
- **Notes:** Chart values flattened to text.

### cursor-agent-sandboxing-blog

- **File:** [Local text snapshot](2026-11-02/cursor-agent-sandboxing-blog.txt).
- **Title:** Implementing a secure sandbox for local agents.
- **Role:** Primary source, vendor engineering post.
- **Origin:** https://cursor.com/blog/agent-sandboxing.
- **Author or publisher:** Cursor.
- **Published or updated:** 2026-02-18 (from search index).
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `41b44a66bcceaac4801443740e4a6a86b1e0023a4a69d4c3301bd253489d793d`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** 40% interruption figure; method not stated.

### cursor-run-modes

- **File:** [Local text snapshot](2026-11-02/cursor-run-modes.txt).
- **Title:** Run Modes.
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://cursor.com/docs/agent/security/run-modes.
- **Author or publisher:** Cursor.
- **Published or updated:** Unknown; cites v3.23 dated 2026-10-01.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `79a2be52d20f2553f0b29499c270f2f19b477c5a3f6a628edc7168044251ad3d`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [approval layers finding](../findings/approval-layers-are-not-isolation-boundaries.md).
- **Notes:** Rolling documentation.

### playwright-mcp-introduction

- **File:** [Local text snapshot](2026-11-02/playwright-mcp-introduction.txt).
- **Title:** Playwright MCP introduction.
- **Role:** Primary source, project documentation.
- **Origin:** https://playwright.dev/mcp/introduction.
- **Author or publisher:** Microsoft / Playwright.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `62c4c87dcc59bd427d9539a5ef12fdbc6f271bce04dcb958698a0bb9427f68ee`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** None.

### playwright-mcp-snapshots

- **File:** [Local text snapshot](2026-11-02/playwright-mcp-snapshots.txt).
- **Title:** Snapshots (Playwright MCP).
- **Role:** Primary source, project documentation.
- **Origin:** https://playwright.dev/mcp/snapshots.
- **Author or publisher:** Microsoft / Playwright.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `06f3d2f4064c889c6a5778cc07d37fd52dba9b41d2f5e07827fa6170d2bc3475`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** None.

### factory-autonomy-level

- **File:** [Local text snapshot](2026-11-02/factory-autonomy-level.txt).
- **Title:** Autonomy Level.
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://docs.factory.ai/autonomy-and-safety/auto-run (redirected to https://docs.factory.com/autonomy-and-safety/auto-run).
- **Author or publisher:** Factory.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `641dd2f6b989282304ed53c175be307be788e924208f2c1d2a65d9f2d885c4f3`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [approval layers finding](../findings/approval-layers-are-not-isolation-boundaries.md).
- **Notes:** Rolling documentation.

### factory-droid-sandbox

- **File:** [Local text snapshot](2026-11-02/factory-droid-sandbox.txt).
- **Title:** Sandbox (Droid).
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://docs.factory.com/docs/autonomy-and-safety/sandbox (redirected to https://docs.factory.com/autonomy-and-safety/sandbox).
- **Author or publisher:** Factory.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `4db62e698e7c47449fa0d016cdd673808fddcc389100ad11d1c8a47ca46a67ee`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [approval layers finding](../findings/approval-layers-are-not-isolation-boundaries.md).
- **Notes:** Rolling documentation.

### github-copilot-local-sandboxing-ga

- **File:** [Local text snapshot](2026-11-02/github-copilot-local-sandboxing-ga.txt).
- **Title:** Local sandboxing for GitHub Copilot now generally available.
- **Role:** Primary source, first-party release note.
- **Origin:** https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available/.
- **Author or publisher:** GitHub.
- **Published or updated:** 2026-10-07.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `f6d991bf55c9a6ac25b65b07a97a7736516f94c4e8184062fbfeb94603813e6a`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** Announcement; mode details not included.

### github-copilot-agent-firewall

- **File:** [Local text snapshot](2026-11-02/github-copilot-agent-firewall.txt).
- **Title:** Customizing or disabling the firewall for GitHub Copilot.
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-firewall (redirected to /copilot-on-github/customize-copilot/customize-the-firewall).
- **Author or publisher:** GitHub.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `7e28e373016b8a5b73c8e11d0fb370a8972675e12ace936c606d5b7efe57ac40`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [approval layers finding](../findings/approval-layers-are-not-isolation-boundaries.md).
- **Notes:** None.

### claude-code-monitoring

- **File:** [Local text snapshot](2026-11-02/claude-code-monitoring.txt).
- **Title:** Monitoring (Claude Code).
- **Role:** Primary source, first-party product documentation.
- **Origin:** https://code.claude.com/docs/en/monitoring-usage.
- **Author or publisher:** Anthropic.
- **Published or updated:** Unknown.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `de901d1375c96a5788f0278bc66a9889907460be50cccc55c15981807461f665`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md).
- **Notes:** One oversized line omitted; only audit-relevant event sections used.

### arxiv-2506-02456-vpi-bench

- **File:** [Local text snapshot](2026-11-02/arxiv-2506-02456-vpi-bench.txt).
- **Title:** VPI-Bench: Visual Prompt Injection Attacks for Computer-Use Agents.
- **Role:** Primary source, peer-reviewed benchmark (ICLR 2026).
- **Origin:** https://arxiv.org/html/2506.02456v2.
- **Author or publisher:** Cao et al..
- **Published or updated:** 2026-03-01 (v2).
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `9e681ff6e4627cc44680fbbbbea038d3ea3bb6a1ec8ad4af1cba818616a3be03`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [prompt-injection finding](../findings/vendor-and-independent-prompt-injection-rates-diverge.md).
- **Notes:** HTML version; tables partly flattened.

### arxiv-2606-13385-stakebench

- **File:** [Local text snapshot](2026-11-02/arxiv-2606-13385-stakebench.txt).
- **Title:** Who Pays the Price? Stakeholder-Centric Prompt Injection Benchmarking for Real-world Web Agents.
- **Role:** Primary source, research preprint.
- **Origin:** https://arxiv.org/html/2606.13385v1.
- **Author or publisher:** Wang et al. (NTU, ST Engineering, IBM Research, UIUC).
- **Published or updated:** 2026-06-11 (v1).
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `9c86c6a907211b26770b49275f144ca1fba99014ec5b02a3b4a6c143888828f3`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [prompt-injection finding](../findings/vendor-and-independent-prompt-injection-rates-diverge.md).
- **Notes:** Located through the CSO Online report.

### csoonline-prompt-injection-agents-study

- **File:** [Local text snapshot](2026-11-02/csoonline-prompt-injection-agents-study.txt).
- **Title:** Prompt injection breaks today’s AI agents, study warns.
- **Role:** Secondary analysis, trade press report on StakeBench.
- **Origin:** https://www.csoonline.com/article/4184455/prompt-injection-breaks-todays-ai-agents-study-warns.html.
- **Author or publisher:** Gyana Swain / CSO Online.
- **Published or updated:** 2026-06-12.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `f4791a087c423be1a9df3d1dd11feecae29539f2f3f0b8f0345acbd2d2d692aa`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [prompt-injection finding](../findings/vendor-and-independent-prompt-injection-rates-diverge.md).
- **Notes:** Includes site navigation text.

### koukyosyumei-cursor-sandbox-escape

- **File:** [Local text snapshot](2026-11-02/koukyosyumei-cursor-sandbox-escape.txt).
- **Title:** A Cursor Sandbox Escape Shows Why AI Agents Need Kernel Boundaries.
- **Role:** Secondary analysis, practitioner commentary on Cato AI Labs disclosures.
- **Origin:** https://medium.com/@Koukyosyumei/a-cursor-sandbox-escape-shows-why-ai-agents-need-kernel-boundaries-281efdb56396.
- **Author or publisher:** Hideaki Takahashi.
- **Published or updated:** 2026-07-07.
- **Retrieved or supplied:** 2026-11-02.
- **SHA-256:** `351adc1e9bbd17cce0f8eeaf1e1d87da6604e4a87d9e7c2973258b97aab48cc9`.
- **Status:** `ingested`.
- **Ingested:** 2026-11-02.
- **Wiki pages:** [Computer use topic](../topics/agent-computer-use-visibility-and-security.md); [approval layers finding](../findings/approval-layers-are-not-isolation-boundaries.md).
- **Notes:** Author promotes a Landlock-based approach; original Cato AI Labs advisory not retrieved.
