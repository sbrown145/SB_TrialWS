# Deploy (Gatsby → GitHub Pages)

## Overview

This site is a static Gatsby build published to the `gh-pages` branch and served
by GitHub Pages. **Flat URLs** at the domain root are the default (no `/portfolio`
subpath). There are two ways it deploys:

1. **Automatic (preferred):** pushing to `main` triggers
   `.github/workflows/deploy.yml`, which builds and publishes `./public` to
   `gh-pages`.
2. **Manual:** `npm run deploy` builds locally and pushes to `gh-pages` via the
   `gh-pages` CLI.

Routing details: [`src/pages/routing/README.md`](../../src/pages/routing/README.md).

## Before deploying

- [ ] `npm run typecheck` passes (no TypeScript errors).
- [ ] `npm run build:gh-pages` succeeds locally (catches SSR/`window` issues the
      dev server hides).
- [ ] `siteMetadata.siteUrl` in `gatsby-config.ts` matches the live Pages URL.
- [ ] For flat URLs (default), `pathPrefix` is empty and `public/404.html` exists
      after `npm run build:gh-pages` (copied by `gatsby-node.ts`).
- [ ] `src/pages/404.tsx` is implemented per [`src/pages/404/README.md`](../../src/pages/404/README.md).
- [ ] Changes are committed (see `.cursor/commands/git-commit.md`).

## Automatic deploy (CI)

```bash
git push origin main
# GitHub Actions runs deploy.yml: install → build:gh-pages → publish to gh-pages
```

Then watch the run:

```bash
gh run watch
# or inspect a failing run:
gh run view --log-failed
```

## Manual deploy

```bash
npm run deploy
# = gatsby clean && gatsby build && gh-pages -d public
```

For a project-site subpath (e.g. `/portfolio/`):

```bash
PATH_PREFIX=/portfolio npm run build:gh-pages:prefixed
gh-pages -d public
```

## Verify

- GitHub → repo → **Settings → Pages** points at the `gh-pages` branch.
- The published URL (`siteMetadata.siteUrl`) loads at the domain root with
  assets and internal links resolving without a subpath.
- Visiting a non-existent path shows your custom `404.tsx`, not GitHub's generic 404.

## Common pitfalls

| Symptom | Likely cause | Fix |
|---|---|---|
| Build passes in `develop` but fails in CI | Unguarded `window`/`localStorage` at module/render scope | Guard with `typeof window !== 'undefined'` or move into `useEffect` |
| CSS/images 404 on the live site | Wrong `pathPrefix` or prefixed build used on a flat URL site | Default to empty `pathPrefix`; use `build:gh-pages` not `build:gh-pages:prefixed` |
| Deep links / refresh 404 on Pages | Missing `404.html` SPA fallback | `gatsby-node.ts` copies `index.html` → `404.html`; confirm `public/404.html` after build |
| Custom 404 not shown | `404.tsx` not created yet | Implement per `src/pages/404/README.md` |
| Internal links break on Pages | Hard-coded `<a href>` instead of Gatsby `<Link>` | Use `<Link>` so the prefix is applied |
| Old content still served | Pages cache / wrong publish branch | Confirm `gh-pages` branch updated; hard-refresh |

## Reference files

- [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml) — CI build + publish
- [`gatsby-config.ts`](../../gatsby-config.ts) — `pathPrefix`, `siteMetadata`
- [`gatsby-node.ts`](../../gatsby-node.ts) — `404.html` SPA fallback for GitHub Pages
- [`src/pages/routing/README.md`](../../src/pages/routing/README.md) — flat vs prefixed routing
- [`src/pages/404/README.md`](../../src/pages/404/README.md) — custom not-found page
- [`package.json`](../../package.json) — `build:gh-pages`, `deploy` scripts
