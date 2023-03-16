const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "manzana-Image": "url('https://loftyyportfolio.imgix.net/Background/bgIMG.jpg?auto=compress,format&cs=tinysrgb&fit=crop')",
      },
      fontFamily: {
        sans: ["var(--encode-sans)", ...fontFamily.sans],
      },

      colors: {
        black: "#000000",
      },
    },
  },
  plugins: [],
};
