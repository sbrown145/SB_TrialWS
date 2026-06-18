import React from 'react';
import { HeadFC } from 'gatsby';
import { ThemeProvider } from '../../context/ThemeContext';
import Layout from '../../components/Layout';
import ProjectGrid from '../../components/ProjectGrid';
import { professionalProjects, about } from '../../data/portfolio';

const ProfessionalProjects: React.FC = () => (
  <ThemeProvider>
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <p className="kicker mb-3 rise">Professional</p>
        <h1 className="font-display text-[clamp(2.4rem,7vw,5rem)] font-bold mb-4 rise">
          Work <span className="grad-text">Projects</span>
        </h1>
        <p className="max-w-2xl text-lg text-ink/70 mb-12 rise leading-relaxed">
          Selected projects from a career in lab R&D, sorbent media development,
          indoor air quality, and carbon capture technologies.
        </p>
        <ProjectGrid projects={professionalProjects} />
      </section>
    </Layout>
  </ThemeProvider>
);

export default ProfessionalProjects;

export const Head: HeadFC = () => (
  <>
    <title>Work — {about.name}</title>
    <meta
      name="description"
      content="Professional projects in IAQ, sorbent media, carbon capture, and ocean monitoring."
    />
  </>
);
