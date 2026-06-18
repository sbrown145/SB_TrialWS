# `pages/projects/` — Project Listing Pages

Two full-width pages that display filtered grids of work. Both reuse `ProjectGrid` and differ only in data source and page copy.

## Files to create

| File | Data import | Heading |
|------|-------------|---------|
| `professional.tsx` | `professionalProjects` from `../../data/portfolio` | Work / professional projects |
| `personal.tsx` | `personalProjects` from `../../data/portfolio` | Personal / side projects |

## Template

```tsx
import React from 'react';
import { HeadFC } from 'gatsby';
import { ThemeProvider } from '../../context/ThemeContext';
import Layout from '../../components/Layout';
import ProjectGrid from '../../components/ProjectGrid';
import { professionalProjects } from '../../data/portfolio';

const ProfessionalProjects: React.FC = () => (
  <ThemeProvider>
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <p className="kicker text-ink/60 mb-3 rise">Section label</p>
        <h1 className="font-display text-[clamp(2.4rem,7vw,5rem)] mb-4 rise">
          Page Title.
        </h1>
        <p className="max-w-2xl text-lg text-ink/80 mb-12 rise">
          Short intro paragraph.
        </p>
        <ProjectGrid projects={professionalProjects} />
      </section>
    </Layout>
  </ThemeProvider>
);

export default ProfessionalProjects;

export const Head: HeadFC = () => <title>Work — Your Name</title>;
```

## Navigation

`Layout` should link to both routes:

- `/projects/professional` — label e.g. "Work"
- `/projects/personal` — label e.g. "Personal"

`Hero` and `FeaturedProjects` on the home page link to `/projects/professional` as the primary "view all work" path.

## Filtering

`ProjectGrid` reads tags from each project's `tags` array. Include `Featured` on highlighted items; the grid surfaces it first in the filter bar when present.
