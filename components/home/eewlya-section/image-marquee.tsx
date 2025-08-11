import { Box, Image, Text, Title } from "@mantine/core";

interface ImageMarqueeProps {
  title?: string;
  subtitle?: string;
}

export function ImageMarquee({ title, subtitle }: ImageMarqueeProps) {
  const images = [
    "/images/women/1.svg",
    "/images/women/2.svg",
    "/images/women/3.svg",
    "/images/women/4.svg",
    "/images/women/5.svg",
    "/images/women/6.svg",
  ];

  // continuous flow for two rows
  const continuousImages = [...images, ...images, ...images];

  return (
    <Box
      pt='3rem'
      pb='1rem'
      style={{
        backgroundColor: "#DEE947",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Title Section */}
      {title && (
        <Box ta='center' mb='3rem'>
          <Title order={2} fz={{ base: 28, sm: 32, md: 36 }} fw={700} c='black'>
            {title}
          </Title>
          {subtitle && (
            <Text fz={{ base: 16, sm: 18 }} c='black' mt='0.5rem'>
              {subtitle}
            </Text>
          )}
        </Box>
      )}

      {/* Two-Row Continuous Marquee Container */}
      <Box
        style={{
          position: "relative",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {/* First Row - Images 1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6 */}
        <Box
          style={{
            display: "flex",
            gap: "0.3rem",
            animation: "marquee 500s linear infinite",
            width: "max-content",
          }}
        >
          {continuousImages.map((image, index) => (
            <ImageFrame image={image} key={`first-${index}`} index={index} />
          ))}
        </Box>

        {/* Second Row - Images 4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3 */}
        <Box
          style={{
            display: "flex",
            gap: "0.3rem",
            animation: "marquee-reverse 500s linear infinite",
            width: "max-content",
            marginTop: "1rem",
          }}
        >
          {continuousImages
            .slice(3)
            .concat(continuousImages.slice(0, 3))
            .map((image, index) => (
              <ImageFrame image={image} key={`second-${index}`} index={index} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}

interface ImageFrameProps {
  image: string;
  key: string;
  index: number;
}

function ImageFrame({ image, key, index }: ImageFrameProps) {
  return (
    <Box
      key={key}
      w={{
        base: "250px",
        sm: "600px",
      }}
      h={{
        base: "180px",
        sm: "280px",
      }}
      style={{
        backgroundColor: "white",
        border: "2px solid #e0e0e0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Image
        src={image}
        alt={`Women in agriculture ${(index % 6) + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
    </Box>
  );
}
