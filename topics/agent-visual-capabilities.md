# Drawing and Visual Capabilities in Coding Agents

[Topics index](INDEX.md) | [Wiki index](../INDEX.md)

- **Created / last updated:** 2026-11-02
- **Evidence checked:** 2026-11-02
- **Evidence type:** First-party documentation and repository README review, with one secondary release report; no runtime comparison
- **Scope:** Factory Droid, Cursor, Codex, Claude Code, GitHub Copilot in VS Code, Gemini CLI, OpenAI Agents SDK, LangGraph, and selected canvas integrations
- **Related:** [Visual output is not editable canvas control](../findings/visual-output-is-not-editable-canvas-control.md), [interface accessibility](agentic-coding-ui-accessibility.md), [programmatic tool calling](programmatic-tool-calling-precedents.md), [source ledger](../raw/INDEX.md)

## Research question

Which tools provide "draw", "sketch", and "visual" capabilities to AI coding agents and orchestrators, and which products have those capabilities built in versus through extensions?

## Short answer

There is no single standard drawing tool. The reviewed products expose different combinations of **code-generated diagrams**, **editable canvases**, **image generation**, and **host-side rendering**. These should not be collapsed into a yes/no "visual support" label.

As documented on 2026-11-02, Droid, Cursor, Codex, and Copilot in VS Code have built-in image-generation workflows, with Copilot's feature marked preview. Gemini CLI has an installable Nano Banana extension. The reviewed Claude Code tool inventory lists no dedicated image-generation tool, but its file, shell, and MCP tools provide routes to external generators and diagramming tools. These are documented capabilities, not proof that each feature is enabled in every installation. [S1-S6]

Editable sketches and designs generally come from specialized integrations such as Excalidraw, draw.io, Figma, or a custom tldraw application. Supporting MCP tool calls does not by itself establish support for displaying an interactive MCP App inside chat. [S7-S10]

## Capability taxonomy

This taxonomy is an analytical distinction based on the reviewed implementations, not a vendor standard.

| Capability | Tool or implementation route | Artifact and boundary |
| --- | --- | --- |
| Text-defined technical diagrams | Mermaid; alternatives include Graphviz, PlantUML, and D2 | Diagram source can live in Git. Writing source and rendering it are separate operations; renderer availability must be checked. LangGraph documents Mermaid and Graphviz rendering. [S12] |
| Editable sketches and whiteboards | Excalidraw, draw.io, tldraw | Shapes, arrows, labels, and layout remain structured objects rather than only pixels. Integration APIs and editing depth differ. [S7, S8, S10] |
| Editable UI design | Figma MCP | Native frames, components, variables, and auto layout. Requires supported clients and file access. [S9] |
| Generated illustrations and assets | Built-in image-generation tools or image-model APIs | Images suitable for assets, mockups, and explainers; an image is not inherently an editable diagram. [S1-S3, S5, S6] |
| Custom charts and interactive visuals | Code-authored SVG/HTML or plotting/rendering tools | Depends on the execution environment and host renderer. MCP Apps can embed interactive HTML interfaces in compatible chat clients. [S7] |
| Orchestration visualization | LangGraph graph rendering | A picture of the configured workflow, not automatically a drawing tool that a running agent can invoke for arbitrary content. [S12] |

Graphviz, PlantUML, and D2 are implementation alternatives, not claims of bundled tools in every agent above. Their agent-specific packaging was not audited.

## Coding-agent comparison

**Built in** means the product documents its own image-generation workflow. **Add-on** means an integration must be installed or configured. **Not listed** is a limited documentation observation, not proof that the product cannot produce visuals.

| Product / surface | Image generation | Editable canvas route | Important boundary |
| --- | --- | --- | --- |
| Factory Droid | Built-in `GenerateImage`; accepts reference images and saves results to disk. [S1] | External integration or structured files generated through coding tools; no universal native whiteboard established by the image-generation documentation. | Organization controls can disable image generation or restrict models. Session model and image model are separate. |
| Cursor | Built-in image generation announced in 2.4, using Google Nano Banana Pro at that release. Inline preview and saved asset files are documented. [S2] | draw.io MCP App is documented for Cursor 2.6+. [S8] | The model named in a January release note is not a guarantee of the current model in every surface or plan. |
| OpenAI Codex | Built-in image generation and an explicit `$imagegen` skill workflow are documented, including interactive-session instructions. [S3] | draw.io plugin for Codex CLI creates `.drawio` files; MCP Tool Server can open diagrams in the browser. [S8] | The original Codex URL now redirects to a multi-surface ChatGPT Learn page. Preserve that redirect context rather than inferring uniform behavior across all Codex deployments. |
| Claude Code | No dedicated image-generation tool listed in the reviewed built-in inventory. `Write`, `Edit`, `Bash`, and MCP tools can support code-generated visuals or external services. [S4] | Official draw.io plugin and MCP Tool Server are documented for Claude Code. [S8] | Claude Code and the Claude chat app are different hosts. Do not transfer one host's inline visual features to the other without evidence. |
| GitHub Copilot in VS Code | Built-in image generation and editing, marked preview in VS Code 1.144; default model GPT Image 2.5 Flare. [S5] | draw.io documents inline MCP Apps support for VS Code with Copilot 1.109+. [S8] | Model access is required; image generation uses additional AI credits and can be disabled. This row does not establish identical behavior in Copilot CLI or GitHub web. |
| Gemini CLI | Nano Banana extension provides image generation and editing. [S6] | Additional MCP tools or generated files; this review does not establish a bundled editable canvas. | The extension requires installation and an API key. Extension availability is not evidence of a default core tool. This is not an assessment of Antigravity CLI. |

