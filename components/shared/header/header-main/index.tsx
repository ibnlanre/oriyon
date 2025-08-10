import { Burger, Flex, Group, Text } from "@mantine/core";
import { CtaButton } from "components/shared/cta-button";
import { OriyonIcon } from "components/shared/icons/oriyon-icon";
import { useState } from "react";

interface MainNavItemProps {
  label: string;
  href?: string;
  active?: boolean;
}

const MainNavItem = ({
  label,
  href = "#",
  active = false,
}: MainNavItemProps) => (
  <Text
    component='a'
    href={href}
    className={`text-base font-fredoka transition-colors hover:text-[#1d6731] ${
      active ? "text-[#1d6731] font-medium" : "text-black font-normal"
    }`}
  >
    {label}
  </Text>
);

export function HeaderMain() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white py-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <Group justify='space-between' className='w-full'>
          {/* Logo */}
          <Group gap={8}>
            <OriyonIcon />
            <Text className='text-xl font-bold font-fredoka text-[#1d6731]'>
              ORIYON
            </Text>
          </Group>

          <Flex gap={24} align='center'>
            {/* Desktop Navigation */}
            <Group gap={24} className='lg:flex hidden '>
              <MainNavItem label='Who We Are' active />
              <MainNavItem label='What We Do' />
              <MainNavItem label='Store' />
              <MainNavItem label='Our Network' />
            </Group>

            {/* Contact Button & Mobile Menu */}
            <Group gap={16}>
              <CtaButton
                text='contact us'
                color='#00cfc0'
                bgColor='#060606'
                py={3}
                onClick={() => {
                  console.log("Navigate to contact us");
                }}
              />

              <Burger
                opened={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='lg:hidden'
                color='#0a0d14'
              />
            </Group>
          </Flex>
        </Group>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='lg:hidden mt-4 pt-4 border-t border-[#cdd0d5]'>
            <div className='flex flex-col gap-4'>
              <MainNavItem label='Who We Are' active />
              <MainNavItem label='What We Do' />
              <MainNavItem label='Store' />
              <MainNavItem label='Our Network' />

              <div className='pt-4 border-t border-[#cdd0d5]'>
                <CtaButton
                  text='contact us'
                  color='#00cfc0'
                  bgColor='#060606'
                  py={3}
                  px={5}
                  onClick={() => {
                    console.log("Navigate to contact us");
                  }}
                />
              </div>

              <div className='pt-4 border-t border-[#cdd0d5] flex flex-col gap-3'>
                <MainNavItem label='Store' />
                <MainNavItem label='My Account' />
                <MainNavItem label='Order Tracking' />
                <MainNavItem label='Blog' />
                <MainNavItem label='Career' />
                <MainNavItem label='Contact' />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
