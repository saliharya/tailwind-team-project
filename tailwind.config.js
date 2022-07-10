/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './node_modules/tw-elements/dist/js/index.min.js'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#0ea5e9',
        'secondary': '#64748b',
        'dark': '#0f172a',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}