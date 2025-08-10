import { Divider, Group, Stack, Text } from "@mantine/core";

import { OriyonIcon } from "components/shared/icons/oriyon-icon";
import { Copyright } from "lucide-react";
import { Link } from "react-router";

import { FOOTER_LINKS } from "./links";

export function FooterMain() {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-6 sm:mb-8'>
          {/* Company Information Column */}
          <div className='flex flex-col gap-4 sm:gap-5'>
            <Group
              gap={6}
              className='flex-col sm:flex-row items-start sm:items-center'
            >
              <OriyonIcon />
              <Stack gap={0}>
                <Text className='text-xl sm:text-2xl lg:text-3xl font-bold text-black'>
                  ORIYON
                </Text>
                <Text className='text-xs sm:text-sm lg:text-base text-gray-600'>
                  INTERNATIONAL LTD
                </Text>
              </Stack>
            </Group>
            <Text className='text-sm sm:text-base text-gray-700 leading-relaxed max-w-xs'>
              Oriyon International Ltd is a leading livestock company
              specializing in goat farming and sustainable agricultural
              practices. We are committed to excellence in livestock management
              and agricultural innovation.
            </Text>
          </div>

          {/* News & Events Column */}
          <Stack className='gap-4 sm:gap-5'>
            <h3 className='text-lg font-bold text-black text-left'>
              {FOOTER_LINKS[0].title}
            </h3>
            <div className='flex flex-col gap-3'>
              {FOOTER_LINKS[0].links.map((link, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-gray-300 rounded flex-shrink-0'></div>
                  <Link
                    to={link.link}
                    className='text-sm text-gray-600 hover:text-black transition-colors duration-200'
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </Stack>

          {/* Shortcut Links Column */}
          <Stack className='flex flex-col gap-4 sm:gap-5'>
            <h3 className='text-lg font-bold text-black text-left'>
              {FOOTER_LINKS[1].title}
            </h3>
            <div className='flex flex-col gap-2'>
              {FOOTER_LINKS[1].links.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className='text-sm text-gray-600 hover:text-black transition-colors duration-200 text-left'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </Stack>
        </div>

        {/* Copyright Section */}
        <Divider className='border border-gray-200 mb-4' />
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left'>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <Copyright size={16} />
            <span>2024 Oriyon International Ltd. All rights reserved.</span>
          </div>
          <div className='flex items-center gap-4 text-sm text-gray-600'>
            <Link
              to='#'
              className='hover:text-black transition-colors duration-200'
            >
              Privacy Policy
            </Link>
            <Link
              to='#'
              className='hover:text-black transition-colors duration-200'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
