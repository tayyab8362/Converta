/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        'container':'1200px'
      },

      colors:{
        'xanthous'       : '#F9C45C',
        'neonblue'       : '#4C6FFF',
        'tropicalindigo' : '#857FFF',
        'coolgray'       : '#7B88A8',
        'lavenderpink'   : '#ffc0ec',
        'tiffanyblue'    : '#61dcdf',
        'persianindigo'  : '#321370',
        'platinum'       : '#e7e5ea',
        'delftblue'      : '#2D3958'
      },

      fontFamily: {
        'dmsans' : ['DM Sans', 'sans-serif'],
        'spacegrotesk': ['Space Grotesk', 'sans-serif'],
      },

      boxShadow: {
        'xl': '0 20px 40px 0 rgba(133,127,255,.05)',
      }
    },
  },
  plugins: [],
}

