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
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface AboutItemData {
  id: string;
  order: number;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom";
  description: string | string[];
}

const abouts: AboutItemData[] = [
  {
    id: "how-we-stand-out",
    order: 1,
    title: "How We Stand Out",
    imageSrc: "/images/livestock-expert.jpg",
    imageAlt: "Livestock expert inspecting cattle in barn",
    imagePosition: "bottom",
    description: `
        Our dedication to traceability sets us apart. We understand the importance of knowing the lineage and health history of each animal.
        That's why we meticulously maintain comprehensive records for every goat in our care.
        These records not only ensure traceability but also serve as a testament to our unwavering commitment to transparency and accountability.
      `,
  },
  {
    id: "health-and-hygiene",
    order: 2,
    title: "Health and Hygiene",
    description: [
      `
        Health and hygiene are non-negotiable for us. We prioritize the well-being of our goats by providing them with the highest standards of care,
        nutritious diets, and clean living conditions. Regular veterinary check-ups and adherence to strict hygiene protocols are fundamental to our operations.
        This emphasis on health ensures that the goats we provide to our customers are robust, disease-free, and ready to thrive on your farm
      `,
      `
        Whether you're looking for healthy, high-quality purebred, pedigree, or unclassified goats, we cater to your specific needs.
        Each goat we offer represents our dedication to breeding and maintaining top-tier genetics. Our goats are bred for health, resilience, and desirable traits,
        ensuring that they serve as a strong foundation for your farm's success.
      `,
    ],
  },
  {
    id: "partner-with-us",
    order: 3,
    title: "Partner With Us",
    imageSrc: "/images/mission-goat-woman.svg",
    imageAlt: "Farmer receiving livestock support and delivery",
    imagePosition: "bottom",
    description: `
        When you invest in goats from Oriyon, you're not just buying animals; you're partnering with a team passionate about your success.
        Our commitment to providing healthy, high-quality goats, along with our meticulous record-keeping and emphasis on traceability,
        is our way of supporting you as you embark on your goat farming journey.
      `,
  },
];

export function About() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [activeId, setActiveId] = useState<string>(abouts[0].id);

  if (isMobile) {
    // Mobile: Accordion layout
    return (
      <Box bg='white' className='max-w-7xl mx-auto px-4 py-24'>
        {HeaderTitle}

        <Accordion
          variant='separated'
          multiple={false}
          defaultValue={abouts[0].id}
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
          {abouts.map((item) => (
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
                <AboutDetail item={item} />
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    );
  }

  // Desktop / Tablet: Two-column layout
  const active = abouts.find((o) => o.id === activeId) ?? abouts[0];

  return (
    <Box bg='white' className='max-w-7xl mx-auto px-4 py-24'>
      {HeaderTitle}

      <Group
        justify='space-between'
        align='flex-start'
        gap='xl'
        wrap='wrap'
        pt={32}
      >
        {/* List */}
        <Box style={{ flex: "1", minWidth: 300 }}>
          <Stack gap={0}>
            {abouts.map((item, index) => (
              <NavRow
                key={item.id}
                item={item}
                isActive={item.id === activeId}
                isLast={index === abouts.length - 1}
                onClick={() => setActiveId(item.id)}
              />
            ))}
          </Stack>
        </Box>

        {/* Active item */}
        <Box style={{ flex: "1", minWidth: 480 }}>
          <AboutDetail item={active} />
        </Box>
      </Group>
    </Box>
  );
}

const HeaderTitle = (
  <Stack gap='md' mb={72}>
    <Title
      order={2}
      fz={{ base: 28, sm: 56 }}
      fw={700}
      className='border-y border-gray-300 py-4'
    >
      O.I.L Breeding Programme
    </Title>

    <Text fz={{ base: 16, sm: 24 }}>
      Starting a goat farm is not just about acquiring goats; it's about laying
      the foundation for a thriving and sustainable endeavor. Here at Oriyon,
      our commitment extends beyond simply selling goats. We believe in
      providing aspiring farmers like you with not just animals, but with a
      solid foundation built on passion, commitment, and integrity.
    </Text>
  </Stack>
);

function NavRow({
  item,
  isActive,
  isLast,
  onClick,
}: {
  item: AboutItemData;
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

function AboutDetail({ item }: { item: AboutItemData }) {
  return (
    <Stack gap='lg'>
      {item.imageSrc && (
        <Box
          style={{
            width: "100%",
            height: 400,
            minHeight: 280,
            overflow: "hidden",
            borderRadius: 8,
            border: "1px solid #e0e0e0",
          }}
          className={clsx({
            "order-1": item.imagePosition === "top",
            "order-2": item.imagePosition === "bottom",
          })}
        >
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            fallbackSrc='https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          />
        </Box>
      )}

      <Stack
        gap='sm'
        className={clsx({
          "order-2": item.imagePosition === "top",
          "order-1": item.imagePosition === "bottom",
        })}
      >
        <Title order={3} fz={{ base: 22, sm: 24, md: 26 }} fw={700}>
          {item.title}
        </Title>

        {Array.isArray(item.description) ? (
          <Stack gap='md'>
            {item.description.map((desc, index) => (
              <Text key={index} fz={{ base: 14, sm: 18 }}>
                {desc}
              </Text>
            ))}
          </Stack>
        ) : (
          <Text fz={{ base: 14, sm: 18 }}>{item.description}</Text>
        )}
      </Stack>

      <Divider className='border-[0.5px] border-gray-300' visibleFrom='sm' />
    </Stack>
  );
}
