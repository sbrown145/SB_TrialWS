import React, { useMemo, useState } from 'react';
import { Project } from '../types';
import { collectTags } from '../data/portfolio';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  filterable?: boolean;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, filterable = true }) => {
  const tags = useMemo(() => collectTags(projects), [projects]);
  const [activeTag, setActiveTag] = useState<string>('All');

  const filtered = useMemo(() => {
    if (!filterable || activeTag === 'All') return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [projects, activeTag, filterable]);

  return (
    <div>
      {filterable && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveTag('All')}
            className={`chip chip--btn ${activeTag === 'All' ? 'chip--active' : ''}`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`chip chip--btn ${activeTag === tag ? 'chip--active' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink/60 text-center py-12">No projects match this filter.</p>
      )}
    </div>
  );
};

export default ProjectGrid;
