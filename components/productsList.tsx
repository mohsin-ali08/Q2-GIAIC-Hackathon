import { groq } from 'next-sanity';
import client from '@/sanity/lib/client';
import Card from '@/components/Card'; // Import the Card component
import React from 'react';

// Define the Product type
interface Product {
  _id: string;
  name: string;
  images: { asset: { _ref: string } }[]; // Array of image asset references
  price: string;
  originalPrice: string;
  description?: string; // Optional, for products without descriptions
  slug: { current: string }; // Slug for dynamic routing
}

const ProductsPage = async () => {
  // Fetch products from Sanity
  const products: Product[] = await client.fetch(groq`*[_type == "product"]`);

  return (
    <section>
      <div className="container mx-auto px-4 py-5 md:px-40">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0D0E43] mb-8 mt-12">
            Over Products!
          </h2>
        </div>

        {/* Grid of products */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product._id} product={product} /> // Use the Card component here
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
