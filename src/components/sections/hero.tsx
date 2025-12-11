import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center text-white">
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
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary drop-shadow-lg">
              Expert Family Law Representation in Lucknow
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-slate-200 drop-shadow">
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
          <div className="hidden md:flex justify-center items-center">
            <div className="flex items-center gap-6">
                <div className="h-48 w-px bg-secondary/50"></div>
                <div className="space-y-6">
                    <p className="text-slate-300 italic max-w-xs">
                        "Personalized attention and a commitment to achieving the best possible outcome for our clients."
                    </p>
                    <div>
                        <p className="font-headline text-4xl font-bold text-secondary">25+</p>
                        <p className="text-sm uppercase tracking-wider text-slate-400">Years of Experience</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
