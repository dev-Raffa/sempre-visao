import { ServicesSection } from './components/sections/services';
import { TeamSection } from './components/sections/team';
import { TestimonialSection } from './components/sections/testemonial';
import { LocationSection } from './components/sections/location';
import { AboutSection } from './components/sections/about';
import { CarouselBanner } from './components/slides/banner';
import { StructureSection } from './components/sections/structure';
import { RecentPostsSection } from './components/sections/posts/posts-section.component';

export default function Home() {
  return (
    <>
      <CarouselBanner />
      <AboutSection />
      <ServicesSection />
      <StructureSection />
      <TeamSection />
      <TestimonialSection />
      <RecentPostsSection />
      <LocationSection />
    </>
  );
}
