import React from 'react';
import { HeadFC } from 'gatsby';
import { ThemeProvider } from '../../context/ThemeContext';
import Layout from '../../components/Layout';
import ProjectGrid from '../../components/ProjectGrid';
import { personalProjects, about } from '../../data/portfolio';

const PersonalProjects: React.FC = () => (
  <ThemeProvider>
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <p className="kicker mb-3 rise">Personal</p>
        <h1 className="font-display text-[clamp(2.4rem,7vw,5rem)] font-bold mb-4 rise">
          Side <span className="grad-text">Projects</span>
        </h1>
        <p className="max-w-2xl text-lg text-ink/70 mb-12 rise leading-relaxed">
          Weekend experiments and bench projects exploring sensors, IAQ, and
          the science behind measurement.
        </p>
        <ProjectGrid projects={personalProjects} filterable={false} />
      </section>
    </Layout>
  </ThemeProvider>
);

export default PersonalProjects;

export const Head: HeadFC = () => (
  <>
    <title>Personal — {about.name}</title>
    <meta
      name="description"
      content="Personal side projects in sensors, IAQ monitoring, and prototyping."
    />
  </>
);
