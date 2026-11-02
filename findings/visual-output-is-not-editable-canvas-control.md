# Visual Output Is Not Editable Canvas Control

[Findings index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created:** 2026-11-02
- **Last updated:** 2026-11-02
- **Evidence collected or checked:** 2026-11-02
- **Evidence type:** First-party product and framework documentation review
- **Status:** Supported within reviewed documentary scope
- **Confidence:** High for the capability distinction; deployment compatibility and usability were not tested
- **Related pages:** [Drawing and visual capabilities](../topics/agent-visual-capabilities.md), [interface accessibility](../topics/agentic-coding-ui-accessibility.md)

## Research question

Does an agent's ability to generate visuals establish that it can inspect and edit a structured drawing inside the user's interface?

## Finding

No. The reviewed implementations separate at least four capabilities: generating an image or diagram source, manipulating structured canvas objects, rendering an interactive interface in a compatible host, and visualizing orchestration topology. Evidence for one is not evidence for all four.

## Evidence

- Droid's `GenerateImage` creates or edits images and saves files. This documentation does not establish object-level whiteboard editing. [S1]
- Figma's `use_figma` creates and updates native frames, components, variables, and layout through the Plugin API. tldraw's starter kit combines screenshots and structured shape data with create, update, delete, and arrangement actions. These explicitly provide structured editing. [S2, S3]
- draw.io distinguishes compatible hosts that display an MCP App inside chat from terminal clients that receive a browser link. Calling an MCP server does not ensure the host embeds its canvas. [S4]
- LangGraph's `draw_mermaid()` and `draw_mermaid_png()` visualize the configured graph. The examples do not automatically expose arbitrary diagram creation as a tool to the running agent. [S5]

## Method and context

Reviewed first-party descriptions on 2026-11-02, preserving snapshots and source hashes. The [topic comparison](../topics/agent-visual-capabilities.md) records products, versions where stated, alternative integration routes, and the broader source selection. No canvas or image-generation tools were executed.

## Interpretation

Evaluate a requested workflow by its artifact and interaction needs, not by a single "supports visuals" checkbox. For editable diagrams, require evidence of structured object editing. For in-chat interaction, verify the host renderer separately. For agent autonomy, verify that the relevant tools are actually exposed to that agent.

## Limitations

This is a capability distinction, not a ranking of output quality. Generic coding tools can implement additional visual workflows, and integrations can change. Absence of a specialized tool in a reviewed inventory is not proof that a workflow is impossible. Accessibility and round-trip editing fidelity remain untested.

## Open questions and next steps

- Test generation, inspection, object-level revision, export, and reopening in each supported host.
- Compare browser-link workflows with embedded canvases for supervision and accessibility.
- Check renderer data residency before supplying private code or workflow topology.

## Sources

All checked on 2026-11-02; see the [source ledger](../raw/INDEX.md).

- **S1:** Factory, [Image generation](https://docs.factory.com/droid-cli/image-generation.md). [Local snapshot](../raw/2026-11-02/factory-droid-image-generation.txt).
- **S2:** Figma, [Write to canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/), "How it works". [Local snapshot](../raw/2026-11-02/figma-mcp-write-to-canvas.txt).
- **S3:** tldraw, [Agent starter kit](https://tldraw.dev/starter-kits/agent), visual context and action systems. [Local snapshot](../raw/2026-11-02/tldraw-agent-starter-kit.txt).
- **S4:** draw.io / JGraph, [draw.io for AI assistants](https://www.drawio.com/mcp/), host setup and troubleshooting. [Local snapshot](../raw/2026-11-02/drawio-ai-assistants.txt).
- **S5:** LangChain, [Use the graph API](https://docs.langchain.com/oss/python/langgraph/use-graph-api), graph visualization. [Local snapshot](../raw/2026-11-02/langgraph-graph-visualization.txt).

## Revision history

- 2026-11-02: Initial documentary synthesis.
