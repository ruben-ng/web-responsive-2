/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*{.html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      'lg': {'max': '1040px'},
    },

    extend: {
    },
  },
  plugins: [],
}

