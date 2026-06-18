import React from 'react';
import { Link, HeadFC } from 'gatsby';
import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
import { notFound } from '../data/portfolio';

const NotFoundPage: React.FC = () => (
  <ThemeProvider>
    <Layout>
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="card rise">
          <p className="kicker mb-4">Error 404</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
            {notFound.headline}
          </h1>
          <p className="text-lg text-ink/70 mb-8 leading-relaxed">{notFound.subtext}</p>
          <Link to="/" className="btn btn--ghost">
            {notFound.ctaLabel}
          </Link>
        </div>
      </section>
    </Layout>
  </ThemeProvider>
);

export default NotFoundPage;

export const Head: HeadFC = () => (
  <>
    <title>404 — You&apos;ve Drifted Off the Map</title>
    <meta name="robots" content="noindex" />
  </>
);
