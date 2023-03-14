/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lottery-section': "url('/images/lottery-bg.jpg')",
        headphone: "url('/images/headphone.png')",
        'iphone-mockup-half': "url('/images/personal/iPhone-13-mockup-half.png')",
        'iphone-mockup-with-dashboard': 'url("/images/personal/iphone-12-slant-mock-up.png")',
        'iphone-mockup-with-dashboard-half': 'url("/images/half-iphone.png")',
        'circle-pattern': 'url("/images/about/circle-pattern.png")',
      },
      colors: {
        primary: {
          100: '#073D9F',
          200: '#5CB2FC',
          300: '#14a8fb',
        },
        secondary: {},
        gray: {
          50: '#F9FAFB',
          150: '#F4F6F6',
          250: '#FDFDFD',
          350: '#F5F5F5',
          450: '#646464',
          550: '#4e4e4e',
          650: '#473B35',
          750: '#818181',
          850: '#272727',
        },
        'text-dark': {
          DEFAULT: '#263238',
        },
        'liberty-blue': {
          light: '#107EE2',
          DEFAULT: '#032282',
        },
        'employment-blue': {
          light: '#0D7CDC',
          DEFAULT: '#004067',
        },
        'liberty-teal': {
          lightest: '#F4F9FF',
          light: '#E8F3FF',
          DEFAULT: '#032282',
        },
        'liberty-green': {
          light: '#1CCA00',
          DEFAULT: '#18A201',
        },
      },
      fontFamily: {
        // markPro: ['Mark Pro', 'san-serif'],
        // montserrat: ['Montserrat', 'san-serif'],
        sans: [
          'Inter',
          // 'ClashDisplay',
          // 'Poppins',
          // 'Montserrat',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      animation: {
        'bounce': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('aria-expanded', "&[aria-expanded='true']");
      addVariant('aria-selected', "&[aria-selected='true']");
      addVariant('data-state-on', '&[data-state="on"]');
      addVariant('data-disabled', '&[data-disabled]');
      addVariant('data-highlighted', '&[data-highlighted]');
    }),
  ],
}
