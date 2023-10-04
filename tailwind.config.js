/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      worksans: ['"Work Sans"', "sans-serif"],
      merri: ['"Merriweather Web"', "sans-serif"],
      mono: [...defaultTheme.fontFamily.mono],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
