import React from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <p className="kicker mb-3 rise">Skills</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12 rise">
        Tools &amp; <span className="grad-text">Expertise</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((group, i) => (
          <div key={group.title} className="card rise" style={{ animationDelay: `${i * 0.08}s` }}>
            <h3 className="font-display text-lg font-bold mb-4 text-ink">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
