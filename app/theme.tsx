'use client';
import { createTheme } from '@mui/material/styles';

const Light = createTheme({
  colorSchemes: {
    light: true,
    dark: false,
  },
  cssVariables: true,
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: 'var(--font-noto-sans), var(--font-noto-sans-mono), sans-serif',
  },
});

export default Light;