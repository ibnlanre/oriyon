import { MantineProvider } from '@mantine/core';
import { HeroSection, HeroEmpowermentSection } from './components/hero';
import { theme } from './components/theme';

export function OriyonHeroApp() {
  return (
    <MantineProvider theme={theme}>
      <div className="min-h-screen">
        <HeroSection />
        <HeroEmpowermentSection />
      </div>
    </MantineProvider>
  );
}