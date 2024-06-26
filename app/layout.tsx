import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import 'minireset.css';
import '@/styles/globals.css';

const newsreader = Newsreader({
  display: 'swap',
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  description:
    'Best books for learning chess and improving your game no matter your rating. These books are idea for beginners, intermediate, and advanced players as well as club players and professionals.',
  openGraph: {
    images: ['/public/openGraph.png'],
  },
  title: 'Books for learning chess',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newsreader.className}`}>{children}</body>
    </html>
  );
}
