import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Gavel, Users, Baby, Landmark, ShieldAlert, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: <Gavel className="h-8 w-8 text-secondary" />,
    title: 'Divorce Proceedings',
    description: 'As your dedicated divorce lawyer in Lucknow, we provide expert guidance through contested and uncontested divorce proceedings with dignity.',
  },
  {
    icon: <Baby className="h-8 w-8 text-secondary" />,
    title: 'Child Custody',
    description: 'Our family advocates in Lucknow focus on protecting your parental rights and ensuring the best interests of your children are prioritized.',
  },
  {
    icon: <Landmark className="h-8 w-8 text-secondary" />,
    title: 'Alimony & Maintenance',
    description: 'We fairly and effectively handle spousal support and maintenance claims, ensuring a just outcome in family court.',
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-secondary" />,
    title: 'Domestic Violence',
    description: 'As experienced family court lawyers, we take immediate and decisive legal action to protect you and your family from harm.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-secondary" />,
    title: 'Mutual Consent Divorce',
    description: 'We streamline the mutual consent divorce process, saving you time and emotional distress with compassionate legal counsel.',
  },
  {
    icon: <Users className="h-8 w-8 text-secondary" />,
    title: 'Family Law Advisory',
    description: 'Get comprehensive legal advice on all aspects of family law from a leading family advocate in Lucknow.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-secondary font-semibold">OUR SERVICES</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mt-2">Our Areas of Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At Singh Associates in Lucknow, we specialize in all facets of family law. As your dedicated family advocate, we provide robust and empathetic legal support.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-muted/50 border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-2 hover:border-secondary/30">
              <CardHeader className="items-center pb-4">
                <div className="mb-4 inline-block rounded-full bg-background p-4 border border-border">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
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
