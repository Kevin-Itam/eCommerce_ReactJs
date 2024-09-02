/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      width: {
        'src': '36rem' ,
        '400': '350px',
      },
      height:{
        'imgcard-h': '500px',
        '400': '300px',
      },
      padding:{
        'p-2': '0.5'
      },
      maxHeight:{
        'h-300':'300px'
      }
    },
  },
  plugins: [],
}

