import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechCore - Cloud & Security Solutions | AWS | Azure | DevOps',
  description: 'Full-stack IT services: AWS, Azure cloud solutions, DevOps/AIOps automation, and enterprise cybersecurity. Transform your infrastructure with our expert team.',
  keywords: 'AWS, Azure, DevOps, AIOps, Cloud Migration, Cybersecurity, Security Audit, IT Consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
