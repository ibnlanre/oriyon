import { Box, Card, Flex, Stack, Text, Title } from "@mantine/core";
import { CtaButton } from "components/shared/cta-button";

export function EEWLYA() {
  return (
    <Stack gap='0'>
      {/* Background Image */}
      <Box
        style={{
          backgroundImage: "url(/images/sheep-field.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "40vh",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Overlaid White Card - Now positioned relative to hero section */}
        <Card
          shadow='xl'
          style={{
            backgroundColor: "white",
            width: "90%",
            maxWidth: 800,
            zIndex: 10,
            border: "2px solid #e0e0e0",
            transform: "translateY(25%)",
          }}
        >
          <Stack p='xl' align='center' gap='md'>
            <Title
              order={2}
              fz={{ base: 28, sm: 32, md: 36 }}
              ta='center'
              style={{ fontWeight: 700 }}
            >
              Integrated Support Ecosystem
            </Title>

            <Text ta='center' lh={1.6} fz={{ base: 14, sm: 15, md: 16 }}>
              Oriyon International is redefining agricultural success through an
              integrated ecosystem that supports smallholder goat farmers with
              advanced breeding, sustainable forming education, digital market
              access, and community-driven development. Our innovative approach
              equips farmers to build profitable, future-ready livestock
              businesses that drive economic growth and global food security.
              Join us in transforming the livestock industry and creating
              lasting impact for farmers and communities alike.
            </Text>

            <CtaButton text='Contact Us' py={3} px={6} />
          </Stack>
        </Card>
      </Box>

      {/* Bottom Section -  Yellow Background with Content */}
      <Box
        pos='relative'
        w='100%'
        bg='#DEE947'
        p={{ base: "15rem 1rem 4rem 1rem", sm: "8rem 1rem 4rem 1rem" }}
      >
        <Box ta='left' px='1rem' maw={1200} m='0 auto'>
          <Title order={2} fz={{ base: 32, sm: 40, md: 48 }} fw={700} mb={10}>
            What is E.E.W.Y.L.A?
          </Title>

          {/* Navigation Links */}
          <Flex justify='flex-start' gap={16} mb={10} wrap='wrap'>
            <Text>About EEWYLA</Text>
            <Text>Why EEWYLA</Text>
            <Text>Our Initiatives</Text>
          </Flex>

          {/* Separator Line */}
          <Box
            style={{
              height: "1px",
              backgroundColor: "black",
              width: "100%",
              maxWidth: "800px",
              margin: "0",
            }}
          />
        </Box>

        <Flex
          justify='center'
          gap='0'
          maw={1200}
          m='2rem auto 0 auto'
          px='1rem'
          wrap='wrap'
        >
          <AboutEEWYLA
            title='Our Mission'
            description={`EEWYLA is committed to building successful livestock entrepreneurs by providing not just skills, but the tools, resources, 
              and support needed to thrive. The program empowers resilient business owners to drive economic growth, uplifts communities, and transform
              the livestock industry.`}
          />

          <AboutEEWYLA
            title='Inclusive Opportunities For All'
            description={`EEWYLA in partnership with Rumer.NG, ensures inclusivity by enabling persons with disabilities to fully participate and thrive. 
              Through Rumer's platform, the program removes market access barriers and creates equal opportunities for success across all abilities.`}
          />

          <AboutEEWYLA
            title='The EEWYLA Promise'
            description={`EEWYLA is more than a program, it is a pathway to economic independence and entrepreneurial success. 
              It offers individuals of all backgrounds the chance to build a better future through livestock farming. 
              Join us and take the first step toward transforming your life and community.`}
          />
        </Flex>
      </Box>
    </Stack>
  );
}

interface AboutEEWYLAProps {
  title: string;
  description: string;
}

export function AboutEEWYLA({ title, description }: AboutEEWYLAProps) {
  return (
    <Box
      component='article'
      p={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
      style={{
        border: "1px solid black",
        backgroundColor: "transparent",
        flex: "1 1 300px",
        minHeight: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Title order={3} fz={{ base: 20, sm: 22, md: 24 }} fw={700} mb='1rem'>
        {title}
      </Title>
      <Text fz={{ base: 14, sm: 15, md: 16 }} lh={1.6}>
        {description}
      </Text>
    </Box>
  );
}
