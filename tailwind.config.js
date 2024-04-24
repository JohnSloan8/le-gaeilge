/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import { themeColors } from "./theme";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme/**/*.{js,ts,jsx,tsx,mdx}",
    "./icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: themeColors,
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
