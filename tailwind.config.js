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
      backgroundImage: () => ({
        'magenta-gradient': `linear-gradient(140deg, hsl(275deg 53% 55%) 0%, hsl(274deg 53% 55%) 7%, hsl(274deg 53% 55%) 14%, hsl(273deg 53% 55%) 21%, hsl(270deg 50% 55%) 29%, hsl(264deg 44% 56%) 36%, hsl(258deg 38% 56%) 43%, hsl(252deg 32% 55%) 50%, hsl(259deg 39% 56%) 57%, hsl(265deg 45% 56%) 64%, hsl(272deg 51% 55%) 71%, hsl(276deg 54% 54%) 79%, hsl(276deg 54% 54%) 86%, hsl(276deg 54% 54%) 93%, hsl(276deg 54% 54%) 100%)`,
      }),
      colors: {
        'magenta-violet': {
          50: '#EEE8F8',
          100: '#C7AFE4',
          200: '#AF8BDA',
          300: '#8652C7',
          400: '#7132BD',
          500: '#4E00AD',
          600: '#47009E',
          700: '#37007A',
          800: '#2C0061',
          900: '#200047',
        },
        'magenta-pink': {
          50: '#FAE5F9',
          100: '#EFAFEB',
          200: '#E88CE2',
          300: '#DD55D4',
          400: '#D733CE',
          500: '#CC00C1',
          600: '#B800AE',
          700: '#8F0088',
          800: '#70006B',
          900: '#570052',
        },
        'magenta-neutral': {
          50: ' #FAFAFA',
          100: '#F7F9FA',
          200: '#F4F5F7',
          300: '#E2E6EE',
          400: '#ADB3BD',
          500: '#93A3C0',
          600: '#6B778C',
          700: '#505F79',
          800: '#172B4D',
          900: '#031B4A',
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
