# Style 16 — Blueprint Draft

> Technical blueprint. Cyan and white drafting lines on deep architect's blue. Grid paper, dimension marks, monospaced annotations — engineering precision as an aesthetic.

---

## 1. The feeling in one paragraph

The site looks like an architect's drawing. A **deep blueprint-blue** field overlaid with a faint **grid**, content drawn in **thin cyan and white strokes** rather than fills. Cards are outlined boxes with corner ticks like dimension callouts; labels are monospaced and uppercase, as if hand-lettered on a draft. Restrained, precise, and technical — color is light-on-dark line work, never heavy blocks.

**Do:** deep blue ground, faint grid overlay, thin cyan/white outlines, corner tick marks, mono uppercase annotations, near-square corners.
**Don't:** solid bright fills, drop shadows, gradients, warm colors, rounded blobby shapes, decorative imagery.

---

## 2. Design tokens

```css
:root {
  --bg:    #0B2447;   /* blueprint blue */
  --bg2:   #0E2C57;   /* panel tint */
  --line:  rgba(220,235,255,.18);  /* grid line */

  --ink:   #EAF2FF;   /* white-blue text */
  --muted: rgba(220,235,255,.66);
  --cyan:  #5FE0FF;   /* accent line */
  --cyan2: #2BB7E0;

  --border: 1px solid rgba(95,224,255,.5);
  --radius: 2px;
  --grid: 22px;

  --font-display: "IBM Plex Sans", system-ui, sans-serif;
  --font-mono:    "IBM Plex Mono", monospace;
}
```

**Alternate accents:** Amber draft `#FFC857` · Mint draft `#7CF0C0`

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Headings | **IBM Plex Sans** 600/700 | `letter-spacing:-0.01em` |
| Body | **IBM Plex Sans** 400 | `line-height:1.6`, color `--muted` |
| Labels / annotations | **IBM Plex Mono** 400/500 | ALL-CAPS, `letter-spacing:1.5px`, cyan |

Scale: h1 ~46px · h2 ~30 · body ~16 · label ~12.

---

## 4. Signature rules

1. **Grid paper ground.** A faint `--line` grid (`22px`) overlays the blue field.
2. **Lines, not fills.** Cards, chips, buttons are thin cyan/white outlines on the blue — no solid bright blocks.
3. **Dimension ticks.** Card corners carry small L-shaped tick marks like measurement callouts.
4. **Mono annotations.** Cyan IBM Plex Mono uppercase labels read like draft notes.
5. **Near-square corners.** `2px` radius max; everything reads technical.

---

## 5. Component recipes

```css
.card { background:var(--bg2); border:var(--border); border-radius:var(--radius); padding:24px; position:relative; }
.card::before, .card::after { content:''; position:absolute; width:12px; height:12px; border:1px solid var(--cyan); }
.card::before { top:8px; left:8px; border-right:0; border-bottom:0; }   /* corner tick */
.card::after  { bottom:8px; right:8px; border-left:0; border-top:0; }
.chip { display:inline-flex; padding:6px 14px; border:var(--border); border-radius:2px; background:transparent; color:var(--cyan); font-family:var(--font-mono); text-transform:uppercase; letter-spacing:1.5px; }
.btn  { border:1px solid var(--cyan); border-radius:2px; background:transparent; color:var(--ink); font-family:var(--font-mono); text-transform:uppercase; letter-spacing:1px; padding:12px 22px; cursor:pointer; transition:background .12s ease; }
.btn:hover { background:rgba(95,224,255,.12); }
.grid-bg { background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px); background-size:var(--grid) var(--grid); }
```

**Layout:** everything snaps to the grid; annotate sections with mono labels and thin divider rules.

---

## 6. Composition cheat

- **Hero:** IBM Plex Sans headline over the grid, a cyan mono kicker like a drawing number, outlined CTA.
- **Sections:** outlined `.card`s with corner ticks; thin cyan dividers between blocks.
- **Skills/tags:** outlined mono `.chip`s.
- **Contact/CTA:** ghost button that fills faint cyan on hover; mono annotation beneath.

---

## 7. Prompt to hand the agent

> "Style this site per Blueprint Draft: deep blueprint-blue (`#0B2447`) background with a faint `22px` grid overlay, content drawn as thin cyan/white OUTLINES rather than solid fills. Cards are outlined boxes with small L-shaped corner tick marks (dimension callouts). Cyan IBM Plex Mono uppercase annotations, IBM Plex Sans headings/body, near-square 2px corners. Ghost buttons fill faint cyan on hover. No solid bright blocks, no drop shadows, no gradients, no warm colors."
