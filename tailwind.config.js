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
        background: colors.gray,
        foreground: "#000",
      },
      textColor: {
        english: colors.blue[400],
        dark: colors.gray[600],
        medium: colors.gray[400],
        light: colors.gray[200],
      },
    },
  },
  plugins: [],
};
