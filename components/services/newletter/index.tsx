import { Box, Divider, Image, Stack, Text, Title } from "@mantine/core";
import { CtaButton } from "components/shared/cta-button";

export function Newletter() {
  return (
    <Box bg='white' className='max-w-7xl mx-auto px-4 pb-24'>
      <Box className='w-full border-y border-gray-300 '>
        <Title
          order={2}
          fz={{ base: 28, sm: 56 }}
          fw={700}
          className='max-w-2xl py-4'
        >
          Introducing the O.I.L Breeding Programme
        </Title>
      </Box>

      <Stack className='flex-col sm:flex-row' mt={32} flex={1}>
        <Box
          flex={1}
          style={{
            maxHeight: 500,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            src='/images/goats-background.png'
            alt='O.I.L Breeding Programme'
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            fallbackSrc='https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          />
        </Box>

        <Stack flex={1} justify='space-evenly'>
          <Stack gap='sm'>
            <Title order={3} fw={700} fz={18}>
              Invest In the Network
            </Title>
            <Text>
              Connect with experienced breeders, veterinarians, and industry
              specialists who share proven strategies, breeding partnerships,
              and market opportunities that would take years to develop on your
              own.
            </Text>
          </Stack>

          <Divider className='border-[0.5px] border-gray-300' />

          <Stack gap='sm'>
            <Title order={3} fw={700} fz={18}>
              Invest In the Network
            </Title>
            <Text>
              Connect with experienced breeders, veterinarians, and industry
              specialists who share proven strategies, breeding partnerships,
              and market opportunities that would take years to develop on your
              own.
            </Text>
          </Stack>

          <Stack p={32} bg='#00CFC0' gap={32}>
            <Box className='space-y-2'>
              <Title order={3} fw={700} fz={{ base: 24, sm: 28 }}>
                Join Our Breeding Network Programme
              </Title>
              <Text>
                Our portfolio speaks for itself. We've delivered impactful
              </Text>
            </Box>
            <CtaButton text='join the network' variant='primary' />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
