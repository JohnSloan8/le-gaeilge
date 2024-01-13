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
        btn: {
          background: colors.blue,
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      textColor: {
        english: colors.gray[400],
      },
    },
  },
  plugins: [],
};
