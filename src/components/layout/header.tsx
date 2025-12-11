'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gavel, Phone, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Practice Areas' },
    { href: '#why-us', label: 'Why Choose Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-background/95 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Singh Associates Home">
          <Gavel className="h-7 w-7 text-secondary" />
          <span className="font-headline text-2xl font-bold text-primary">Singh Associates</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" className="hidden sm:flex">
            <a href="tel:7007894901" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </Button>
          <div className="md:hidden">
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader className="p-4 text-left">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription className="sr-only">Main navigation</SheetDescription>
                  </SheetHeader>
                  <div className="p-4">
                    <div className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                         <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors">
                           {link.label}
                         </a>
                      ))}
                    </div>
                  </div>
                </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
