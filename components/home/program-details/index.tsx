import {
  Box,
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export function ProgramDetails() {
  return (
    <Box
      className='px-4 py-10'
      style={{
        backgroundImage: "url(/images/goats-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#DEE9476E",
          backdropFilter: "blur(2px)",
        }}
      />

      <Card
        shadow='xl'
        style={{
          backgroundColor: "white",
          maxWidth: 900,
          zIndex: 10,
          position: "relative",
        }}
      >
        <Stack p='xl' align='center' gap='lg'>
          <Stack align='center' gap='xs'>
            <Title
              order={2}
              fz={{ base: 28, sm: 32, md: 36 }}
              ta='center'
              fw={700}
            >
              Program Details
            </Title>
            <Text
              fz={{ base: 16, sm: 18, md: 20 }}
              fw={600}
              c='dimmed'
              ta='center'
            >
              Duration: 10 weeks
            </Text>
          </Stack>

          <Group
            justify='space-between'
            align='flex-start'
            gap='xl'
            style={{ width: "100%" }}
            wrap='wrap'
          >
            {/* Target Participants Section */}
            <Box flex={1} bg='#DBDDE62E' p={10}>
              <Title order={3} fz={24} fw={700} mb='md'>
                Target Participants
              </Title>
              <Stack gap='xs' component='ul' pl='1rem' className='list-disc'>
                <Text component='li'>Women aged 18-45</Text>
                <Text component='li'>Youth aged 18-35</Text>
                <Text component='li'>
                  Individuals passionate about sustainable livestock farming
                </Text>
              </Stack>
            </Box>

            {/* Dividers */}
            <Divider
              orientation='vertical'
              className='border border-gray-300'
              visibleFrom='sm'
            />
            <Divider
              hiddenFrom='sm'
              size='xs'
              className='border border-gray-300'
            />

            {/* How To Join Section */}
            <Box flex={1} bg='#DBDDE62E' p={10}>
              <Title order={3} fz={24} fw={700} mb='md'>
                How To Join
              </Title>
              <Stack gap='md'>
                <Box>
                  <Text>Contact us at +234801252526</Text>
                  <Text fz={14} c='dimmed'>
                    (WhatsApp)
                  </Text>
                </Box>
                <Box>
                  <Text>Email Us at</Text>
                  <Text fw={600}>info@oriyoninternational.com</Text>
                </Box>
              </Stack>
            </Box>
          </Group>

          <Button
            size='lg'
            variant='filled'
            color='dark'
            style={{
              backgroundColor: "black",
              color: "white",
              fontWeight: 600,
              textTransform: "uppercase",
              padding: "12px 24px",
              marginTop: "1rem",
            }}
          >
            Find Out If You Qualify Today
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}
