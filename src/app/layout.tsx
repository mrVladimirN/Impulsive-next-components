import './styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { ReactNode } from 'react';
import cn from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components']
};

type RootLayoutProps = {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.className
          )}
        >
          <main className="flex-1">{children}</main>
        </body>
      </html>
    </>
);
export default RootLayout;
