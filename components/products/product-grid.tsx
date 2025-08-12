import { Box } from "@mantine/core";
import {
  ProductCard,
  type ProductCardProps,
} from "components/shared/product-card";

export interface ProductGridProps {
  products: ProductCardProps[];
  onAddToCart?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
}

export function ProductGrid({
  products,
  onAddToCart,
  onToggleFavorite,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-16 text-gray-500'>
        <div className='text-6xl mb-4'>🛍️</div>
        <h3 className='text-xl font-medium mb-2'>No products found</h3>
        <p className='text-gray-400'>
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  return (
    <Box
      component='section'
      className='grid gap-8 py-5'
      style={{
        gridTemplateColumns: "repeat(auto-fill,minmax(min(300px,100%),1fr))",
        gridAutoRows: "1fr",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </Box>
  );
}
