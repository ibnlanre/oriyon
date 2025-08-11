import { Box, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ServiceCard } from "components/shared/service-card";

export function FarmServices() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box bg='white' className='max-w-7xl mx-auto px-4 pt-24'>
      <Title
        order={2}
        fz={{ base: 28, sm: 32 }}
        fw={700}
        mb='xl'
        pb='sm'
        className='border-b border-gray-300'
      >
        Farm Services
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
            key={index}
            withButton
            image='/images/whisk.svg'
            title='Farm Services'
            subtitle='1 hr | Based on demand'
            description='Breeding Contract Service. Unlock the potential of your livestock with our breeding contract service our breeding contract service is designed to'
            imageAlt='Farm Services'
            button={{
              label: "Book",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
