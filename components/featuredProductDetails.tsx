"use client";
import React, { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import {
  FaCheckCircle,
  FaShoppingCart,
  FaHeart,
  FaShareAlt,

} from "react-icons/fa"; // Icons

// Define the Product type inline
interface Product {
  _id: string;
  name: string;
  images: { asset: { _ref: string } }[]; // Array of image asset references
  price: string;
  description?: string; // Optional, for products without descriptions
}

const FeaturedProductDetails: React.FC<{ product: Product }> = ({
  product,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  // Update quantity (increase or decrease)
  const updateQuantity = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Calculate the total price based on quantity
  const totalPrice = (parseFloat(product.price) * quantity).toFixed(2);

  // Handle click on a smaller image
  const handleImageClick = (image: { asset: { _ref: string } }) => {
    setSelectedImage(image);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6 pb-20 px-5">
      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        {/* Left Side: Product Images */}
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          {/* Main Product Image */}
          <div className="w-full  h-[400px]  flex justify-center">
            <img
              src={urlFor(selectedImage).url()}
              alt={product.name}
              className="object-contain w-full rounded h-full"
            />
          </div>

          {/* Smaller images (3 images) */}
          <div className="flex space-x-4  justify-center">
            {product.images.slice(1, 4).map((image, index) => (
              <div
                key={index}
                className="w-[80px] h-[80px] cursor-pointer border-2 border-gray-300 rounded-md hover:scale-110 transition-all"
                onClick={() => handleImageClick(image)} // Handle click to change the large image
              >
                <img
                  src={urlFor(image).url()}
                  alt={`product-image-${index}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="flex-1 md:w-1/2 mt-6 md:mt-0 ">
          <h1 className="md:text-3xl text-2xl  font-bold text-[#333]">
            {product.name}
          </h1>
          {/* Total Price */}
          <div className="flex space-x-3 mt-6">
            <span className="text-xl font-semibold text-gray-700">Price:</span>
            <span className="text-xl font-bold text-[#FB2E86]">
              ${totalPrice}
            </span>
          </div>

          <p className="text-xl text-justify pr-3 hover:underline text-gray-600 mt-4">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-3 mt-6">
            <button
              onClick={() => updateQuantity("decrease")}
              className="text-xl text-white bg-[#FB2E86] rounded w-10 h-7 flex items-center justify-center"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => updateQuantity("increase")}
              className="text-xl text-white bg-[#FB2E86] rounded w-10 h-7 flex items-center justify-center"
            >
              +
            </button>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row  items-center space-y-4 md:space-y-0 md:space-x-10 mt-6">
            <button className="flex items-center justify-center bg-green-600 font-semibold text-xs text-white px-6 py-3 rounded-lg hover:bg-[#06b157] transition-all w-full md:w-auto">
              <FaShoppingCart className="mr-2 text-lg" />
              Add to Cart
            </button>
            <button className="flex items-center justify-center font-semibold bg-[#FB2E86] text-xs text-white px-6 py-3 rounded-lg hover:bg-[#e12b75] transition-all w-full md:w-auto">
              <FaHeart className="mr-2 text-lg" />
              Add to Wishlist
            </button>
            <button className="flex items-center justify-center font-semibold bg-[#3F509E] text-xs text-white px-10 py-3 rounded-lg hover:bg-[#324482] transition-all w-full md:w-auto">
              <FaShareAlt className="inline mr-2 text-lg" />
              Share
            </button>

            
          </div>
          {/* Checkout Button */}
          <div className="mt-6">
            <button className="flex items-center justify-center w-full py-3 border border-gray-400 text-black font-semibold rounded-md hover:bg-gray-100 transition-all">
            <FaCheckCircle className="mr-2 text-lg text-green-500" />
             Checkout!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductDetails;
