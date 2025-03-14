import { SpecialtiesSection } from './components/sections/specialities';
import { HeroSection } from './components/sections/hero';
import { ServicesSection } from './components/sections/services';
import { TeamSection } from './components/sections/team';

import { TestimonialSection } from './components/sections/testemonial';
import { LocationSection } from './components/sections/location';
import { AboutSection } from './components/sections/about';
import { CarouselBanner } from './components/slides/banner';
import { StructureSection } from './components/sections/structure';

export default function Home() {
  return (
    <>
      <CarouselBanner />
      {/*
      <HeroSection />
      <SpecialtiesSection />
      */}
      <AboutSection />
      <ServicesSection />
      <StructureSection />
      <TeamSection />
      <TestimonialSection />
      <LocationSection />
    </>
  );
}
