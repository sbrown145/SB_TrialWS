# Onboard New Developer

## Overview

Get a new developer productive on this Gatsby + TypeScript + Tailwind portfolio.

## Steps

1. **Environment setup**
   - Install Node 18+ (matches CI) and clone the repo.
   - `npm install`.
   - Confirm tooling: `npm run typecheck` runs cleanly.
2. **Project familiarization**
   - Read the root `README.md` and `src/README.md` (recommended build order).
   - Skim each `src/<subfolder>/README.md` — they are the canonical guides.
   - Read `.cursor/rules/master.mdc` for conventions and the clarification
     protocol.
   - Understand the flow: `types/` → `data/` → `styles/` → `context/` →
     `components/` → `pages/`.
3. **First change**
   - Scaffold `src/pages/index.tsx` (then `npm run develop` to confirm routing).
   - Make a small content edit in `src/data/` and see it reflected.

## Onboarding Checklist

- [ ] Node 18+ installed, `npm install` complete
- [ ] `npm run typecheck` passes
- [ ] `npm run develop` serves the site locally
- [ ] Read the `src/` README guides and `.cursor/rules/master.mdc`
- [ ] First PR submitted following `.cursor/commands/git-commit.md`
