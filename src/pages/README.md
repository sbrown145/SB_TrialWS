# `pages/` — Gatsby Routes

Gatsby uses **file-based routing**: each file here becomes a URL. Files must be `.tsx` (or `.js`) — this folder currently contains only guidance.

**Routing & GitHub Pages:** The site defaults to a project site served under the repo name — name the repo `portfolio` for the clean `…github.io/portfolio` URL (`pathPrefix=/portfolio`). See [`routing/README.md`](./routing/README.md) for the repo-name → URL matrix, the `404.html` fallback, and root/custom-domain builds.

## Routes to create

| File | URL | Purpose |
|------|-----|---------|
| `index.tsx` | `/` | Home — Hero, About, Experience, FeaturedProjects, Skills |
| `404.tsx` | (fallback) | Custom funny not-found page — see [`404/README.md`](./404/README.md) |
| `projects/professional.tsx` | `/projects/professional` | Work projects with filterable grid |
| `projects/personal.tsx` | `/projects/personal` | Personal projects with filterable grid |

See [`projects/README.md`](./projects/README.md) for the project listing pages.

## Page template

Every page follows the same wrapper pattern:

```tsx
import React from 'react';
import { HeadFC } from 'gatsby';
import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';

const IndexPage: React.FC = () => (
  <ThemeProvider>
    <Layout>
      {/* page sections */}
    </Layout>
  </ThemeProvider>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Your Name — Title</title>
    <meta name="description" content="…" />
  </>
);
```

## SEO with `Head`

Export a named `Head` component from each page to set `<title>` and meta tags. Gatsby merges these into the document head at build time.

## Home page composition

```tsx
<Layout>
  <Hero />
  <About />
  <Experience />
  <FeaturedProjects />
  <Skills />
</Layout>
```

## 404 page

Import `Link` from `gatsby` and wrap content in the same `ThemeProvider` + `Layout` shell. Keep the tone on-brand and playful with a clear "Go Home" CTA.

Full guidance — copy ideas, template, and test steps — lives in [`404/README.md`](./404/README.md).

## First milestone

Create `index.tsx` and `404.tsx` with `ThemeProvider`, `Layout`, and placeholder content — then run `npm run develop` to confirm routing and the not-found fallback before building out sections.
