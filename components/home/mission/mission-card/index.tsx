import { Divider, Paper, Stack, Text, Title } from "@mantine/core";

interface MissionCardProps {
  className?: string;
}

export function MissionCard({ className }: MissionCardProps) {
  return (
    <Paper
      className={`bg-white border border-gray-300 p-10 ${className || ""}`}
      radius={0}
      withBorder
    >
      <Stack gap={10}>
        <Title
          order={2}
          fz={24}
          fw={500}
          c='#000000'
          className='font-fredoka tracking-[-0.48px]'
        >
          Mission
        </Title>

        <Stack gap={24}>
          <Divider size={1} className='border-t border-gray-300' />

          <Stack gap={24}>
            <Text
              fz={{ base: 16, sm: 18 }}
              fw={500}
              c='#4e4e4e'
              className='font-fredoka'
            >
              "Our mission is to transform the smallholder goat farming
              landscape through the establishment of a robust network of
              expertly trained & registered producers/processors of goats, meat,
              hides and dairy."
            </Text>

            <Text
              fz={{ base: 14, sm: 16 }}
              fw={400}
              c='#4e4e4e'
              className='font-fredoka'
            >
              O.I.L aims to become Nigeria's largest commercial producer and
              exporter of goats, meat and goat milk and raw hides.Through
              sustainable practices and continuous education, we strive to
              create value-added products and market access, ensuring the
              financial prosperity, security and sustainable livelihoods of our
              youth and female producers.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
