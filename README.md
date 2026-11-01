---
slug: /getting-started
sidebar_label: Getting started
---

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

## Browse the website

The Docusaurus site reads this repository's Markdown pages directly. It provides section navigation, a page outline, and light and dark themes.

Install Node.js 20 or newer, then run these commands from the repository root:

```sh
npm ci
./run-wiki-server.sh
```

Open the local address printed by Docusaurus. The script works from any working directory and forwards options, for example `./run-wiki-server.sh --port 3001`. You can also use `npm start` directly. Stop the server with Ctrl+C. To build and preview the static site:

```sh
npm run build
npm run serve
```

The build output is `website/build/`. GitHub Actions checks the production build and saves it as a downloadable artifact on pushes to `main` and pull requests.

Before deploying, set `SITE_URL` to the site's origin and `SITE_BASE_URL` to its path with leading and trailing slashes. For example, a project hosted at `https://example.org/research/` uses `SITE_URL=https://example.org` and `SITE_BASE_URL=/research/`. The default origin is a placeholder for local development.

Site configuration and styling live in `website/`. New pages under Topics, Methods, and Findings appear automatically in the sidebar. When adding a new top-level research section, add it to the docs `include` patterns and sidebar configuration as well as the wiki index. Raw source documents remain separate from the rendered wiki; the source ledger is included.

The docs plugin in `website/plugins/wiki-docs.js` limits sidebar metadata watchers to the included content folders. This avoids recursively watching dependencies when the repository root is used as the docs directory. If native file watching is unavailable in your environment, run `npm start -- --poll 1000` to use Docusaurus's polling fallback.

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

Current research includes [agent harness session restart and rehydration](topics/agent-harness-session-rehydration.md), with source extracts, a supported finding, and a proposed recovery evaluation method.
