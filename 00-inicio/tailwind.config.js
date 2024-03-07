/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        42: "170px",
      },
      screens: {
        tablet: "900px",
      },
    },
  },
  plugins: [],
};
