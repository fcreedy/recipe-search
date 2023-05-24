/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {        
        'apple-yellow': '#EBE709',
        'apple-green': '#67B715',
        'apple-shadow': '#575C4E',  
        'blue-black': '#242525'
      },
    },
  },
  plugins: [],
}

