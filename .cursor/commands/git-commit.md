# Git Commit (canonical for this repo)

## Overview

Create a commit with a strict two-`-m` structure: a tagged title and a 1-3
sentence body explaining the essence. Use the local OS git identity — never
inject Cursor attribution into the message.

## Steps

1. **Review changes**
   - `git status` to see what's staged/unstaged.
   - `git diff --cached` (staged) or `git diff` (unstaged) to read the diff.
   - Understand what changed and **why**.
2. **Stage if needed**
   - `git add -A` (or stage selectively).
3. **Confirm git identity is the OS user, not Cursor**
   - `git config user.name` should be the local user.
   - **Never** add lines like `🤖 Generated with Cursor`, `Co-Authored-By: Cursor`, or any Cursor-attribution to the commit message body.
4. **Compose the commit message**
   - Choose a tag: `feature` | `bug` | `refactor` | `docs` | `infra` | `test` | `chore`.
   - Write a short title (≤ 72 chars).
   - Write 1-3 sentences capturing the essence (the "why" + the impact).
5. **Run the commit**

## Required structure

```bash
git commit -m "<tag>: <Title and brief summary>" \
           -m "<1-3 sentence essence of what we committed.>"
```

## Examples

```bash
git commit -m "feature: Add filterable ProjectGrid component" \
           -m "Adds a responsive 1-2-3 column grid that derives filter chips from project tags via collectTags and filters cards client-side with useMemo. Wired into the professional and personal project pages."
```

```bash
git commit -m "bug: Guard localStorage access in ThemeContext for SSR" \
           -m "gatsby build failed because the theme initializer read localStorage at render scope. Moved the read into useEffect behind a typeof window check so the server render no longer throws."
```

```bash
git commit -m "infra: Set pathPrefix for GitHub Pages build" \
           -m "Adds pathPrefix to gatsby-config.ts and switches deploy to build:gh-pages so assets and internal links resolve under the repo subpath when served from gh-pages."
```

## Rules

- **Tag:** one of `feature` / `bug` / `refactor` / `docs` / `infra` / `test` / `chore`. Lowercase.
- **Title length:** ≤ 72 characters total (including tag and colon).
- **Title style:** capitalize the first letter of the summary; no trailing period.
- **Imperative mood:** "Add", "Fix", "Update" (not "Added", "Fixes").
- **Body length:** 1-3 sentences, max. If you need more, the change is too big — split it.
- **Body content:** explain the **why** and the **impact**, not a line-by-line replay of the diff.
- **No Cursor attribution.** Do not add any `🤖 Generated with…`, `Co-Authored-By: Cursor`, or similar lines. Never. The commit author must be the local OS user.
- **Use HEREDOCs only when necessary.** The two-`-m` form is preferred; HEREDOCs are reserved for multi-paragraph commits which we should generally not be making.

## Anti-patterns

- ❌ `git commit -m "fix stuff"` — vague, no tag, no body.
- ❌ `git commit -m "feature: add stuff" -m "added stuff"` — body restates the title.
- ❌ A 10-sentence commit body — split the change.
- ❌ Any Cursor attribution line.
- ❌ Past tense ("Added X").
- ❌ A title without a tag (`Add project grid`).

## Reference from agents

Subagents that complete a task and need to commit: read this file and follow
it verbatim. Do not improvise the commit format.
