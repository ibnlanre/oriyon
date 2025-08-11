import { Image, Stack } from "@mantine/core";
import { MissionCard } from "../mission-card";

interface MissionSectionProps {
  className?: string;
}

export function MissionSection({ className }: MissionSectionProps) {
  return (
    <Stack gap={44} className={className}>
      <div
        className='px-4 md:px-16 lg:px-32 py-16 md:py-20'
        style={{ backgroundColor: "#dee947" }}
      >
        <div className='max-w-7xl mx-auto w-full'>
          <Stack gap={44} className='sm:flex-row w-full justify-between'>
            <MissionCard className='flex-1 min-w-0 w-full lg:w-auto max-w-[573px]' />
            <div className='flex-1'>
              <Image
                src='/images/mission-goat-woman.svg'
                alt='Woman in blue floral dress holding a goat in outdoor farm setting'
                className='w-full max-w-[500px] h-auto mx-auto'
                fit='contain'
              />
            </div>
          </Stack>
        </div>
      </div>

      {/* Purple accent bar */}
      <div className='h-11' style={{ backgroundColor: "#d0c6f0" }} />
    </Stack>
  );
}
