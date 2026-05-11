import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
