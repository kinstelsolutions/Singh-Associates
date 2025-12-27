import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Trusted Family Lawyer in Lucknow | Singh Associates | Divorce & Court Matters',
  description: 'Looking for a trusted family lawyer in Lucknow? Singh Associates, a leading family advocate in Lucknow, specializes in divorce cases and family court matters. Get expert legal help today.',
  keywords: "family lawyer in lucknow, family advocate in lucknow, divorce lawyer in lucknow,family court lawyer in lucknow, singh associates",
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
        {/* Event snippet for Click to call (1) conversion page */}
        <Script id="google-ads-conversion">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17779169352/0V9LCLfogtcbEMiw4p1C',
                  'value': 1.0,
                  'currency': 'INR',
                  'event_callback': callback
              });
              return false;
            }
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
