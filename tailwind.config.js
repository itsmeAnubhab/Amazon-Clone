/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens:{
        "desktop":"1070px",
        "smallscreen":"1255px",
      },
      
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}
