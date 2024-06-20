import { createTheme } from '@vanilla-extract/css';

export const [theme, vars] = createTheme({
  font: {
    sans: 'Helvetica Neue, sans-serif',
    serif: 'var(--font-serif)',
  },
});
