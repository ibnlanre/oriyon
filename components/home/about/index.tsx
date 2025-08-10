import { Image, Text } from "@mantine/core";

export function AboutSection() {
  return (
    <section className='pt-12 pb-20 sm:py-20 px-4 md:px-8 lg:px-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start'>
          <div className='lg:col-span-5 lg:row-span-3'>
            <div className='relative w-full h-80 lg:h-96 overflow-hidden'>
              <Image
                src='/images/goat-livestock.svg'
                alt='White goats in farm setting - Oriyon International livestock'
                className='w-full h-full object-cover'
                fit='cover'
                radius='md'
              />
            </div>
          </div>

          <div className='lg:col-span-7 space-y-6'>
            <Text
              fz={{ base: 18, sm: 20 }}
              fw={600}
              lh='1.5'
              c='#1a1a1a'
              className='font-neue-montreal leading-relaxed'
            >
              Oriyon International Limited is a young pioneering force in
              Nigeria's livestock sector, dedicated to establishing a
              sustainable goat ranch with integrated cutting-edge processing
              facilities.
            </Text>

            <Text
              fz={{ base: 18, sm: 20 }}
              fw={600}
              lh='1.5'
              c='#1a1a1a'
              className='font-neue-montreal leading-relaxed'
            >
              Our commitment lies in producing premium, value-added products.
              Starting with the G.OA.T from her we derive, meat, milk, cheese,
              yogurt, leather and innovative waste-to-energy solutions.
            </Text>

            <Text
              fz={{ base: 16, sm: 18 }}
              lh='1.5'
              c='#1a1a1a'
              className='font-neue-montreal leading-relaxed'
            >
              At our core, we prioritize empowering women,(who constitute a
              significant 74% of Nigeria's livestock producers), by nurturing
              their businesses for scalable growth, fostering sustainable
              livelihoods and ensuring financial security.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
