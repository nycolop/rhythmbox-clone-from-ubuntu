/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom--r-b-primary": "#2C2C2C",
        "custom--r-b-secondary": "#272727",
        "custom--r-b-tertiary": "#222222",
        "custom--r-b-quaternary": "#181818",
        "custom--r-b-septuagenarian": "#262626",
        "custom--r-secondary": "#E95420",
      },
    },
  },
  plugins: [],
};
