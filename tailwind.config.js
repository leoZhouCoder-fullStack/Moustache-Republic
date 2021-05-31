module.exports = {
  purge: ['*/**/*.tsx'],
  theme: {
    extend: {
      textColor: {
        grey: '#888888',
        required: '#C90000',
      },
      borderColor: {
        'light-grey': '#CCCCCC',
        'dark-grey': '#222222',
      },
      backgroundColor: {
        header: '#F6F6F7',
      },
      width: {
        'mobile-orders': 'calc(100vh - 12rem)',
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    width: ['responsive', 'hover', 'focus', 'group-hover'],
    height: ['responsive', 'hover', 'focus', 'group-hover'],
    inset: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionDuration: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionTimingFunction: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    visibility: ['responsive', 'hover', 'focus', 'group-hover'],
    zIndex: ['responsive', 'hover', 'focus', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus', 'group-hover'],
    borderOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__pulse', 'animate__delay'],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ['responsive', 'hover', 'reduced-motion', ''],
    }),
  ],
}
