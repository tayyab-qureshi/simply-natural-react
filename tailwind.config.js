/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor: {
        'custom-green': '#75c32c',
      },
      fontSize:{
      "fontSize" :"30px"
      },
    },
  },
  plugins: [],
}