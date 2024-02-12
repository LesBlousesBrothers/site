/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./content/**/*.md", "./content/**/*.html",
         "./layouts/**/*.html",
         './static/**/*.{css,js,jsx,ts,tsx,vue}'
        ],

  
  theme: {
    extend: {
      colors:{
        mycolor: { 
          DEFAULT: 'rgb(148 163 184)', 
          950: 'rgb(2 6 23)',
          900: 'rgb(15 23 42)', 
          800: 'rgb(30 41 59)', 
          700: 'rgb(51 65 85)', 
          600: 'rgb(71 85 105)', 
          500: 'rgb(100 116 139)', 
          400: 'rgb(148 163 184)', 
          300: 'rgb(203 213 225)', 
          200: 'rgb(226 232 240)', 
          100: 'rgb(241 245 249)',
          50: 'rgb(248 250 252)'
        },
      
      mywhite:{
        DEFAULT: '#FFFFFF',
      },
      myblack:{
        DEFAULT: '#111827',
      },

      mygray: { 
        DEFAULT: '#92969D', 
        900: '#1d1e20', 
        800: '#393b3f', 
        700: '#56595f', 
        600: '#72777e', 
        500: '#92969d', 
        400: '#a7aab0', 
        300: '#bdbfc3', 
        200: '#d3d5d7', 
        100: '#e9eaeb'
       },

    },
    letterSpacing: {
      most: '.35em',
    },
  },
},
  plugins: [
    
  ],
}

