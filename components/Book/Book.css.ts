import { mq } from '@/styles/breakpoints';
import { booksContainer } from '@/styles/globals.css';
import { style } from '@vanilla-extract/css';

export const book = style({
  display: 'flex',
  flexDirection: 'column',
  height: '385px',
  justifyContent: 'space-between',
  maxWidth: '255px',
  padding: '1rem',
  selectors: {
    [`${booksContainer} &`]: {
      '@media': {
        [mq.medium]: {
          height: '415px',
          maxWidth: 'none',
        },
      },
    },
  },
  textDecoration: 'none',
  width: '100%',
});

export const bookTitle = style({
  fontSize: '24px',
});

export const authors = style({
  fontSize: '24px',
  fontStyle: 'italic',
});
