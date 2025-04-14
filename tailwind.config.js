/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".index.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"]
      },
      colors: {
        purple: {
          100: 'hsl(275, 100%, 97%)',
          600: 'hsl(292, 16%, 49%)',
          950: 'hsl(292, 42%, 14%)',
        },
        white: 'hsl(0, 100%, 100%)',
      },
      screens: {
        xs: "24.375rem" // 390px
      }
    },
  },
  plugins: [],
}
