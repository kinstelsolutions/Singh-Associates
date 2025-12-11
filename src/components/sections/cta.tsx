import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="contact" className="bg-muted">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Get the Legal Support You Deserve
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Your family's future is important. Contact us for a confidential consultation to discuss your case and understand your options. We're here to help you navigate through these challenging times with expertise and compassion.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform duration-300 hover:scale-105">
                <a href="tel:7007894901">
                  Schedule a Consultation
                </a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-background rounded-full mb-4">
                      <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-primary">Phone</h3>
                  <a href="tel:7007894901" className="mt-1 text-muted-foreground hover:text-secondary">7007894901</a>
              </div>
              <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-background rounded-full mb-4">
                      <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-primary">Email</h3>
                  <a href="mailto:contact@singhassociates.law" className="mt-1 text-muted-foreground hover:text-secondary">contact@singhassociates.law</a>
              </div>
              <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-background rounded-full mb-4">
                      <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-primary">Office</h3>
                  <p className="mt-1 text-muted-foreground">Camber No. 42, Family Court, Lucknow</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;