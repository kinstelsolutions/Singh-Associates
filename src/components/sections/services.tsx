import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Gavel, Users, Baby, Landmark, ShieldAlert, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: <Gavel className="h-8 w-8 text-primary" />,
    title: 'Divorce Proceedings',
    description: 'Expert guidance through contested and uncontested divorce proceedings with dignity and respect.',
  },
  {
    icon: <Baby className="h-8 w-8 text-primary" />,
    title: 'Child Custody',
    description: 'Protecting your parental rights and ensuring the best interests of your children are prioritized.',
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: 'Alimony & Maintenance',
    description: 'Fairly and effectively handling spousal support and maintenance claims.',
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-primary" />,
    title: 'Domestic Violence',
    description: 'Immediate and decisive legal action to protect you and your family from harm.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Mutual Consent Divorce',
    description: 'Streamlining the divorce process for amicable separations, saving time and emotional distress.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Family Law Advisory',
    description: 'Comprehensive legal advice on all aspects of family law, from prenuptials to separations.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Areas of Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We specialize in all facets of family law, providing robust and empathetic legal support to our clients during their most challenging times.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="items-center pb-4">
                <div className="mb-4 inline-block rounded-full bg-secondary/10 p-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
