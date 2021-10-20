module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body' : ["Poppins", "Open Sans", "Helvetica"]
    },
    extend: {
      colors: {
        'gum-dark' : '#1B1717',
        'gum-dark-red' : '#810000',
        'gum-red' : '#CE1212',
        'gum-light' : '#EEEBDD'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
