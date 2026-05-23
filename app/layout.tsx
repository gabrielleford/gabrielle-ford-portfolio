import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gabrielle Ford | IT Systems Integrator & Developer',
  description:
    'Enthusiastic, resourceful IT Systems Integrator and Full-Stack Developer based in Fishers, IN. I automate workflows, integrate enterprise systems, and build full-stack web apps.',
  keywords: [
    'Gabrielle Ford',
    'IT Systems Integrator',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Fishers Indiana',
    'web developer portfolio',
  ],
  authors: [{ name: 'Gabrielle Ford', url: 'https://gabrielleford.dev' }],
  openGraph: {
    title: 'Gabrielle Ford | IT Systems Integrator & Developer',
    description:
      'Portfolio of Gabrielle Ford — IT Systems Integrator and Full-Stack Developer.',
    url: 'https://gabrielleford.dev',
    siteName: 'Gabrielle Ford',
    locale: 'en_US',
    type: 'website',
  },
  // Favicon is served from /public/favicon.ico automatically by Next.js
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${cormorant.variable} ${dmSans.variable} font-sans`}>
        {/* ThemeProvider wraps the whole app so any component can read theme */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
