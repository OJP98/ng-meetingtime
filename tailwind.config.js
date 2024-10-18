/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      flexGrow: {
        2: '2',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
