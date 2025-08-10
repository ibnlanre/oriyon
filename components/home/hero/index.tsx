import { HeroEmpowermentSection } from "./empowerment-section";
import { HeroSection } from "./main-hero";

export function OriyonHero() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <HeroEmpowermentSection />
    </div>
  );
}
