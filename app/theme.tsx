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