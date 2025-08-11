import {
  Box,
  Card,
  Flex,
  Image,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";

interface CommitmentCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  mb?: string | number;
}

function CommitmentCard({
  title,
  imageSrc,
  imageAlt,
  children,
  mb,
}: CommitmentCardProps) {
  return (
    <Card
      withBorder
      radius={0}
      mb={mb}
      className='border border-gray-400'
      p={32}
    >
      <Stack gap={24} className='flex md:flex-row'>
        <Box
          className='md:min-w-[400px]'
          style={{
            overflow: "hidden",
            background: "#f7f7f7",
            aspectRatio: "16 / 9",
            minHeight: 220,
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Stack gap='sm'>
          <Title order={3} fz={{ base: 20, sm: 22, md: 24 }} fw={800}>
            {title}
          </Title>
          {children}
        </Stack>
      </Stack>
    </Card>
  );
}

export function CommitmentStandards() {
  return (
    <Stack bg='white' className='max-w-7xl mx-auto px-4 pt-12'>
      {/* Hero block */}
      <Stack pos='relative' mb={{ base: 20, sm: 56 }} w='100%'>
        <Flex className='w-full lg:w-[80%]'>
          <Stack
            justify='center'
            className='p-8 sm:p-12 lg:min-h-[400px] w-full'
            style={{
              backgroundColor: "#7B1FEB",
              color: "white",
              borderRadius: 12,
            }}
          >
            <Stack gap='sm'>
              <Title order={2} fz={{ base: 24, sm: 40 }} fw={800}>
                Our Commitment to
                <br />
                International Standards
              </Title>
              <Text fz={{ base: 14, sm: 18 }} className='lg:max-w-[500px]'>
                We enable products from our traceable farmer network and ranches
                to meet top global standards. Through best practices in
                production and processing, we empower smallholders to access and
                compete in international markets.
              </Text>
            </Stack>
          </Stack>
        </Flex>

        {/* Overlay image */}
        <Box
          pos='absolute'
          right={{ base: 8, sm: 16, md: 24 }}
          top='50%'
          style={{
            width: "42%",
            maxWidth: 540,
            minWidth: 260,
            transform: "translateY(-50%)",
          }}
          visibleFrom='md'
        >
          <Box
            style={{
              background: "white",
              padding: 8,
              borderRadius: 12,
              boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
            }}
          >
            <Box style={{ borderRadius: 10, overflow: "hidden" }}>
              <Image
                src='/images/field-technician.svg'
                alt='Field technician inspecting livestock'
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Stack>

      {/* Our Impact */}
      <CommitmentCard
        title='Our Impact'
        imageSrc='/images/livestock-goats.svg'
        imageAlt='Monitoring livestock performance'
        mb='lg'
      >
        <Text fw={700}>Oriyon International drives impactful change by:</Text>
        <List spacing={6} className='list-disc' pl={16}>
          <List.Item>
            Uplifting women and youth in agriculture through initiatives like
            EEWYLA
          </List.Item>
          <List.Item>Fostering eco-friendly practices</List.Item>
          <List.Item>Creating a global marketplace for local farmers</List.Item>
          <List.Item>
            Developing infrastructure for a seamless value chain
          </List.Item>
        </List>
      </CommitmentCard>

      {/* Our Commitment */}
      <CommitmentCard
        title='Our Commitment'
        imageSrc='/images/mission-goat-woman.svg'
        imageAlt='Smiling farmer with poultry inside enclosure'
      >
        <Text>
          At Oriyon International, we champion inclusive growth and global
          opportunities through strategic partnerships with organisations like
          RumerNG, government bodies, and international agencies.
        </Text>
        <Text>
          Our programs are designed to be impactful, transformative, and
          accessible to all, helping farmers meet and exceed international
          standards.
        </Text>
      </CommitmentCard>
    </Stack>
  );
}
