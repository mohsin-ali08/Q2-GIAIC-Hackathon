import React from 'react';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import Image from 'next/image';

// Define the Product type inline
interface featuredProducts {
  _id: string;
  name: string;
  images: { asset: { _ref: string } }[]; // Array of image asset references
  price: string;
  description?: string; // Optional, for products without descriptions
  slug: { current: string }; // Slug for dynamic routing
}

// Define the CardProps interface
interface CardProps {
  product: featuredProducts;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <Link href={`/ProductDetails/${product.slug.current}`} passHref>
      <div
        className="group bg-white shadow-md rounded-lg overflow-hidden relative hover:scale-105 transition-transform duration-300"
      >
        {/* Product Image */}
        <div className="relative w-full h-[250px] flex justify-center items-center overflow-hidden bg-[#F6F7FB]">
          <Image
            src={product.images?.[0] ? urlFor(product.images[0]).url() : '/default-image.jpg'}
            alt={product.name}
            width={200}
            height={200}
            className="w-64 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 relative">
          <h3 className="text-lg text-center font-semibold text-[#0D0E43]">
            {product.name}
          </h3>

          {/* Price */}
          <p className="text-lg font-semibold text-center text-[#FB2E86]">
            ${product.price}
          </p>

          {/* Hover Effect */}
          <div className="absolute text-white bottom-0 left-0 w-full h-0 bg-[#533feb] group-hover:h-full transition-all duration-300 -z-10"></div>
        </div>

        {/* "View Details" Button */}
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white text-xs py-1 px-3 bg-[#08D15F] rounded hover:bg-[#06b24d] transition-all">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
