import { Anchor, Box, Group, Stack, Text } from "@mantine/core";
import { DiagonalArrowIcon } from "components/shared/icons/diagonal-arrow";
import { FacebookIcon } from "components/shared/icons/facebook";
import { InstagramIcon } from "components/shared/icons/instagram-icon";
import { LinkedinIcon } from "components/shared/icons/linkedin-icon";
import { TwitterIcon } from "components/shared/icons/twitter-icon";

export function SocialMediaSection() {
  return (
    <Group gap='sm'>
      <SocialMediaCard
        handle='@Oriyon'
        followers='2.6k'
        icon={<TwitterIcon />}
        url='https://twitter.com/Oriyon'
      />
      <SocialMediaCard
        handle='@Oriyon'
        followers='5.5k'
        icon={<InstagramIcon />}
        url='https://instagram.com/Oriyon'
      />
      <SocialMediaCard
        handle='@Oriyon'
        followers='10k+'
        icon={<LinkedinIcon />}
        url='https://linkedin.com/company/Oriyon'
      />
      <SocialMediaCard
        handle='@Oriyon'
        followers='15k'
        icon={<FacebookIcon />}
        url='https://facebook.com/Oriyon'
      />
    </Group>
  );
}

interface SocialMediaCardProps {
  handle: string;
  followers: string;
  icon: React.ReactNode;
  url: string;
}

function SocialMediaCard({
  handle,
  followers,
  icon,
  url,
}: SocialMediaCardProps) {
  return (
    <Anchor
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      style={{ textDecoration: "none" }}
      flex={1}
      miw={180}
    >
      <Box
        bg='dark.5'
        className='group border border-[#262626] rounded-lg p-4 cursor-pointer hover:translate-y-[-2px] transition-all duration-200 '
      >
        <Group justify='space-between' align='center'>
          <Group gap='md'>
            <Box
              className='border border-[#262626] rounded-lg bg-[#1F1F1F]'
              style={{
                padding: "var(--mantine-spacing-xs)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
              }}
            >
              <Box style={{ fontSize: 20 }}>{icon}</Box>
            </Box>
            <Stack gap={4}>
              <Text size='sm' fw={600} c='white'>
                {handle}
              </Text>
              <Text size='xs' c='dimmed'>
                {followers} Followers
              </Text>
            </Stack>
          </Group>
          <DiagonalArrowIcon className='group-hover:rotate-30 transition-all duration-200 lg:block hidden' />
        </Group>
      </Box>
    </Anchor>
  );
}
