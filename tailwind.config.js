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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
