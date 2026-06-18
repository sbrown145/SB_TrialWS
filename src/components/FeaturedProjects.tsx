import React from 'react';
import { Link } from 'gatsby';
import { professionalProjects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

const FeaturedProjects: React.FC = () => {
  const featured = professionalProjects.filter((p) => p.featured);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <p className="kicker mb-3 rise">Featured</p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <h2 className="font-display text-4xl sm:text-5xl font-bold rise">
          Selected <span className="grad-text">Work</span>
        </h2>
        <Link to="/projects/professional" className="btn btn--ghost text-sm rise">
          View all work
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
