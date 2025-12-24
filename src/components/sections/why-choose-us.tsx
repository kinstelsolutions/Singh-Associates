'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

const features = [
    {
      name: 'Client-Centric Approach',
      description: 'Your goals are our priority. We listen, strategize, and tirelessly advocate for your best interests.',
    },
    {
      name: 'Proven Track Record',
      description: 'We have a history of securing favorable outcomes for our clients in complex family law cases.',
    },
    {
      name: 'Compassionate Counsel',
      description: 'We understand the emotional toll of family disputes and provide supportive, empathetic guidance.',
    },
    {
      name: 'Transparent Communication',
      description: 'You will be kept informed at every stage of your case, with clear explanations and honest advice.',
    },
  ];
  

const WhyChooseUsSection = () => {
    const whyChooseUsImage = PlaceHolderImages.find((img) => img.id === 'why-choose-us-image');

  return (
    <section id="why-us" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-secondary font-semibold">WHY CHOOSE US</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mt-2">
              Why Choose Us as Your Family Lawyer in Lucknow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Singh Associates, we combine legal expertise with a deep understanding of the sensitive nature of family law to provide you with exceptional representation.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary">{feature.name}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            {whyChooseUsImage && (
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
                    <Image
                        src={whyChooseUsImage.imageUrl}
                        alt={whyChooseUsImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={whyChooseUsImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
