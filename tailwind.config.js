// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '375': '375px',
      },
      scrollbarWidth: {
        thin: 'thin',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          'width': '5px',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
