import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import CtaSection from '@/components/sections/cta';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import DisclaimerDialog from '@/components/sections/disclaimer';
import FaqSection from '@/components/sections/faq';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <DisclaimerDialog />
    </div>
  );
}
