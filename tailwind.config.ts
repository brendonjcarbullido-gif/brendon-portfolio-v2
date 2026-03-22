import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'cream-2': '#EDE7D9',
        'cream-3': '#E4DDD0',
        ink: '#1A1612',
        'ink-2': '#2E2820',
        'ink-light': '#6B6258',
        accent: '#8B6F47',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
