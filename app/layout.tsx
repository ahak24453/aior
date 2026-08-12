import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'AIOR - All In One Restaurant Management',
  description: 'The ultimate restaurant management platform combining POS, inventory, analytics, and customer experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-gray-50/50 text-gray-900 min-h-screen selection:bg-indigo-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}