/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom--r-primary": "#2C2C2C",
        "custom--r-secondary": "#272727",
        "custom--r-tertiary": "#222222",
        "custom--r-quaternary": "#181818",
        "custom--r-septuagenarian": "#262626",
      },
    },
  },
  plugins: [],
};
