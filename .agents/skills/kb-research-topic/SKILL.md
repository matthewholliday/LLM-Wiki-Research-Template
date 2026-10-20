---
name: kb-research-topic
description: Research a user-specified topic, download primary sources and secondary analysis into this repository's raw folder, and ingest the evidence into its wiki.
---

# Research a Topic

Use the repository containing this skill. Read `AGENTS.md`, `INDEX.md`, `raw/INDEX.md`, and existing pages relevant to the user's topic. Preserve the user's question and constraints; if the topic is missing, ask for it.

## Collect evidence

1. Frame the topic as an answerable research question. Use reasonable scope for broad requests and state the scope used, including time period, location, population, or disciplinary perspective when relevant. Look for existing coverage and unresolved questions before duplicating work.
2. Search the web for primary sources appropriate to the question, such as original studies, datasets, archival records, firsthand accounts, official records, or original works. Also seek credible secondary analysis, such as reviews, scholarly syntheses, or critical commentary, that interprets or challenges those sources. Classify sources by their relationship to the question: a document can be primary evidence for one question and secondary analysis for another.
3. Evaluate relevance, provenance, dates, methods, and author perspective or incentives. Search for contrary evidence. Ground factual claims in suitable evidence, trace claims to primary sources where possible, and distinguish secondary interpretations from what the underlying evidence establishes. Use disciplinary standards rather than assuming every question calls for an experiment or quantitative result.
4. Download selected primary sources and secondary analysis into `raw/`, using descriptive filenames such as `YYYY-MM-DD-topic-source.pdf` or `.html`. Keep native documents where practical. Never overwrite a different source or revision; reuse identical existing content.
5. Verify downloads contain the intended document rather than a login page, bot challenge, error response, or empty file. Read their contents. If only readable text is available, save a clearly labeled text snapshot with its source URL and capture date, rather than calling it the original download.
6. Register each source in `raw/INDEX.md` with its role, provenance, hash, and pending status. Record inaccessible sources and evidence gaps explicitly. Do not bypass access restrictions or claim a source was downloaded or read when it was not.

Collect both source types when available. If credible secondary analysis or a primary source cannot be found, document the search limitation rather than manufacturing evidence. Avoid arbitrary source counts: coverage should address the question, relevant counterevidence, and the user's requested depth.

## Integrate and finish

Follow [kb-ingest-raw](../kb-ingest-raw/SKILL.md) for the collected source files, including reused sources relevant to this topic. Limit that ingestion to the topic's files so unrelated inbox material is left for a separate ingestion run.

Create or update a synthesis that directly answers the research question, links the supporting findings, and states limitations and open questions. Ensure new pages appear in section indexes and all source links resolve.

Report the answer, wiki pages, downloaded primary and secondary sources, and any gaps. Research is complete when the scoped question has an evidence-backed synthesis, available selected sources are saved and ingested, and validation passes. Report partial completion when required evidence or ingestion remains blocked. An inconclusive answer can be complete if the evidence and uncertainty are adequately documented.

Do not change queue status unless invoked through the queue workflow or explicitly requested. Do not commit or push unless requested.
