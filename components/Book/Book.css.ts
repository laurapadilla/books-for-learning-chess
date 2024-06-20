import { style } from '@vanilla-extract/css';

export const book = style({
  display: 'flex',
  flexDirection: 'column',
  height: '385px',
  justifyContent: 'space-between',
  maxWidth: '255px',
  padding: '1rem',
  textDecoration: 'none',
});

export const bookTitle = style({
  fontSize: '24px',
});

export const authors = style({
  fontSize: '24px',
  fontStyle: 'italic',
});
