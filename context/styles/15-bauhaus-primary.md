# Style 15 — Bauhaus Primary

> Bauhaus / De Stijl. Primary red, blue, yellow plus black on cream. Pure geometric shapes — circle, square, triangle — on a strict structural grid.

---

## 1. The feeling in one paragraph

Form follows function. A warm cream ground, **black structural lines**, and the three primaries used as **flat geometric blocks** — a yellow circle, a blue square, a red triangle. Type is condensed and heavy, set in confident uppercase. Composition is asymmetric but rigorously gridded. No ornament, no gradient: color and shape *are* the design.

**Do:** cream background, black grid lines, primary flat fills, pure geometric shapes, condensed heavy display type, asymmetric grid balance.
**Don't:** gradients, soft shadows, rounded corners (mostly), pastels, decorative flourishes, more than the three primaries + black.

---

## 2. Design tokens

```css
:root {
  --bg:    #F4EDE0;   /* cream */
  --panel: #ECE3D2;
  --card:  #FBF6EC;
  --ink:   #1A1A1A;   /* black — lines + text */

  --a1: #E63329;   /* red    */
  --a2: #1E4FD6;   /* blue   */
  --a3: #F4B400;   /* yellow */

  --border: 3px solid var(--ink);
  --radius: 0px;

  --font-display: "Anton", system-ui, sans-serif;
  --font-body:    "Inter", sans-serif;
}
```

**Alternate accent sets:** Cooler `#D7263D #1B5299 #F0C808` · Warmer `#E8472B #2B50AA #F2A900`

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Headings | **Anton** | ALL-CAPS, `letter-spacing:.5px`, `line-height:1.0` |
| Body | **Inter** 400/500 | `line-height:1.55` |
| Labels / kickers | **Inter** 700 | ALL-CAPS, `letter-spacing:2px` |

Scale: h1 ~64px · h2 ~36 · body ~17 · label ~13.

---

## 4. Signature rules

1. **Three primaries + black.** Red, blue, yellow as flat blocks; black for structure and text.
2. **Black grid lines.** `3px` rules divide and frame; cards are square (`0` radius).
3. **Pure shapes.** Circle, square, triangle used as deliberate composition elements.
4. **Condensed display.** Anton uppercase headlines, tight leading.
5. **Asymmetric balance.** Off-center layouts that still resolve on the grid.

---

## 5. Component recipes

```css
.card { background:var(--card); border:var(--border); border-radius:0; padding:26px; }
.chip { display:inline-flex; padding:7px 16px; background:var(--a2); color:#fff; border-radius:0; font-family:var(--font-body); font-weight:700; text-transform:uppercase; letter-spacing:1px; }
.btn  { border:var(--border); border-radius:0; background:var(--a1); color:#fff; font-family:var(--font-display); padding:14px 26px; text-transform:uppercase; letter-spacing:1px; cursor:pointer; }
.shape--circle   { border-radius:50%; background:var(--a3); }
.shape--square   { background:var(--a2); }
.shape--triangle { width:0; height:0; border-left:48px solid transparent; border-right:48px solid transparent; border-bottom:84px solid var(--a1); }
```

**Layout:** modular grid; place one primary shape per section as a structural anchor.

---

## 6. Composition cheat

- **Hero:** huge Anton headline, a yellow circle and blue square anchoring opposite corners, black baseline rule.
- **Sections:** square `.card`s separated by black rules; one primary shape per block.
- **Skills/tags:** square `.chip`s rotating through red/blue/yellow.
- **Contact/CTA:** red button with black border; a red triangle as punctuation.

---

## 7. Prompt to hand the agent

> "Style this site per Bauhaus Primary: warm cream background, black `3px` structural lines, and the three primaries (red `#E63329`, blue `#1E4FD6`, yellow `#F4B400`) used as FLAT geometric blocks and pure shapes (circle, square, triangle). Square corners (0 radius), Anton uppercase headlines with tight leading, Inter body, wide-tracked uppercase labels. Asymmetric but strictly gridded composition, one primary shape per section. No gradients, no soft shadows, no rounding, no extra colors."
