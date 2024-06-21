import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const nav = style({
  display: 'flex',
  gap: '1rem',
});

export const navLink = style({
  textDecoration: 'none',
});
