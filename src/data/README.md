# `data/` — Portfolio Content

Static content lives here as typed TypeScript exports. No JSX — just data that components import and render.

## Create this file

`portfolio.ts`

## Suggested exports

| Export | Type | Used by |
|--------|------|---------|
| `about` | object | Hero, Layout footer |
| `contact` | object | Hero, Layout footer |
| `experience` | `Role[]` | Experience |
| `skills` | `SkillGroup[]` | Skills |
| `professionalProjects` | `Project[]` | FeaturedProjects, professional page |
| `personalProjects` | `Project[]` | FeaturedProjects, personal page |
| `cycleAccent(i)` | helper | Optional — rotate accent colors across lists |
| `collectTags(projects)` | helper | ProjectGrid — derive filter chips from project tags |

## Example structure

```ts
import { Project, Role, SkillGroup, Accent } from '../types';

const ACCENTS: Accent[] = ['a1', 'a2', 'a3', 'a4'];
export const cycleAccent = (i: number): Accent => ACCENTS[i % ACCENTS.length];

export const about = {
  name: 'Your Name',
  title: 'Your Title',
  tagline: 'Focus areas',
  location: 'City, ST',
  blurb: 'Short bio paragraph.',
  resumeUrl: 'https://…',
};

export const contact = {
  email: 'you@example.com',
  linkedin: 'https://linkedin.com/in/you',
  github: 'https://github.com/you',
};

export const experience: Role[] = [ /* … */ ];
export const skills: SkillGroup[] = [ /* … */ ];
export const professionalProjects: Project[] = [ /* … */ ];
export const personalProjects: Project[] = [ /* … */ ];

export const collectTags = (projects: Project[]): string[] => {
  const set = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
  const tags = Array.from(set).sort();
  return tags.sort((a, b) =>
    a === 'Featured' ? -1 : b === 'Featured' ? 1 : a.localeCompare(b)
  );
};
```

## Tips

- Keep copy here, not in components — makes content updates easy and components reusable.
- Use the `Featured` tag plus `featured: true` to control home-page highlights.
- Tag strings should be consistent; `collectTags` builds the filter bar from whatever tags appear on projects.
