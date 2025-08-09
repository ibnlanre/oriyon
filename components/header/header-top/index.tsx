import { Group, Text, Anchor } from "@mantine/core";

import { StoreIcon } from "../../icons/store-icon";
import { AccountIcon } from "../../icons/account-icon";
import { TrackingIcon } from "../../icons/tracking-icon";
import { BlogIcon } from "../../icons/blog-icon";
import { CareerIcon } from "../../icons/career-icon";
import { ContactIcon } from "../../icons/contact-icon";
import { PhoneIcon } from "../../icons/phone-icon";
import { SearchIcon } from "../../icons/search-icon";
import { SocialIcons } from "../../icons/social-icons";
import { CartIcon } from "../../icons/cart-icon";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
}

const NavItem = ({ icon, label, href = "#" }: NavItemProps) => (
  <Anchor
    href={href}
    className="flex items-center gap-2 text-[#0a0d14] hover:text-[#1d6731] transition-colors"
  >
    {icon}
    <Text className="text-sm font-medium tracking-[-0.28px] font-fredoka">
      {label}
    </Text>
  </Anchor>
);

export function HeaderTop() {
  return (
    <div className="border-b border-[#cdd0d5] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <Group justify="space-between" className="w-full">
          {/* Left Navigation */}
          <Group gap={24} className="hidden lg:flex">
            <NavItem
              icon={<StoreIcon width={17} height={15} color="#0a0d14" />}
              label="Store"
            />
            <NavItem
              icon={<AccountIcon width={12} height={16} color="#0a0d14" />}
              label="My Account"
            />
            <NavItem
              icon={<TrackingIcon width={14} height={16} color="#0a0d14" />}
              label="Order Tracking"
            />
            <NavItem
              icon={<BlogIcon width={14} height={15} color="#0a0d14" />}
              label="Blog"
            />
            <NavItem
              icon={<CareerIcon width={16} height={16} color="#0a0d14" />}
              label="Career"
            />
            <NavItem
              icon={<ContactIcon width={15} height={15} color="#0a0d14" />}
              label="Contact"
            />
          </Group>

          {/* Right Section */}
          <Group gap={24} className="ml-auto">
            <Group gap={8} className="hidden md:flex">
              <PhoneIcon width={14} height={14} color="#0a0d14" />
              <Text className="text-sm font-medium tracking-[-0.28px] font-fredoka text-[#0a0d14]">
                +234 813 6199 934
              </Text>
            </Group>

            <Group gap={4}>
              <SearchIcon width={15} height={15} color="#0a0d14" />
              <SocialIcons width={68} height={20} color="#0a0d14" />
              <CartIcon width={16} height={16} color="#0a0d14" />
            </Group>
          </Group>
        </Group>
      </div>
    </div>
  );
}
