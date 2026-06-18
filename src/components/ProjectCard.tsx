import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const accentFill: Record<string, string> = {
  a1: 'fill-a1',
  a2: 'fill-a2',
  a3: 'fill-a3',
  a4: 'fill-a4',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const hasBullets = project.bullets && project.bullets.length > 0;

  return (
    <article
      className={`card flex flex-col h-full ${project.featured ? 'card--hero' : ''}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className={`w-2 h-2 rounded-full shrink-0 mt-2 ${accentFill[project.accent]}`} />
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-bold text-ink leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-a2 mt-1">{project.company}</p>
          {project.period && (
            <p className="kicker mt-1 text-ink/50">{project.period}</p>
          )}
        </div>
      </div>

      <p className="text-sm text-ink/70 leading-relaxed flex-1 mb-4">{project.summary}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="chip text-xs py-1 px-3">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        {hasBullets && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="btn btn--ghost text-sm py-2 px-4"
          >
            {expanded ? 'Hide Details' : 'Details'}
          </button>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-sm py-2 px-4"
          >
            View Project
          </a>
        )}
      </div>

      {expanded && hasBullets && (
        <ul className="mt-4 pt-4 border-t border-white/10 space-y-2">
          {project.bullets!.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-ink/70 leading-relaxed">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${accentFill[project.accent]}`} />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ProjectCard;
