// src/app/products/page.tsx
import { groq } from 'next-sanity';
import { client } from "@/sanity/lib/client";

import { urlFor } from '@/sanity/lib/image';
import FilterSection from "@/components/FilterSection";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link'; // Corrected import

// Define the Product type
interface Product {
  _id: string;
  name: string;
  slug: { current: string }; // Ensure slug field exists in your schema
  images: { asset: { _ref: string } }[]; // Array of images with asset reference
  price: string;
  originalPrice: string;
  description: string;
}

const ProductsPage = async () => {
  // Fetch products server-side
  const products: Product[] = await client.fetch(groq`*[_type == "product"]`);

  return (
    <section className='pt-3'>
      <FilterSection
        textTitle={"Shop Products"}
        textNavigation={"Home . "}
        pageName={"Products.."}
      />
      <div className="container mx-auto px-4 py-5 md:px-40">
        <div className="">
          <h2 className="text-3xl font-bold text-center text-[#0D0E43] mb-8 mt-12">
            Over Products!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={`/ProductDetails/${product.slug.current}`} key={product._id}>
              <div
                className="group bg-white shadow-md rounded-lg overflow-hidden relative hover:scale-105 transition-transform duration-300"
              >
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
                <div className="p-4 relative">
                  <div className="flex flex-col">
                    <h3 className="text-md font-semibold text-[#0D0E43]">
                      {product.name}
                    </h3>
                    <p className="text-md underline  font-semibold text-[#FB2E86]">
                      {product.price}$
                    </p>
                  </div>
                </div>

                {/* Hover actions */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 px-4">
                    <FaShoppingCart className="text-xl cursor-pointer text-gray-800 hover:text-[#08D15F]" />
                    <FaHeart className="text-xl cursor-pointer text-gray-800 hover:text-[#FB2E86]" />
                    <FaSearch className="text-xl cursor-pointer text-gray-800 hover:text-[#533feb]" />
                  </div>

                  <div className="absolute top-0 right-0">
                    <button className="bg-[#3F509E] text-white py-2 px-5 shadow-xl text-xs transition-all">
                      Sell
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
