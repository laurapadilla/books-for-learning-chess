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
  display: 'flex',
  gap: '3rem',
});

export const description = style({
  fontSize: '20px',
  lineHeight: '1.2',
  textIndent: '24px',
});

export const bookAndLinksContainer = style({
  display: 'flex',
  flexDirection: 'column',
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
  maxWidth: '480px',
  width: '100%',
});

export const otherBooksList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '25%',
});

export const otherBooksHeading = style({
  fontSize: '24px',
});

export const otherBooksLink = style({
  fontFamily: vars.font.serif,
  fontSize: '20px',
});
