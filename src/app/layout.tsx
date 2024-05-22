import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fontSans = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'ZicBLoG',
  description: 'Project for my future profession',
};

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          'dark min-h-screen bg-background p-4 font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Header />
        <Footer />
        {children}
      </body>
    </html>
  );
}
