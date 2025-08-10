import { Stack, Text, Title } from "@mantine/core";
import { CtaButton } from "components/shared/cta-button";

export function HeroEmpowermentSection() {
  return (
    <section className='py-16 px-4 bg-white max-w-7xl mx-auto'>
      <Stack
        justify='space-between'
        className='gap-4 lg:gap-16 sm:flex-row sm:items-start'
      >
        {/* Left side - Main heading */}
        <div className='flex-1 min-w-0 max-w-2xl'>
          <Title
            order={1}
            className='text-4xl font-medium text-black leading-tight tracking-tight max-w-xl'
            style={{
              fontFamily: "Fredoka, sans-serif",
              letterSpacing: "-0.84px",
              lineHeight: "1.2",
            }}
          >
            Empowering Women, Sustaining Livelihoods, and Leading Agriculture's
            Future!
          </Title>
        </div>

        {/* Right side - Description and CTA */}
        <Stack className='gap-8 flex-1 min-w-0 max-w-lg ml-auto'>
          <Text
            size='xl'
            className='text-gray-700 leading-relaxed'
            style={{
              fontFamily: "Fredoka, sans-serif",
              fontSize: "24px",
              fontWeight: 400,
              letterSpacing: "-0.48px",
              lineHeight: "1.4",
              color: "rgba(0, 0, 0, 0.76)",
            }}
          >
            Join us in building a future where local farmers access global
            markets, women and youth succeed, and innovation drives growth.
          </Text>
          <CtaButton
            text='contact us'
            onClick={() => {
              console.log("Navigate to contact us");
            }}
          />
        </Stack>
      </Stack>
    </section>
  );
}
