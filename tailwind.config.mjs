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
          warm: '#FDFAF5',
        },
        taupe: {
          DEFAULT: '#9E8272',
          light: '#C4AA94',
          deep: '#7A6255',
        },
        ink: {
          DEFAULT: '#2A1F1A',
        },
        mint: {
          DEFAULT: '#7DD4CC',
        },
        line: {
          DEFAULT: '#DDD5C8',
        },
        pill: {
          DEFAULT: '#EDE4D8',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        body: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
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
