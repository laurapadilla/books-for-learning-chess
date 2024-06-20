import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('html, body', {
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('h1, h2', {
  fontFamily: 'Helvetica Neue, sans-serif',
});

globalStyle('a', {
  color: 'inherit',
  textUnderlineOffset: '0.2rem',
});

export const container = style({
  padding: '2rem',
});

export const booksContainer = style({
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
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
