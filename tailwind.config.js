/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: colors.gray[100],
          medium: colors.gray[400],
          dark: colors.gray[800],
        },
        activeArea: {
          light: "#59d4f3",
          main: "#0d91b2",
          dark: "#074d5f",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
      textColor: {
        english: colors.gray[400],
        dark: colors.gray[800],
        light: colors.gray[100],
      },
    },
  },
  plugins: [],
};
