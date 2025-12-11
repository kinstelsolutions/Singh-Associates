'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gavel, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-background/95 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Singh Associates Home">
          <Gavel className="h-7 w-7 text-secondary" />
          <span className="font-headline text-2xl font-bold text-primary">Singh Associates</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Practice Areas</a>
          <a href="#why-us" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Why Choose Us</a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <a href="tel:7007894901" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;