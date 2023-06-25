/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue, js}'
  ],
  theme: {
    fontSize: {
      sm: '12px',
      base: '14px',
      md: '18px',
      lg: '28px',
      '2xl': '40px',
      '3xl': '60px'
    },  
    fontFamily: {
      'notosans': ['Noto Sans JP', 'sans-serif'],
      'orbitron': ['Orbitron', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'saira': ['Saira Condensed', 'sans-serif']
    },
    extend: {
      colors: {
        // 'primary': '#5b6b78',
        'primary': '#000',
        'grey': '#939393',
        'grey-light': '#DEDEDE',
        'header': '#F9FAFE'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    }
  },
  plugins: [],
}
