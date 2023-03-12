const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const MyClass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  });
});

module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    MyClass,
    plugin(function ({ addVariant }) {
      addVariant('optional', '&:optional');
      addVariant('group-optional', ':merge(.group):optional &');
      addVariant('peer-optional', ':merge(.peer):optional ~ &');
    }),
  ],
  content: ['./src/**/*{html,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      slate: colors.slate,
      teal: colors.teal,
      sky: colors.sky,
      amber: colors.amber,
      red: colors.red,
      yellow: colors.yellow,
      rose: colors.rose,
      green: colors.green,
      neutral: colors.neutral,
      cyan: colors.cyan,
      blue: colors.blue,
      fuchsia: colors.fuchsia,
      indigo: colors.indigo,
      gray: colors.gray,
      gold: {
        goldTitle: ' #827458',
        goldText: '#dcb47a',
        goldBg: '#655740',
        goldSubtitle: '#89734f',
        goldHover: '#ab8d60',
        goldHeader: '#faf5ee',
        goldButton: '#B8A36D',
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    fontFamily: {
      logo: ['Hammersmith One', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
};
