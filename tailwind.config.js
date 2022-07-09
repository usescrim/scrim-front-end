/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7000FF",
        secondary: "#16032E",
        success: "#2FBF71",
        warning: "#FCDC4D",
        error: "#BF1313",
        white: "#fff",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "bottom-banner": "url('/static/images/bannerBottom.svg')",
      },
    },
  },
  plugins: [],
};
