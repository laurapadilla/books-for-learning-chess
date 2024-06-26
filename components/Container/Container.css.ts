import { mq } from '@/styles/breakpoints';
import { style } from '@vanilla-extract/css';

export const container = style({
  '@media': {
    [mq.medium]: {
      padding: '2rem',
    },
  },
  padding: '1rem',
});
