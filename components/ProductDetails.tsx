import { groq } from "next-sanity";
import client from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { FaShoppingCart, FaHeart, FaShareAlt } from "react-icons/fa";

const fetchProductDetails = async (slug: string) => {
    const decodedSlug = decodeURIComponent(slug); // Decode the slug
    console.log('Decoded slug:', decodedSlug); // Log the decoded slug
  
    const product = await client.fetch(
      groq`*[_type == "product" && slug.current == $slug][0]{
        name,
        images,
        price,
        originalPrice,
        description
      }`,
      { slug: decodedSlug }
    );
    
    console.log('Fetched product:', product); // Log product to see if it's found
    return product;
  };
  

interface ProductDetailsProps {
  params: { slug: string };
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { slug } = params;

  const product = await fetchProductDetails(slug);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center">Product Not Found!</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex flex-col space-y-4">
          {product.images.map((image: any, index: number) => (
            <div
              key={index}
              className="w-full h-[400px] flex justify-center items-center bg-[#F6F7FB] rounded-lg overflow-hidden"
            >
              <Image
                src={urlFor(image).url()}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-[#0D0E43]">{product.name}</h1>
          <div className="flex items-center space-x-4 mt-2">
            <span className="text-2xl font-semibold text-[#FB2E86]">
              {product.price}$
            </span>
            <span className="text-lg line-through text-gray-500">
              {product.originalPrice}
            </span>
          </div>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Actions */}
          <div className="flex space-x-4 mt-6">
            <button className="bg-[#08D15F] text-white px-6 py-3 rounded-lg hover:bg-[#06b157] transition">
              <FaShoppingCart className="inline mr-2" /> Add to Cart
            </button>
            <button className="bg-[#FB2E86] text-white px-6 py-3 rounded-lg hover:bg-[#e12b75] transition">
              <FaHeart className="inline mr-2" /> Add to Wishlist
            </button>
            <button className="bg-[#3F509E] text-white px-6 py-3 rounded-lg hover:bg-[#324482] transition">
              <FaShareAlt className="inline mr-2" /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
