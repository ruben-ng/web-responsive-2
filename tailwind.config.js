/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*{.html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    screens: {
      'lg': {'max': '1040px'},
    },

    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        // 0 3px -> posisi, 18px -> blur, 5px -> spread
        'img-container': '0 3px 18px 5px rgb(0, 0, 0, 30%)',
        'cht-container': '0 2px 10px 2px rgb(0, 0, 0, 30%)',
        'img-service': '0 3px 18px 7px rgb(0, 0, 0, 40%)',
        'triangle': '0 4px 6px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'infinite-scroll': 'infiniteScrolls 100s linear infinite',
      },
      keyframes: {
        'infiniteScrolls': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [],
}

