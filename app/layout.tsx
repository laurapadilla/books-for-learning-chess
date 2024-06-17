import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
