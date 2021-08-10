module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      1: '20px',
      2: '16px',
      3: '12px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Cairo, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      borderRadius: {
        default: '10px',
        lg: '30px',
      },
      // inset: {
      //   navheight: '77px',
      // },
      lineHeight: {
        normal: 'normal',
      },
      spacing: {
        5: '5px',
        10: '10px',
        15: '15px',
        20: '20px',
        25: '25px',
        30: '30px',
        section: '15px',
      },
      width: {
        half: '50%',
        'one-third': '33.33333333%',
        'two-thirds': '66.6666667%',
      },
      opacity: {
        20: '0.2',
      },
      margin: {},
      colors: {
        pearl: '#FBEFF2',
        blue: '#3C7E8E',
        'deep-blue': '#173754',
      },
      padding: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
