/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C5E9E',
        secondary: '#E65A71',
        background: '#EDF6FF',
        grayLight: '#DADFE4',
        grayMedium: '#A3A3A4',
        grayDark: '#535550'
      },
      screens: {
        xs: { max: '515px' }
      },
      boxShadow: {
        'btn-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        'lg-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        buttonBgImage: "url('/images/bg1.jpg')"
      }
    }
  },
  plugins: []
};
