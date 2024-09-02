/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "#E8E8E8",
        primaryBlue: "#5D5FEF",
        blueGray: "#737791",
        primaryGray: "#F9FAFB",
        supportingYellow: "#FFA412",
        secondaryYellow: "#FFFAF1",
        strongRed: "#EB5757"
      },
    },
  },
  plugins: [],
}

