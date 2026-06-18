# `styles/` — Global Styles & Design Tokens

This project uses **Tailwind CSS** with a custom **Bold & Playful Paper** theme: warm paper surfaces, heavy ink borders, offset shadows, and four accent colors.

## Create this file

`global.css`

## Wire it up

Import the stylesheet from the project root in `gatsby-browser.js`:

```js
import "./src/styles/global.css"
```

## What to include

### 1. Tailwind directives

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. CSS custom properties (light + dark)

Store RGB channels (not full colors) so Tailwind opacity modifiers work (`text-ink/60`, `bg-bg/85`):

```css
:root {
  --bg-rgb: 247 244 236;
  --ink-rgb: 32 29 24;
  --a1-rgb: 226 92 51;
  /* … panel, card, a2–a4 … */
  --bg: rgb(var(--bg-rgb));
  --ink: rgb(var(--ink-rgb));
  --border: 4px solid var(--ink);
  --shadow: 10px 10px 0 var(--ink);
}

.dark {
  /* inverted surfaces — same accents, lighter ink */
}
```

### 3. Component classes

Define reusable patterns used across components:

| Class | Purpose |
|-------|---------|
| `.card` / `.card--shadow` | Bordered card surfaces |
| `.btn` / `.btn--ghost` | Primary and secondary buttons |
| `.chip` / `.chip--btn` / `.chip--active` | Tags and filter pills |
| `.lift` | Hover lift + shadow interaction |
| `.nav-link` / `.nav-link--active` | Header navigation |
| `.font-display` / `.kicker` | Display and label typography |
| `.shape` / `.fill-a1`–`.fill-a4` | Decorative blocks and accents |
| `.paper-grid` | Subtle dotted page texture |
| `.rise` | Entrance animation (respect `prefers-reduced-motion`) |

### 4. Tailwind config alignment

Ensure `tailwind.config.js` maps semantic colors to the CSS variables, e.g.:

```js
colors: {
  bg: 'rgb(var(--bg-rgb) / <alpha-value>)',
  ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
  a1: 'rgb(var(--a1-rgb) / <alpha-value>)',
  // …
}
```

## Fonts

Load **Archivo**, **Archivo Black**, and **Space Mono** via `src/html.js` or a `<link>` in your HTML shell.
