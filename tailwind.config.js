module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        primary: '#656D51',

        'element-1': "#F7F5EF",
        'element-2': "#FFFDFB",
        'element-3': "#656D51",
        'element-4': "#B4BA90",
        'element-5': "#333333",
      },
      fontFamily: {
        'prata': [
          'Prata'
        ],
        serif: [
          'Prata',
          'serif',
        ],
        kinfolk: [
          'Kinfolk',
          'Times New Roman'
        ],
        commissioner: [
          'Commissioner', 'Times New Roman'
        ],
        garamond: [
          'EBGaramond',
          'Roboto', "Helvetica", "sans-serif"
        ],
        'sweetsans': [
          'SweetSans'
        ]
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px #656D51',
      },
      spacing: {
        28: '7rem',
        'header': 'var(--header-height)'
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },

  },
  variants: {
    extend: {
      translate: ['active', 'group-hover', 'group-focus'],
      display: ['active', 'group-hover', 'group-focus'],
      margin: ['group-hover', 'group-focus'],
      pointerEvents: ['focus', 'group-hover', 'group-focus'],
      width: ['focus', 'group-hover', 'group-focus'],
      zIndex: ['focus'],
      pointerEvents: ['hover', 'focus'],
    },
    lineClamp: ['responsive', 'hover', 'focus'],
  },
}
