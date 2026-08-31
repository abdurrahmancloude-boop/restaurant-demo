import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { MenuSection } from './components/MenuSection';
import { SignatureSelection } from './components/SignatureSelection';
import { AboutSection } from './components/AboutSection';
import { DiningBlocks } from './components/DiningBlocks';
import { CinematicBreak } from './components/CinematicBreak';
import { GallerySection } from './components/GallerySection';
import { LocationContactSection } from './components/LocationContactSection';
import { SocialSection } from './components/SocialSection';
import { FinalCTA } from './components/FinalCTA';
import { Chatbot } from './components/Chatbot';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans">
      {/* Fixed Navigation */}
      <Navigation onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section (Cinematic Interactive Hero with Spotlight & Grid Parallax) */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onContact={() => scrollToSection('contact')}
        />

        {/* Section 2: Experience */}
        <ExperienceSection />

        {/* Section 3: Menu */}
        <MenuSection />

        {/* Section 4: Signature Selection */}
        <SignatureSelection />

        {/* Section 5: About */}
        <AboutSection />

        {/* Section 6: Dining Experience Pillars */}
        <DiningBlocks />

        {/* Section 7: Cinematic Image Break */}
        <CinematicBreak />

        {/* Section 8: Gallery */}
        <GallerySection />

        {/* Section 9: Location & Contact */}
        <LocationContactSection />

        {/* Section 10: Social Media */}
        <SocialSection />

        {/* Section 11: Final CTA */}
        <FinalCTA onExploreMenu={() => scrollToSection('menu')} />
      </main>

      {/* Floating Chatbot Assistant */}
      <Chatbot onNavigate={scrollToSection} />

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
