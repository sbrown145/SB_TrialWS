# Style 08 — Synthwave

> 1980s retro-future. Neon magenta and cyan on deep purple, a sunset gradient, a glowing perspective grid horizon, chrome-edged type. Loud, nostalgic, high-energy.

---

## 1. The feeling in one paragraph

Night-drive aesthetics: a **deep purple-to-black** sky, a **neon sunset gradient** (magenta→orange), and a **glowing perspective grid** running to the horizon. Type is wide and techno, often with a chrome or neon-glow treatment. Accents are electric — hot pink and cyan — and they *glow* (colored box/text-shadows). Surfaces are dark, semi-transparent, edged in neon. It should feel like a synth track looks: bold, saturated, unapologetically retro-future.

**Do:** neon magenta/cyan glows, sunset gradients, grid horizon, techno display font, dark translucent panels, scanline shimmer.
**Don't:** pastel or muted color, flat matte everything, serif type, light backgrounds. Subtlety is not the assignment.

---

## 2. Design tokens

```css
:root {
  --bg:     #1A0B2E;   /* deep purple night */
  --bg-2:   #0B0418;
  --panel:  rgba(255,255,255,0.05);
  --stroke: rgba(255,46,151,0.5);   /* neon pink edge */
  --ink:    #FDE9FF;
  --muted:  rgba(253,233,255,0.6);

  --pink:   #FF2E97;
  --orange: #FF8A3D;
  --cyan:   #2DE2E6;
  --violet: #6C2BD9;
  --sunset: linear-gradient(180deg, var(--pink), var(--orange));

  --border: 1px solid var(--stroke);
  --glow-pink: 0 0 18px rgba(255,46,151,.7);
  --glow-cyan: 0 0 18px rgba(45,226,230,.7);
  --radius: 8px;

  --font-display: "Orbitron", sans-serif;   /* techno, wide */
  --font-body:    "Rajdhani", sans-serif;
  --font-mono:    "Share Tech Mono", monospace;
}
```

---

## 3. Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800;900&family=Rajdhani:wght@500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Display | **Orbitron** 800/900 | ALL-CAPS, wide `letter-spacing:2px`, neon `text-shadow` or sunset gradient fill |
| Body | **Rajdhani** 500/600 | condensed, techy; `line-height:1.5`, `letter-spacing:.3px` |
| Labels / data | **Share Tech Mono** | cyan, uppercase, small |

Scale: display ~64px · h1 ~44 · h2 ~26 · body ~17 · label ~13.

---

## 4. Signature rules

1. **Grid horizon.** A perspective grid (cyan/pink lines) fading to a vanishing point anchors the hero or footer.
2. **Neon glow.** Key text and borders glow via colored `text-shadow`/`box-shadow`. Pink and cyan are the two electric signals.
3. **Sunset gradient.** A magenta→orange gradient appears as a hero sun, a headline fill, or a button.
4. **Dark translucent panels.** Surfaces are low-opacity white over the purple, edged in neon.
5. **Wide techno caps.** Headlines are Orbitron, uppercase, widely tracked. Body is condensed Rajdhani.

---

## 5. Component recipes

```css
body { background:linear-gradient(180deg, var(--bg), var(--bg-2)); color:var(--ink); font-family:var(--font-body); }
.h1   { font-family:var(--font-display); font-weight:900; text-transform:uppercase; letter-spacing:2px; font-size:clamp(32px,6vw,64px);
        background:var(--sunset); -webkit-background-clip:text; background-clip:text; color:transparent; }
.h1--glow { color:var(--cyan); background:none; text-shadow:var(--glow-cyan); }
.panel{ background:var(--panel); border:var(--border); border-radius:var(--radius); box-shadow:var(--glow-pink); padding:24px; backdrop-filter:blur(4px); }
.chip { display:inline-flex; padding:6px 16px; border:1px solid var(--cyan); border-radius:var(--radius); background:transparent; color:var(--cyan); font-family:var(--font-mono); font-size:12px; text-transform:uppercase; box-shadow:var(--glow-cyan); }
.btn  { background:var(--sunset); color:#1A0B2E; border:0; border-radius:var(--radius); padding:14px 28px; font-family:var(--font-display); font-weight:800; text-transform:uppercase; letter-spacing:1px; cursor:pointer; box-shadow:var(--glow-pink); }
.btn:hover { filter:brightness(1.1); }
.input{ background:rgba(0,0,0,.3); border:var(--border); border-radius:var(--radius); color:var(--ink); padding:12px 14px; font-family:var(--font-mono); }
.input:focus { outline:none; box-shadow:var(--glow-cyan); }
.grid-floor { background-image:linear-gradient(var(--cyan) 1px, transparent 1px), linear-gradient(90deg, var(--cyan) 1px, transparent 1px);
              background-size:40px 40px; transform:perspective(300px) rotateX(60deg); transform-origin:bottom; opacity:.4; }
.label{ font-family:var(--font-mono); color:var(--cyan); text-transform:uppercase; letter-spacing:1px; font-size:12px; }
```

---

## 6. Composition cheat

- **Hero:** a sunset-gradient Orbitron `.h1`, cyan mono kicker, a `.grid-floor` running to the horizon below, a glowing `.btn`.
- **Sections:** neon-edged `.panel`s; alternate pink and cyan glows so it pulses.
- **Tags:** cyan glowing `.chip`s.
- **CTA:** sunset-gradient `.btn` with pink glow on a dark band.

---

## 7. Prompt to hand the agent

> "Style this site per Synthwave: deep purple→black background, neon magenta + cyan accents that glow (colored text/box-shadows), a magenta→orange sunset gradient, and a glowing perspective grid horizon in the hero. Orbitron uppercase wide-tracked headlines (sunset-gradient fill or cyan neon glow), condensed Rajdhani body, Share Tech Mono cyan labels. Dark translucent panels edged in neon, 8px radius. Loud and saturated — no pastels, no serifs, no light backgrounds. Respect prefers-reduced-motion for any animation."
