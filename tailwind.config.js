/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0f1114',
        secondary: {
          100: "#12161c",
        },
        siteblue: '#3bacb5',
        sitepurple: '#6867c5',
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}
