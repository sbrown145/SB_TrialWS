# Style 09 — Organic Earth

> Tactile and natural. Oat-paper backgrounds, clay and olive tones, soft organic shapes, a warm high-contrast serif. Grounded, handmade, calm — good for food, craft, sustainability, and wellness.

---

## 1. The feeling in one paragraph

Materials you can almost touch: an **oat-paper background**, surfaces the color of **clay, olive, and mustard**, and **soft organic shapes** (rounded asymmetric blobs, gentle arches). A **warm high-contrast serif** sets the headlines with a humanist sans underneath. Color is **muted and earthy** — never bright or neon. Edges are soft, shadows are minimal and warm, and there's a sense of breathing space and natural rhythm. It feels artisanal and unhurried, like good packaging for something made by hand.

**Do:** earthy muted tones, organic blob/arch shapes, warm serif headlines, soft warm shadows, generous calm spacing, natural texture.
**Don't:** saturated/neon color, hard geometric borders, cold grays, glossy effects, tight cramped grids.

---

## 2. Design tokens

```css
:root {
  --bg:    #F4EFE6;   /* oat paper */
  --card:  #FBF8F2;   /* lighter paper */
  --ink:   #2B2A24;   /* warm near-black */
  --muted: #6F6A5C;   /* stone */

  --clay:    #C26B4E;   /* terracotta clay */
  --olive:   #6B7A3F;   /* olive green */
  --mustard: #D8A23A;   /* warm mustard */
  --sage:    #8FA98B;   /* soft sage */

  --border: 1px solid #E4DCCB;
  --shadow: 0 10px 30px rgba(80,60,30,0.10);   /* soft + warm */
  --radius: 22px;
  --radius-organic: 60% 40% 55% 45% / 55% 50% 50% 45%;

  --font-display: "DM Serif Display", serif;   /* warm high-contrast */
  --font-body:    "DM Sans", sans-serif;
}
```

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Display | **DM Serif Display** | warm high-contrast serif; italic for accents; `line-height:1.1` |
| Body | **DM Sans** 400/500 | humanist sans; `line-height:1.65` |
| Labels | **DM Sans** 700 | small, uppercase, `letter-spacing:1.5px`, color `--muted` |

Scale: display ~64px · h1 ~46 · h2 ~30 · body ~18 · label ~13.

---

## 4. Signature rules

1. **Earthy, muted palette.** Clay / olive / mustard / sage on oat paper. Desaturated always — nothing electric.
2. **Organic shapes.** Use blob `border-radius` and arch tops (`border-radius: 50% 50% 0 0`) for images and feature blocks instead of rectangles.
3. **Warm serif headlines.** DM Serif Display, occasionally italic, paired with quiet DM Sans body.
4. **Soft warm shadows.** Minimal, low, warm-tinted. No hard edges, no cool grays.
5. **Unhurried spacing.** Generous, slightly irregular rhythm — let sections breathe like a printed cookbook.

---

## 5. Component recipes

```css
body { background:var(--bg); color:var(--ink); }
.card { background:var(--card); border:var(--border); border-radius:var(--radius); box-shadow:var(--shadow); padding:30px; }
.card--clay  { background:var(--clay);  color:#FBF8F2; }
.card--olive { background:var(--olive); color:#FBF8F2; }
.h1   { font-family:var(--font-display); font-weight:400; font-size:clamp(34px,6vw,64px); line-height:1.1; }
.h1 em{ font-style:italic; color:var(--clay); }
.body { font-family:var(--font-body); font-size:18px; line-height:1.65; color:var(--ink); }
.label{ font-family:var(--font-body); font-weight:700; text-transform:uppercase; letter-spacing:1.5px; font-size:13px; color:var(--muted); }
.chip { display:inline-flex; padding:7px 18px; border:var(--border); border-radius:999px; background:var(--sage); color:#2B2A24; font-family:var(--font-body); font-weight:700; font-size:13px; }
.btn  { background:var(--clay); color:#FBF8F2; border:0; border-radius:999px; padding:14px 28px; font-family:var(--font-body); font-weight:700; cursor:pointer; transition:background .2s ease; }
.btn:hover { background:#A8573D; }
.input{ border:var(--border); border-radius:14px; background:var(--card); padding:13px 16px; font-family:var(--font-body); }
.input:focus { outline:none; box-shadow:0 0 0 3px rgba(194,107,78,.25); }
.blob   { border-radius:var(--radius-organic); }
.arch   { border-radius:50% 50% 0 0; }
```

**Layout:** flex/grid + gap, roomy sections (~80px). Offset images and arches; avoid perfect symmetry.

---

## 6. Composition cheat

- **Hero:** DM Serif `.h1` with one word in italic clay (`<em>`), DM Sans subline, an arch-topped image, a clay `.btn`.
- **Sections:** alternate paper `.card`s with full-color `.card--clay` / `.card--olive` blocks; round image corners as blobs/arches.
- **Tags:** sage `.chip`s.
- **CTA:** a clay or olive color block with a contrasting paper-toned button.

---

## 7. Prompt to hand the agent

> "Style this site per Organic Earth: oat-paper background, muted earthy palette (clay/olive/mustard/sage), warm near-black ink. DM Serif Display headlines (one word italic in clay), DM Sans body at 1.65 line-height, uppercase tracked DM Sans labels. Use organic blob border-radius and arch-topped (`50% 50% 0 0`) image/feature shapes instead of rectangles. Soft warm low shadows, rounded 22px cards, pill buttons in clay. Desaturated only — no neon, no cold grays, no hard geometric edges. Generous, slightly irregular, unhurried spacing."
