# Style 14 — Risograph Print

> Duotone riso print. Two fluorescent inks layered with grain and slight misregistration on warm paper. Tactile, zine-like, handmade.

---

## 1. The feeling in one paragraph

Looks screen-printed on a Risograph: warm off-white paper, **two saturated inks** (fluoro pink + electric blue) that overlap with **multiply blending**, faint **paper grain**, and a deliberate **misregistration** offset on headlines (a ghosted colored copy 2px off). Shapes are simple, hard-edged, slightly imperfect. Limited palette is the whole point — no gradients, just ink density.

**Do:** two-ink palette, multiply-blended overlaps, grain overlay, 2px misregistration on display type, hard small radii, mono labels.
**Don't:** smooth gradients, drop shadows, more than two inks + paper, photographic realism, perfect alignment everywhere.

---

## 2. Design tokens

```css
:root {
  --paper: #F5F0E1;   /* newsprint */
  --ink:   #1F1B16;   /* near-black text */
  --muted: #4A4439;

  --pink:  #FF4D8D;   /* fluoro pink ink */
  --blue:  #2353FF;   /* electric blue ink */

  --radius: 4px;

  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-mono:    "Space Mono", monospace;
}
```

**Alternate ink pairs:** Green+Orange `#00A878 #FF6B35` · Purple+Yellow `#6C2BD9 #FFD23F`

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Headings | **Space Grotesk** 700 | `letter-spacing:-0.01em` |
| Body | **Space Grotesk** 400/500 | `line-height:1.6` |
| Labels / captions | **Space Mono** 400/700 | ALL-CAPS, `letter-spacing:1px` |

Scale: h1 ~50px · h2 ~32 · body ~16 · label ~12.

---

## 4. Signature rules

1. **Two inks + paper.** The entire UI is pink, blue, and `--paper`. Overlaps use `mix-blend-mode:multiply`.
2. **Misregistration.** Headlines get a 2px offset colored `text-shadow` to fake off-register printing.
3. **Grain.** A subtle noise overlay sits above the paper (low opacity).
4. **Hard, near-square corners.** `4px` max; ink blocks are flat.
5. **Mono captions.** Space Mono ALL-CAPS labels like print credits.

---

## 5. Component recipes

```css
.card { background:var(--paper); border-radius:var(--radius); padding:26px; position:relative; }
.ink-block { background:var(--pink); color:var(--paper); mix-blend-mode:multiply; }
.chip { display:inline-flex; padding:6px 14px; border-radius:var(--radius); background:var(--pink); color:var(--paper); font-family:var(--font-mono); text-transform:uppercase; letter-spacing:1px; }
.btn  { border:0; border-radius:var(--radius); background:var(--blue); color:var(--paper); font-family:var(--font-display); font-weight:700; padding:13px 24px; cursor:pointer; }
.title { text-shadow:2px 2px 0 rgba(255,77,141,.55); }   /* off-register ghost */
.grain { position:absolute; inset:0; pointer-events:none; opacity:.12;
         background-image:url("data:image/svg+xml,..."); }  /* fractal-noise tile */
```

**Layout:** posters-on-a-wall energy — big type, ink blocks, simple columns.

---

## 6. Composition cheat

- **Hero:** oversized Space Grotesk headline with pink misregistration ghost; a blue ink circle bleeding off-corner.
- **Sections:** paper cards; key callouts as multiply ink blocks where pink and blue overlap into a third tone.
- **Skills/tags:** mono `.chip`s in alternating inks.
- **Contact/CTA:** flat blue button; mono caption underneath like a print credit.

---

## 7. Prompt to hand the agent

> "Style this site per Risograph Print: warm paper (`#F5F0E1`) plus exactly two fluorescent inks (pink `#FF4D8D`, blue `#2353FF`) that overlap using `mix-blend-mode:multiply`. Add a faint grain overlay, near-square 4px corners, and a 2px colored `text-shadow` on headlines to fake print misregistration. Space Grotesk for headings/body, Space Mono ALL-CAPS for labels/captions. No gradients, no drop shadows, no third ink — density and overlap carry the design."
