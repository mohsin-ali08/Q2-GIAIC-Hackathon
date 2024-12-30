import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import FeaturedProductDetails from "@/components/featuredProductDetails";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Decode the slug before using it in the query
  const decodedSlug = decodeURIComponent(slug);

  console.log("Decoded Slug:", decodedSlug); // Log the decoded slug for debugging

  try {
    const product = await client.fetch(
      groq`
        *[_type == "featuredProducts" && slug.current == $slug][0] {
          _id,
          name,
          price,
          description,
          images
        }
      `,
      { slug: decodedSlug }
    );

    if (!product) {
      console.log("Product not found:", decodedSlug); // Log to check why the product wasn't found
      return (
        <div className="flex items-center justify-center h-screen text-lg font-bold text-red-500">
          Product not found.
        </div>
      );
    }

    return (
      <div>
        <FeaturedProductDetails product={product} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="flex items-center justify-center h-screen text-lg font-bold text-red-500">
        Something went wrong. Please try again later.
      </div>
    );
  }
};

export default Page;
