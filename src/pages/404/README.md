# `404.tsx` — Funny Not-Found Page

Gatsby uses `src/pages/404.tsx` as the fallback when no route matches. On GitHub
Pages, `gatsby-node.ts` also copies `index.html` to `404.html` so refreshes and
deep links load the app before this page renders. See
[`../routing/README.md`](../routing/README.md) for the full routing picture.

## What to build

| Concern | Guidance |
|---------|----------|
| Tone | On-brand but playful — a joke beats a sterile "Page not found" |
| Layout | Same `ThemeProvider` + `Layout` shell as every other page |
| CTA | Prominent "Go Home" link via Gatsby `<Link to="/">` |
| SEO | Export `Head` with a fun `<title>` (e.g. "404 — You've Drifted Off the Map") |

## Suggested copy (pick or remix)

- **Headline:** "This page went on a coffee break and never came back."
- **Subtext:** "The URL you're looking for doesn't exist — or maybe it never did. Either way, you're in uncharted territory."
- **Alt headline:** "404: Even my portfolio can't find this one."
- **Alt subtext:** "Double-check the link, or head home before the nav police catch you."

Keep copy in `src/data/portfolio.ts` if you want to edit text without touching JSX
(export a `notFound` object with `headline`, `subtext`, `ctaLabel`).

## Template

```tsx
import React from 'react';
import { Link, HeadFC } from 'gatsby';
import { ThemeProvider } from '../../context/ThemeContext';
import Layout from '../../components/Layout';

const NotFoundPage: React.FC = () => (
  <ThemeProvider>
    <Layout>
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-a2">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-ink">
          This page went on a coffee break and never came back.
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          The URL you typed doesn't exist — or maybe it never did.
          Either way, you're in uncharted territory.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-a1 px-6 py-3 font-semibold text-bg transition hover:opacity-90"
        >
          Take me home
        </Link>
      </section>
    </Layout>
  </ThemeProvider>
);

export default NotFoundPage;

export const Head: HeadFC = () => (
  <>
    <title>404 — You've Drifted Off the Map</title>
    <meta name="robots" content="noindex" />
  </>
);
```

## Styling notes

- Use semantic tokens (`text-ink`, `bg-a1`, `text-a2`) — no hard-coded hex.
- A large decorative element (emoji, SVG, or accent shape) adds personality
  without extra dependencies.
- `meta name="robots" content="noindex"` keeps search engines from indexing
  error pages.

## How to test

```bash
npm run develop
# Visit http://localhost:8000/this-route-does-not-exist
```

After a production build:

```bash
npm run build:gh-pages && npm run serve:gh-pages
# Visit http://localhost:9000/nope — should show this page, not a blank 404
```

## Milestone

Create `404.tsx` alongside `index.tsx` in the first pages milestone so routing
and the GitHub Pages fallback are validated before adding project sub-routes.
