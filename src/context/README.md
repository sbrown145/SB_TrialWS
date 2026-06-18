# `context/` — React Context Providers

Shared client-side state that many components need — here, **dark/light theme**.

## Create this file

`ThemeContext.tsx`

## Responsibilities

1. **Initialize theme** on mount:
   - Read `localStorage.getItem('theme')`
   - Fall back to `prefers-color-scheme: dark` when no saved preference
2. **Persist theme** — toggle `document.documentElement.classList` (`dark`) and write to `localStorage`
3. **Expose API** — `{ isDark, toggleTheme }` via context

## Suggested API

```tsx
type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }>;
export const useTheme: () => ThemeContextType;
```

## Usage pattern

Wrap each page (or the app shell) in `ThemeProvider`:

```tsx
import { ThemeProvider } from '../context/ThemeContext';

const IndexPage = () => (
  <ThemeProvider>
    <Layout>{/* … */}</Layout>
  </ThemeProvider>
);
```

Components like `Layout` call `useTheme()` for the header toggle button.

## SSR note

Guard browser-only APIs:

```ts
const isBrowser = typeof window !== 'undefined';
```

Gatsby renders on the server first; accessing `window` or `localStorage` outside `useEffect` will throw.

## Error handling

Throw a clear error if `useTheme()` is called outside `ThemeProvider`:

```ts
if (context === undefined) {
  throw new Error('useTheme must be used within a ThemeProvider');
}
```
