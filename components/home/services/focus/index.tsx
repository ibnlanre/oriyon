import { Box, Title } from "@mantine/core";
import { ServiceCard } from "components/shared/service-card";

const services = [
  {
    title: "Livestock Production",
    description:
      "Establishing breeding programs and implementing best practices for increased productivity",
    image: "/images/cow-caged.svg",
  },
  {
    title: "Processing & Value Addition",
    description:
      "Developing solutions for dairy, meat, hides and biogas production to maximise resource utilization",
    image: "/images/cow-caged.svg",
  },
  {
    title: "Economic Development",
    description:
      "Providing resources, training, and market access for women, youth and persons with disabilities.",
    image: "/images/cow-caged.svg",
  },
  {
    title: "Integrated Ranch Development",
    description:
      "Building a world-class state-of-the-art small ruminant integrated processing ranch equipped with farms, processing facilitites, and distribution services.",
    image: "/images/cow-caged.svg",
  },
  {
    title: "Global Trade Opportunities",
    description:
      "Ensuring every smallholder farmer has access to global markets by producing and processing to international standards",
    image: "/images/cow-caged.svg",
  },
];

export function FocusServices() {
  return (
    <Box bg='white' className='max-w-7xl mx-auto px-4 py-24'>
      <Title
        order={2}
        fz={{ base: 28, sm: 32 }}
        fw={700}
        mb='xl'
        pb='sm'
        className='border-b border-gray-300 mx-auto text-center'
      >
        Oriyon International focuses on:
      </Title>

      <Box
        component='section'
        className='grid gap-8'
        style={{
          gridTemplateColumns: "repeat(auto-fill,minmax(min(350px,100%),1fr))",
          gridAutoRows: "1fr",
        }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            withButton={false}
            image={service.image}
            title={service.title}
            description={service.description}
            imageAlt={service.title}
          />
        ))}
      </Box>
    </Box>
  );
}
