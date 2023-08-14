const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-spectral)", ...fontFamily.sans],
      },
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      },
      backgroundImage: {
        avatar_bg: "url('../public/avatar_bg.jpg')",
      },
      animation: {
        "custom-pulse": "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "custom-pulse": {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
