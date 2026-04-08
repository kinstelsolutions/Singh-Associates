'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Logo } from '@/components/ui/logo';
import { sendGTMEvent } from '@next/third-parties/google';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    { href: '#faq', label: 'FAQs' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleCallClick = () => {
    sendGTMEvent({ event: 'conversion', placement: 'header', method: 'phone' });
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-background/95 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button asChild className="hidden xs:flex h-11 px-6 rounded-full font-bold shadow-md transform transition-transform hover:scale-105 active:scale-95">
            <a href="tel:7007894901" onClick={handleCallClick} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>7007894901</span>
            </a>
          </Button>
          <div className="md:hidden">
            {isMounted && (
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
                    <div className="flex flex-col space-y-6">
                      <div className="pb-4 transform scale-90 -translate-x-4">
                         <Logo />
                      </div>
                      {navLinks.map((link) => (
                         <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors border-b border-border pb-2">
                           {link.label}
                         </a>
                      ))}
                      <div className="pt-4 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold text-[10px]">Switch Theme</span>
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                </SheetContent>
            </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
