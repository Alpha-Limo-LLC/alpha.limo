'use client';
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'var(--font-noto-sans), var(--font-noto-sans-mono), sans-serif',
  },
});

export default Theme;