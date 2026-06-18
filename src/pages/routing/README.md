# Routing — GitHub Pages URLs & the `/portfolio` convention

This site defaults to a **GitHub project site** served under the repo name, e.g.
`https://jackbergin.github.io/portfolio/` and
`https://jackbergin.github.io/portfolio/projects/personal`.

## TL;DR — name your repo `portfolio`

On GitHub Pages, **the repo name *is* the URL segment** for a project site. The
default `pathPrefix` is `/portfolio`, so:

| Repo name | Published URL | Clean? |
|-----------|---------------|--------|
| `portfolio` ✅ | `https://<username>.github.io/portfolio/` | yes — the convention |
| `resume` | `https://<username>.github.io/resume/` | works, but off-convention |
| `resume-boilerplate` | `https://<username>.github.io/resume-boilerplate/` | noisy URL — avoid |

> **Convention:** name the repository **`portfolio`** so everyone's site lives
> at the predictable, clean `…github.io/portfolio`. If you fork this under a
> different name, either rename the repo to `portfolio` or set `PATH_PREFIX` to
> match your repo name (see below) — otherwise assets and links 404.

## Can I serve at the bare root instead (`…github.io/`)?

Yes — but the URL is decided by the **repo name and site type**, not by a config
flag. GitHub Pages has exactly two site types:

| Site type | Repo must be named | Served at | `pathPrefix` |
|-----------|--------------------|-----------|--------------|
| **Project site** (default here) | anything (use `portfolio`) | `…github.io/<repo>/` | `/<repo>` |
| **User / Org site** | **exactly** `<username>.github.io` | `…github.io/` (root) | `""` (empty) |

So to serve at the bare root `https://<username>.github.io/`:

1. Name the repo **exactly** `<username>.github.io` (e.g. `jackbergin.github.io`).
2. Build with an empty prefix: `npm run build:gh-pages:root`.

Tradeoffs of the root user-site:

- You get **only one** user/org site per GitHub account.
- The repo name is **locked to your username** — it can't be `portfolio`, so you
  lose the `/portfolio` convention.
- It reads as "your entire GitHub site," not "a project."

There is also a **third option**: keep a `portfolio` project repo **and** attach a
**custom domain** (a `CNAME` file + DNS). A custom domain serves at *its* root, so
you also use `PATH_PREFIX=""` — see [Custom domain](#custom-domain-root-on-your-own-domain).

## How Gatsby routing works here

| Layer | Responsibility |
|-------|----------------|
| `src/pages/` | File-based routes (`index.tsx` → `/`, `projects/personal.tsx` → `/projects/personal`) |
| `gatsby-config.ts` | `pathPrefix` (defaults to `/portfolio`, override via `PATH_PREFIX`) and `siteMetadata.siteUrl` |
| `gatsby-node.ts` | Copies `index.html` → `404.html` after build so GitHub Pages can serve the app on unknown paths |
| `src/pages/404.tsx` | Custom not-found UI once the app loads (see [`404/README.md`](../404/README.md)) |

Internal links **must** use Gatsby `<Link>` — never hard-code absolute paths.
Gatsby automatically prepends `pathPrefix` to `<Link>` targets and assets when
built with `--prefix-paths`, which is exactly why hard-coded `<a href="/…">`
breaks on a prefixed deploy.

## Configuration knobs

`pathPrefix` resolves from `PATH_PREFIX` and falls back to `/portfolio`:

```ts
const pathPrefix = process.env.PATH_PREFIX ?? "/portfolio";
```

| `PATH_PREFIX` | Use when | URL |
|---------------|----------|-----|
| *(unset)* → `/portfolio` | repo named `portfolio` (the default) | `…github.io/portfolio/` |
| `/my-repo` | project repo with a different name | `…github.io/my-repo/` |
| `""` (empty) | user/org site **or** custom domain | root `/` |

`siteMetadata.siteUrl` (or the `SITE_URL` env var) is the canonical URL for
SEO/sitemap — keep it in sync with the published URL (it defaults to
`https://jackbergin.github.io/portfolio`).

## Deploying

### Project site (default — `…github.io/portfolio/`)

```bash
npm run build:gh-pages   # gatsby build --prefix-paths  (pathPrefix=/portfolio)
npm run deploy           # clean → build:gh-pages → publish ./public to gh-pages
```

### Root user-site (`…github.io/`)

Requires the repo to be named `<username>.github.io`:

```bash
npm run build:gh-pages:root   # PATH_PREFIX= gatsby build  (empty prefix)
gh-pages -d public            # or let CI publish ./public
```

### Custom domain (root on your own domain)

Serve a `portfolio` project repo at a domain root:

1. Add a `static/CNAME` file containing your domain (e.g. `www.example.com`) so
   Gatsby copies it to `public/CNAME`.
2. Build with an empty prefix (`npm run build:gh-pages:root`) and set
   `SITE_URL=https://www.example.com`.
3. Configure DNS per GitHub's custom-domain docs.

## GitHub Pages 404 fallback

GitHub Pages has no server-side router. When someone refreshes on
`/portfolio/projects/personal` or hits a bad URL, GitHub looks for a static file,
fails, then serves `404.html`.

`gatsby-node.ts` copies `index.html` to `404.html` after every build so:

1. The full Gatsby app loads (scripts, styles, router).
2. Gatsby's client router matches the path or falls through to `404.tsx`.

Without this copy, deep links and refreshes show GitHub's plain 404 — not your page.

## Local verification

```bash
# Project-site default (mirrors the live /portfolio prefix):
npm run build:gh-pages
npm run serve:gh-pages
# Visit http://localhost:9000/portfolio/some-fake-path — should show your 404.tsx

# Root / user-site or custom domain:
npm run build:gh-pages:root
npm run serve:gh-pages:root
# Visit http://localhost:9000/some-fake-path
```

## Checklist before deploy

- [ ] Repo is named `portfolio` (or `PATH_PREFIX` matches the actual repo name)
- [ ] `pathPrefix` (`/portfolio` by default) matches the live URL segment — or is empty for root/custom-domain
- [ ] `siteMetadata.siteUrl` matches the live URL
- [ ] `src/pages/404.tsx` exists (see [`404/README.md`](../404/README.md))
- [ ] Internal nav uses `<Link>` from `gatsby`, not `<a href="/…">`
- [ ] `npm run build:gh-pages` succeeds and `public/404.html` exists after build
