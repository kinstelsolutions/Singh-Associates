import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center bg-background">
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
      <div className="relative container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary drop-shadow-lg">
              Trusted Family <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[hsl(217,91%,75%)]">Lawyer</span> in Lucknow
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground drop-shadow">
              We are dedicated to provide effortless legal solutions for your personal problems.With over 20 years of Experience in Family law we provide swift justice with ease.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform duration-300 hover:scale-105 px-10 py-6 text-lg">
                <a href="tel:7007894901">
                  15min-FREE Consultation
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="flex items-center gap-6">
                <div className="h-48 w-px bg-secondary/50"></div>
                <div className="space-y-6">
                    <p className="text-muted-foreground italic max-w-xs">
                        "Personalized attention and a commitment to achieving the best possible outcome for our clients."
                    </p>
                    <div>
                        <p className="font-headline text-4xl font-bold text-secondary">25+</p>
                        <p className="text-sm uppercase tracking-wider text-muted-foreground/80">Years of Experience</p>
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
