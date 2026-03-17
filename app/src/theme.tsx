import { createTheme, responsiveFontSizes } from '@mui/material'
import { grey } from '@mui/material/colors'

const theme = createTheme({
  modularCssLayers: '@layer theme, base, mui, components, utilities;',
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        background: {
          default: grey[50],
        },
        text: {
          primary: grey[900],
        },
        action: {
          active: grey[900],
          activatedOpacity: 1,
          hover: grey[900],
          hoverOpacity: 1,
          focus: grey[900],
          focusOpacity: 1,
          selected: grey[900],
          selectedOpacity: 1,
          disabled: grey[900],
          disabledBackground: grey[900],
          disabledOpacity: 1,
        },
      },
    },
  },
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-noto-sans), var(--font-noto-sans-mono)',
    h3: {
      fontWeight: 900,
      fontSize: '3.0rem',
      color: grey[900],
    },
    body1: {
      fontSize: '1.0rem',
      color: grey[900],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h3: 'h1',
          body1: 'div',
        },
      },
    },
  },
})

export default responsiveFontSizes(theme)
