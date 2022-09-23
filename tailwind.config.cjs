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
        'gradient-fuchsia':
          'linear-gradient(112.84deg,#46baeb .33%,#af2cff 38.23%,#f790af 65.22%,#c1abff 100%)',
        'gradient-cyan':
          'linear-gradient(90deg,#6cd5f6 0,#f89d5c 50%,#5b6af0 100%)',
        'gradient-green': 'linear-gradient(98.24deg,#cee9c1 0,#83c8de 100%)'
      }
    }
  },
  plugins: []
}
