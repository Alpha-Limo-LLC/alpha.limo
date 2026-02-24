'use client';
import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material';

const Light = createTheme({
  colorSchemes: {
    light: true,
    dark: false,
  },
  cssVariables: true,
  palette: {
    mode: 'light',
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
    background: {
      default: grey[50],
    },
    text: {
      primary: grey[900],
    },
  },
  typography: {
    fontFamily: 'var(--font-noto-sans), var(--font-noto-sans-mono), sans-serif',
  },
});

export default Light;