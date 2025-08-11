import {
  Accordion,
  Box,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface OfferItemData {
  id: string;
  order: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

const offers: OfferItemData[] = [
  {
    id: "expertise",
    order: 1,
    title: "Our Expertise",
    imageSrc: "/images/livestock-expert.jpg",
    imageAlt: "Livestock expert inspecting cattle in barn",
    description:
      "With over 75 years of combined experience, our team has the expertise and knowledge to advise our customers on all aspects of livestock management.",
  },
  {
    id: "breeds",
    order: 2,
    title: "Our Breeds",
    imageSrc: "/images/livestock-goats.svg",
    imageAlt: "Healthy goats representing our premium breeds",
    description:
      "We provide hardy, productive breeds selected for local adaptability, fast growth, and excellent meat quality — ideal for sustainable, profitable farming.",
  },
  {
    id: "delivery",
    order: 3,
    title: "Our Delivery",
    imageSrc: "/images/mission-goat-woman.svg",
    imageAlt: "Farmer receiving livestock support and delivery",
    description:
      "Reliable delivery and farmer support from end-to-end: handling, transport, and on-farm guidance to ensure animals settle and thrive quickly.",
  },
];

export function Offers() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [activeId, setActiveId] = useState<string>(offers[0].id);

  if (isMobile) {
    // Mobile: Accordion layout
    return (
      <Box
        bg='white'
        p={{ base: "2rem 1rem", sm: "3rem 1rem" }}
        className='max-w-7xl mx-auto'
      >
        <Title
          order={2}
          fz={{ base: 28, sm: 32 }}
          fw={700}
          mb='xl'
          pb='sm'
          className='border-b border-gray-300'
        >
          What We Offer
        </Title>

        <Accordion
          variant='separated'
          multiple={false}
          defaultValue={offers[0].id}
          styles={{
            item: {
              border: "1px solid #e7e7e7",
              borderRadius: 8,
            },
            control: { padding: "1rem 0.75rem" },
            panel: { padding: "0.75rem" },
            root: {
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          {offers.map((item) => (
            <Accordion.Item key={item.id} value={item.id}>
              <Accordion.Control>
                <Group justify='space-between' align='center' wrap='nowrap'>
                  <Group gap={10} align='center'>
                    <Text fz={16} fw={600} c='dimmed'>
                      ({item.order})
                    </Text>
                    <Text fz={{ base: 18, sm: 20 }} fw={600}>
                      {item.title}
                    </Text>
                  </Group>
                  <ArrowRight
                    size={18}
                    style={{ color: "#666" }}
                    className='hidden sm:block'
                  />
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <OfferDetail item={item} />
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    );
  }

  // Desktop / Tablet: Two-column layout
  const active = offers.find((o) => o.id === activeId) ?? offers[0];

  return (
    <Box
      bg='white'
      p={{ base: "2rem 1rem", sm: "3rem 2rem", md: "4rem 3rem" }}
      className='max-w-7xl mx-auto'
    >
      <Title
        order={2}
        fz={{ base: 28, sm: 32 }}
        fw={700}
        mb='xl'
        pb='sm'
        className='border-b border-gray-300'
      >
        What We Offer
      </Title>

      <Group justify='space-between' align='flex-start' gap='xl' wrap='wrap'>
        {/* List */}
        <Box style={{ flex: "1", minWidth: 300 }}>
          <Stack gap={0}>
            {offers.map((item, index) => (
              <NavRow
                key={item.id}
                item={item}
                isActive={item.id === activeId}
                isLast={index === offers.length - 1}
                onClick={() => setActiveId(item.id)}
              />
            ))}
          </Stack>
        </Box>

        {/* Active item */}
        <Box style={{ flex: "1", minWidth: 480 }}>
          <OfferDetail item={active} />
        </Box>
      </Group>
    </Box>
  );
}

function NavRow({
  item,
  isActive,
  isLast,
  onClick,
}: {
  item: OfferItemData;
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
}) {
  return (
    <>
      <UnstyledButton
        onClick={onClick}
        style={{
          width: "100%",
          padding: "1rem 0.5rem",
          backgroundColor: isActive ? "#f8f8f8" : "transparent",
        }}
      >
        <Group justify='space-between' align='center' wrap='nowrap'>
          <Group gap={12} align='center'>
            <Text fz={16} fw={600} c='dimmed'>
              ({item.order})
            </Text>
            <Text fz={{ base: 18, sm: 20, md: 22 }} fw={700}>
              {item.title}
            </Text>
          </Group>
          <Box
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              border: "1px solid #ddd",
              display: "grid",
              placeItems: "center",
              backgroundColor: isActive ? "black" : "white",
            }}
          >
            <ArrowRight size={18} color={isActive ? "white" : "black"} />
          </Box>
        </Group>
      </UnstyledButton>
      {!isLast && <Divider className='border-[0.5px] border-gray-300' />}
    </>
  );
}

function OfferDetail({ item }: { item: OfferItemData }) {
  return (
    <Stack gap='lg'>
      <Box
        style={{
          width: "100%",
          height: 280,
          overflow: "hidden",
          borderRadius: 8,
          border: "1px solid #e0e0e0",
        }}
      >
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          fallbackSrc='https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        />
      </Box>

      <Stack gap='sm'>
        <Title order={3} fz={{ base: 22, sm: 24, md: 26 }} fw={700}>
          {item.title}
        </Title>
        <Text fz={{ base: 14, sm: 15, md: 16 }} lh={1.7} c='dimmed'>
          {item.description}
        </Text>
      </Stack>

      <Divider className='border-[0.5px] border-gray-300' visibleFrom='sm' />
    </Stack>
  );
}
