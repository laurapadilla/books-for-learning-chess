import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('h1, h2', {
  fontFamily: 'Helvetica Neue, sans-serif',
});

export const booksContainer = style({
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
  padding: '1rem',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem',
});
