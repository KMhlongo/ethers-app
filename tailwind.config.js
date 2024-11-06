/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'background': 'hsl(216, 50%, 16%)',
      'white': 'hsl(0, 0%, 100%)',
      'soft-blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
      'blue': 'hsla(200, 93%, 40%, 0.9)',
      'heading': 'hsla(200, 93%, 40%, 0.9)',
      'search-bg': 'hsl(210, 17%, 98%)',
      'secondary': 'hsl(208, 7%, 46%)',
      's-border': 'hsl(210, 15.79%, 92.55%)',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}

