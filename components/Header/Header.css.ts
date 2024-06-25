import { helvetica } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.4rem',
  justifyContent: 'space-between',
  marginBottom: '2rem',
});

export const nav = style({
  display: 'flex',
  gap: '2rem',
});

export const navLink = style({
  fontFamily: helvetica,
  fontSize: '24px',
  textDecoration: 'none',
});

export const title = style({
  fontSize: '24px',
  textDecoration: 'none',
});
