# `context/professional-context/` — Your Content Source

This folder is where you put **your raw professional content** — the material
the AI agent reads to fill the site with *your* real information. It is the
content counterpart to `context/styles/` (which controls *how* the site looks).

Like `context/styles/`, this is an **input to the build**, not source code.
Nothing here is imported by Gatsby. The agent reads these files and turns them
into typed exports in `src/data/portfolio.ts` (see `src/data/README.md`).

## What to put here

Drop in whatever describes your career and work. Plain Markdown or text is fine;
the more structured, the better the agent maps it. Typical files:

| File (suggested) | Contents |
|---|---|
| `about.md` | Name, title, tagline, location, short bio blurb, link to your resume |
| `contact.md` | Email, LinkedIn, GitHub, and any other links |
| `experience.md` | Work history: role, company, period, location, achievement bullets |
| `skills.md` | Skill groups (e.g. Languages, Frameworks, Tools) and their items |
| `professional-projects.md` | Work / employer projects — title, company, period, summary, detail bullets, tags, links |
| `personal-projects.md` | Side projects and open-source work — same shape as above |
| `linkedin-export.md` | Raw paste from your LinkedIn profile / exported data to mine for the above |
| `resume.pdf` | Optional source resume the agent can read for facts |

You don't need every file — start with `about`, `experience`, and a projects
list. Anything missing just isn't rendered.

## How it maps into the app

The agent transforms this raw content into the typed exports consumed by the
components. The shapes are defined in `src/types/` and the export contract in
`src/data/README.md`:

| Here (raw) | Becomes (typed export in `src/data/portfolio.ts`) | Type |
|---|---|---|
| `about.md` | `about` | object |
| `contact.md` | `contact` | object |
| `experience.md` | `experience` | `Role[]` |
| `skills.md` | `skills` | `SkillGroup[]` |
| `professional-projects.md` | `professionalProjects` | `Project[]` |
| `personal-projects.md` | `personalProjects` | `Project[]` |

Guidance for the agent when converting:

- **Keep copy here, code in `src/`.** This folder is the editable source of
  truth for *content*; `src/data/portfolio.ts` is the generated, typed form.
- **Tag projects** so `ProjectGrid` can build its filter bar; mark highlights
  with the `Featured` tag plus `featured: true` for the home page.
- **Assign accents** (`a1`–`a4`) for visual variety, or let `cycleAccent(i)`
  rotate them.
- **Don't invent facts.** If something isn't in these files, leave it out rather
  than fabricating dates, employers, or metrics.
