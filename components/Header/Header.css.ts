import { vars } from '@/styles/theme.css';
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
  fontFamily: vars.font.sans,
  textDecoration: 'none',
});

export const title = style({
  fontSize: '24px',
  textDecoration: 'none',
});
