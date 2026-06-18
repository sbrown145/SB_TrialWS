# `.cursor/` — assistant configuration

Cursor configuration for this **Gatsby + TypeScript + Tailwind portfolio**.

## `rules/`

Persistent guidance applied to the assistant. `alwaysApply` rules are loaded
every turn; the rest attach when their `globs` match the files being edited.

| Rule | Scope | Purpose |
|---|---|---|
| `master.mdc` | always | Project overview, conventions, clarification protocol, chat guidelines |
| `typescript-react.mdc` | `src/**/*.ts(x)`, `gatsby-*` | TypeScript/React/Gatsby conventions, SSR guards |
| `styling.mdc` | `src/styles/**`, `*.tsx`, `tailwind.config.js` | Tailwind + design-token conventions |

## `commands/`

Reusable prompts invoked with `/<name>`.

| Command | Use |
|---|---|
| `preflight` | Confidence check + surface unknowns before a larger change |
| `implement` | Execute an agreed plan without scope creep |
| `code-review` | Structured review checklist |
| `debug-issue` | Systematic debugging walkthrough |
| `optimize-performance` | Find and fix performance bottlenecks |
| `write-unit-tests` | Generate tests following project conventions |
| `security-review` | Security audit with remediation steps |
| `deploy` | Gatsby → GitHub Pages deploy procedure |
| `git-commit` | Canonical commit format for this repo |
| `onboard-new-developer` | New-contributor setup |
| `updateplan` | Fold new input into the current plan |
| `summarizework` | Summarize uncommitted work for handoff |
| `summarizefortransfer` | Dense conversation snapshot for a new thread |

## `plans/`

Created on demand. Larger efforts write a plan to
`.cursor/plans/<YYYY-MM-DD>-<slug>.plan.md` for sign-off before implementation
(see the clarification protocol in `rules/master.mdc`).
