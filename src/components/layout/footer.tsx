'use client';
import Link from 'next/link';
import { Gavel, MapPin, Phone, Mail } from 'lucide-react';

declare global {
  interface Window {
    gtag_report_conversion: (url: string) => boolean;
    gtag: (...args: any[]) => void;
  }
}

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (window.gtag) {
        window.gtag('event', 'client_called');
        if (window.gtag_report_conversion) {
          window.gtag_report_conversion('tel:7007894901');
        } else {
          window.location.href = 'tel:7007894901';
        }
      } else {
          window.location.href = 'tel:7007894901';
      }
    };

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4 col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Gavel className="h-8 w-8 text-secondary" />
              <span className="font-headline text-2xl font-bold text-primary">Singh Associates</span>
            </Link>
            <p className="text-muted-foreground/80 max-w-md">
              Your trusted family lawyer in Lucknow, navigating complex legal matters with compassionate and strategic solutions tailored to your unique situation.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Practice Areas</h3>
             <ul className="space-y-2 text-muted-foreground/80">
                <li><a href="#services" className="hover:text-secondary transition-colors">Divorce Law</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Child Custody</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Alimony</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Domestic Violence</a></li>
             </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 shrink-0 text-secondary" />
                <a href="tel:7007894901" onClick={handleCallClick} className="hover:text-secondary transition-colors">
                  7007894901
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 shrink-0 text-secondary" />
                <a href="mailto:contact@singhassociates.ai-fied.com" className="hover:text-secondary transition-colors">
                  contact@singhassociates.ai-fied.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-secondary" />
                <span>Camber No. 42, Family Court, Lucknow</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black py-4 px-4">
        <div className="container mx-auto text-center text-gray-400 text-xs">
            <p>&copy; {currentYear} Singh Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
