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
        grayDark: '#535550',
        text_primary: '#424242',
        pending: '#9AB0FF',
        completed: '#5BF08E',
        txtLow: '#15803d',
        low: '#86efac',
        txtMedium: '#eab308',
        medium: '#fef3c7',
        txtHigh: '#b91c1c',
        high: '#f87171',
        progressBar: '#1C8FF9',
        progressBarBackground: '#F1F1F2',
        err: 'tomato',
        hold: '#FAD02C',
        priorityBackground: '#FCD5D9',
        shadow: '#171717',
        backIcon: '#EF9A9A',
        red: '#D7032A',
        lightRed: '#fb7185',
        radiantBlue: '#2B5DF5',
        tomato: '#FF6347',
        bgAssigned: 'rgba(255, 0, 0, 0.2)'
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
