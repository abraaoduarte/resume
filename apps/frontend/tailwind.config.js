module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page-background': "url('/images/background.jpg')",
      },
      fontFamily: {
        Poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
