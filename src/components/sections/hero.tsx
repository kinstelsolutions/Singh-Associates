import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-white">
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center p-6 container mx-auto">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
          Best Family Lawyer in Lucknow
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-100 drop-shadow">
          Singh Associates: Compassionate, professional, and dedicated legal representation for your family matters.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform duration-300 hover:scale-105">
            <a href="tel:7007894901">
              Consult Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
