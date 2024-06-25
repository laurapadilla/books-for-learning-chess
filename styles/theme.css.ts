import { createTheme, globalFontFace } from '@vanilla-extract/css';

export const helvetica = 'GlobalHelvetica';

globalFontFace(helvetica, {
  src: 'local("Helvetica Neue")',
});

export const [theme, vars] = createTheme({
  font: {
    sans: helvetica,
    serif: 'var(--font-serif)',
  },
});
