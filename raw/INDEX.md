# Raw Source Ledger

[Wiki index](../INDEX.md)

Store downloaded sources and user-supplied research documents in this folder. Preserve originals after ingestion. This ledger tracks provenance and processing; it is not itself a document to ingest.

## Source records

No sources have been recorded yet.

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
