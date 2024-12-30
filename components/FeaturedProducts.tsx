import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

import Card from "@/components/featuredCard";

import LatestProducts from "./LetestProduct";
import OutletSection from "./OutletSection";
import DiscountItem from "./DiscountItem";
import TopCategories from "./TopCategories";
import BlogSection from "./BlogSection";

// Define the Product type
interface FeaturedProduct {
  _id: string;
  name: string;
  images: { asset: { _ref: string } }[]; // Array of image asset references
  price: string;
  originalPrice: string;
  description?: string; // Optional field
  slug: { current: string }; // Slug for dynamic routing
}

const FeaturedProducts = async () => {
  try {
    // Fetch products from Sanity
    const products: FeaturedProduct[] = await client.fetch(
      groq`*[_type == "featuredProducts"] {
        _id,
        name,
        images,
        price,
        originalPrice,
        description,
        slug
      }`
    );

    console.log("Fetched Featured Products:", products);

    return (
      <section className="bg-white py-10">
        {/* Container */}
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-[#0D0E43] mb-8">
            Featured Products
          </h2>
        </div>

        {/* Product Grid */}
        <div className="flex justify-center px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {products.map((featuredProduct) => (
              <Card key={featuredProduct._id} product={featuredProduct} />
            ))}
          </div>
        </div>

        {/* Additional Sections */}
        <LatestProducts />
        <OutletSection />
        <DiscountItem />
        <TopCategories />
        <BlogSection />
      </section>
    );
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return (
      <div className="text-center text-red-500">
        Failed to load featured products.
      </div>
    );
  }
};

export default FeaturedProducts;


//  {/* Product Grid */}
//  <div className="flex justify-center">
//  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
//    {products.map((product) => (
//      <div
//        key={product.id}
//        className="group  bg-white shadow-md rounded-lg overflow-hidden relative hover:scale-105 transition-transform duration-300"
//      >
//        {/* Product Image */}
//        <div className="relative w-full h-[250px] flex justify-center items-center overflow-hidden bg-[#F6F7FB]">
//          <Image
//            src={product.image}
//            alt={product.name}
//            width={200} // Adjust the width
//            height={200} // Adjust the height to maintain aspect ratio
//            className="w-64 object-contain" // Keeps image centered and fits within the container
//          />
//        </div>

//        {/* Product Info */}
//        <div className="p-4 relative">
//          <h3 className="text-lg text-center font-semibold text-[#0D0E43]">
//            {product.name}
//          </h3>

//          {/* Colors */}
//          <div className="flex space-x-2 my-3 justify-center">
//            {product.colors.map((color, index) => (
//              <span
//                key={index}
//                className="w-3 h-1 rounded-full"
//                style={{ backgroundColor: color }}
//              />
//            ))}
//          </div>

//          {/* Code and Price */}
//          <p className="text-gray-500 text-center">Code: {product.code}</p>
//          <p className="text-lg font-semibold text-center text-[#FB2E86]">
//            {product.price}
//          </p>

//          {/* Hover Effect */}
//          <div className="absolute text-white bottom-0 left-0 w-full h-0 bg-[#533feb] group-hover:h-full transition-all duration-300 -z-10"></div>
//        </div>

//        {/* "View Details" Button */}
//        <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//          <button className="text-white text-xs py-1 px-3 bg-[#08D15F] rounded hover:bg-[#06b24d] transition-all">
//            View Details
//          </button>
//        </div>
//      </div>
//    ))}
//  </div>
// </div>