Visual Studio Magazine independently reports the VS Code 1.144 image-generation preview and its extra-credit requirement, but is a release report rather than a comparative usability test. [S13]

## Canvas and design integrations

### Excalidraw

The official Excalidraw MCP App streams hand-drawn-style diagrams, provides viewport control, and supports interactive fullscreen editing. Its README lists MCP Apps-compatible clients including Claude, ChatGPT, VS Code, and Goose. This establishes that project's supported host category, not universal inline compatibility with every MCP client. [S7]

Excalidraw is appropriate when the desired deliverable is a sketch-like diagram with editable objects. Different community servers may expose different editing APIs; their names alone do not establish equivalent behavior.

### draw.io

The official integration offers several routes: an MCP App for inline diagrams, a tool server that opens the browser editor, and plugins that create `.drawio` files in projects. Claude Code and Codex CLI plugin instructions include PNG, SVG, and PDF export, with draw.io Desktop required for those exports. [S8, "Get started"]

The host distinction is explicit: VS Code with Copilot 1.109+ and Cursor 2.6+ can show the diagram in chat. Hosts without MCP Apps support receive a browser link. A terminal client can therefore generate an editable diagram without displaying the editor inside the terminal. [S8, troubleshooting]

### Figma

The remote Figma MCP server's beta write-to-canvas capability uses `use_figma` to run code through the Figma Plugin API. It creates and edits real design structure, including frames, components, variants, variables, and auto layout. This is more than reading screenshots or extracting design context. [S9, "How it works"]

The documentation requires a supported client, remote-server connection, and edit access under eligible plans. `use_figma` does not add images on its own: the page distinguishes `upload_assets` and `generate_image`. Code-to-canvas capture of a running UI is also distinct from constructing designs with existing components and variables. The feature is beta, with manual review and cleanup still needed. [S9]

### tldraw

The agent starter kit is a foundation for a custom canvas-agent application, not a feature automatically present in other coding agents. It combines screenshots and structured shape data with actions for creating, updating, deleting, aligning, resizing, and drawing freehand strokes. The model can inspect the canvas and iterate on structured edits. [S10]

This is a closer fit for "build an agent that can sketch on a shared whiteboard" than attaching only an image generator.

## Orchestrators and agent SDKs

| Framework | Documented visual capability | What it does not establish |
| --- | --- | --- |
| OpenAI Agents SDK, Python | First-class hosted `ImageGenerationTool` generates images from prompts. Applications explicitly attach tools. [S11, "Hosted tools"] | Not a supplied whiteboard UI or automatic editable-canvas control; the application still handles presentation and storage. |
| LangGraph / LangChain | `get_graph().draw_mermaid()`, `draw_mermaid_png()`, and Graphviz rendering visualize workflow graphs. [S12, graph visualization examples] | Not automatically an agent-callable tool for drawing arbitrary diagrams. An application must expose that capability separately. |
| Claude Agent SDK / Claude Code tool layer | File, shell, and MCP tools can be used to implement external drawing workflows. [S4] | This review of the shared Claude Code tool inventory does not establish a dedicated SDK-native image generator or whiteboard. SDK-specific display behavior was not separately tested. |
| tldraw agent starter kit | A canvas-specific agent loop with visual context and structured actions. [S10] | Not a general durable orchestrator, or an automatic capability inherited by LangGraph, Codex, or other hosts. |

LangGraph documents Mermaid.Ink as the default API used by `draw_mermaid_png()`, and also shows a local browser-rendering option. Consider data residency before sending private workflow topology to an external renderer. No private repository content was sent to rendering services in this research. [S12]

## Choosing a tool

These are engineering recommendations derived from artifact types, not measured rankings:

