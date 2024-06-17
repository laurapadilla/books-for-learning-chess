import { style } from '@vanilla-extract/css';

export const booksContainer = style({
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
  padding: '1rem',
});
