# `context/styles/` — Design System References

This folder holds **design-system reference documents** that you hand to the AI
agent as context when building out the portfolio webapp. Each file is a
self-contained "look and feel" spec: pick **one**, paste its **Prompt to hand
the agent** (and ideally the design tokens) into the system prompt / agent
context, and the agent will style the site to match.

These are **inputs to the build**, not source code. Nothing here is imported by
Gatsby — they exist to tell the agent *how the site should look* before it
writes `src/styles/global.css`, `tailwind.config.js`, and the components.

## Visual gallery

**[Open the style gallery in your browser →](./gallery.html)**

All ten designs render side by side with live previews. In Cursor/VS Code you can
also right-click `gallery.html` and choose **Reveal in Finder** / **Open with Live
Server**, then open it in any browser tab.

## How to use a style

1. Browse the styles below and choose the one that fits your brand.
2. Open that file and read it end-to-end — each follows the same structure:

   | Section | What it gives the agent |
   |---|---|
   | 1. The feeling in one paragraph | The vibe + explicit Do / Don't list |
   | 2. Design tokens | CSS custom properties (colors, borders, radii, fonts) |
   | 3. Fonts | The exact `<link>` and the type scale |
   | 4. Signature rules | The non-negotiable rules that make the style recognizable |
   | 5. Component recipes | Ready-to-adapt CSS for cards, buttons, chips, inputs |
   | 6. Composition cheat | How to lay out hero, sections, CTAs |
   | 7. Prompt to hand the agent | A one-paragraph instruction to paste into the agent |

3. Feed the agent the **Prompt to hand the agent** plus the **design tokens**,
   and ask it to implement `src/styles/global.css` + `tailwind.config.js`
   following `src/styles/README.md`. Map every token to a Tailwind semantic
   color (`bg`, `ink`, `a1`–`a4`) so the rest of the build can reference tokens
   instead of literals (see `.cursor/rules/styling.mdc`).

## Available styles

| # | Style | Feel |
|---|---|---|
| 01 | [Bold & Playful Paper](./01-bold-playful-paper.md) | Neo-brutalist warm paper, thick borders, hard offset shadows |
| 02 | [Glass Aurora](./02-glass-aurora.md) | Dark frosted glass panels over soft aurora glows; premium, futuristic |
| 03 | [Editorial Ink](./03-editorial-ink.md) | Literary magazine: oversized serif, hairline rules, one ink-red accent |
| 04 | [Terminal Green](./04-terminal-green.md) | CRT phosphor terminal; monospace, green-on-black, scanlines |
| 05 | [Swiss Grid](./05-swiss-grid.md) | International Typographic Style; rigid grid, one type family, signal red |
| 06 | [Soft Pastel](./06-soft-pastel.md) | Gentle rounded shapes, pale candy colors, diffuse shadows |
| 07 | [Corporate Trust](./07-corporate-trust.md) | Clean SaaS/fintech; cool neutrals, confident blue, tidy cards |
| 08 | [Synthwave](./08-synthwave.md) | 1980s retro-future; neon magenta/cyan, sunset gradient, grid horizon |
| 09 | [Organic Earth](./09-organic-earth.md) | Tactile and natural; oat paper, clay/olive tones, warm serif |
| 10 | [Luxe Noir](./10-luxe-noir.md) | Premium editorial-dark; near-black, restrained gold, elegant serif |
| 11 | [Claymorphism](./11-claymorphism.md) | Puffy 3D clay; pastel gradients, fat rounding, dual squishy shadows |
| 12 | [Neumorphic Soft UI](./12-neumorphic-soft-ui.md) | Monochrome extruded surfaces from one gray; twin light/dark shadows |
| 13 | [Memphis Pop](./13-memphis-pop.md) | 80s geometric confetti; primaries, black outlines, hard color shadows |
| 14 | [Risograph Print](./14-risograph-print.md) | Duotone riso; two fluoro inks, grain, multiply overlap, misregistration |
| 15 | [Bauhaus Primary](./15-bauhaus-primary.md) | Red/blue/yellow + black on cream; pure geometric shapes on a grid |
| 16 | [Blueprint Draft](./16-blueprint-draft.md) | Technical blueprint; cyan line work on deep blue, grid, dimension ticks |

## Adding a new style

Copy the structure of an existing file (`NN-slug.md`), keep all seven sections,
and make sure section 7 is a single paste-ready paragraph. Consistent structure
is what lets the agent consume any style interchangeably. Add the new entry to
[`gallery.html`](./gallery.html) as well.
