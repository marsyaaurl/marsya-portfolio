/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        background: "#FAFAFA",
        mainblue: "#155FCB",
        secondgreen: "#12A354",
        thirdred: "#F30916",
        thirdyellow: "#F3E398",
        thirdpink: "#FCA4E0",
      }
    },
  },
  plugins: [],
}
