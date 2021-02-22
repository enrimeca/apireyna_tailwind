const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      yellow: colors.amber,
      gray: colors.gray,
      red: colors.red
    },
    height: {
      '6': '1.5rem',
      '16': '4rem',
      '64': '16rem',
      '96': '24rem',
      '120': '30rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
