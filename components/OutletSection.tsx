import React from "react";
import Image from "next/image";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  originalPrice: string;
}

const LatestProducts: React.FC = () => {
  const latestProducts: Product[] = [
    {
      id: 1,
      name: "Armchair",
      image: "/Outlebg/Outlet2.png",
      price: "$200",
      originalPrice: "$300",
    },
    {
      id: 2,
      name: "Coffee Table",
      image: "/Outlebg/Outlet3.png",
      price: "$150",
      originalPrice: "$250",
    },
    {
      id: 3,
      name: "Recliner Chair",
      image: "/Outlebg/Outlet1.png",
      price: "$300",
      originalPrice: "$450",
    },
    {
      id: 4,
      name: "Glass Shelf",
      image: "/Outlebg/Outlet4.png",
      price: "$80",
      originalPrice: "$120",
    },
  ];

  return (
    <section className=" px-4 py-5">
      <div className="container bg-[#F1F0FF] mx-auto flex justify-center flex-col md:flex-row items-center">
        {/* Left side - Image */}
        <div className="md:w-1/4 flex justify-center mb-8 md:mb-0">
          <Image
            src="/Outlebg/Outlet.png" // Replace with your image path
            alt="Product Image"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right side - Content */}
        <div className="md:w-1/2 md:pl-16">
          <h2 className="text-3xl font-bold text-[#0D0E43] mb-4">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="text-lg text-[#555] space-y-2 mb-6">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails</li>
            <li>Arms, backs, and seats are structurally reinforced</li>
          </ul>

          <div className="flex items-center justify-start space-x-4">
            <button className="px-6 py-3 bg-[#FB2E86] font-semibold rounded shadow hover:bg-gray-800 text-white transition duration-300">
              Add to Cart
            </button>
            <div>
              <h3 className="text-md font-semibold text-[#0D0E43]">B&B Italian Sofa</h3>
              <p className="text-md font-semibold text-[#FB2E86]">$32.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Products Section */}
      <section className="bg-white py-10 md:px-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0D0E43] mb-8 mt-12">
          Trending Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {latestProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white shadow-md rounded-lg overflow-hidden relative hover:scale-105 transition-transform duration-300"
              >
                {/* Product Image */}
                <div className="relative w-full h-[250px] flex justify-center items-center overflow-hidden bg-[#F6F7FB]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className=" p-2 ">
                  <div className="flex justify-center ">
                    <h3 className="text-lg font-semibold text-[#0D0E43]">
                      {product.name}
                    </h3>

                  </div>
                  <div className="flex justify-center  space-x-4">
                    <p className="text-sm font-semibold text-[#FB2E86]">
                      {product.price}
                    </p>
                  <p className="text-sm text-[#777] line-through">
                    {product.originalPrice}
                  </p>
                  </div>
                </div>

                {/* Hover Icons and Sell Button */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Hover Icons */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 px-4">
                    <FaShoppingCart className="text-xl cursor-pointer text-gray-800 hover:text-[#08D15F]" />
                    <FaHeart className="text-xl cursor-pointer text-gray-800 hover:text-[#FB2E86]" />
                    <FaSearch className="text-xl cursor-pointer text-gray-800 hover:text-[#533feb]" />
                  </div>

                  {/* Sell Button at Top Right */}
                  <div className="absolute top-0 right-0">
                    <button className="bg-[#3F509E] text-white py-2 px-5 shadow-xl text-xs transition-all">
                      Sell
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default LatestProducts;
