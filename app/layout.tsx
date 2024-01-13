import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

import { Toaster } from '@/components/ui/sonner';
import { COOKIE } from '@/utils/constants';
import type { Theme } from '@/utils/contexts';

import Providers from './providers';

import '../assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const TOASTER_DURATION = 5000;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const cookieTheme = cookies().get(COOKIE.THEME);
  const defaultTheme = (cookieTheme?.value as Theme) ?? 'dark';

  return (
    <html className={defaultTheme} lang='en'>
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}>
        <Providers theme={{ defaultTheme }}>{children}</Providers>
        <Toaster duration={TOASTER_DURATION} />
      </body>
    </html>
  );
};

export default RootLayout;