import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center p-6 container mx-auto">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary drop-shadow-lg">
          Expert Family Law Representation in Lucknow
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow">
          Navigating family legal matters requires a blend of compassionate understanding and sharp legal expertise. Singh Associates is dedicated to providing both.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform duration-300 hover:scale-105 px-10 py-6 text-lg">
            <a href="tel:7007894901">
              Schedule a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;