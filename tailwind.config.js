/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#0070f3',
        'secondary': '#f5f5f5',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}