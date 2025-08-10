import { Button, Text, type ButtonProps } from "@mantine/core";
import { DoubleArrowIcon } from "components/shared/icons/double-arrow-icon";
import type { ReactNode } from "react";

interface CtaButtonProps extends Omit<ButtonProps, "leftSection" | "children"> {
  text: string;
  onClick?: () => void;
  icon?: ReactNode;
  color?: string;
  bgColor?: string;
}

export function CtaButton({
  text,
  onClick,
  icon,
  color = "#fff",
  bgColor = "#1a1a1a",
  size = "md",
  px = 4,
  py = 4,
  ...props
}: CtaButtonProps) {
  return (
    <Button
      className={`hover:bg-[#2a2a2a] w-fit py-0 h-auto`}
      radius='0'
      leftSection={
        <div className={`px-${px} py-${py}`}>
          <DoubleArrowIcon width={27} height={20} color={color} />
        </div>
      }
      styles={{
        root: {
          backgroundColor: bgColor,
        },
        section: {
          borderRight: `1px solid ${color}`,
        },
      }}
      onClick={() => {
        onClick?.();
      }}
      {...props}
    >
      <Text
        className={`font-medium text-sm tracking-[2px] uppercase px-${px} py-${py}`}
        style={{ fontFamily: "Fredoka, sans-serif", color: `${color}` }}
      >
        {text}
      </Text>
    </Button>
  );
}
