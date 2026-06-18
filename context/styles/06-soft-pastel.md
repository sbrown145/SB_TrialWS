# Style 06 — Soft Pastel

> Gentle, rounded, friendly. Pale candy colors, pillowy shapes, soft diffuse shadows, a rounded display face. Approachable and calm — good for wellness, kids, community, and soft consumer products.

---

## 1. The feeling in one paragraph

Everything is **soft**: a pale blush background, **pastel** surfaces (lavender, mint, peach, sky), and a **rounded** display typeface. Corners are big and generous, shadows are wide and diffuse with a faint color tint, and there are no hard edges anywhere. Color is used in cheerful low-saturation washes rather than punchy blocks. The tone is warm and reassuring — a hug in CSS. Plenty of air, gentle motion, nothing shouts.

**Do:** pale pastel fills, very rounded corners, soft tinted shadows, rounded fonts, gentle hover lifts, lots of whitespace.
**Don't:** hard black borders, sharp corners, high-contrast neon, harsh shadows, dense layouts.

---

## 2. Design tokens

```css
:root {
  --bg:    #FFF6FB;   /* pale blush */
  --card:  #FFFFFF;
  --ink:   #4A4458;   /* soft plum-gray, not pure black */
  --muted: #8A8398;

  --a1: #C7B6F5;   /* lavender */
  --a2: #B6EAD6;   /* mint    */
  --a3: #FFD3B6;   /* peach   */
  --a4: #B6DCF5;   /* sky     */

  --border: 1px solid rgba(74,68,88,0.08);
  --shadow: 0 14px 34px rgba(150,120,190,0.18);   /* soft, tinted, no harsh edge */
  --radius: 28px;
  --radius-pill: 999px;

  --font-display: "Fredoka", sans-serif;   /* rounded */
  --font-body:    "Nunito", sans-serif;
}
```

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Display | **Fredoka** 600/700 | rounded, friendly; `letter-spacing:0`, `line-height:1.1` |
| Body | **Nunito** 400/600 | `line-height:1.6`, soft plum-gray ink |
| Labels | **Nunito** 700 | small, color `--muted`, sentence or Title Case (not harsh caps) |

Scale: display ~64px · h1 ~44 · h2 ~28 · body ~18 · label ~14.

---

## 4. Signature rules

1. **Round everything.** Cards `28px`, buttons/inputs `16–20px`, pills `999px`. No sharp corners exist.
2. **Pastel washes.** Surfaces and accents are low-saturation pastels; pair complementary pastels, never saturated brights.
3. **Soft tinted shadows.** Elevation via wide, blurry, slightly purple-tinted shadows. No hard offsets.
4. **Soft ink.** Text is plum-gray (`--ink`), never pure black — keeps contrast gentle.
5. **Gentle lift on hover.** Interactive elements rise `translateY(-3px)` with a slightly larger shadow.

---

## 5. Component recipes

```css
body { background:var(--bg); color:var(--ink); }
.card { background:var(--card); border:var(--border); border-radius:var(--radius); box-shadow:var(--shadow); padding:30px; }
.card--tint { background:var(--a2); }   /* swap in any pastel accent */
.h1   { font-family:var(--font-display); font-weight:700; font-size:clamp(34px,6vw,64px); line-height:1.1; }
.body { font-family:var(--font-body); font-size:18px; line-height:1.6; }
.chip { display:inline-flex; padding:8px 18px; border-radius:var(--radius-pill); background:var(--a1); color:var(--ink); font-family:var(--font-body); font-weight:700; font-size:14px; }
.btn  { border:none; border-radius:18px; background:var(--a3); color:var(--ink); font-family:var(--font-display); font-weight:600; padding:14px 26px; cursor:pointer; box-shadow:var(--shadow); transition:transform .15s ease, box-shadow .15s ease; }
.btn:hover { transform:translateY(-3px); box-shadow:0 20px 40px rgba(150,120,190,.25); }
.input{ border:var(--border); border-radius:16px; background:var(--card); padding:14px 18px; font-family:var(--font-body); }
.input:focus { outline:none; box-shadow:0 0 0 3px var(--a4); }
.label{ font-family:var(--font-body); font-weight:700; font-size:14px; color:var(--muted); }
.blob { border-radius:42% 58% 63% 37% / 41% 44% 56% 59%; }  /* organic decorative shape */
```

**Layout:** flex/grid + gap, roomy padding (~64–80px sections). Let the blush background show between cards.

---

## 6. Composition cheat

- **Hero:** Fredoka headline, soft subline, one pastel `.blob` floating behind, a peach `.btn`.
- **Sections:** tinted `.card`s — rotate through lavender/mint/peach/sky so each feels distinct but gentle.
- **Tags:** pastel `.chip`s in a wrap row.
- **CTA:** a single soft-shadow card with a `.btn` that lifts on hover.

---

## 7. Prompt to hand the agent

> "Style this site per Soft Pastel: pale blush background, pastel surfaces (lavender/mint/peach/sky), soft plum-gray ink (never pure black). Fredoka rounded headings, Nunito body at 1.6 line-height. Big rounded corners everywhere (cards 28px, pills 999px), wide diffuse purple-tinted shadows, gentle `translateY(-3px)` hover lifts. Rotate pastel tints across cards. No hard borders, sharp corners, neon, or harsh shadows. Keep it roomy and calm."
