import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script';
import { Open_Sans, Playfair_Display } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

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
    <html lang="en" className={`${openSans.variable} ${playfairDisplay.variable} dark scroll-smooth`}>
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
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
