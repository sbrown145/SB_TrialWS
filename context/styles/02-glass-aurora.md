# Style 02 — Glass Aurora

> Dark, frosted glass panels floating over soft aurora glows. Modern, premium, a little futuristic. The deliberate opposite of flat brutalism.

---

## 1. The feeling in one paragraph

A deep midnight background lit from behind by **blurred aurora blooms** (violet, cyan, pink). Content sits on **frosted glass** panels — translucent white at low opacity, a thin light border, and `backdrop-filter: blur()` so the glow bleeds through. Type is clean and airy; accents are gradients used as glows and text highlights, never as flat blocks. Everything has soft radii and gentle elevation. The mood is calm, expensive, and slightly luminous.

**Do:** translucent glass fills, backdrop blur, soft glows, subtle 1px light borders, gradient text accents, large rounded radii.
**Don't:** hard black borders, flat opaque cards, harsh shadows, busy color — let the dark breathe and the glow do the work.

---

## 2. Design tokens

```css
:root {
  --bg:     #0B1020;                       /* midnight base */
  --bg-2:   #121935;                       /* second stop for ambient gradient */
  --glass:  rgba(255,255,255,0.06);        /* panel fill */
  --glass-2:rgba(255,255,255,0.10);        /* raised panel fill */
  --stroke: rgba(255,255,255,0.16);        /* thin light border */
  --ink:    #EAF0FF;                        /* primary text */
  --muted:  rgba(234,240,255,0.62);        /* secondary text */

  --a1: #8B5CF6;   /* violet */
  --a2: #22D3EE;   /* cyan   */
  --a3: #F472B6;   /* pink   */
  --grad: linear-gradient(120deg, var(--a1), var(--a2) 55%, var(--a3));

  --border: 1px solid var(--stroke);
  --blur: blur(18px);
  --shadow: 0 20px 60px rgba(0,0,0,0.45);
  --glow: 0 0 60px rgba(139,92,246,0.45);
  --radius: 20px;
  --radius-pill: 999px;

  --font-display: "Sora", sans-serif;
  --font-body:    "Inter", sans-serif;
  --font-mono:    "JetBrains Mono", monospace;
}
```

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Headings | **Sora** 700/800 | tight `letter-spacing:-0.02em`, can take a gradient-text fill |
| Body | **Inter** 400/500 | `line-height:1.55`, muted color for secondary |
| Labels / data | **JetBrains Mono** | small, `letter-spacing:0.5px`, color `--a2` |

Scale: display ~72px · h1 ~48 · h2 ~30 · body ~17–18 · label ~13.

---

## 4. Signature rules

1. **Ambient glow background.** Page bg is dark + 2–3 large blurred radial blobs in the accents, low opacity, fixed behind content.
2. **Frosted glass surfaces.** `background:var(--glass)` + `backdrop-filter:var(--blur)` + `border:var(--border)`.
3. **Gradient as light, not paint.** Use `--grad` for text fills, thin top-borders, and focus rings — never as a full card background.
4. **Soft depth.** Elevation via large soft shadow + optional glow on the hero element only.
5. **Generous rounding.** Cards `20px`, pills `999px`. Nothing sharp.

---

## 5. Component recipes

```css
body { background: radial-gradient(60% 50% at 20% 10%, rgba(139,92,246,.25), transparent 60%),
                   radial-gradient(50% 50% at 90% 30%, rgba(34,211,238,.18), transparent 60%),
                   linear-gradient(160deg, var(--bg), var(--bg-2)); color:var(--ink); }
.card  { background:var(--glass); backdrop-filter:var(--blur); -webkit-backdrop-filter:var(--blur); border:var(--border); border-radius:var(--radius); box-shadow:var(--shadow); padding:28px; }
.card--hero { box-shadow:var(--shadow), var(--glow); }
.grad-text { background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent; }
.chip  { display:inline-flex; padding:6px 16px; border:var(--border); border-radius:var(--radius-pill); background:var(--glass-2); font-family:var(--font-mono); font-size:12px; color:var(--a2); }
.btn   { border:none; border-radius:var(--radius-pill); background:var(--grad); color:#0B1020; font-family:var(--font-body); font-weight:600; padding:13px 24px; cursor:pointer; }
.btn--ghost { background:var(--glass-2); color:var(--ink); border:var(--border); }
.input { background:var(--glass); border:var(--border); border-radius:14px; color:var(--ink); padding:13px 16px; }
.input:focus { outline:none; border-color:transparent; box-shadow:0 0 0 2px var(--a1); }
.kicker{ font-family:var(--font-mono); font-size:12px; letter-spacing:.5px; color:var(--a2); }
```

**Layout:** flex/grid + gap. Let large empty dark areas around panels carry the calm.

---

## 6. Composition cheat

- **Hero:** Sora headline with one phrase as `.grad-text`, muted Inter subline, a single `.card--hero` glass panel. One glow, here only.
- **Sections:** glass `.card`s in a grid; cyan mono kickers; gradient hairline along the card top edge if you want extra polish.
- **CTA:** gradient `.btn` against open dark space.

---

## 7. Prompt to hand the agent

> "Style this site per Glass Aurora: dark midnight background with soft blurred aurora glows (violet/cyan/pink) behind everything. Content on frosted glass — `rgba(255,255,255,0.06)` fills with `backdrop-filter: blur(18px)` and thin 1px light borders, large rounded corners. Sora headings (use a violet→cyan→pink gradient text fill on one phrase), Inter body in muted white, JetBrains Mono cyan kickers. Gradients are glow and text accents only, never flat card fills. Reserve the glow shadow for the hero element."
