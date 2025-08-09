import { Text } from '@mantine/core';

export function EmpowermentDescription() {
  return (
    <Text 
      size="xl"
      className="text-gray-700 leading-relaxed"
      style={{
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '24px',
        fontWeight: 400,
        letterSpacing: '-0.48px',
        lineHeight: '1.4',
        color: 'rgba(0, 0, 0, 0.76)'
      }}
    >
      Join us in building a future where local farmers access global markets, women and youth succeed, and innovation drives growth.
    </Text>
  );
}