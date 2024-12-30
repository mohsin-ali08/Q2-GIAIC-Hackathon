import React from "react";
import { urlFor } from "@/sanity/lib/client";

interface CardProps {
  product: {
    name: string;
    images: { asset: { _ref: string } }[];
    price: string;
    originalPrice: string;
    description?: string;
    slug: { current: string };
  };
}

const Card: React.FC<CardProps> = ({ product }) => {
  const productImage = product.images[0]
    ? urlFor(product.images[0].asset._ref).url()
    : "/placeholder-image.jpg"; // Fallback image

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      {/* Product Image */}
      <img
        src={productImage}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />

      {/* Product Info */}
      <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-600 truncate">{product.description}</p>

      {/* Price */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-semibold text-blue-600">
          ${product.price}
        </span>
        {product.originalPrice && (
          <span className="text-sm line-through text-gray-400">
            ${product.originalPrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
