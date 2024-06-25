import { style } from '@vanilla-extract/css';

export const section = style({
  display: 'grid',
  gridTemplateColumns: '1fr 500px 2fr',
});

export const description = style({
  fontSize: '20px',
  lineHeight: '1.2',
  textIndent: '24px',
});

export const relatedBooks = style({});
