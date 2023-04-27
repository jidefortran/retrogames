//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}",
 
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  colors: {
    blue:{
      50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
    },
    red: {
      '50': '#ffebee',
      '100': '#ffcdd2',
      '200': '#ef9a9a',
      '300': '#e57373',
      '500': '#f44336',
      '600': '#e53935',
      '700': '#d32f2f',
      '800': '#c62828',
      '900': '#b71c1c',

  plugins: [],
}
  }
}