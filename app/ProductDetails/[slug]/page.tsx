import React from "react";
import ProductDetails from "@/components/ProductDetails";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <ProductDetails params={params} />
    </div>
  );
};

export default Page;
