import { SpecialtiesSection } from './components/sections/specialities';
import { HeroSection } from './components/sections/Hero';
import { ServicesSection } from './components/sections/services';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SpecialtiesSection />
      <ServicesSection />
    </>
  );
}
