import { Container, Group } from '@mantine/core';
import { HeroContent } from '../hero-content';
import { HeroImage } from '../hero-image';

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#00cfc0] overflow-hidden">
      {/* Main content container */}
      <Container size="xl" className="relative z-10 h-full">
        <Group 
          align="center" 
          justify="space-between" 
          wrap="nowrap"
          className="min-h-screen py-12"
        >
          {/* Left content */}
          <div className="flex-1 max-w-2xl">
            <HeroContent />
          </div>
          
          {/* Right image */}
          <div className="flex-1 max-w-2xl h-[643px] ml-8">
            <HeroImage />
          </div>
        </Group>
      </Container>
      
      {/* Background wave decoration */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img 
          src="/images/wave-background.svg" 
          alt="" 
          className="w-full h-auto"
          style={{ maxHeight: '74px' }}
        />
      </div>
    </div>
  );
}