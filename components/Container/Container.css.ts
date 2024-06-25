import { style } from '@vanilla-extract/css';

export const container = style({
  '@media': {
    ['(min-width: 768px)']: {
      padding: '2rem',
    },
  },
  padding: '1rem',
});
