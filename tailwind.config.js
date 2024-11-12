/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      fontFamily: {
        customFont: ['Poppins', 'sans-serif'],
        myFont: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary1: '#f68c09',
        primary2: '#f68c09',
        primary3: '#00c9a7',
        primary4: '#37347e',
        primary5: '#2c2a65',
      },
      backgroundImage: {
        'bg-img2':
          'radial-gradient(circle at center center, rgb(17,17,55),rgb(18,6,34),rgb(9,6,18),rgb(2,5,12),rgb(0,0,0))',
      },

      boxShadow: {
        shad: '-1px -2px 36px -1px rgba(103,38,190,0.74)',
        shad2: '-1px -2px 20px -1px #37347e',
      },
      dropShadow: {
        back: '0px 0px 12px #6f69fd',
        back2: '3px 5px 9px #000000',
        back3: '3px 5px 6px #fff',
        back4: '0px 0px 4px #6f69fd',
      },
      fontSize: {
        me: ['2rem', '2rem'],
      },
      cursor: {
        custom: 'url(./assets/cursor.svg) 16 16, auto',
      },
    },
  },
  plugins: [],
};