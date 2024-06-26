import { globalStyle, style } from '@vanilla-extract/css';
import { helvetica, vars } from './theme.css';

globalStyle('html, body', {
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('h1, h2', {
  fontFamily: helvetica,
});

globalStyle('a', {
  color: 'inherit',
  fontFamily: 'inherit',
  textDecorationThickness: '0.05em',
  textUnderlineOffset: '0.2rem',
});

export const booksContainer = style({
  '@media': {
    ['(min-width: 768px)']: {
      justifyContent: 'unset',
    },
  },
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
  justifyContent: 'center',
});

export const blurbContainer = style({
  margin: '2rem 0 2.5rem 0',
});

export const blurb = style({
  fontFamily: vars.font.serif,
  fontSize: '20px',
  lineHeight: '120%',
  maxWidth: '500px',
  textIndent: '32px',
});
