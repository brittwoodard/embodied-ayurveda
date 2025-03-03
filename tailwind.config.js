/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    fontFamily: {
      sans: ['ubuntu', 'sans-serif'],
      serif: ['AestheticWonder-ExtraBold', 'serif'],
    },
    extend: {
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
      aspectRatio: {
        'landscape': '2 / 1 ',
        'portrait': '3 / 4',
        'portrait-tall': '3 / 5',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
      },
      colors: {
        'dark': '#3B3C2E',
        'light': '#E1D8C3',
        'lighter': '#F6F1E3',
        'main': '#7F754E',
        'feature': '#AD8449',
        'accent': '#603921',
        'transparent': 'transparent',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}