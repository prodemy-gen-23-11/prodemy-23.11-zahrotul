/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'first' : '#C7B39F',
        'second' : '#eee7e1',
        'third' : '#FAF6F3'
      }
    },
  },
  plugins: [],
}

