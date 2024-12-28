import React from 'react';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import Image from 'next/image';

// Define the Product type inline
interface Product {
  _id: string;
  name: string;
  images: { asset: { _ref: string } }[]; // Array of image asset references
  price: string;
  originalPrice: string;
  description?: string; // Optional, for products without descriptions
  slug: { current: string }; // Slug for dynamic routing
}

// Define the CardProps interface
interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug.current}`} passHref>
      <div className="group bg-white shadow-md rounded-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
        {/* Product Image */}
        <div className="relative w-full h-[250px] flex justify-center items-center overflow-hidden bg-[#F6F7FB]">
          <Image
            src={product.images && product.images[0] ? urlFor(product.images[0]).url() : '/default-image.jpg'}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-[#0D0E43]">{product.name}</h3>
            <p className="text-lg font-semibold text-[#FB2E86]">{product.price}</p>
          </div>
          {product.description && (
            <p className="text-sm text-[#777] mt-2 line-clamp-2">{product.description}</p>
          )}
        </div>

        {/* Hover actions */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 px-4">
            {/* Placeholder for hover actions */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
