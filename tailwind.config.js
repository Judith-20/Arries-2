/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rblue':'#0B69FF',
        'whyte' :'#fafafa',
        'accent':'#6B38FB',
        'success':'#2DCA73',
        'warning':'#FFB800',
        'sblue':'#E2F2FF',
        'error':'#FF0B37',
        'Grey':'#AFAFAF',
        

      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        'digital': ['Digital-7', 'sans-serif'],
        'digital-numbers': ['DigitalNumbers', 'sans-serif'],
      },
      screens: {
        'below-sm': {'max': '640px'},
        // 'mobile': {'max': '480px'},
        'mobile': {'max': '768px'},

      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite', // Slower rotation
      },
    },
  },
  plugins: [],
}