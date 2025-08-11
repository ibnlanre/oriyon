import { AboutSection } from "components/home/about";
import { CommitmentStandards } from "components/home/commitment-standards";
import { EEWLYA } from "components/home/eewlya-section";
import { OriyonHero } from "components/home/hero";
import { MissionSection } from "components/home/mission";
import { Offers } from "components/home/offers";
import { OurCommitment } from "components/home/our-commitment";
import { ProgramDetails } from "components/home/program-details";

export default function Home() {
  return (
    <main className='min-h-screen bg-white'>
      <OriyonHero />
      <AboutSection />
      <MissionSection />
      <CommitmentStandards />
      <Offers />
      <EEWLYA />
      <ProgramDetails />
      <OurCommitment />
    </main>
  );
}
