import { Image } from "@mantine/core";

interface MissionImageProps {
  className?: string;
}

export function MissionImage({ className }: MissionImageProps) {
  return (
    <div className={`flex-shrink-0 ${className || ""}`}>
      <Image
        src="/images/mission-goat-woman.svg"
        alt="Woman in blue floral dress holding a goat in outdoor farm setting"
        className="w-full max-w-[460px] h-auto"
        fit="contain"
      />
    </div>
  );
}