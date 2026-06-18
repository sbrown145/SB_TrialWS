# Style 01 — Bold & Playful Paper

> Neo-brutalist warm paper. Big geometric shapes, thick black borders, hard offset shadows. Cheerful, confident, hand-stamped.

---

## 1. The feeling in one paragraph

Warm off-white "paper" background, near-black ink, four punchy flat accents. Everything is built from **big geometric shapes** (circles, pills, chunky rounded rectangles) with **thick black borders** and **hard offset shadows** (no blur). No gradients, no soft drop-shadows, no glass. Generous whitespace, oversized display type, small monospace labels used like rubber stamps. One idea per screen, big.

**Do:** flat fills, 4px black borders, hard `10px 10px 0` shadows, rounded corners, mono ALL-CAPS kickers.
**Don't:** gradients, blurry shadows, hairline borders, tiny text, more than ~2 accents per component, emoji as decoration.

---

## 2. Design tokens

```css
:root {
  --bg:    #F7F4EC;   /* warm paper */
  --panel: #EFEAE0;   /* muted panel / placeholder fills */
  --card:  #FFFDF8;   /* near-white surface */
  --ink:   #201D18;   /* near-black — text, borders, shadows */

  --a1: #E25C33;   /* coral  */
  --a2: #3D5FD0;   /* cobalt */
  --a3: #2E9E5B;   /* green  */
  --a4: #EFC93F;   /* yellow */

  --border: 4px solid var(--ink);
  --shadow: 10px 10px 0 var(--ink);   /* hard, no blur */
  --radius-card: 24px;
  --radius-pill: 999px;

  --font-display: "Archivo Black", sans-serif;
  --font-body:    "Archivo", sans-serif;
  --font-mono:    "Space Mono", monospace;
}
```

**Alternate accent sets:** Magenta `#E0489E #7A4FD8 #1FA89B #F2C84B` · Citrus `#F08C00 #1E66C7 #5CA021 #F2D03B`

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700&family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Headings / numbers | **Archivo Black** | ALL-CAPS, `letter-spacing:-1px`, `line-height:1.02` |
| Body | **Archivo** 500/700 | `line-height:1.3` |
| Labels / kickers | **Space Mono** 400/700 | ALL-CAPS, `letter-spacing:1px`, small stamps |

Scale (desktop): display ~100px · h1 ~64 · h2 ~40 · body ~20–22 · label ~16. Scale ~40% down for mobile, never below 14px.

---

## 4. Signature rules

1. **Thick borders.** `4px solid var(--ink)` on every card, chip, button, input, shape.
2. **Hard shadows.** Featured element only gets `10px 10px 0 var(--ink)` — solid, no blur, down-right.
3. **Chunky corners.** Cards `24px`, inputs/code `10–12px`, pills `999px`.
4. **Flat fills only.** Accents are solid blocks. Never gradient.
5. **Mono kicker stamps.** Small ALL-CAPS Space Mono tags ("PHASE 02 · SETUP") above headings and in footers.

---

## 5. Component recipes

```css
.card { background:var(--card); border:var(--border); border-radius:var(--radius-card); box-shadow:var(--shadow); padding:32px; }
.chip { display:inline-flex; align-items:center; padding:8px 26px; border:var(--border); border-radius:var(--radius-pill); background:var(--a4); font-family:var(--font-mono); font-weight:700; text-transform:uppercase; letter-spacing:1px; }
.btn  { border:var(--border); border-radius:12px; background:var(--ink); color:var(--bg); font-family:var(--font-mono); font-weight:700; padding:16px 28px; cursor:pointer; transition:transform .08s ease, box-shadow .08s ease; }
.btn:hover  { box-shadow:var(--shadow); }
.btn:active { transform:translate(4px,4px); box-shadow:none; }
.input { border:var(--border); border-radius:12px; background:var(--card); padding:14px 18px; font-family:var(--font-mono); }
.kicker { font-family:var(--font-mono); font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--ink); }
.shape { border:var(--border); }
.shape--circle{ border-radius:50%; } .shape--pill{ border-radius:999px; } .shape--square{ border-radius:36px; }
```

**Layout:** `flex`/`grid` with `gap:` for all spacing — never margins-between. Section padding ~80–100px desktop.

---

## 6. Composition cheat

- **Hero:** big Archivo Black headline, mono one-liner kicker, a couple of floating `.shape` blocks bleeding off one edge.
- **Sections:** content as `.card`s in a grid; give each a different accent as a left strip or corner block.
- **Skills/tags:** `.chip`s in a flex-wrap row.
- **Contact/CTA:** one featured card *with* the hard shadow; everything else flat. Shadow earns attention.

---

## 7. Prompt to hand the agent

> "Style this site per Bold & Playful Paper: warm-paper background, near-black ink, four flat accents, 4px black borders, hard `10px 10px 0` offset shadows (no blur), rounded chunky corners, Archivo Black headings + Space Mono ALL-CAPS labels. Flat fills only — no gradients. Use flex/grid with gap for all spacing. Reserve the hard shadow for the one most important element per section."
