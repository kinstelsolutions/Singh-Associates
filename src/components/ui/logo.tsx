import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link href="/" className={`flex items-center gap-3 group transition-transform hover:scale-105 ${className}`} aria-label="Singh Associates Home">
      <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary dark:bg-primary rounded-sm overflow-hidden transition-colors shadow-lg">
        <span className="font-headline text-2xl md:text-3xl font-bold text-background select-none tracking-tighter">
          SA
        </span>
        <div className="absolute inset-0 border-2 border-background/20 mix-blend-overlay"></div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
          Singh <span className="text-secondary">Associates</span>
        </span>
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium mt-0.5">
          Attorneys at Law
        </span>
      </div>
    </Link>
  );
};
