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
        'gradient-green-dotted':
          '-webkit-repeating-radial-gradient(center center,#0ba376,#0ba376 1px,transparent 0px,transparent 100%)',
      },
      fontFamily: {
        Poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
