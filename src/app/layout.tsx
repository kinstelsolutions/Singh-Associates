import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script';
import { Open_Sans, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

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
  metadataBase: new URL('https://singhassociates.ai-fied.com'),
  title: 'Trusted Family Lawyer in Lucknow | Singh Associates | Divorce & Court Matters',
  description: 'Looking for a trusted family lawyer in Lucknow? Singh Associates, a leading family advocate in Lucknow, specializes in divorce cases and family court matters. Get expert legal help today.',
  keywords: "family lawyer in lucknow, family advocate in lucknow, divorce lawyer in lucknow,family court lawyer in lucknow, singh associates",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Trusted Family Lawyer in Lucknow | Singh Associates | Divorce & Court Matters',
    description: 'Looking for a trusted family lawyer in Lucknow? Singh Associates, a leading family advocate in Lucknow, specializes in divorce cases and family court matters. Get expert legal help today.',
    url: 'https://singhassociates.ai-fied.com',
    siteName: 'Singh Associates',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Trusted Family Lawyer in Lucknow | Singh Associates',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${playfairDisplay.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WM58ZG0GEG"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WM58ZG0GEG');
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
