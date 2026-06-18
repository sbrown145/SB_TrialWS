import React from 'react';
import { Link } from 'gatsby';
import { about, contact } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      <div className="card card--hero max-w-3xl rise">
        <p className="kicker mb-4">{about.title}</p>
        <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-tight mb-4">
          {about.name.split(' ')[0]}{' '}
          <span className="grad-text">{about.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-lg text-ink/80 mb-2">{about.tagline}</p>
        <p className="text-base text-ink/60 mb-8 max-w-xl leading-relaxed">{about.blurb}</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/projects/professional" className="btn">
            View Work
          </Link>
          <a href={`mailto:${contact.email}`} className="btn btn--ghost">
            Email Me
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
