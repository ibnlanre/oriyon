import { Box, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ServiceCard } from "components/shared/service-card";

export function ExportServices() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box bg='white' className='max-w-7xl mx-auto px-4 py-24 pb-8'>
      <Title
        order={2}
        fz={{ base: 28, sm: 32 }}
        fw={700}
        mb='xl'
        pb='sm'
        className='border-b border-gray-300'
      >
        Export Services
      </Title>

      <Box
        component='section'
        className='grid gap-8'
        style={{
          gridTemplateColumns: "repeat(auto-fill,minmax(min(350px,100%),1fr))",
          gridAutoRows: "1fr",
        }}
      >
        {Array.from({ length: isMobile ? 3 : 6 }).map((_, index) => (
          <ServiceCard
            withButton
            key={index}
            image='/images/man-with-cattle.svg'
            title='Export Services'
            description='Breeding Contract Service. Unlock the potential of your livestock with our breeding contract service our breeding contract service is designed to'
            imageAlt='Export Services'
            button={{
              label: "Learn More",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
