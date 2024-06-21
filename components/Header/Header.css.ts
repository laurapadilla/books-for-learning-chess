import { style } from '@vanilla-extract/css';

export const header = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
});

export const nav = style({
  display: 'flex',
  gap: '1rem',
});

export const navLink = style({
  textDecoration: 'none',
});