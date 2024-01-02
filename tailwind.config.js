/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'black': '#111418',
        'green': '#20C997',
        'deepGreen': '#1BAA80',
        'gray': '#EEF0F1',
        'deepGray': '#6C757D',
        'bgGray': '#F8F9FA',
        'gold': '#FFC107'
      },
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'"
      },

      backgroundImage: {
        'heroPattern': "url('./assets/intro-bg.jpg')"
      }
    },
  },
  plugins: [],
}

