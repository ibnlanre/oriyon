import { Text, Title } from "@mantine/core";
import { Breadcrumbs, type BreadcrumbItem } from "../bread-crumbs";

interface HeroProps {
  backgroundImage: string;
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  subtitle?: string;
  overlayOpacity?: number;
  height?: string;
  className?: string;
}

export function SharedHero({
  backgroundImage,
  title,
  breadcrumbs = [],
  subtitle,
  overlayOpacity = 0.6,
  height = "h-96",
  className = "",
}: HeroProps) {
  return (
    <div className={`relative w-full ${height} ${className} px-4`}>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div
        className='absolute inset-0'
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
      />

      {/* Gradient Overlay at bottom */}
      <div className='absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent' />

      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
        <Title
          order={1}
          className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight'
        >
          {title}
        </Title>
        {subtitle && (
          <Text className='text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
            {subtitle}
          </Text>
        )}
        {breadcrumbs.length > 0 && (
          <div className='mb-4'>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
      </div>
    </div>
  );
}
