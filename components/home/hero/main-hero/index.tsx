import { Container, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { CtaButton } from "components/shared/cta-button";

export function HeroSection() {
  return (
    <div className='relative h-[calc(100%-250px)] bg-[#00cfc0] overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <div className='absolute right-0 top-1/2 transform -translate-y-1/2 w-full md:w-3/4 lg:w-1/2 h-full'>
          {/* HeroImage  */}
          <Image
            src='/images/livestock-goats.svg'
            alt='Goats grazing in a pastoral field setting'
            className='w-full h-full object-cover object-center'
            fit='cover'
          />
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#00cfc0] via-[#00cfc0]/90 md:via-[#00cfc0]/80 to-transparent' />
      </div>

      {/* Main content container */}
      <Container
        size='xl'
        className='relative z-10 h-full max-w-7xl mx-auto px-4'
      >
        {/* Left content  */}
        <Flex
          align='center'
          justify='center'
          className='max-w-full h-full md:max-w-2xl'
        >
          <Stack gap={24} className='z-10 relative'>
            <Stack gap={16}>
              <Text
                className='text-[#1a1a1a] font-medium text-lg sm:text-xl leading-5 tracking-normal uppercase'
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                empower everyone to thrive
              </Text>
              <Title
                order={1}
                className='text-[#1a1a1a] font-medium text-5xl sm:text-7xl leading-[72px] tracking-[-2.88px]'
                style={{ fontFamily: "Fredoka, sans-serif" }}
              >
                Welcome to Oriyon International Livestock Dealer
              </Title>
            </Stack>
            <CtaButton
              text='view our inventory'
              onClick={() => {
                console.log("Navigate to inventory");
              }}
            />
          </Stack>
        </Flex>
      </Container>

      {/* Background wave decoration */}
      <div className='absolute bottom-0 left-0 w-full z-0 '>
        <Image
          src='/images/wave-background.svg'
          alt=''
          className='w-full min-h-[120px]'
          style={{
            filter: "brightness(0) invert(1)",
            transform: "scaleY(-1)",
          }}
        />
      </div>
    </div>
  );
}
