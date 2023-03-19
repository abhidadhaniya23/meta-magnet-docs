const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      code: ["JetBrains Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
});
