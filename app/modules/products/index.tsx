import { Filters } from "components/products/filters";
import { Pagination } from "components/products/pagination";
import { ProductGrid } from "components/products/product-grid";
import { SharedHero } from "components/shared/hero";
import {
  parseAsArrayOf,
  parseAsString,
  parseAsStringEnum,
  useQueryStates,
} from "nuqs";
import { Fragment, useMemo, useState } from "react";

const mockProducts = [
  {
    id: "1",
    name: "Boneless Chevon",
    price: 95.0,
    description: "A lil more details about a boneless chevon",
    image: "/images/products/boneless-chevon.jpg",
    category: "goat",
    brand: "orimax",
    color: "red",
  },
  {
    id: "2",
    name: "Chevon (+ Bone)",
    price: 95.0,
    description: "A lil more details about a boneless chevon",
    image: "/images/products/chevon-with-bone.jpg",
    category: "goat",
    brand: "orimax",
    color: "brown",
  },
  {
    id: "3",
    name: "Goat Head",
    price: 95.0,
    description: "A lil more details about a boneless chevon",
    image: "/images/products/goat-head.jpg",
    category: "goat",
    brand: "orimax",
    color: "dark",
  },
  {
    id: "4",
    name: "Offals",
    price: 95.0,
    description: "A lil more details about a boneless chevon",
    image: "/images/products/offals.jpg",
    category: "goat",
    brand: "orimax",
    color: "red",
  },
  {
    id: "5",
    name: "Smoked Chevon",
    price: 95.0,
    description: "A lil more details about a boneless chevon",
    image: "/images/products/smoked-chevon.jpg",
    category: "goat",
    brand: "orimax",
    color: "brown",
  },
  {
    id: "6",
    name: "Rib Rack",
    price: 95.0,
    description: "A lil more details about a boneless chevon",
    image: "/images/products/rib-rack.jpg",
    category: "goat",
    brand: "orimax",
    color: "dark",
  },
  {
    id: "7",
    name: "Boneless Chevon",
    price: 95.0,
    description: "A lil more details about a boneless chevon",
    image: "/images/products/boneless-chevon.jpg",
    category: "goat",
    brand: "orimax",
    color: "red",
  },
  {
    id: "8",
    name: "Chevon (+ Bone)",
    price: 95.0,
    description: "A lil more details about a boneless chevon",
    image: "/images/products/chevon-with-bone.jpg",
    category: "goat",
    brand: "orimax",
    color: "brown",
  },
  {
    id: "9",
    name: "Goat Head",
    price: 95.0,
    description: "A lil more details about a boneless chevon",
    image: "/images/products/goat-head.jpg",
    category: "goat",
    brand: "orimax",
    color: "dark",
  },
];

const mockBrands = [{ value: "orimax", label: "Orimax", count: 1 }];

const mockColors = [
  { value: "red", label: "Red" },
  { value: "brown", label: "Brown" },
  { value: "dark", label: "Dark" },
];

const mockPriceRanges = [
  { value: "0-50", label: "Under $50" },
  { value: "50-100", label: "$50 - $100" },
  { value: "100-150", label: "$100 - $150" },
  { value: "150+", label: "Over $150" },
];

type FilterType = "category" | "brand" | "color" | "priceRange" | "search";

export default function Products() {
  const resultsPerPage = 15;
  const totalResults = 200;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const [activeFilters, setActiveFilters] = useQueryStates({
    category: parseAsArrayOf(parseAsStringEnum(["goat", "sheep", "pork"])),
    brand: parseAsArrayOf(parseAsString),
    color: parseAsArrayOf(parseAsString),
    priceRange: parseAsString,
    search: parseAsString,
  });

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      // Category filter
      if (activeFilters.category && activeFilters.category.length > 0) {
        if (!activeFilters.category.includes(product.category)) {
          return false;
        }
      }

      // Brand filter
      if (activeFilters.brand && activeFilters.brand.length > 0) {
        if (!activeFilters.brand.includes(product.brand)) {
          return false;
        }
      }

      // Color filter
      if (activeFilters.color && activeFilters.color.length > 0) {
        if (!activeFilters.color.includes(product.color)) {
          return false;
        }
      }

      // Price range filter
      if (activeFilters.priceRange) {
        const [min, max] = activeFilters.priceRange.split("-").map(Number);
        if ((max && product.price < min) || product.price > max) {
          return false;
        } else if (!max && product.price < min) {
          return false;
        }
      }

      // Search filter
      if (activeFilters.search) {
        const searchLower = activeFilters.search.toLowerCase();
        if (
          !product.name.toLowerCase().includes(searchLower) &&
          !product.description.toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }

      return true;
    });
  }, [activeFilters]);

  const handleFilterChange = (type: FilterType, value: string | string[]) => {
    setActiveFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
    setCurrentPage(1);
  };

  const handleRemoveFilter = (type: FilterType, value: string) => {
    setActiveFilters((prev) => {
      const currentValue = prev[type];
      if (Array.isArray(currentValue)) {
        return {
          ...prev,
          [type]: currentValue.filter((v) => v !== value),
        };
      }
      return {
        ...prev,
        [type]: "",
      };
    });
  };

  const handleClearAllFilters = () => {
    setActiveFilters({
      category: [],
      brand: [],
      color: [],
      priceRange: "",
      search: "",
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (productId: string) => {
    console.log("Added to cart:", productId);
  };

  const handleToggleFavorite = (productId: string) => {
    console.log("Toggled favorite:", productId);
  };

  return (
    <Fragment>
      <SharedHero
        backgroundImage='/images/goats-background.png'
        title='Welcome to Orimax'
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Store" }]}
        height='h-[400px]'
      />

      <main className='min-h-screen bg-white max-w-7xl mx-auto py-24 px-4'>
        {/* Filters */}
        <Filters
          brands={mockBrands}
          colors={mockColors}
          priceRanges={mockPriceRanges}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onRemoveFilter={handleRemoveFilter}
          onClearAllFilters={handleClearAllFilters}
        />

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={filteredProducts.length}
          resultsPerPage={resultsPerPage}
          onPageChange={handlePageChange}
        />
      </main>
    </Fragment>
  );
}
