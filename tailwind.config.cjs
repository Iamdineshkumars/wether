/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '510px',
      // => @media (min-width: 640px) { ... }
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

    },
  
  },
  plugins: [],
}