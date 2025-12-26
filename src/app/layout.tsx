import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Family Lawyer in Lucknow | Singh Associates',
  description: 'Need a family lawyer in Lucknow? Singh Associates offers expert legal services for divorce, child custody, and other family law matters with compassionate and strategic solutions.',
  keywords: "family lawyer in lucknow, trusted family lawyer in lucknow, divorce lawyer lucknow, child custody lawyer lucknow, singh associates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZM03Y1CNK"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8ZM03Y1CNK');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
