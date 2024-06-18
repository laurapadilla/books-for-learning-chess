import { style } from '@vanilla-extract/css';

export const book = style({
  display: 'flex',
  flexDirection: 'column',
  height: '385px',
  justifyContent: 'space-between',
  padding: '1rem',
});

export const bookTitle = style({
  fontSize: '24px',
});

export const authors = style({
  fontSize: '24px',
  fontStyle: 'italic',
});
