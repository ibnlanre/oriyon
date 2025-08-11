import { AboutSection } from "components/home/about";
import { EEWLYA } from "components/home/eewlya-section";
import { OriyonHero } from "components/home/hero";
import { MissionSection } from "components/home/mission";
import { OurCommitment } from "components/home/our-commitment";

export default function Home() {
  return (
    <main className='min-h-screen bg-white'>
      <OriyonHero />
      <AboutSection />
      <MissionSection />
      <EEWLYA />
      <OurCommitment />
    </main>
  );
}
