import React from 'react';
import { experience } from '../data/portfolio';

const accentText: Record<string, string> = {
  a1: 'text-a1',
  a2: 'text-a2',
  a3: 'text-a3',
  a4: 'text-a4',
};

const accentFill: Record<string, string> = {
  a1: 'fill-a1',
  a2: 'fill-a2',
  a3: 'fill-a3',
  a4: 'fill-a4',
};

const Experience: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <p className="kicker mb-3 rise">Experience</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12 rise">
        Work <span className="grad-text">History</span>
      </h2>
      <div className="space-y-6">
        {experience.map((role, i) => (
          <div key={`${role.company}-${i}`} className="card rise" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-ink">{role.title}</h3>
                <p className={`font-medium ${accentText[role.accent]}`}>{role.company}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="kicker">{role.period}</p>
                {role.location && (
                  <p className="text-sm text-ink/50 mt-1">{role.location}</p>
                )}
              </div>
            </div>
            <ul className="space-y-2">
              {role.points.map((point, j) => (
                <li key={j} className="flex gap-3 text-sm text-ink/70 leading-relaxed">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${accentFill[role.accent]}`} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
