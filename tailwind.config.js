/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '1.5rem', 
      },
      colors: {
        customBlue: '#2764D6', 
      },
    },
  },
  plugins: [],
}

