module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-grey': '#F4F0ED',
        'grey': '#D5CBC1',
        'dark-grey': '#A2927C',
        'maroon': '#7B322F'
      },
      width: {
        'fit-content': 'fit-content'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%'
      },
      height: {
        'fit-content': 'fit-content'
      },
      maxHeight: {
        '150px': '150px',
        '1/4': '25%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%'
      },
      borderWidth: {
        '1': '1px'
      },
      borderRadius: {
        '3.5xl': '1.75rem',
        '4xl': '2.5rem'
      },
      gridTemplateRows:{
        '8': 'repeat(8, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))'
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-11': 'span 11 / span 11',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      scale: {
        '135': '1.35',
      }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
