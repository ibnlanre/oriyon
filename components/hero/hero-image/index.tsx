import { Image } from '@mantine/core';

export function HeroImage() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/livestock-goats.svg"
        alt="Goats grazing in a pastoral field setting"
        className="w-full h-full object-cover"
        fit="cover"
      />
    </div>
  );
}