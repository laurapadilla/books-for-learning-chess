import { createTheme } from '@vanilla-extract/css';
import { Newsreader } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'] });

export const [theme, vars] = createTheme({
  typography: {
    h1: {
      fontFamily: 'Helvetica Neue, sans-serif',
      fontSize: '24px',
    },
    text: {
      fontFamily: newsreader as unknown as string,
      fontSize: '20px',
    },
  },
});