- **Technical diagrams reviewed with code:** Start with Mermaid or another text-defined format. Use draw.io if manual object editing is important.
- **Editable, sketch-like explanations:** Use Excalidraw.
- **Custom whiteboard agents:** Evaluate the tldraw agent starter kit.
- **Design-system-aware UI work:** Evaluate Figma MCP write-to-canvas.
- **Illustrations, mockups, and assets:** Use an image-generation tool, but do not mistake its output for semantic diagram structure.
- **Inspecting orchestration topology:** Use the framework's graph visualization, while keeping it separate from agent drawing permissions.

Visual availability does not establish accessibility. Preserve textual explanations and, where practical, structured source. Accessibility of the resulting canvases was not tested; see the separate [interface accessibility review](agentic-coding-ui-accessibility.md).

## Limitations and open questions

- Sources describe vendor-supported behavior. No installations, paid generation calls, canvas editing, quality benchmarks, or accessibility tests were performed.
- Most documentation is rolling. Versions are recorded where the sources provide them, not as installed versions.
- Absence from an inventory is reported conservatively. Generic code execution can often produce visuals even when there is no dedicated drawing tool.
- The earlier conversation's Factory `visualize` skill was directly available in that session. This is session-specific observation, not evidence that every Droid client or account supports the same renderer; it is not used to assert a universal product feature here.
- CrewAI, AutoGen, Temporal, n8n, Windsurf, Cline, Aider, and other products were not assessed. Omission is not evidence of absent capability.
- The secondary release report adds context, not independent validation of generation quality or host compatibility.
- Open questions include per-client round-trip editing fidelity, private/offline deployment, export quality, permissions, cost, and accessibility.

## Sources

All sources below were retrieved and checked on **2026-11-02**. Local files are labeled text snapshots from Markdown extraction, not original HTML. See the [ledger](../raw/INDEX.md) for hashes and ingestion status.

- **S1:** Factory, [Image generation](https://docs.factory.com/droid-cli/image-generation.md). [Local snapshot](../raw/2026-11-02/factory-droid-image-generation.txt).
- **S2:** Cursor, [Subagents, Skills, and Image Generation, 2.4](https://cursor.com/changelog/2-4), 2026-01-22. [Local snapshot](../raw/2026-11-02/cursor-2-4-image-generation.txt).
- **S3:** OpenAI, [Codex image generation](https://developers.openai.com/codex/image-generation), redirected to ChatGPT Learn. [Local snapshot](../raw/2026-11-02/codex-image-generation.txt).
- **S4:** Anthropic, [Tools reference](https://code.claude.com/docs/en/tools-reference). [Local snapshot](../raw/2026-11-02/claude-code-tools-visual-capabilities.txt).
- **S5:** Microsoft, [Visual Studio Code 1.144](https://code.visualstudio.com/updates/v1_144), "Image generation in Copilot (Preview)". [Local snapshot](../raw/2026-11-02/vscode-1-144-image-generation.txt).
- **S6:** Gemini CLI extensions project, [Nano Banana README](https://github.com/gemini-cli-extensions/nanobanana). [Local snapshot](../raw/2026-11-02/gemini-cli-nanobanana.txt).
- **S7:** Excalidraw, [Excalidraw MCP App README](https://github.com/excalidraw/excalidraw-mcp). [Local snapshot](../raw/2026-11-02/excalidraw-mcp.txt).
- **S8:** draw.io / JGraph, [draw.io for AI assistants](https://www.drawio.com/mcp/). [Local snapshot](../raw/2026-11-02/drawio-ai-assistants.txt).
- **S9:** Figma, [Write to canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/). [Local snapshot](../raw/2026-11-02/figma-mcp-write-to-canvas.txt).
- **S10:** tldraw, [Agent starter kit](https://tldraw.dev/starter-kits/agent). [Local snapshot](../raw/2026-11-02/tldraw-agent-starter-kit.txt).
- **S11:** OpenAI, [Agents SDK tools](https://openai.github.io/openai-agents-python/tools/). [Local snapshot](../raw/2026-11-02/openai-agents-sdk-visual-tools.txt).
- **S12:** LangChain, [Use the graph API](https://docs.langchain.com/oss/python/langgraph/use-graph-api). [Local snapshot](../raw/2026-11-02/langgraph-graph-visualization.txt).
- **S13:** David Ramel, Visual Studio Magazine, [VS Code 1.144 Unleashes Copilot Fusion, AI Image Generation and Computer Use](https://visualstudiomagazine.com/articles/2026/10/28/vs-code-1-144-unleashes-copilot-fusion-ai-image-generation-and-computer-use.aspx), 2026-10-28. Secondary release report. [Local snapshot](../raw/2026-11-02/visual-studio-magazine-1-144.txt).

## Revision history

- 2026-11-02: Incorporated the conversation comparison, rechecked and preserved sources, and separated native image generation, add-on canvas control, host rendering, and workflow visualization.
