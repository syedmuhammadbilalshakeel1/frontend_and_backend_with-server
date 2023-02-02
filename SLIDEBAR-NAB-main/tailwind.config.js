/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Playfair Display", "serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },

    extend: {
      backgroundImage: {
        white: "url('/public/white.png')",
      },
    },
  },
  plugins: [],
};
