/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0f172a',
        card: '#111827',
        muted: '#94a3b8',
        accent: '#22d3ee',
        accentSoft: '#06b6d4',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34, 211, 238, 0.2), 0 20px 40px -20px rgba(34, 211, 238, 0.25)',
      },
    },
  },
  plugins: [],
}

