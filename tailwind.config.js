/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#0f1114',
        secondary: {
          100: "#12161c",
        },
        siteblue: '#3bacb5',
        sitepurple: '#6867c5',
      
        animation: {
            text:'text 5s ease infinite',
        },
        keyframes: {
            text: {
                '0%, 100%': {
                   'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                   'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
        }
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}
