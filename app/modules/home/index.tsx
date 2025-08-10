import { AboutSection } from "components/home/about";
import { OriyonHero } from "components/home/hero";
import { MissionSection } from "components/home/mission";
import { OurCommitment } from "components/home/our-commitment";

export default function Home() {
  return (
    <main className='min-h-screen bg-white'>
      <OriyonHero />
      <AboutSection />
      <MissionSection />
      <OurCommitment />
    </main>
  );
}
