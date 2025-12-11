import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="contact" className="bg-primary/5">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="bg-primary text-primary-foreground rounded-lg shadow-xl p-8 md:p-12 text-center flex flex-col items-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Ready to Discuss Your Case?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Contact us today for a confidential consultation. We are here to listen and provide the legal support you need.
          </p>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-secondary" />
              <a href="tel:7007894901" className="font-sans text-xl font-medium hover:text-secondary transition-colors">
                7007894901
              </a>
            </div>
            <div className="flex items-center gap-3 text-left">
              <MapPin className="h-5 w-5 text-secondary shrink-0 mt-1" />
              <span className="font-sans text-lg">
                Camber No. 42, Family Court, Lucknow
              </span>
            </div>
          </div>
          <div className="mt-10">
            <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform duration-300 hover:scale-105">
              <a href="tel:7007894901">
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
