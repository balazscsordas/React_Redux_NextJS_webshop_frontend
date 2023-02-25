/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#E3F6FF',
        'tetriary1': '#0e7490',
        'tetriary2': '#fdeac9'
      }
    },
  },
  plugins: [],
}