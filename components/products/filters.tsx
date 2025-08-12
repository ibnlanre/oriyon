import {
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { X } from "lucide-react";
import { useState } from "react";

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface ActiveFilter {
  type: string;
  value: string;
  label: string;
}

export type FilterType =
  | "category"
  | "brand"
  | "color"
  | "priceRange"
  | "search";

export interface FiltersProps {
  brands: FilterOption[];
  colors: FilterOption[];
  priceRanges: FilterOption[];
  activeFilters: {
    category?: string[] | null;
    brand?: string[] | null;
    color?: string[] | null;
    priceRange?: string | null;
    search?: string | null;
  };
  onFilterChange: (type: FilterType, value: string | string[]) => void;
  onRemoveFilter: (type: FilterType, value: string) => void;
  onClearAllFilters: () => void;
}

export function Filters({
  brands,
  colors,
  priceRanges,
  activeFilters,
  onFilterChange,
  onRemoveFilter,
  onClearAllFilters,
}: FiltersProps) {
  const [searchValue, setSearchValue] = useState(activeFilters.search || "");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onFilterChange("search", value);
  };

  const displayFilters: ActiveFilter[] = [];

  if (activeFilters.category && activeFilters.category.length > 0) {
    activeFilters.category.forEach((value) => {
      displayFilters.push({
        type: "category",
        value,
        label: value.charAt(0).toUpperCase() + value.slice(1),
      });
    });
  }

  if (activeFilters.brand && activeFilters.brand.length > 0) {
    activeFilters.brand.forEach((value) => {
      const brand = brands.find((b) => b.value === value);
      displayFilters.push({
        type: "brand",
        value,
        label: brand?.label || value,
      });
    });
  }

  if (activeFilters.color && activeFilters.color.length > 0) {
    activeFilters.color.forEach((value) => {
      const color = colors.find((c) => c.value === value);
      displayFilters.push({
        type: "color",
        value,
        label: color?.label || value,
      });
    });
  }

  if (activeFilters.priceRange) {
    const range = priceRanges.find((r) => r.value === activeFilters.priceRange);
    displayFilters.push({
      type: "priceRange",
      value: activeFilters.priceRange,
      label: range?.label || activeFilters.priceRange,
    });
  }

  if (activeFilters.search) {
    displayFilters.push({
      type: "search",
      value: activeFilters.search,
      label: `Search: ${activeFilters.search}`,
    });
  }

  return (
    <Box className='bg-white p-6 border-b border-gray-200'>
      {/* Search Bar */}
      <Stack gap='md' mb='lg'>
        <TextInput
          label='Search Products'
          placeholder='Search by name or description...'
          value={searchValue}
          onChange={(event) => handleSearchChange(event.currentTarget.value)}
          style={{ maxWidth: 400 }}
          leftSection={
            <Text size='sm' c='gray.6'>
              🔍
            </Text>
          }
        />
      </Stack>

      <Group justify='space-between' align='flex-start' wrap='wrap' gap='lg'>
        {/* Filter Dropdowns */}
        <Group gap='lg' align='flex-start'>
          <Text
            size='sm'
            fw={600}
            c='gray.7'
            style={{ minWidth: "fit-content" }}
          >
            Filters:
          </Text>

          {/* Category Filter */}
          <Select
            label='Category'
            placeholder='Select categories'
            data={["goat", "sheep", "pork"].map((cat) => ({
              value: cat,
              label: cat.charAt(0).toUpperCase() + cat.slice(1),
            }))}
            value={activeFilters.category?.[0] || null}
            onChange={(value) => {
              if (value) {
                onFilterChange("category", [value]);
              }
            }}
            clearable
            searchable
            style={{ minWidth: 160 }}
          />

          {/* Brand Filter */}
          <Select
            label='Brand'
            placeholder='Select brands'
            data={brands.map((brand) => ({
              value: brand.value,
              label: `${brand.label}${brand.count ? ` (${brand.count})` : ""}`,
            }))}
            value={activeFilters.brand?.[0] || null}
            onChange={(value) => {
              if (value) {
                onFilterChange("brand", [value]);
              }
            }}
            clearable
            searchable
            style={{ minWidth: 160 }}
          />

          {/* Color Filter */}
          <Select
            label='Color'
            placeholder='Select colors'
            data={colors.map((color) => ({
              value: color.value,
              label: color.label,
            }))}
            value={activeFilters.color?.[0] || null}
            onChange={(value) => {
              if (value) {
                onFilterChange("color", [value]);
              }
            }}
            clearable
            searchable
            style={{ minWidth: 160 }}
          />

          {/* Price Filter */}
          <Select
            label='Price Range'
            placeholder='Select price range'
            data={priceRanges.map((range) => ({
              value: range.value,
              label: range.label,
            }))}
            value={activeFilters.priceRange || null}
            onChange={(value) => {
              if (value) {
                onFilterChange("priceRange", value);
              }
            }}
            clearable
            style={{ minWidth: 160 }}
          />
        </Group>

        {/* Sort Dropdown */}
        <Select
          label='Sort by'
          placeholder='Sort options'
          data={[
            { value: "popular", label: "Most popular" },
            { value: "price-low", label: "Price: Low to High" },
            { value: "price-high", label: "Price: High to Low" },
            { value: "newest", label: "Newest" },
          ]}
          defaultValue='popular'
          style={{ minWidth: 160 }}
        />
      </Group>

      {/* Active Filter Tags */}
      {displayFilters.length > 0 && (
        <Stack gap='sm' mt='lg'>
          <Divider />
          <Group gap='xs' wrap='wrap'>
            <Text size='sm' fw={500} c='gray.7'>
              Active filters:
            </Text>
            {displayFilters.map((filter) => (
              <Badge
                key={`${filter.type}-${filter.value}`}
                variant='filled'
                color='green'
                size='md'
                rightSection={
                  <Button
                    variant='subtle'
                    color='green'
                    size='xs'
                    p={0}
                    onClick={() =>
                      onRemoveFilter(filter.type as FilterType, filter.value)
                    }
                    style={{ minWidth: "auto", height: "auto" }}
                  >
                    <X size={12} />
                  </Button>
                }
              >
                {filter.label}
              </Badge>
            ))}
            <Button
              variant='subtle'
              color='gray'
              size='xs'
              onClick={onClearAllFilters}
              style={{ textDecoration: "underline" }}
            >
              Clear all
            </Button>
          </Group>
        </Stack>
      )}
    </Box>
  );
}
