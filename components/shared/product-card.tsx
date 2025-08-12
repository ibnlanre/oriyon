import clsx from "clsx";

import {
  Box,
  Image,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  isFavorite?: boolean;
  onAddToCart?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  description,
  image,
  isFavorite = false,
  onAddToCart,
  onToggleFavorite,
}: ProductCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteToggle = () => {
    const newFavoriteState = !favorite;
    setFavorite(newFavoriteState);
    onToggleFavorite?.(id);
  };

  const handleAddToCart = () => {
    onAddToCart?.(id);
  };

  return (
    <Box
      className='bg-white rounded-lg overflow-hidden border border-gray-200 transition-shadow duration-300'
      component='article'
    >
      <Box
        className='relative overflow-hidden w-full'
        style={{
          maxHeight: "250px",
        }}
      >
        <Image
          src={image}
          alt={name}
          className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
          fallbackSrc='/images/goats-background.png'
        />

        <Tooltip label='View product details' position='bottom-end' p='sm'>
          <UnstyledButton
            component={NavLink}
            to={`/products/${id}`}
            className={clsx(
              "absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-md transition-all duration-200 backdrop-blur-sm",
              "hover:shadow-lg hover:bg-gray-100 hover:text-gray-900  cursor-pointer"
            )}
            aria-label='View product details'
          >
            <Eye size={18} />
          </UnstyledButton>
        </Tooltip>
      </Box>

      <Box className='p-4'>
        <Title
          order={3}
          className='text-lg font-semibold text-gray-900 mb-2 line-clamp-2'
        >
          {name}
        </Title>

        <div className='text-2xl font-bold text-green-600 mb-2'>
          ${price.toFixed(2)}
        </div>

        <Text className='text-gray-600 text-sm  sm:text-base mb-8 line-clamp-2'>
          {description}
        </Text>

        <div className='flex items-center gap-3'>
          <UnstyledButton
            onClick={handleFavoriteToggle}
            variant='outline'
            color={favorite ? "red" : "gray"}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            className='flex items-center gap-2 justify-center border-2 border-gray-300 px-4 py-2 hover:bg-gray-100'
          >
            <Heart
              size={20}
              color={favorite ? "red" : "gray"}
              fill={favorite ? "red" : "none"}
              className={clsx(
                "transition-colors duration-200",
                favorite && "fill-red-500"
              )}
            />
          </UnstyledButton>

          <UnstyledButton
            onClick={handleAddToCart}
            ml='auto'
            className='flex items-center gap-2 justify-center border-2 border-gray-300 px-4 py-2 hover:bg-gray-100'
          >
            <ShoppingCart size={18} />
            Add to Cart
          </UnstyledButton>
        </div>
      </Box>
    </Box>
  );
}
