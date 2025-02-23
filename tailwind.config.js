// tailwind.config.js
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screen: {
      'tab' : '820px',
    },
    extend: {
      backgroundImage: {
        'shoe-background': "url('./images/shoe-background.png')",
      },
    },
  },
  plugins: [],
};
