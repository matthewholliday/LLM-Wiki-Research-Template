---
name: kb-continue-research
description: Research the next open topic in this repository's RESEARCH-QUEUE.md, ingest its sources into the wiki, and move the completed entry into the Done section at the bottom.
---

# Continue Queued Research

Use the repository containing this skill. Read `AGENTS.md`, the root `RESEARCH-QUEUE.md`, and the linked research for candidate entries.

## Select one entry

- The next topic is the first entry in `## Open` whose status is `open`, in file order. Treat a missing status on an existing unfinished entry as open.
- Skip entries explicitly marked blocked or in progress; do not silently take over another run's work. If a previous run was interrupted and the user asks to resume it, inspect its artifacts and resume that entry.
- If the queue is absent, empty, or has no eligible entry, report that fact. Do not invent a topic. Mention blocked entries when they explain why work cannot proceed.
- Process one topic per invocation unless the user explicitly requests more.

Record `Status: in-progress` and the start date on the selected entry, preserving its ID, wording, and constraints. Follow [kb-research-topic](../kb-research-topic/SKILL.md) with that entry's question and context.

## Complete or preserve unfinished work

Before marking Done, confirm that:

- The scoped question has a wiki synthesis with supporting evidence and explicit limitations.
- Selected available sources are stored under `raw/` and ingestion records link to the resulting wiki pages.
- Required ingestion work succeeded, section indexes are updated, and local links resolve.

Re-read the queue before changing its status so edits made during research are preserved. Match the entry by ID, not by its previous line number.

On success, set `Status: done`, add the completion date, a concise outcome, and relative `Results` links. Move the entire entry from Open to the end of `## Done`, which remains the last section. Preserve the original question, added date, and context. Move it once; do not leave a duplicate behind.

If research or ingestion is incomplete, keep the entry in Open. Use `Status: blocked` for work requiring unavailable access or user input, or `Status: open` for resumable partial work. Record the concrete blocker or remaining steps and link any partial results. Do not mark it done merely because downloads succeeded or a summary was drafted.

Report the researched ID, result links, and final queue status. Do not commit or push unless requested.
