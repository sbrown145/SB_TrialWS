# `components/` — Reusable UI

Presentational React components. They import typed data from `data/portfolio.ts` and types from `types/`. No routing logic here — pages compose these pieces.

## Suggested components

| File | Role |
|------|------|
| `Layout.tsx` | Page shell: sticky header, nav links, theme toggle, footer with contact CTAs |
| `Hero.tsx` | Home hero: name, title, tagline, blurb, primary CTAs |
| `About.tsx` | Stats / highlight cards section |
| `Experience.tsx` | Work history timeline from `experience` data |
| `Skills.tsx` | Skill groups as chip grids |
| `ProjectCard.tsx` | Single project card with expandable bullets and optional GitHub link |
| `ProjectGrid.tsx` | Responsive grid + optional tag filter bar |
| `FeaturedProjects.tsx` | Home section showing top featured projects |

## Component relationships

```
Layout
  └── (children from pages)

FeaturedProjects
  └── ProjectCard × N

ProjectGrid
  └── ProjectCard × N (filtered by active tag)
```

## `Layout.tsx`

- Uses Gatsby `<Link>` for internal routes: `/`, `/projects/professional`, `/projects/personal`
- Reads `about` and `contact` from data for branding and footer links
- Calls `useTheme()` for the ink/paper toggle in the header

## `ProjectCard.tsx`

Props: `{ project: Project }`

- Collapsed state shows title, company, period, summary, and tags
- "Details" button expands `bullets` list when present
- Optional `link` renders a GitHub button
- `featured` projects get `card--shadow` for emphasis
- `accent` drives the corner block and bullet markers (`fill-a1` … `fill-a4`)

## `ProjectGrid.tsx`

Props: `{ projects: Project[]; filterable?: boolean }`

- Builds filter chips from `collectTags(projects)` plus an "All" option
- Filters visible cards client-side with `useMemo`
- Responsive: 1 → 2 → 3 columns

## Styling conventions

- Section wrapper: `max-w-6xl mx-auto px-4 sm:px-6 py-20`
- Section label: `kicker text-ink/60 mb-3`
- Section heading: `font-display text-4xl sm:text-5xl`
- Cards: `card`, optional `lift` and `card--shadow`

## Getting started

Create `Layout.tsx` and `Hero.tsx` first, then add `pages/index.tsx` to see progress in the browser.
