/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      // Define custom media queries
      // TODO: research min-aspect-ratio
      screens: { 
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(min-aspect-ratio: 1/2)'},
      }
    },
  },
  plugins: [],
}

