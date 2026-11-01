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
