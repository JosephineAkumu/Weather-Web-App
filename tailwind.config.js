/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        secondary: "#112135",
        accent: "#FFA800",
        "text-default": "#00000099 "
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
}

