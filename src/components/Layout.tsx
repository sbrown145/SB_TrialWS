import React from 'react';
import { Link } from 'gatsby';
import { about, contact } from '../data/portfolio';

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects/professional', label: 'Work' },
  { to: '/projects/personal', label: 'Personal' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-glass/5 backdrop-blur-[18px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-lg text-ink hover:opacity-90 transition-opacity">
            {about.name}
          </Link>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                activeClassName="nav-link--active"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-ink/60">
            &copy; {new Date().getFullYear()} {about.name}
          </p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${contact.email}`} className="chip hover:opacity-90 transition-opacity">
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="chip hover:opacity-90 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
