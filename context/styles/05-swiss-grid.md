# Style 05 — Swiss Grid

> International Typographic Style. A rigid grid, one grotesque typeface, flush-left ragged-right text, and red as the only accent. Objective, precise, timeless.

---

## 1. The feeling in one paragraph

Pure white, true black, and a single signal red. One **neo-grotesque** typeface at a few exact sizes, set **flush-left / ragged-right** on a visible, mathematical grid. There is no decoration: no shadows, no rounded corners, no gradients, no borders except thin black rules where the grid demands them. Hierarchy is built from **size, weight, and position** alone. Alignment is sacred — every element snaps to the columns and the baseline. The result feels engineered, calm, and authoritative.

**Do:** strict grid, flush-left text, exact type sizes, generous baseline rhythm, one red accent, thin black rules.
**Don't:** center text, round corners, add shadows or gradients, mix typefaces, decorate. Misalignment is the only real error.

---

## 2. Design tokens

```css
:root {
  --bg:    #FFFFFF;
  --ink:   #111111;
  --gray:  #767676;   /* secondary text */
  --rule:  #111111;   /* rules are black, thin */
  --accent:#E2231A;   /* signal red */

  --gutter: 24px;
  --rule-w: 1px;
  --radius: 0;

  --font: "Inter", "Helvetica Neue", Arial, sans-serif;  /* one family, many weights */
}
```

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Display | **Inter** 800 | `letter-spacing:-0.02em`, `line-height:1.0` |
| Subhead | **Inter** 700 | flush-left |
| Body | **Inter** 400 | `line-height:1.5`, max ~60ch |
| Caption / label | **Inter** 500 | 12–13px, color `--gray`, can be uppercase tracked |

Scale: display ~96px · h1 ~56 · h2 ~28 · body ~17 · caption ~12. Pick these and do not improvise sizes.

---

## 4. Signature rules

1. **Visible grid.** Lay out on 12 columns with a consistent gutter; let elements span exact column counts. Alignment is the design.
2. **Flush-left, always.** Text is left-aligned, ragged-right. No centering, no justification.
3. **One typeface, few sizes.** All hierarchy from weight and size on the fixed scale.
4. **Red as signal.** A single red element per view — a rule, a number, a key word. Never two.
5. **Thin black rules.** Use 1px black lines to organize; never boxes or fills.

---

## 5. Component recipes

```css
body { background:var(--bg); color:var(--ink); font-family:var(--font); }
.grid { display:grid; grid-template-columns:repeat(12,1fr); gap:var(--gutter); }
.h1   { font-weight:800; font-size:clamp(40px,8vw,96px); line-height:1; letter-spacing:-.02em; }
.h2   { font-weight:700; font-size:28px; }
.body { font-weight:400; font-size:17px; line-height:1.5; max-width:60ch; color:var(--ink); }
.label{ font-weight:500; font-size:12px; letter-spacing:1px; text-transform:uppercase; color:var(--gray); }
.rule { border:0; border-top:var(--rule-w) solid var(--rule); }
.num  { color:var(--accent); font-weight:800; }       /* the one red thing */
.btn  { background:var(--ink); color:var(--bg); border:0; border-radius:0; padding:14px 22px; font-weight:700; font-size:15px; cursor:pointer; }
.btn:hover { background:var(--accent); }
.input{ background:var(--bg); border:0; border-bottom:1px solid var(--ink); border-radius:0; padding:10px 0; font-family:var(--font); font-size:16px; }
.input:focus { outline:none; border-bottom-color:var(--accent); }
```

**Layout:** everything on `.grid`. A headline might span cols 1–8, a caption cols 9–12. Keep a steady vertical baseline rhythm (e.g. 8px base unit).

---

## 6. Composition cheat

- **Hero:** label in col 1, huge flush-left `.h1` spanning cols 1–9, a single red number or word as the accent. Thin rule under it.
- **Sections:** index numbers (`01 02 03`) only if the content is truly sequential; otherwise just labels. Two-column text blocks aligned to the grid.
- **Data:** tables with hairline rules and red for the one figure that matters.
- **CTA:** black `.btn`, square, that turns red on hover.

---

## 7. Prompt to hand the agent

> "Style this site per Swiss Grid (International Typographic Style): pure white, black ink, one signal-red accent. Use Inter only, at a small fixed set of sizes; all hierarchy from weight and size. Lay everything on a visible 12-column grid with a consistent gutter, flush-left ragged-right text, max 60ch body. Organize with thin 1px black rules — no boxes, no shadows, no rounded corners, no gradients. Exactly one red element per view. Alignment to the grid is non-negotiable."
