import { Group, Stack } from "@mantine/core";
import { MissionCard } from "../mission-card";
import { MissionImage } from "../mission-image";

interface MissionSectionProps {
  className?: string;
}

export function MissionSection({ className }: MissionSectionProps) {
  return (
    <Stack gap={44} className={className}>
      <div 
        className="px-8 md:px-16 lg:px-32 py-16 md:py-20"
        style={{ backgroundColor: "#dee947" }}
      >
        <div className="max-w-7xl mx-auto">
          <Group
            gap={44}
            align="flex-start"
            wrap="wrap"
            className="lg:flex-nowrap"
          >
            <MissionCard className="flex-1 min-w-0 w-full lg:w-auto max-w-[573px]" />
            <MissionImage className="w-full lg:w-auto" />
          </Group>
        </div>
      </div>
      
      {/* Purple accent bar */}
      <div 
        className="h-11"
        style={{ backgroundColor: "#d0c6f0" }}
      />
    </Stack>
  );
}