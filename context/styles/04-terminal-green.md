# Style 04 — Terminal Green

> A CRT phosphor terminal. Monospace everything, green-on-black, blinking cursors, scanline haze. For dev tools, hacker portfolios, and anything that wants to feel like a command line.

---

## 1. The feeling in one paragraph

Black screen, **phosphor-green text**, everything in **monospace** on a strict character grid. The interface looks typed: prompts (`$`, `>`), blinking cursors, bracketed `[OK]` labels, and amber used for warnings/highlights. A faint **scanline overlay** and a subtle text glow sell the CRT. There is almost no chrome — borders are single-line box-drawing in green, and "cards" are framed regions, not elevated surfaces. Tight, technical, nostalgic.

**Do:** monospace fonts, green/amber on near-black, box-style borders, prompt glyphs, blinking cursor, scanlines, uppercase status tags.
**Don't:** rounded corners, soft shadows, photographs, gradients (except a faint scanline/glow), more than the green+amber pair.

---

## 2. Design tokens

```css
:root {
  --bg:     #0A0E0A;   /* near-black, green-tinted */
  --surface:#0E140E;   /* framed region fill */
  --green:  #4AF626;   /* primary phosphor */
  --green-d:#1FA80F;   /* dim green — borders, secondary */
  --amber:  #FFB000;   /* warnings / highlights */
  --muted:  #6FA86A;   /* low-emphasis text */

  --border: 1px solid var(--green-d);
  --glow:   0 0 6px rgba(74,246,38,0.55);
  --radius: 0;

  --font-mono: "JetBrains Mono", monospace;
  --font-display: "JetBrains Mono", monospace;  /* same family, bold + uppercase */
}
```

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Display | **JetBrains Mono** 800 | ALL-CAPS, `letter-spacing:1px`, optional `text-shadow:var(--glow)` |
| Body | **JetBrains Mono** 400 | `line-height:1.6`; keep line length tidy |
| Status / data | **JetBrains Mono** 500 | bracketed tags `[OK] [WARN]`, amber for warn |

Scale: display ~44px · h2 ~22 · body ~15–16 · label ~13. Everything mono, so size jumps carry the hierarchy.

---

## 4. Signature rules

1. **Mono on a grid.** One typeface, character-aligned. Hierarchy from weight, caps, and color — not new fonts.
2. **Prompt glyphs.** Lead lines/links with `$`, `>`, or `//`. Nav items look like commands.
3. **Blinking cursor.** A `▌` after the hero headline that blinks. Use once.
4. **Box borders.** Framed regions use single dim-green 1px borders, square corners. No fills beyond `--surface`.
5. **Scanline + glow.** A faint repeating-linear-gradient overlay and subtle green text-shadow. Keep it low-opacity.

---

## 5. Component recipes

```css
body { background:var(--bg); color:var(--green); font-family:var(--font-mono); }
body::after { content:""; position:fixed; inset:0; pointer-events:none;
  background:repeating-linear-gradient(transparent 0 2px, rgba(0,0,0,.25) 2px 4px); opacity:.35; }
.h1  { font-weight:800; text-transform:uppercase; letter-spacing:1px; font-size:clamp(28px,5vw,44px); text-shadow:var(--glow); }
.cursor::after { content:"▌"; animation:blink 1s steps(1) infinite; }
@keyframes blink { 50% { opacity:0; } }
.prompt::before { content:"$ "; color:var(--green-d); }
.panel { background:var(--surface); border:var(--border); padding:20px 22px; }
.tag   { font-weight:500; color:var(--amber); } /* [WARN] */
.tag--ok { color:var(--green); }
.btn   { background:transparent; color:var(--green); border:var(--border); padding:10px 18px; font-family:var(--font-mono); font-weight:700; text-transform:uppercase; letter-spacing:1px; cursor:pointer; }
.btn:hover { background:var(--green); color:var(--bg); }
.input { background:var(--bg); border:var(--border); color:var(--green); font-family:var(--font-mono); padding:10px 12px; }
.input:focus { outline:none; box-shadow:var(--glow); }
.link  { color:var(--green); text-decoration:underline; }
.link::before { content:"> "; color:var(--green-d); }
```

`@media (prefers-reduced-motion: reduce){ .cursor::after{ animation:none } }`

---

## 6. Composition cheat

- **Hero:** a `$`-prefixed prompt line, then a glowing uppercase `.h1` ending in a blinking `.cursor`. Subline reads like terminal output.
- **Sections:** `.panel` framed regions with a `// section_name` comment header.
- **Lists/skills:** `[OK]`-tagged rows, amber `[WARN]` for emphasis.
- **CTA:** ghost `.btn` that inverts to solid green on hover, like a focused command.

---

## 7. Prompt to hand the agent

> "Style this site per Terminal Green: near-black background, phosphor-green text, JetBrains Mono everywhere. Hierarchy from weight/caps/color only. Lead lines with `$`/`>` prompt glyphs, end the hero headline with a blinking `▌` cursor, frame sections in 1px dim-green square-cornered boxes. Amber for warnings/highlights. Add a faint scanline overlay and subtle green text-glow. No rounded corners, no soft shadows, no photos. Respect prefers-reduced-motion."
