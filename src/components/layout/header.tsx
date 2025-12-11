import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gavel, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Singh Associates Home">
          <Gavel className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">Singh Associates</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button asChild>
            <a href="tel:7007894901" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>7007894901</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
