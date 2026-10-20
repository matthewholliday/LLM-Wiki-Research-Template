# Research Wiki

A reusable repository for collecting sources, investigating questions, and synthesizing findings in any research field.

Start with the [wiki index](INDEX.md). Humans and AI assistants share the same Markdown pages, source references, and navigation.

## What belongs here

- Topic overviews, concepts, comparisons, and literature syntheses.
- Research methods, analytical approaches, and evaluation criteria.
- Evidence from documents, datasets, observations, interviews, or experiments.
- Findings with supporting evidence, limitations, and unanswered questions.

## Using this repository for a project

Describe the project's subject, goals, scope, and terminology in this README as they become established. Add research questions to [RESEARCH-QUEUE.md](RESEARCH-QUEUE.md) and source material to [raw/](raw/INDEX.md).

Use [topics/](topics/INDEX.md) for subject-level syntheses, [methods/](methods/INDEX.md) for approaches used to investigate questions, and [findings/](findings/INDEX.md) for individual evidence-backed conclusions. Adapt these sections when the project needs a different organization, keeping indexes and skill instructions consistent.

## Contributing

1. Read [AGENTS.md](AGENTS.md) and check the relevant section for existing research.
2. Create or update a focused page. Use the [research finding template](templates/research-finding.md) for a new finding.
3. Record evidence, sources, dates, and relevant research context. Separate observation from interpretation.
4. Link the page from its section index and connect it to related research.
5. Check that local links resolve and that conclusions match the available evidence.

## Repository skills

These skills live in `.agents/skills/` and are versioned with the wiki.

| Skill | Purpose |
| --- | --- |
| [kb-ingest-raw](.agents/skills/kb-ingest-raw/SKILL.md) | Ingest documents in `raw/` into the wiki |
| [kb-update-wiki](.agents/skills/kb-update-wiki/SKILL.md) | Update wiki content according to your instructions |
| [kb-research-topic](.agents/skills/kb-research-topic/SKILL.md) | Research a topic, save primary sources and secondary analysis, and ingest them |
| [kb-add-to-research-queue](.agents/skills/kb-add-to-research-queue/SKILL.md) | Add a question to the root research queue |
| [kb-continue-research](.agents/skills/kb-continue-research/SKILL.md) | Research the next open question and move it to Done when complete |

Invoke a skill by name, followed by your question, for example `$kb-research-topic How do urban trees affect local temperatures?`. Place existing documents in [raw/](raw/INDEX.md) for ingestion, or add future work to [RESEARCH-QUEUE.md](RESEARCH-QUEUE.md).

The wiki starts with a structure for research. No research entries have been recorded yet.
