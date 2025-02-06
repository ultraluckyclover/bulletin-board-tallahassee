/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,css}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],
        rock: ['Rock 3D', 'serif'],
        vt323: ['VT323', 'serif']
      },
      colors: {
        offwhite: '#fffcf5'
      },
      fontSize: {
        h1: '20px',
      }
    },
  },
  plugins: [],
}

