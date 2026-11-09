import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oladunni Rachael | Developer & Security Minded',
  description:
    'Blockchain developer, cybersecurity student, and software quality practitioner building thoughtful digital products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
