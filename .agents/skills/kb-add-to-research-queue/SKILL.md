---
name: kb-add-to-research-queue
description: Add a user's research question to RESEARCH-QUEUE.md in this repository's root. Use for queuing research or adding a topic to the research backlog, without starting the research.
---

# Add to the Research Queue

Use the repository containing this skill. Read `AGENTS.md` and the root `RESEARCH-QUEUE.md`. Create the queue if absent, with `## Open` followed by `## Done` at the bottom.

Preserve the user's question, uncertainty, constraints, and requested priority. Infer a concise title; ask only if no usable question or topic is supplied.

- Check both Open and Done for matching questions. Reuse an equivalent open entry, adding new user-supplied context rather than duplicating it.
- If an equivalent question is already Done, point to its result. When the user requests fresh research or materially different scope, add a new entry linked to the earlier result.
- Assign the next unused sequential ID, `RQ-0001`, across all entries, including Done. Never renumber existing entries.
- Append to Open by default. Honor an explicit position or priority by ordering the entry accordingly, without inventing a separate priority system.
- Use a level-three heading with the ID and short title, followed by `Question`, `Added` (current user-local date), and `Status: open`. Include `Context` or `Constraints` only when useful and supported by the request.
- Keep Done as the last section. Preserve other entries and their order.

Confirm the added or updated ID and link to `RESEARCH-QUEUE.md`. Do not start research, mark work done, commit, or push as part of merely queuing a question.
