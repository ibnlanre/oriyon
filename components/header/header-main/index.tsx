import { Group, Text, Button, Burger } from "@mantine/core";
import { useState } from "react";
import { CircleDollarSign } from "lucide-react";
import { ArrowIcon } from "../../icons/arrow-icon";

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
    component="a"
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
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <Group justify="space-between" className="w-full">
          {/* Logo */}
          <Group gap={8}>
            <CircleDollarSign size={32} color="#1d6731" />
            <Text className="text-xl font-bold font-fredoka text-[#1d6731]">
              ORIYON
            </Text>
          </Group>

          {/* Desktop Navigation */}
          <Group gap={24} className="hidden lg:flex">
            <MainNavItem label="Who We Are" active />
            <MainNavItem label="What We Do" />
            <MainNavItem label="Store" />
            <MainNavItem label="Our Network" />
          </Group>

          {/* Contact Button & Mobile Menu */}
          <Group gap={16}>
            <Button
              className="bg-[#060606] hover:bg-[#1a1a1a] text-[#00cfc0] px-6 py-3 rounded-none uppercase tracking-[2px] text-sm font-medium font-fredoka hidden md:flex"
              leftSection={<ArrowIcon width={27} height={20} color="#00cfc0" />}
            >
              contact us
            </Button>

            <Burger
              opened={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
              color="#0a0d14"
            />
          </Group>
        </Group>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#cdd0d5]">
            <div className="flex flex-col gap-4">
              <MainNavItem label="Who We Are" active />
              <MainNavItem label="What We Do" />
              <MainNavItem label="Store" />
              <MainNavItem label="Our Network" />

              <div className="pt-4 border-t border-[#cdd0d5]">
                <Button
                  className="bg-[#060606] hover:bg-[#1a1a1a] text-[#00cfc0] px-6 py-3 rounded-none uppercase tracking-[2px] text-sm font-medium font-fredoka w-full"
                  leftSection={
                    <ArrowIcon width={27} height={20} color="#00cfc0" />
                  }
                >
                  contact us
                </Button>
              </div>

              <div className="pt-4 border-t border-[#cdd0d5] flex flex-col gap-3">
                <MainNavItem label="Store" />
                <MainNavItem label="My Account" />
                <MainNavItem label="Order Tracking" />
                <MainNavItem label="Blog" />
                <MainNavItem label="Career" />
                <MainNavItem label="Contact" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
