import { Stack, Text, Title } from '@mantine/core';
import { HeroCta } from '../hero-cta';

export function HeroContent() {
  return (
    <Stack gap={24} className="z-10 relative">
      <Stack gap={16}>
        <Text 
          className="text-[#1a1a1a] font-medium text-xl leading-5 tracking-normal uppercase"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          empower everyone to thrive
        </Text>
        <Title 
          order={1}
          className="text-[#1a1a1a] font-medium text-7xl leading-[72px] tracking-[-2.88px]"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          Welcome to Oriyon International Livestock Dealer
        </Title>
      </Stack>
      <HeroCta />
    </Stack>
  );
}