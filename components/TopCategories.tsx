import React from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa"; // Optional: Eye icon for "View Details" button

const TopCategories: React.FC = () => {
  // Sample product data (replace with actual data)
  const products = [
    {
      id: 1,
      name: "Mini LCW Chair",
      price: "$120",
      imgSrc: "/Products/product1.png", // Replace with your product image
    },
    {
      id: 2,
      name: "Mini LCW Chair",
      price: "$150",
      imgSrc: "/Products/product3.png", // Replace with your product image
    },
    {
      id: 3,
      name: "Mini LCW Chair",
      price: "$200",
      imgSrc: "/Products/product5.png", // Replace with your product image
    },
    {
      id: 4,
      name: "Mini LCW Chair",
      price: "$180",
      imgSrc: "/Products/product8.png", // Replace with your product image
    },
  ];

  return (
    <>
      <section className="py-10 px-4 bg-white">
        <div className="container mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#151875] mb-8">Top Categories</h2>

          {/* Product Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-64 h-64 hover:border-b-8 border-[#7E33E0] rounded-full shadow-md overflow-hidden group relative transform transition-all duration-300 hover:scale-105"
              >
                {/* Product Image */}
                <div className="w-24 h-24 relative mx-auto mt-4">
                  <Image
                    src={product.imgSrc}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-semibold text-[#151875]">{product.name}</h3>
                  <p className="text-md text-[#FB2E86] mt-2">{product.price}</p>
                </div>

                {/* Hover Effects */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                  <button className="text-xs px-2 py-2 bg-[#08D15F] text-white rounded flex items-center justify-center space-x-2 hover:bg-[#7E33E0] transition-all duration-300">
                    <FaEye /> {/* Eye icon */}
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 {/* New Section with Background Image */}
 <section
        className="relative bg-cover bg-center h-[300px]"
        style={{ backgroundImage: `url('/Outlebg/categorySectionbg.jpg')` }} // Set the background image URL directly
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h2 className="text-3xl text-[#151875] font-semibold">
              Get Latest Update <br /> By Subscribe Our Newsletter!
            </h2>
            <button className="mt-6 px-6 py-3 bg-[#FB2E86] text-white rounded hover:bg-[#fdfdfd] hover:text-black font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className=" justify-center w-1/2 items-center mx-auto hidden md:block">
          <Image
          src={"/Outlebg/imagesinOne.png"}
          width={200}
          height={200} // Replace with your image path
          alt="Description of image"
          className="w-full mt-8 object-cover" // Full width and responsive
        />
        </div>
      </section>
    </>
  );
};

export default TopCategories;
