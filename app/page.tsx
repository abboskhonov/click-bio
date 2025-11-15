"use client";
import Hero from '@/components/hero';
import Features from '@/components/features';
import Customize from '@/components/customize';
import Audition from '@/components/audition';
import Contact from '@/components/contact';
import QrSection from '@/components/QrSection';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/faq';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      
      <Audition />
      <QrSection />
      <PricingSection />
      <Contact />
      <FAQ />
    </main>
  );
}
