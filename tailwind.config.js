/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        glass: 'rgb(var(--glass-rgb) / <alpha-value>)',
        a1: 'rgb(var(--a1-rgb) / <alpha-value>)',
        a2: 'rgb(var(--a2-rgb) / <alpha-value>)',
        a3: 'rgb(var(--a3-rgb) / <alpha-value>)',
        a4: 'rgb(var(--a4-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glass: '0 20px 60px rgba(0, 0, 0, 0.45)',
        glow: '0 0 60px rgba(139, 92, 246, 0.45)',
      },
      borderRadius: {
        card: '20px',
        pill: '999px',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        rise: 'rise .5s ease-out both',
      },
    },
  },
  plugins: [],
};
