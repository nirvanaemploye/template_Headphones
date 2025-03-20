/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        primary: '#01A4E1',
        secondary: '#FECB04',
        branDark: '#151616',
      },

      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
        varela : ['Varela', 'sans-serif'],
      },
    
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

