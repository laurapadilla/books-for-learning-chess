import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import 'minireset.css';

const newsreader = Newsreader({
  display: 'swap',
  style: ['italic', 'normal'],
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={newsreader.className}>{children}</body>
    </html>
  );
}
