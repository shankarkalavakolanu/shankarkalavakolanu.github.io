/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:       'var(--color-bg)',
        surface:  'var(--color-surface)',
        surface2: 'var(--color-surface2)',
        border:   'var(--color-border)',
        ink: {
          primary: 'var(--color-ink-primary)',
          muted:   'var(--color-ink-muted)',
        },
        gold: {
          DEFAULT: 'var(--color-gold)',
          hover:   'var(--color-gold-hover)',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        site: '1100px',
      },
      borderRadius: {
        card:   '8px',
        button: '6px',
      },
      borderWidth: {
        half: '0.5px',
      },
    },
  },
};
