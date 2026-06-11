/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0E8',
          warm: '#EDE7DC',
          white: '#FDFBF7',
        },
        taupe: {
          DEFAULT: '#9E9488',
          light: '#C4C5BA',
          deep: '#7A7166',
        },
        ink: {
          DEFAULT: '#2f2d28',
          soft: '#49463f',
          muted: '#5c5850',
        },
        mint: {
          DEFAULT: '#7DD4CC',
        },
        sage: {
          DEFAULT: '#6f7d67',
          deep: '#56645a',
          soft: '#dfe4d8',
        },
        line: {
          DEFAULT: '#E5DFD4',
        },
        gold: {
          DEFAULT: '#B8A88A',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'organic': '12px 2px 12px 2px',
        'micro': '2px',
      },
      transitionTimingFunction: {
        'refugio': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
