# Portfolio Boilerplate

A learning-oriented starter for building a personal portfolio with **Gatsby**, **TypeScript**, and **Tailwind CSS**. You build it by feeding an AI agent two inputs from [`context/`](#build-workflow-style--content) — a **style** and your **professional content** — and having it implement the `src/` files, where each subfolder's `README.md` encodes the correct Gatsby framework patterns. No implementation files ship yet; follow the docs to build the site step by step.

## Tech stack

- **Framework**: [Gatsby](https://www.gatsbyjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Theme**: Dark/light mode with system preference detection (you implement this in `src/context/`)

## Project structure

```
portfolio/
├── context/                        # Inputs you feed the AI agent (not shipped code)
│   ├── styles/                     # Design-system references — pick one "look"
│   │   └── README.md
│   └── professional-context/       # Your raw content: experience, projects, LinkedIn
│       └── README.md
├── src/                            # The Gatsby application (README guides, no code yet)
│   ├── README.md                   # Build order & architecture
│   ├── types/                      # Shared TypeScript types (README only)
│   ├── data/                       # Portfolio content as typed exports (README only)
│   ├── styles/                     # Global CSS & design tokens (README only)
│   ├── context/                    # Theme provider (README only)
│   ├── components/                 # Reusable React components (README only)
│   └── pages/                      # Gatsby routes (README only)
│       └── projects/
├── gatsby-config.ts
├── gatsby-browser.js
├── tailwind.config.js
└── tsconfig.json
```

There are two halves:

- **`context/`** — the *inputs* you give the AI agent. `context/styles/` defines
  **how** the site looks; `context/professional-context/` defines **what** it
  says (your work history, projects, links). These are reference material, never
  imported by Gatsby.
- **`src/`** — the actual Gatsby app. Each subfolder ships a `README.md` that
  encodes the **correct Gatsby framework patterns** for that layer, so the agent
  builds idiomatic code (see [Why the `src/` READMEs matter](#why-the-src-readmes-matter)).

Start with [`src/README.md`](./src/README.md) for the recommended build order.

## Getting started

1. **Clone the repository**

```bash
git clone https://github.com/JackBergin/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Build the app**

Follow the workflow below. Create `src/pages/index.tsx` first, then run:

```bash
npm run develop
```

The dev server will not serve a site until at least one page exists.

## Build workflow (style → content)

This repo is built by handing an AI agent two kinds of context — a **style** and
your **professional content** — and having it implement the `src/` files in
order. The recommended flow:

### 1. Choose and implement a style

1. Browse [`context/styles/`](./context/styles/README.md) and pick one design
   system (e.g. *Bold & Playful Paper*, *Swiss Grid*, *Luxe Noir*).
2. Hand the agent that style's **"Prompt to hand the agent"** plus its **design
   tokens**, and ask it to implement the styling layer per
   [`src/styles/README.md`](./src/styles/README.md):
   - `src/types/index.ts` — shared shapes (`Project`, `Role`, `SkillGroup`, `Accent`)
   - `src/styles/global.css` — Tailwind layers + the style's tokens as CSS variables
   - `tailwind.config.js` — map semantic colors (`bg`, `ink`, `a1`–`a4`) to those variables
3. Result: a themed shell with no real content yet.

### 2. Implement the content buildout

1. Put your real material in
   [`context/professional-context/`](./context/professional-context/README.md) —
   work experience, project lists, LinkedIn export, etc.
2. Have the agent turn that into typed exports in `src/data/portfolio.ts`
   following [`src/data/README.md`](./src/data/README.md), then build the
   `context/` provider, `components/`, and `pages/` that render it.
3. Result: your portfolio, in your chosen style, populated with your content.

```
context/styles/  ──▶  src/styles + tailwind.config + types   (the look)
context/professional-context/  ──▶  src/data  ──▶  components + pages   (the content)
```

## Why the `src/` READMEs matter

Each `src/` subfolder `README.md` is the **framework contract** for that layer —
it tells the agent the idiomatic Gatsby + TypeScript + Tailwind way to build it,
so the generated code is correct and consistent:

| README | Encodes |
|---|---|
| [`src/README.md`](./src/README.md) | Recommended build order and the layered architecture |
| [`src/types/README.md`](./src/types/README.md) | The shared type shapes that bind `data/` to `components/` |
| [`src/data/README.md`](./src/data/README.md) | Content-as-typed-exports contract (no JSX in data) |
| [`src/styles/README.md`](./src/styles/README.md) | Design tokens as CSS variables + Tailwind mapping |
| [`src/context/README.md`](./src/context/README.md) | Theme provider with SSR-safe `window`/`localStorage` guards |
| [`src/components/README.md`](./src/components/README.md) | Presentational components and their composition |
| [`src/pages/README.md`](./src/pages/README.md) | File-based routing, the `Head` SEO export, page composition |
| [`src/pages/routing/README.md`](./src/pages/routing/README.md) | The `/portfolio` repo-name convention, GitHub Pages 404 fallback, root/custom-domain deploys |
| [`src/pages/404/README.md`](./src/pages/404/README.md) | Custom funny not-found page template |

Following them keeps the build aligned with Gatsby conventions (file-based
routing, the `Head` API, server-first rendering) rather than improvising.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run develop` | Local dev server |
| `npm run build` | Production build (no prefix) |
| `npm run build:gh-pages` | Production build for the default `/portfolio` project site (`--prefix-paths`) |
| `npm run build:gh-pages:root` | Build with an empty prefix for a root user-site or custom domain |
| `npm run serve:gh-pages` | Serve the prefixed build locally (mirrors `/portfolio`) |
| `npm run serve:gh-pages:root` | Serve the empty-prefix build locally |
| `npm run deploy` | Build (`/portfolio`) and publish to `gh-pages` branch |
| `npm run typecheck` | Run TypeScript without emitting |

## Deployment

> **Name the repo `portfolio`.** On GitHub Pages the repo name becomes the URL
> segment, so `portfolio` publishes to the clean `https://<username>.github.io/portfolio/`
> — versus `…/resume` or `…/resume-boilerplate`. This is the project convention.

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on pushes to `main`.

**Project site (default):** Published under the repo name at
`https://<username>.github.io/portfolio/` (`pathPrefix=/portfolio`, applied via
`--prefix-paths`). Update `siteMetadata.siteUrl` in `gatsby-config.ts` to match.

**Root user-site (alternative):** To serve at the bare root
`https://<username>.github.io/`, the repo must be named **exactly**
`<username>.github.io`; build with `npm run build:gh-pages:root` (or set
`PATH_PREFIX=""`). A custom domain similarly serves at its root with an empty
prefix. See [`src/pages/routing/README.md`](./src/pages/routing/README.md) for the
full repo-name → URL matrix and tradeoffs.
