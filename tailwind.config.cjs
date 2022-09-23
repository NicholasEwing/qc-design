/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'Verdana', 'sans-serif']
      },
      backgroundImage: {
        'gradient-cyan':
          'linear-gradient(90deg,#6cd5f6 0,#f89d5c 50%,#5b6af0 100%)'
      }
    }
  },
  plugins: []
}
