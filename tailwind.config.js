const typography = require("./typography");

module.exports = {
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    typography: typography,
  },
};
