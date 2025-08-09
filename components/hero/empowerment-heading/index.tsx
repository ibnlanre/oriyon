import { Title } from '@mantine/core';

export function EmpowermentHeading() {
  return (
    <Title 
      order={1}
      className="text-4xl lg:text-5xl xl:text-6xl font-medium text-black leading-tight tracking-tight"
      style={{
        fontFamily: 'Fredoka, sans-serif',
        letterSpacing: '-0.84px',
        lineHeight: '1.2'
      }}
    >
      Empowering Women, Sustaining Livelihoods, and Leading Agriculture's Future!
    </Title>
  );
}