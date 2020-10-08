module.exports = {
  theme: {
    extend: {
      colors: {
        'prussian-blue': {
          50: '#F2F5F7',
          100: '#E6EBEE',
          200: '#BFCCD6',
          300: '#99AEBD',
          400: '#4D718B',
          500: '#003459',
          600: '#002F50',
          700: '#001F35',
          800: '#001728',
          900: '#00101B',
        },
      },
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    }
  }
}