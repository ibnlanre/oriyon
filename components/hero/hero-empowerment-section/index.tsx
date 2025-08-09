import { Group } from '@mantine/core';
import { EmpowermentHeading } from '../empowerment-heading';
import { EmpowermentContent } from '../empowerment-content';

export function HeroEmpowermentSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <Group 
          align="flex-start" 
          justify="space-between" 
          wrap="wrap"
          className="gap-8 lg:gap-16"
        >
          {/* Left side - Main heading */}
          <div className="flex-1 min-w-0 max-w-2xl">
            <EmpowermentHeading />
          </div>
          
          {/* Right side - Description and CTA */}
          <div className="flex-1 min-w-0 max-w-lg">
            <EmpowermentContent />
          </div>
        </Group>
      </div>
    </section>
  );
}