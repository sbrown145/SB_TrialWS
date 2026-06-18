# Style 13 — Memphis Pop

> 1980s Memphis design. Primary colors, black outlines, confetti of squiggles, dots, and zigzags. Loud, geometric, joyful chaos held together by a grid.

---

## 1. The feeling in one paragraph

Crisp white ground scattered with **playful geometric confetti** — dots, squiggles, triangles, zigzags — in bold primaries. Cards have **thin black outlines** and a **hard offset shadow** in an accent color. Type is rounded and confident. The energy is high but controlled: shapes decorate the margins while content stays on a clean grid.

**Do:** white background, 2–3px black outlines, hard colored offset shadows, scattered decorative shapes, bold primary fills.
**Don't:** gradients, soft/blurry shadows, pastel mush, more than ~4 hues, letting confetti cover the content.

---

## 2. Design tokens

```css
:root {
  --bg:    #FFFDF7;   /* paper white */
  --panel: #F4F0E6;
  --card:  #FFFFFF;
  --ink:   #121212;   /* outlines + text */

  --a1: #FF3B7B;   /* hot pink */
  --a2: #00C2CB;   /* teal     */
  --a3: #FFC43D;   /* yellow   */
  --a4: #7A5CFF;   /* violet   */

  --border: 3px solid var(--ink);
  --shadow: 6px 6px 0 var(--a2);   /* hard, colored, no blur */
  --radius: 14px;

  --font-display: "Righteous", system-ui, sans-serif;
  --font-body:    "Poppins", sans-serif;
}
```

**Alternate accent sets:** Primary `#FF4136 #0074D9 #FFDC00 #2ECC40` · Candy `#FF5DA2 #36D6E7 #FFD23F #9B5DE5`

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Righteous&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Headings | **Righteous** | display weight, `letter-spacing:.5px` |
| Body | **Poppins** 400/500 | `line-height:1.55` |
| Labels / kickers | **Poppins** 700 | ALL-CAPS, `letter-spacing:1px` |

Scale: h1 ~56px · h2 ~34 · body ~17 · label ~13.

---

## 4. Signature rules

1. **Black outlines.** `3px solid` on cards, chips, buttons.
2. **Hard colored shadows.** `6px 6px 0` in an accent — no blur, never gray.
3. **Confetti decoration.** Dots, squiggles, zigzags, triangles float in the background and off card corners.
4. **Primary palette.** Bold flat fills; rotate accents between sections.
5. **Grid discipline.** Content stays aligned; only decoration breaks the grid.

---

## 5. Component recipes

```css
.card { background:var(--card); border:var(--border); border-radius:var(--radius); box-shadow:var(--shadow); padding:26px; }
.chip { display:inline-flex; padding:7px 16px; border:2px solid var(--ink); border-radius:999px; background:var(--a3); color:var(--ink); font-family:var(--font-body); font-weight:700; text-transform:uppercase; letter-spacing:1px; }
.btn  { border:2px solid var(--ink); border-radius:10px; background:var(--a1); color:#fff; font-family:var(--font-display); padding:13px 24px; cursor:pointer; transition:transform .08s ease; }
.btn:active { transform:translate(3px,3px); }
.dot  { width:14px; height:14px; border-radius:50%; background:var(--a4); }
.squiggle { /* an inline SVG zigzag stroke in --a2 */ }
```

**Layout:** clean grid for content; absolutely-positioned confetti shapes in section corners.

---

## 6. Composition cheat

- **Hero:** big Righteous headline, scattered dots + a squiggle, one pink CTA with teal shadow.
- **Sections:** outlined `.card`s, each with a different accent shadow; sprinkle 2–3 shapes nearby.
- **Skills/tags:** outlined `.chip`s in rotating primaries.
- **Contact/CTA:** bold outlined button; a triangle and a couple dots as garnish.

---

## 7. Prompt to hand the agent

> "Style this site per Memphis Pop: crisp white background, 3px black outlines on cards/chips/buttons, hard COLORED offset shadows (`6px 6px 0` in an accent, never gray, no blur), and scattered geometric confetti (dots, squiggles, zigzags, triangles) in bold primaries decorating the margins and card corners. Righteous for headings, Poppins for body, uppercase Poppins kickers. Keep content on a clean grid; only decoration breaks alignment. No gradients, no soft shadows."
