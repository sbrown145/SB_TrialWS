# Style 10 — Luxe Noir

> Premium and editorial-dark. Near-black surfaces, restrained gold, an elegant high-contrast serif, thin rules and wide letter-spacing. Quiet luxury — for brands, portfolios, and anything that wants to feel expensive.

---

## 1. The feeling in one paragraph

Black, but warm and deliberate. Surfaces sit in **near-black charcoal**, text is a soft **cream**, and a single **muted gold** is used like jewelry — thin rules, small caps, a hairline underline — never as a flashy fill. The display face is an **elegant high-contrast serif** set large with airy letter-spacing; the body is a clean sans kept small and well-tracked. Layouts are spacious and symmetrical, motion is minimal, and restraint is the whole point. It should feel like the inside cover of a fashion or spirits brand book.

**Do:** charcoal/black surfaces, cream text, one muted gold accent, elegant serif display, thin gold rules, wide tracking, lots of space.
**Don't:** bright/multiple accents, heavy borders, glow effects, rounded playful shapes, dense layouts, casual fonts.

---

## 2. Design tokens

```css
:root {
  --bg:     #0C0C0E;   /* near-black */
  --surface:#15151A;   /* charcoal panel */
  --ink:    #EDE7DA;   /* warm cream text */
  --muted:  #8A8478;   /* taupe secondary */

  --gold:   #C9A24B;   /* muted gold — the only accent */
  --gold-d: #A07F33;

  --border: 1px solid rgba(201,162,75,0.35);   /* hairline gold */
  --rule:   1px solid rgba(237,231,218,0.12);  /* faint cream rule */
  --shadow: 0 24px 60px rgba(0,0,0,0.5);
  --radius: 4px;   /* barely rounded */

  --font-display: "Cormorant Garamond", serif;  /* elegant serif */
  --font-body:    "Jost", sans-serif;           /* geometric sans */
  --font-label:   "Jost", sans-serif;           /* uppercased, tracked */
}
```

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Display | **Cormorant Garamond** 500/600 | large, `letter-spacing:.5px`, `line-height:1.1`; italic for grace notes |
| Body | **Jost** 300/400 | small, `line-height:1.7`, `letter-spacing:.3px` |
| Labels | **Jost** 500 | ALL-CAPS, `letter-spacing:3px`, size 11–12px, color `--gold` |

Scale: display ~72px · h1 ~52 · h2 ~30 · body ~15–16 · label ~11.

---

## 4. Signature rules

1. **Gold as jewelry.** The accent appears only in small doses — a hairline rule, a small-caps label, a single underline, a thin button border. Never a big gold fill.
2. **Elegant serif, airy.** Cormorant Garamond set large with generous letter-spacing and line-height. Italic for the occasional flourish.
3. **Wide tracking.** Labels are uppercase Jost with heavy `letter-spacing` (3px). Spacing signals luxury.
4. **Hairlines + space.** Structure from thin gold/cream rules and abundant negative space. No heavy borders, no shadows except a soft deep one on the hero.
5. **Symmetry and calm.** Centered or balanced layouts, minimal motion, nothing hurried.

---

## 5. Component recipes

```css
body { background:var(--bg); color:var(--ink); }
.h1   { font-family:var(--font-display); font-weight:500; font-size:clamp(36px,6vw,72px); line-height:1.1; letter-spacing:.5px; }
.h1 em{ font-style:italic; color:var(--gold); }
.label{ font-family:var(--font-label); font-weight:500; text-transform:uppercase; letter-spacing:3px; font-size:11px; color:var(--gold); }
.body { font-family:var(--font-body); font-weight:300; font-size:16px; line-height:1.7; letter-spacing:.3px; color:var(--ink); max-width:62ch; }
.rule { border:0; border-top:var(--border); width:64px; }   /* short gold rule as a divider */
.card { background:var(--surface); border:var(--rule); border-radius:var(--radius); padding:34px; }
.card--hero { box-shadow:var(--shadow); }
.btn  { background:transparent; color:var(--gold); border:1px solid var(--gold); border-radius:var(--radius); padding:14px 30px; font-family:var(--font-label); font-weight:500; text-transform:uppercase; letter-spacing:2px; font-size:12px; cursor:pointer; transition:background .25s ease, color .25s ease; }
.btn:hover { background:var(--gold); color:var(--bg); }
.input{ background:transparent; border:0; border-bottom:1px solid rgba(237,231,218,.25); border-radius:0; color:var(--ink); padding:12px 0; font-family:var(--font-body); }
.input:focus { outline:none; border-bottom-color:var(--gold); }
.link { color:var(--gold); text-underline-offset:4px; text-decoration-thickness:1px; }
```

**Layout:** centered or balanced columns, large `padding-block` (~100px). A short gold `.rule` separates movements.

---

## 6. Composition cheat

- **Hero:** a small-caps gold `.label`, a large centered Cormorant `.h1` (one word italic gold via `<em>`), a short gold `.rule`, an outline gold `.btn`.
- **Sections:** generous space, faint cream rules between; serif subheads, small tracked Jost body.
- **Feature:** one `.card--hero` with the only deep shadow.
- **CTA:** outline gold button that fills gold on hover.

---

## 7. Prompt to hand the agent

> "Style this site per Luxe Noir: near-black warm background, charcoal panels, cream text, one muted-gold accent used only as jewelry (hairline rules, small-caps labels, thin button borders — never big gold fills). Cormorant Garamond serif headlines set large with airy letter-spacing (one word italic gold), Jost body kept small at 1.7 line-height, uppercase Jost labels with 3px tracking. Barely-rounded 4px corners, thin gold/cream hairline rules, abundant negative space, balanced/centered layouts, minimal motion. No bright color, heavy borders, glow, or playful shapes."
