# `types/` — Shared TypeScript Definitions

Define the data shapes used across `data/` and `components/`. Keeping types in one place prevents drift between your content and UI.

## Create this file

`index.ts`

## Suggested types

```ts
export type Accent = 'a1' | 'a2' | 'a3' | 'a4';

export interface Project {
  title: string;
  company: string;
  period?: string;
  /** One-line summary shown on the collapsed card. */
  summary: string;
  /** Detail bullets revealed when the card is expanded. */
  bullets?: string[];
  /** Filter categories this project belongs to. */
  tags: string[];
  link?: string;
  accent: Accent;
  featured?: boolean;
}

export interface Role {
  title: string;
  company: string;
  period: string;
  location?: string;
  accent: Accent;
  points: string[];
}

export interface SkillGroup {
  title: string;
  accent: Accent;
  items: string[];
}
```

## Design notes

- **`Accent`** — Four palette slots (`a1`–`a4`) mapped to CSS variables in `styles/global.css` and Tailwind in `tailwind.config.js`. Components reference accents for visual variety without hard-coding colors.
- **`Project.featured`** — Used on the home page to surface a small set of highlighted work.
- **`Project.tags`** — Drives category filtering in `ProjectGrid`.

## Imports

```ts
import { Project, Role, SkillGroup, Accent } from '../types';
```
