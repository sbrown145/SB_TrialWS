# Implementation Plan — Shawn Brown Portfolio (Glass Aurora)

**Date:** 2026-06-18  
**Style:** `context/styles/02-glass-aurora.md`  
**Content source:** [LinkedIn profile](https://www.linkedin.com/in/shawn-brown-710a2358/)  
**Repo state:** `src/` contains README guidance only — full greenfield build.

---

## Executive summary

Build a static Gatsby portfolio for **Shawn Brown** — a versatile scientist/engineer with ~15 years in lab R&D, sorbent media, IAQ, and carbon capture — styled with **Glass Aurora**: dark midnight canvas, frosted glass panels, aurora glows, Sora/Inter/JetBrains Mono typography.

The work follows the repo's prescribed build order (`types` → `data` → `styles` → `context` → `components` → `pages`) and maps LinkedIn facts into typed exports in `src/data/portfolio.ts`. No facts will be invented beyond what LinkedIn provides; gaps are flagged for user input.

---

## Preflight score: **78 / 100**

| Factor | Impact |
|--------|--------|
| Clear framework contract (`src/*/README.md`) | +20 |
| Complete Glass Aurora token spec | +18 |
| Rich LinkedIn experience/skills data | +20 |
| No `src/` implementation yet (clean slate) | +10 |
| Glass Aurora vs boilerplate light/dark theme mismatch | −8 |
| Missing contact email, GitHub, resume URL | −7 |
| No personal/side projects on LinkedIn | −5 |
| Deploy URL / repo name undecided (`SB_TrialWS` vs `portfolio`) | −5 |
| Thin LinkedIn "About" (title only, no bio paragraph) | −5 |

---

## Content inventory (from LinkedIn)

### Identity

| Field | Value |
|-------|-------|
| Name | Shawn Brown |
| Title | Versatile Scientist / Engineer |
| Current role | Lab Engineer, Aquatic Labs (Nov 2025 – Present) |
| Location | Newton Centre, Massachusetts |
| Total experience | ~15 years (Oct 2012 – Present) |
| Education | Chemistry, UMass Boston (2007–2009) |

### Career arc (5 roles → `experience: Role[]`)

1. **Aquatic Labs** — Lab Engineer (Nov 2025 – Present, Cambridge MA)  
   Climate-tech ocean monitoring, MRV for ocean carbon removal.

2. **enVerid Systems** — Lead Scientist (Jan 2021 – Jul 2025)  
   Sorbent media R&D, commercial formulation, DAC/PSC, IAQ/SVT.

3. **enVerid Systems** — R&D Engineer Lab Manager (Jan 2017 – Jan 2021)

4. **enVerid Systems** — Lab Engineer (Jun 2015 – Jan 2017)

5. **Epoxy Technology** — Lab Tech (Oct 2012 – Jun 2015)  
   Analytical testing, instrument calibration/repair.

6. **PCI Synthesis / SEQENS** — QC Analyst (Jan 2011 – Sep 2012)  
   cGMP release testing, SOP authoring, IQ/OQ.

*Note: enVerid has three title entries — present as one company block with sub-roles or three sequential `Role` entries (recommend **one company, progressive titles** for timeline clarity).*

### Derivable professional projects (`professionalProjects: Project[]`)

| Project | Company | Tags | Featured? |
|---------|---------|------|-----------|
| Sorbent Ventilation Technology (SVT) — Daikin Rebel RTU | enVerid / Daikin | IAQ, HVAC, Featured | yes |
| SVT — Daikin Vision & Skyline Air Handlers | enVerid / Daikin | IAQ, HVAC | yes |
| enResin-133 / enSorb-144 / SVT-250 commercial scale production | enVerid | Sorbents, Manufacturing | yes |
| Carbon capture R&D (DAC & PSC) | enVerid | Carbon Capture, R&D | |
| Bench & pilot-scale test platform development | enVerid | Prototyping, Sensors | |
| Ocean monitoring & MRV instrumentation | Aquatic Labs | Climate, Ocean | yes |
| cGMP pharmaceutical QC & release testing | SEQENS | Pharma, QC | |

### Skills groups (`skills: SkillGroup[]`)

Organize LinkedIn's skill list into 4–5 readable groups:

| Group | Sample items |
|-------|--------------|
| **Analytical & Lab** | HPLC, FT-IR, DSC, TGA, Karl Fischer, particle size, release testing |
| **R&D & Materials** | Sorbent media, polymers, filtration, carbon capture, IAQ, prototyping |
| **Systems & Engineering** | Data acquisition, electromechanical, sensors, pilot-scale platforms |
| **Quality & Operations** | cGMP, validation, IQ/OQ, QC programs, lab management |
| **Leadership** | Technical lead, R&D management, SME for sorbent compatibility |

### Gaps requiring user input

| Gap | Needed for |
|-----|------------|
| Email address | `contact.email`, footer CTA |
| GitHub URL (if any) | `contact.github`, project links |
| Resume PDF/URL | `about.resumeUrl`, Hero CTA |
| Personal/side projects | `personalProjects`, `/projects/personal` page |
| Bio paragraph (2–3 sentences) | `about.blurb` — LinkedIn has no About text |
| Deploy target | `gatsby-config.ts` `siteUrl`, `pathPrefix` |
| Theme toggle preference | See Phase 3 decision below |

---

## Architectural decisions

### 1. Glass Aurora replaces Bold & Playful Paper

The boilerplate defaults to ink/paper with a light/dark toggle. Glass Aurora is **dark-first** with glass surfaces and aurora gradients. Implementation will:

- Replace CSS variables in `global.css` with Glass Aurora tokens
- Remap `tailwind.config.js` colors, fonts, shadows, radii
- Load **Sora**, **Inter**, **JetBrains Mono** via `src/html.js`
- Add component classes: `.card`, `.card--hero`, `.grad-text`, `.chip`, `.btn`, `.btn--ghost`, `.kicker`, `.aurora-bg`
- Update `.cursor/rules/styling.mdc` to reference Glass Aurora (not Bold & Playful Paper)

### 2. Theme toggle — three options (needs sign-off)

| Option | Pros | Cons |
|--------|------|------|
| **A. Dark-only** (recommended) | Faithful to Glass Aurora; simpler code | No accessibility preference for light |
| **B. Dark default + light "frost" variant** | Keeps `ThemeContext`; respects system pref | Extra design work; light mode undefined in spec |
| **C. Keep toggle, light = muted Glass Aurora** | Minimal context changes | Light mode may look off-brand |

**Recommendation:** Option A — Glass Aurora is a single aesthetic. Remove the header toggle and keep `ThemeContext` as a thin always-dark provider (or drop context entirely). Revisit if light mode is required.

### 3. Content staging

Before coding, seed `context/professional-context/` with structured markdown (agent-authored from LinkedIn):

```
context/professional-context/
  about.md
  contact.md          # placeholders for email/github/resume
  experience.md
  skills.md
  professional-projects.md
  linkedin-export.md  # raw reference
```

Then transform into `src/data/portfolio.ts`.

### 4. Deploy configuration

Update `gatsby-config.ts`:

```ts
siteMetadata: {
  title: "Shawn Brown — Scientist / Engineer",
  siteUrl: "https://<username>.github.io/<repo>",  // match actual repo
}
```

If repo stays `SB_TrialWS`: set `PATH_PREFIX=/SB_TrialWS`. If renamed to `portfolio`: keep default `/portfolio`.

---

## Implementation phases

### Phase 0 — Content prep & sign-off (no code)

**Deliverables:**
- [ ] Answer clarifying questions (below)
- [ ] Populate `context/professional-context/*.md`
- [ ] Approve professional project list and featured highlights
- [ ] Confirm theme toggle decision (A/B/C)
- [ ] Confirm deploy URL / repo name

**Estimated effort:** 30 min (user) + 30 min (agent content drafting)

---

### Phase 1 — Foundation (types + styles + config)

**Files to create/modify:**

| File | Action |
|------|--------|
| `src/types/index.ts` | Create `Accent`, `Project`, `Role`, `SkillGroup` per README |
| `src/styles/global.css` | Glass Aurora tokens, aurora background, component classes |
| `tailwind.config.js` | Map `bg`, `ink`, `glass`, `a1`–`a4`, fonts, shadows, radii |
| `src/html.js` | Google Fonts link for Sora, Inter, JetBrains Mono |
| `gatsby-browser.js` | Import `global.css` (verify exists) |
| `gatsby-config.ts` | Update `siteMetadata` for Shawn Brown |
| `.cursor/rules/styling.mdc` | Update theme reference to Glass Aurora |

**Glass Aurora → Tailwind mapping:**

```css
/* global.css — key tokens */
:root {
  --bg-rgb: 11 16 32;           /* #0B1020 */
  --bg-2-rgb: 18 25 53;         /* #121935 */
  --glass-rgb: 255 255 255;     /* use with /0.06 opacity */
  --stroke-rgb: 255 255 255;    /* /0.16 for borders */
  --ink-rgb: 234 240 255;       /* #EAF0FF */
  --a1-rgb: 139 92 246;         /* violet */
  --a2-rgb: 34 211 238;         /* cyan */
  --a3-rgb: 245 114 182;        /* pink */
  --a4-rgb: 34 211 238;         /* reuse cyan or derive fourth */
}
```

**Signature CSS patterns:**
- `body` / `.aurora-bg` — layered radial gradients (violet, cyan) over linear midnight gradient
- `.card` — `bg-glass/6`, `backdrop-blur-[18px]`, `border border-white/16`, `rounded-[20px]`, soft shadow
- `.card--hero` — adds violet glow shadow (hero only)
- `.grad-text` — gradient text clip for one headline phrase
- `.kicker` — JetBrains Mono, cyan, 12px, letter-spacing

**Milestone:** `npm run typecheck` passes; no pages yet.

---

### Phase 2 — Data layer

**Files:**

| File | Action |
|------|--------|
| `src/data/portfolio.ts` | All typed exports + `cycleAccent`, `collectTags` |
| `context/professional-context/*.md` | Source-of-truth markdown (parallel) |

**`about` export (draft):**

```ts
export const about = {
  name: "Shawn Brown",
  title: "Versatile Scientist / Engineer",
  tagline: "Lab R&D · Sorbent Media · IAQ · Carbon Capture",
  location: "Newton Centre, Massachusetts",
  blurb: "<USER-PROVIDED 2-3 sentences>",
  resumeUrl: "<USER-PROVIDED or omit>",
};
```

**`contact` export (draft):**

```ts
export const contact = {
  email: "<USER-PROVIDED>",
  linkedin: "https://www.linkedin.com/in/shawn-brown-710a2358/",
  github: "<USER-PROVIDED or omit>",
};
```

**Milestone:** `npm run typecheck` passes with populated data.

---

### Phase 3 — Context (theme)

**File:** `src/context/ThemeContext.tsx`

**If Option A (dark-only):**
- Provider sets `document.documentElement.classList.add('dark')` on mount
- Expose minimal API or skip toggle in `Layout`
- No `localStorage` theme persistence needed

**If Option B/C:**
- Extend `global.css` with `.light` variant tokens
- Keep full toggle with SSR guards per README

**Milestone:** Provider wraps without SSR errors.

---

### Phase 4 — Components (Glass Aurora styling)

Build in dependency order:

| # | Component | Key Glass Aurora treatments |
|---|-----------|----------------------------|
| 1 | `Layout.tsx` | Frosted glass sticky header; mono nav kickers; footer contact chips |
| 2 | `Hero.tsx` | `.card--hero` glass panel; `.grad-text` on one phrase; gradient CTA btn |
| 3 | `About.tsx` | 2–3 stat/highlight glass cards (years exp, focus areas, location) |
| 4 | `Experience.tsx` | Timeline of glass cards; cyan period kickers; accent bullet markers |
| 5 | `Skills.tsx` | Chip grids per group; mono labels |
| 6 | `ProjectCard.tsx` | Glass card; expandable bullets; optional external link btn |
| 7 | `ProjectGrid.tsx` | Filter chips + responsive 1→2→3 grid |
| 8 | `FeaturedProjects.tsx` | Home section; 3–4 featured cards; link to `/projects/professional` |

**Layout conventions (Glass Aurora):**
- Section: `max-w-6xl mx-auto px-4 sm:px-6 py-20`
- Generous vertical rhythm — let dark space breathe between glass panels
- Optional gradient hairline on card top edge (`border-t` with gradient)
- `prefers-reduced-motion` guard on any `.rise` entrance animations

**Milestone:** Components render in isolation (Storybook not required; wire via `index.tsx` stub).

---

### Phase 5 — Pages & routing

| File | Route | Composition |
|------|-------|---------------|
| `src/pages/index.tsx` | `/` | Hero → About → Experience → FeaturedProjects → Skills |
| `src/pages/404.tsx` | fallback | Glass panel, playful copy, "Take me home" ghost btn |
| `src/pages/projects/professional.tsx` | `/projects/professional` | Intro + `ProjectGrid(professionalProjects)` |
| `src/pages/projects/personal.tsx` | `/projects/personal` | Intro + `ProjectGrid(personalProjects)` or empty state |

Each page exports `Head` with SEO title/description.

**404 copy direction (on-brand for Glass Aurora):**
- Headline: "This page drifted into the void."
- Subtext: "Even aurora lights can't find that URL."
- Store in `notFound` export in `portfolio.ts` for easy editing.

**Milestone:** `npm run develop` (user runs) — all routes work; 404 tested.

---

### Phase 6 — Deploy & polish

| Task | Detail |
|------|--------|
| Update `gatsby-config.ts` | Final `siteUrl`, `pathPrefix` |
| Verify `gatsby-node.ts` | `404.html` copy for GitHub Pages |
| Run `npm run build:gh-pages` | Production build with prefix |
| Run `npm run typecheck` | Zero errors |
| Visual QA | Aurora glows, glass blur, gradient text, mobile responsive |
| Accessibility | Contrast on muted text, focus rings, reduced motion |

---

## File creation checklist (32 files)

```
src/types/index.ts
src/data/portfolio.ts
src/styles/global.css
src/context/ThemeContext.tsx
src/html.js
src/components/Layout.tsx
src/components/Hero.tsx
src/components/About.tsx
src/components/Experience.tsx
src/components/Skills.tsx
src/components/ProjectCard.tsx
src/components/ProjectGrid.tsx
src/components/FeaturedProjects.tsx
src/pages/index.tsx
src/pages/404.tsx
src/pages/projects/professional.tsx
src/pages/projects/personal.tsx
context/professional-context/about.md
context/professional-context/contact.md
context/professional-context/experience.md
context/professional-context/skills.md
context/professional-context/professional-projects.md
context/professional-context/linkedin-export.md
tailwind.config.js          (modify)
gatsby-config.ts            (modify)
.cursor/rules/styling.mdc    (modify)
```

---

## Visual composition map

```
┌─────────────────────────────────────────────────────────┐
│  [aurora glow layer — fixed, behind all content]        │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Layout: frosted glass header                      │  │
│  │  Logo/name · Nav (Work, Personal) · [toggle?]     │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─ Hero (.card--hero + glow) ─────────────────────┐   │
│  │  kicker: "Lab Engineer · Climate Tech"            │   │
│  │  h1: Shawn Brown — <grad-text>Scientist</grad>    │   │
│  │  tagline + blurb                                  │   │
│  │  [View Work] [LinkedIn] [Resume?]                 │   │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  About — 3 glass stat cards                             │
│  Experience — timeline glass cards                      │
│  Featured Projects — 3-col grid, top projects           │
│  Skills — chip groups                                   │
│                                                         │
│  Footer — contact chips + copyright                     │
└─────────────────────────────────────────────────────────┘
```

---

## Test plan

1. `npm run typecheck` — clean after each phase
2. `npm run develop` — home page renders with aurora + glass
3. Navigate `/projects/professional` — filter chips work
4. Navigate `/projects/personal` — renders or shows intentional empty state
5. Visit `/nonexistent` — custom 404
6. `npm run build:gh-pages && npm run serve:gh-pages` — prefixed assets load
7. Toggle theme (if kept) — no SSR flash; preference persists
8. `prefers-reduced-motion: reduce` — animations suppressed

---

## Risks & mitigations

| Risk | Mitigation |
|------|------------|
| `backdrop-filter` unsupported in old browsers | `-webkit-backdrop-filter` prefix; acceptable degradation |
| Glass panels low contrast | Keep `--ink` at `#EAF0FF`; muted text at 62% opacity minimum |
| Thin content on personal projects page | Empty-state glass card with CTA to LinkedIn |
| LinkedIn facts only — no metrics | Use qualitative bullets from experience; no invented numbers |
| Repo name ≠ `portfolio` | Set `PATH_PREFIX` to match; update CI if needed |

---

## Clarifying questions (required before implementation)

1. **Theme toggle:** Dark-only (recommended), or keep a light/dark switch?
2. **Contact:** What email, GitHub URL, and resume link (if any) should appear?
3. **Bio:** Please provide a 2–3 sentence blurb (LinkedIn has no About section).
4. **Personal projects:** Any side projects to list, or hide `/projects/personal` until you have some?
5. **Deploy URL:** Will this repo stay `SB_TrialWS` or be renamed `portfolio`? What GitHub username?
6. **Featured work:** Approve the 4 suggested featured projects, or pick different highlights?
7. **enVerid roles:** Show as one company entry with title progression, or three separate timeline cards?

---

## Suggested execution order (after sign-off)

```
Phase 0 (content + answers)
  → Phase 1 (types, styles, tailwind, html.js, gatsby-config)
  → Phase 2 (portfolio.ts + context markdown)
  → Phase 3 (ThemeContext)
  → Phase 4 (components, Layout+Hero first)
  → Phase 5 (pages)
  → Phase 6 (build, deploy config, QA)
```

**Estimated total implementation:** ~4–6 hours of agent work across phases 1–6, assuming questions 1–7 are answered upfront.
