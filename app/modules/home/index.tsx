import { AboutSection } from "components/home/about";
import { OriyonHero } from "components/home/hero";
import { MissionSection } from "components/home/mission";

export default function Home() {
  return (
    <main className='min-h-screen bg-white'>
      <OriyonHero />
      <AboutSection />
      <MissionSection />
    </main>
  );
}
