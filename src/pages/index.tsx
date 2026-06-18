import React from 'react';
import { HeadFC } from 'gatsby';
import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import { about } from '../data/portfolio';

const IndexPage: React.FC = () => (
  <ThemeProvider>
    <Layout>
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Skills />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>{about.name} — {about.title}</title>
    <meta name="description" content={about.blurb} />
  </>
);
