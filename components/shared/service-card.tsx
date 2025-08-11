import {
  Box,
  Button,
  Image,
  type ButtonProps as MantineButtonProps,
  Stack,
  Text,
} from "@mantine/core";
import clsx from "clsx";

type ButtonProps = MantineButtonProps & {
  label: string;
  onClick?: () => void;
};

type ServiceCardProps = {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  imageAlt?: string;
  withButton?: boolean;
  button?: ButtonProps;
} & (
  | {
      withButton: true;
      button: ButtonProps;
    }
  | {
      withButton: false;
      button?: ButtonProps;
    }
);

export function ServiceCard({
  image,
  title,
  subtitle,
  description,
  imageAlt,
  button,
  withButton = true,
}: ServiceCardProps) {
  return (
    <Stack className='border border-gray-400' component='article' p={24}>
      <Box
        style={{
          overflow: "hidden",
          background: "#f7f7f7",
          aspectRatio: "16 / 9",
          minHeight: 220,
        }}
      >
        <Image
          src={image}
          alt={imageAlt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      <div className='flex-1 flex flex-col pt-2 gap-1'>
        <Text size='xl' fw={600} className="font-['Fredoka',sans-serif]">
          {title}
        </Text>

        {subtitle && (
          <Text
            c='dimmed'
            className="leading-relaxed font-['Fredoka',sans-serif]"
            lineClamp={4}
          >
            {subtitle}
          </Text>
        )}
        <Text
          className={clsx(
            "leading-relaxed font-['Fredoka',sans-serif]",
            withButton && "mb-4"
          )}
          lineClamp={4}
        >
          {description}
        </Text>

        {withButton && (
          <div className='mt-auto'>
            <Button
              radius={0}
              size='md'
              px={24}
              className='hover:bg-[#2a2a2a] transition-colors duration-200 text-white'
              onClick={button?.onClick}
              styles={{
                root: {
                  backgroundColor: "#0a0d14",
                  fontFamily: "Fredoka, sans-serif",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "14px",
                  minWidth: 100,
                },
              }}
            >
              {button?.label}
            </Button>
          </div>
        )}
      </div>
    </Stack>
  );
}
