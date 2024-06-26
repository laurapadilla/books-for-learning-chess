import { mq } from '@/styles/breakpoints';
import { style } from '@vanilla-extract/css';
import { helvetica, vars } from '../../../styles/theme.css';

export const section = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'space-between',
  marginTop: '40px',
  width: '100%',
});

export const bookInfoContainer = style({
  '@media': {
    [mq.medium]: {
      gap: '3rem',
    },
  },
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
});

export const description = style({
  fontSize: '20px',
  lineHeight: '1.2',
  textIndent: '32px',
});

export const bookAndLinksContainer = style({
  '@media': {
    [mq.large]: {
      flexDirection: 'column',
    },
  },
  display: 'flex',
  gap: '24px',
});

export const whereToBuyLink = style({
  fontFamily: helvetica,
});

export const whereToBuyList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const portableText = style({
  '@media': {
    [mq.large]: {
      maxWidth: '480px',
    },
  },
  width: '100%',
});

export const otherBooksList = style({
  '@media': {
    [mq.xlarge]: {
      borderTop: 'none',
      paddingTop: '0',
      width: '25%',
    },
  },
  borderTop: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  paddingTop: '24px',
  width: '100%',
});

export const otherBooksHeading = style({
  fontSize: '24px',
});

export const otherBooksLink = style({
  fontFamily: vars.font.serif,
  fontSize: '20px',
});
