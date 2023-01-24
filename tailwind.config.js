const { ClientRequest } = require("http")

module.exports = {
  enabled: true,
  content: ["./src/**/**/*.{html,vue,ts,js}"],
  safeList: [
    {
      pattern: /.*/
    },
  ],
  theme: {
    /**
     * Color values are defined in /src/theme/colors.scss.
     * Color names should be sematic in order to provide
     * contextual alignment when thinking about themes.
     * E.g. primary-text-color (semantic) vs black-1 (literal)
     */
    extend: {

      gridTemplateColumns: {
        //Sizing for Sidebar
        'sidebar': 'repeat(2, minmax(2, 1fr))',
      },

      width:
      {
        '396': '396px',
        '400': '400px',
      },

      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        app: {
          background: 'var(--app-background)',
          footer: 'var(--app-footer)',
          'footer-typography': 'var(--app-footer-typography)',
        },
        typography: {
          primary: 'var(--typography-primary)',
          secondary: 'var(--typography-secondary)',
          success: 'var(--typography-success)',
          error: 'var(--typography-error)',
          light: 'var(--typography-light)',
        },
        button: {
          'success': 'var(--button-success)',
          'success-secondary': 'var(--button-success-secondary)',
          'failure': 'var(--button-failure)',
          'background-main': 'var(--button-background-main)',
          'text-color': 'var(--button-text-color)',
          'background-hover': 'var(--button-background-hover)',
        },
        border: {
          'light': 'var(--border-light)',
          'dark': 'var(--border-dark)',
        },

        login: {
          'form-background': 'var(--login-form-background)',
          'button-background': 'var(--login-button-background)',
        },

      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  variants: {},
  plugins: [],
};
