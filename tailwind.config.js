/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fiexen: ["Studio Feixen Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        fullest: "100%",
      },
      backgroundImage: {
        banner: 'url("/public/images/banner.webp")',
      },
      backgroundColor: {
        themeOrange: "#FF745A",
        themeOrange2: "#FCCDC4",
      },
      colors: {
        themeOrange: "#FF745A",
        themeOrange2: "#FCCDC4",
        lighBlue: "#46c6ed",
        darkBlue: "#1d2f5d",
      },
    },
  },
  plugins: [],
};
