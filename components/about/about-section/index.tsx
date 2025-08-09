import { Group, Text, Image } from "@mantine/core";

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section className={`py-16 px-4 md:px-8 lg:px-16 ${className || ""}`}>
      <div className="max-w-7xl mx-auto">
        <Group 
          gap={74} 
          align="center" 
          wrap="wrap"
          className="lg:flex-nowrap"
        >
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Image
              src="/images/goat-livestock.svg"
              alt="White goats in farm setting - Oriyon International livestock"
              className="w-full max-w-[675px] h-auto rounded-lg"
              fit="contain"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <Text
              fz={28.42}
              fw={500}
              lh="42.63px"
              c="#000000"
              className="font-neue-montreal"
            >
              Oriyon International Limited is a young pioneering force in Nigeria's livestock sector, dedicated to establishing a sustainable goat ranch with integrated cutting-edge processing facilities.
            </Text>
            
            <Text
              fz={28.42}
              fw={500}
              lh="42.63px"
              c="#000000"
              className="font-neue-montreal mt-6"
            >
              Our commitment lies in producing premium, value-added products. Starting with the G.OA.T from her we derive, meat, milk, cheese, yogurt, leather and innovative waste-to-energy solutions.
            </Text>
            
            <Text
              fz={28.42}
              fw={500}
              lh="42.63px"
              c="#000000"
              className="font-neue-montreal mt-6"
            >
              At our core, we prioritize empowering women,(who constitute a significant 74% of Nigeria's livestock producers), by nurturing their businesses for scalable growth, fostering sustainable livelihoods and ensuring financial security.
            </Text>
          </div>
        </Group>
      </div>
    </section>
  );
}