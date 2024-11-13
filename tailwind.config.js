/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : '32px',

    },
    extend: {
      colors :{
        primary : '#10b981',
        dark : '#0f172a',
        secondary : '#94a3b8',
        third : '#475569'
      },
      screens : {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

