---
name: kb-update-wiki
description: Update this repository's research wiki according to the user's instructions. Use for requested corrections, additions, synthesis, or reorganization of wiki content.
---

# Update the Wiki

Use the repository containing this skill. Read its `AGENTS.md`, `INDEX.md`, the affected section indexes, and relevant pages before editing.

- Translate the user's instructions into focused edits to existing pages, adding pages when the subject warrants them. Preserve unrelated research and useful source history.
- Follow the user's requested scope and structure. Ask for clarification only when the intended change cannot reasonably be inferred.
- Ground factual changes in the user's supplied evidence, existing sources, or verified new sources. Label hypotheses and interpretations; do not turn an unsupported assertion into an established finding.
- If the request requires new research and source collection, follow [kb-research-topic](../kb-research-topic/SKILL.md) for that portion, then finish the requested edits.
- If supplied documents need ingestion, follow [kb-ingest-raw](../kb-ingest-raw/SKILL.md). Do not process unrelated raw documents merely to make a textual correction.
- Update evidence dates when evidence is actually checked. Update revision history when conclusions change, explaining why.
- Maintain section indexes, related-page links, and inbound links affected by renames. Remove stale statements that a section is empty when adding its first research entry.
- Check that local links resolve and citations support the revised claims. Summarize the changed pages and remaining uncertainties.

Do not mark research queue items complete just because a wiki page was edited. Do not commit or push unless requested.
