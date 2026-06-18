import React from 'react';
import { about } from '../data/portfolio';

const stats = [
  {
    label: 'Experience',
    value: '15+',
    detail: 'Years in lab R&D and engineering',
    accent: 'a1' as const,
  },
  {
    label: 'Focus',
    value: 'IAQ',
    detail: 'Sorbent media, carbon capture, ocean monitoring',
    accent: 'a2' as const,
  },
  {
    label: 'Location',
    value: 'MA',
    detail: about.location,
    accent: 'a3' as const,
  },
];

const accentText: Record<string, string> = {
  a1: 'text-a1',
  a2: 'text-a2',
  a3: 'text-a3',
  a4: 'text-a4',
};

const About: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <p className="kicker mb-3 rise">About</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12 rise">
        Scientist &amp; <span className="grad-text">Engineer</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={stat.label} className="card rise" style={{ animationDelay: `${i * 0.1}s` }}>
            <p className="kicker mb-2">{stat.label}</p>
            <p className={`font-display text-4xl font-bold ${accentText[stat.accent]} mb-2`}>
              {stat.value}
            </p>
            <p className="text-sm text-ink/60 leading-relaxed">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
