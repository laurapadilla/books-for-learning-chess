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
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
});

export const blurbContainer = style({
  margin: '2rem 0',
});

export const blurb = style({
  fontFamily: vars.font.serif,
  fontSize: '20px',
  lineHeight: '120%',
  maxWidth: '500px',
  textIndent: '24px',
});
