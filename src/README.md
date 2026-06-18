# `src/` — Application Source

This folder is intentionally empty of implementation code. Each subfolder has its own `README.md` explaining what to build and how the pieces fit together.

## Recommended build order

1. **`types/`** — Define shared TypeScript interfaces (`Project`, `Role`, `SkillGroup`, `Accent`).
2. **`data/`** — Add your portfolio content as typed exports (about, contact, experience, skills, projects).
3. **`styles/`** — Create `global.css` with Tailwind directives and design tokens; import it from `gatsby-browser.js`.
4. **`context/`** — Add a React context for dark/light theme (localStorage + system preference).
5. **`components/`** — Build reusable UI sections (Layout, Hero, cards, grids).
6. **`pages/`** — Wire pages together with Gatsby file-based routing; add `404.tsx`
   per [`pages/404/README.md`](./pages/404/README.md). See [`pages/routing/README.md`](./pages/routing/README.md) for the `/portfolio` URL convention and deploy.

## Optional Gatsby customization

Create `src/html.js` if you want to customize the HTML shell (fonts, Font Awesome, meta tags). Gatsby picks it up automatically.

```js
// src/html.js — example structure
import React from "react"
import PropTypes from "prop-types"

function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default HTML
```

## Architecture overview

```
pages/          → routes (compose components + providers)
  └── index     → home: Hero, About, Experience, FeaturedProjects, Skills
  └── 404       → funny not-found page (see pages/404/README.md)
  └── projects/ → filtered project listing pages

components/     → presentational React components
context/        → cross-cutting React state (theme)
data/           → static content, no JSX
types/          → TypeScript shapes shared by data + components
styles/         → global CSS, Tailwind layers, design tokens
```

## Getting unblocked

After adding at least `pages/index.tsx`, run:

```bash
npm run develop
```

The site will not build until you create your first page file.
