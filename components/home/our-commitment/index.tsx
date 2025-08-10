import { Flex, Image, Stack } from "@mantine/core";

// EARTH Commitment Item Component
interface EarthItemProps {
  letter: string;
  title: string;
  description: string;
  isLast?: boolean;
}

function EarthItem({
  letter,
  title,
  description,
  isLast = false,
}: EarthItemProps) {
  return (
    <div className={`${!isLast ? "border-b border-gray-200 pb-6" : "pb-6"}`}>
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between'>
        <span className='text-sm sm:text-xl leading-none flex-shrink-0'>
          {letter}
        </span>
        <Flex justify='flex-start' align='start' className='w-full max-w-xs'>
          <h4 className='flex text-lg md:text-xl font-bold text-black flex-shrink-0'>
            {title}
          </h4>
        </Flex>
        <p className='text-gray-700 text-sm md:text-base leading-relaxed max-w-lg'>
          {description}
        </p>
      </div>
    </div>
  );
}

// Partners Marquee Component
function PartnersMarquee() {
  const partners = [
    { name: "Logoipsum", icon: "🏢" },
    { name: "LOGOIPSUM", icon: "🌾" },
    { name: "logo ipsum", icon: "🌍" },
    { name: "logoipsum", icon: "🌀" },
    { name: "Logoipsum", icon: "🏢" },
    { name: "LOGOIPSUM", icon: "🌾" },
    { name: "logo ipsum", icon: "🌍" },
    { name: "logoipsum", icon: "🌀" },
  ];

  return (
    <div className='overflow-hidden'>
      <div className='flex animate-marquee whitespace-nowrap'>
        {partners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className='bg-white border border-gray-300 rounded-lg p-4 md:p-6 flex items-center justify-center min-h-[80px] md:min-h-[100px] mx-2 flex-shrink-0'
          >
            <div className='text-center'>
              <div className='text-green-600 text-2xl md:text-3xl mb-1'>
                {partner.icon}
              </div>
              <span className='text-gray-600 font-medium text-sm md:text-base'>
                {partner.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OurCommitment() {
  return (
    <section className='w-full bg-white py-16 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto space-y-16'>
        {/* EARTH Commitment Section */}
        <Stack>
          <Flex justify='space-between' className='flex-col sm:flex-row gap-4 '>
            <h2 className='text-lg sm:text-2xl text-black uppercase'>
              OUR COMMITMENT
            </h2>
            <h3 className='text-3xl lg:text-4xl font-bold text-black uppercase mb-8 leading-tight max-w-xl'>
              EARTH - The Essence Of Our Foundation; Where Both Earth And Heart
              Converge To Define Oriyon's Indomitable Culture:
            </h3>
          </Flex>

          <div>
            <div className='space-y-6'>
              <EarthItem
                letter='E'
                title='Evolution'
                description={`Growth is our constant companion. At Oriyon, evolution isn't just a desire, it's an expectation. 
                  We cultivate an environment where trying, failing, and learning pave the way for revolutionary ideas.
                  Remember, Edison's lightbulb took over a thousand attempts.`}
              />

              <EarthItem
                letter='A'
                title='Adaptability'
                description={`Agriculture brims with challenges. We thrive by bending, flexing, and making the best of any situation.`}
              />

              <EarthItem
                letter='R'
                title='Resolve'
                description={`In every predicament lies a solution. Our commitment to resolving issues drives our success and uplifts the people of Nigeria.`}
              />

              <EarthItem
                letter='T'
                title='Tenacity'
                description={`Agriculture demands fortitude. In the face of setbacks, it's tenacity that fuels our relentless pursuit of progress.`}
              />

              <EarthItem
                letter='H'
                title='Harness Humility'
                description={`Working with smallholders demands finesse and humility. Empowering those with limited education demands respect and grace, 
                  fostering a culture where learning uncovers potential, uplifts lives and creates value.`}
                isLast={true}
              />
            </div>
          </div>
        </Stack>

        {/* Livestock Banner Section */}
        <div className='bg-[#1A1A1A] rounded-lg p-8 md:p-12 pb-0 md:pb-0'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div className='text-white'>
              <h3 className='text-xl md:text-2xl lg:text-3xl font-bold mb-6'>
                Exceptional Livestock. Provenance You Can Trust
              </h3>
              <p className='text-gray-200 text-sm md:text-base leading-relaxed'>
                At Oriyon, we don't just sell goats - we deliver premium,
                performance-driven breeding stock backed by full traceability
                and provenance records. Whether you're establishing your herd,
                scaling for meat or milk production, or positioning for
                lucrative export markets, our livestock gives you the
                competitive edge you need.
              </p>
            </div>

            <div className='flex justify-center lg:justify-end'>
              <Image
                src='/images/sketched-goat.svg'
                alt='Sketched Goat'
                className='w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80'
              />
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <Flex justify='space-between' align='center'>
          <h2 className='text-2xl font-semibold min-w-1/4'>Our Partners</h2>
          <PartnersMarquee />
        </Flex>
      </div>
    </section>
  );
}
