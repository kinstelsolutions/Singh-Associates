"use client";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { sendGTMEvent } from '@next/third-parties/google';

const CtaSection = () => {
  const handleCallClick = () => {
    sendGTMEvent({ event: 'conversion', placement: 'cta', method: 'phone' });
  };

  return (
    <section
      id="contact"
      className="bg-muted">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Contact a Leading Family Court Lawyer in Lucknow Today
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your family's future is important. Contact Singh Associates for a
            confidential consultation to discuss your case. As a premier family
            and divorce lawyer in Lucknow, we are here to help you navigate
            these challenges with expertise.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform duration-300 hover:scale-105">
              <a
                href="tel:7007894901"
                onClick={handleCallClick}>
                Schedule a Consultation
              </a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto gap-8 text-left">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-background rounded-full mb-4">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-headline text-xl font-semibold text-primary">
                Phone
              </h3>
              <a
                href="tel:7007894901"
                onClick={handleCallClick}
                className="mt-1 text-muted-foreground hover:text-secondary">
                7007894901
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-background rounded-full mb-4">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-headline text-xl font-semibold text-primary">
                Office
              </h3>
              <p className="mt-1 text-muted-foreground">
                Camber No. 42, Family Court, Lucknow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
