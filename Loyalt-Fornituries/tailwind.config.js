/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      width: {
        'src': '36rem' ,
      },
      height:{
        'imgcard-h': '500px',
      },
      padding:{
        'p-2': '0.5'
      }
    },
  },
  plugins: [],
}

