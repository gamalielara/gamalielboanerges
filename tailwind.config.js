module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundPosition: {
        "x-20": "20% 0",
        "x-50": "50% 0",
        "x-60": "60% 0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
