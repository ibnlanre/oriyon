import { Button, Group, Text } from '@mantine/core';
import { DoubleArrowIcon } from '../../icons/double-arrow-icon';

export function HeroCta() {
  return (
    <Button
      className="bg-[#1a1a1a] hover:bg-[#2a2a2a] w-fit px-6 py-4 h-auto"
      radius="0"
      onClick={() => {
        // Handle navigation to inventory
        console.log('Navigate to inventory');
      }}
    >
      <Group gap={12} wrap="nowrap">
        <DoubleArrowIcon width={27} height={20} color="#ffffff" />
        <Text 
          className="text-white font-medium text-sm tracking-[2px] uppercase"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          view our inventory
        </Text>
      </Group>
    </Button>
  );
}