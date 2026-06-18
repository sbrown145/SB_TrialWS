# Style 07 — Corporate Trust

> Clean, modern SaaS / fintech. Cool neutrals, a confident blue, crisp cards with subtle elevation, tidy data. Reads as competent and trustworthy without being boring.

---

## 1. The feeling in one paragraph

A cool, well-organized product page. Soft blue-gray background, **white cards** with **subtle elevation**, a **confident primary blue** for actions and emphasis, and a teal secondary for accents. Type is a clean modern sans, comfortably spaced, with clear hierarchy. Corners are gently rounded (not playful), shadows are small and realistic, and everything aligns to a calm grid. The vibe is dependable, current, and frictionless — the look of software people pay for.

**Do:** white cards on cool-gray, subtle 1px borders + small shadows, one primary blue, clear type hierarchy, tidy spacing, badges/stats.
**Don't:** heavy borders, hard offset shadows, loud color, more than the blue+teal pair as structure, cramped layouts.

---

## 2. Design tokens

```css
:root {
  --bg:     #F6F8FC;   /* cool light gray */
  --card:   #FFFFFF;
  --ink:    #0F172A;   /* slate-900 */
  --muted:  #475569;   /* slate-600 */
  --line:   #E2E8F0;   /* slate-200 borders */

  --primary:    #2563EB;   /* blue-600 */
  --primary-d:  #1D4ED8;   /* hover */
  --accent:     #0EA5A4;   /* teal */
  --soft-blue:  #EFF4FF;   /* tinted fill for badges/highlights */

  --border: 1px solid var(--line);
  --shadow: 0 1px 2px rgba(15,23,42,.06), 0 8px 24px rgba(15,23,42,.06);
  --radius: 14px;
  --radius-pill: 999px;

  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body:    "Inter", sans-serif;
  --font-mono:    "JetBrains Mono", monospace;   /* for figures/code */
}
```

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Headings | **Plus Jakarta Sans** 700/800 | `letter-spacing:-0.02em`, `line-height:1.1` |
| Body / UI | **Inter** 400/500 | `line-height:1.6`, muted slate for secondary |
| Figures / code | **JetBrains Mono** 500 | for stats, prices, metrics |

Scale: display ~56px · h1 ~40 · h2 ~26 · body ~16–17 · label ~13.

---

## 4. Signature rules

1. **White cards, subtle depth.** Surfaces are white on cool-gray, with a 1px slate border *and* a soft small shadow. Realistic, not dramatic.
2. **One primary blue.** Blue means "action/important." Use it for primary buttons, key figures, active states. Teal is a light secondary accent only.
3. **Tinted badges.** Status/labels use `--soft-blue` (or a teal tint) fills with colored text — never heavy borders.
4. **Clear hierarchy.** Strong heading weights, generous line-height, comfortable spacing. Calm, scannable.
5. **Tidy grid.** Equal-height cards, consistent gaps, aligned baselines. Order signals competence.

---

## 5. Component recipes

```css
body { background:var(--bg); color:var(--ink); }
.card  { background:var(--card); border:var(--border); border-radius:var(--radius); box-shadow:var(--shadow); padding:24px; }
.h1    { font-family:var(--font-display); font-weight:800; font-size:clamp(32px,5vw,56px); line-height:1.1; letter-spacing:-.02em; }
.body  { font-family:var(--font-body); font-size:16px; line-height:1.6; color:var(--muted); }
.stat  { font-family:var(--font-mono); font-weight:500; font-size:34px; color:var(--primary); }
.badge { display:inline-flex; padding:5px 12px; border-radius:var(--radius-pill); background:var(--soft-blue); color:var(--primary); font-family:var(--font-body); font-weight:600; font-size:12px; }
.btn   { background:var(--primary); color:#fff; border:0; border-radius:10px; padding:12px 22px; font-family:var(--font-display); font-weight:700; font-size:15px; cursor:pointer; box-shadow:0 2px 8px rgba(37,99,235,.25); }
.btn:hover { background:var(--primary-d); }
.btn--ghost { background:#fff; color:var(--ink); border:var(--border); box-shadow:none; }
.input { border:var(--border); border-radius:10px; background:#fff; padding:12px 14px; font-family:var(--font-body); }
.input:focus { outline:none; border-color:var(--primary); box-shadow:0 0 0 3px rgba(37,99,235,.18); }
.label { font-family:var(--font-body); font-weight:600; font-size:13px; color:var(--muted); }
```

**Layout:** 12-col grid, equal-height card rows, ~64px section padding. Keep gaps consistent (e.g. 24px).

---

## 6. Composition cheat

- **Hero:** a `.badge` eyebrow, a Plus Jakarta `.h1`, a muted subline, primary `.btn` + ghost `.btn--ghost`. Optional product card mock on the right.
- **Features:** white `.card`s in a 3-col grid, each with a small icon, bold title, muted body.
- **Stats:** big mono `.stat` figures in blue with small labels.
- **Pricing/CTA:** one highlighted card (slightly stronger shadow or a blue top-border) as the recommended plan.

---

## 7. Prompt to hand the agent

> "Style this site per Corporate Trust: cool blue-gray background, white cards with a 1px slate border and a soft small shadow, slate-900 ink with slate-600 secondary text. Plus Jakarta Sans headings, Inter body at 1.6 line-height, JetBrains Mono for figures. One confident primary blue (#2563EB) for actions and key numbers; teal as a light secondary. Pill badges use soft-blue tint fills with colored text. Gently rounded corners (~14px), tidy 12-col grid, equal-height cards, consistent gaps. No heavy borders, hard shadows, or loud color."
