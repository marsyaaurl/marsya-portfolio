/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        krona: ['"Krona One"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
      },

      screens: {
        xs: "480px",
      },

      colors: {
        background: "#1E1E1E",
        mainblue: "#71A6F2",
        secondgreen: "#70E9A7",
        thirdred: "#F30916",
        thirdyellow: "#F3E398",
        thirdpink: "#FFB9E9",
        whitefont: "#E0E0E0"
      }
    },
  },
  plugins: [],
}
