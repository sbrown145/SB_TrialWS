# Style 11 — Claymorphism

> Puffy 3D "clay" UI. Soft pastel gradients, fat rounded shapes, dual inner-and-outer shadows that make every surface look squishy and tactile.

---

## 1. The feeling in one paragraph

Soft, toy-like, and friendly. Surfaces look like extruded modeling clay: thick rounded corners, **no borders**, and a signature **double shadow** — a soft dark drop shadow plus a light inner highlight — so cards, chips, and buttons feel inflated. Backgrounds are pale lavender-to-pink gradients; accents are candy brights. Everything is rounded, nothing is sharp.

**Do:** big radii (24–32px), dual shadows (outer dark + inner light highlight), pastel gradient backgrounds, candy accent fills, rounded Baloo type.
**Don't:** hard edges, visible borders, flat single-layer shadows, gradients on text, dense layouts.

---

## 2. Design tokens

```css
:root {
  --bg:    #ECE7FF;   /* lavender base */
  --bg2:   #FDE8F3;   /* pink wash for gradient */
  --card:  #FBF9FF;   /* near-white clay surface */
  --ink:   #4B3F72;   /* deep grape text */
  --muted: #6E6390;   /* secondary text */

  --a1: #FF8FB1;   /* bubblegum  */
  --a2: #8B7CF6;   /* periwinkle */
  --a3: #FFD36E;   /* butter     */
  --a4: #7FE0C9;   /* mint       */

  --radius: 28px;
  --shadow: 8px 8px 20px rgba(140,110,220,.35), -8px -8px 18px rgba(255,255,255,.85);
  --inset:  inset 2px 2px 6px rgba(255,255,255,.7), inset -3px -3px 8px rgba(140,110,220,.18);

  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body:    "Nunito", sans-serif;
}
```

**Alternate accent sets:** Sherbet `#FF9F7A #FFC56E #FF85A1 #B79CFF` · Aqua `#6ED3FF #7FE0C9 #B7A4FF #FFB3D1`

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Headings | **Baloo 2** 600/700 | rounded, friendly, `line-height:1.1` |
| Body | **Nunito** 400/600 | `line-height:1.6` |
| Labels / kickers | **Nunito** 700 | sentence case, soft tracking |

Scale (desktop): h1 ~52px · h2 ~34 · body ~17 · label ~13.

---

## 4. Signature rules

1. **Dual shadows everywhere.** Every surface gets the outer dark + outer light pair; pressed/inset elements use `--inset`.
2. **No borders.** Depth comes from shadow, never strokes.
3. **Fat radii.** Cards `28px`, buttons/inputs `18px`, chips/pills `999px`.
4. **Pastel gradient ground.** Background is a soft diagonal `--bg → --bg2`.
5. **Squish on press.** Buttons swap their outer shadow for `--inset` on `:active`.

---

## 5. Component recipes

```css
.card { background:var(--card); border-radius:var(--radius); box-shadow:var(--shadow); padding:28px; }
.chip { display:inline-flex; align-items:center; padding:8px 18px; border-radius:999px; background:var(--a3); color:var(--ink); font-family:var(--font-body); font-weight:700; box-shadow:var(--shadow); }
.btn  { border:0; border-radius:18px; background:var(--a1); color:#fff; font-family:var(--font-display); font-weight:700; padding:14px 26px; box-shadow:var(--shadow); cursor:pointer; transition:box-shadow .12s ease; }
.btn:active { box-shadow:var(--inset); }
.input { border:0; border-radius:16px; background:var(--card); padding:14px 18px; box-shadow:var(--inset); font-family:var(--font-body); }
.kicker { font-family:var(--font-body); font-weight:700; color:var(--a2); }
```

**Layout:** generous `gap` (24–32px), lots of breathing room, cards floating on the gradient.

---

## 6. Composition cheat

- **Hero:** rounded Baloo headline, a couple of floating clay blobs (circles with `--shadow`) bleeding off the edges.
- **Sections:** content as puffy `.card`s, each accent used as a chip or button color.
- **Skills/tags:** pill `.chip`s with their own soft shadow.
- **Contact/CTA:** one big clay button; press state squishes inward.

---

## 7. Prompt to hand the agent

> "Style this site per Claymorphism: pale lavender→pink gradient background, near-white clay surfaces with NO borders, big rounded corners (28px cards, 18px buttons, pill chips), and a signature dual shadow (`8px 8px 20px` dark + `-8px -8px 18px` white) on every surface. Pressed elements use an inset shadow to look squished. Candy pastel accents, Baloo 2 headings, Nunito body. No flat single shadows, no strokes, no text gradients."
