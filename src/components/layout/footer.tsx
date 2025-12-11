import Link from 'next/link';
import { Gavel, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Gavel className="h-8 w-8" />
              <span className="font-headline text-2xl font-bold">Singh Associates</span>
            </Link>
            <p className="text-primary-foreground/80">
              Your trusted partner in navigating complex family law matters in Lucknow.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-secondary mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 shrink-0" />
                <a href="tel:7007894901" className="hover:text-secondary transition-colors">
                  7007894901
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span>Camber No. 42, Family Court, Lucknow</span>
              </li>
            </ul>
          </div>
          <div>
             <h3 className="font-headline text-lg font-semibold text-secondary mb-4">Practice Areas</h3>
             <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#services" className="hover:text-secondary transition-colors">Divorce Law</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Child Custody</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Alimony</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">And more...</a></li>
             </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Singh Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
