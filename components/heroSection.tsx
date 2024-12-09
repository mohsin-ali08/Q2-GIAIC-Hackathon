import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#F2F0FF] mt-2 overflow-hidden relative">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        <div className="hidden lg:block">
          <Image
            src="/heroSectionimg/lamp.png"
            alt="Lamp"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center lg:text-left py-10 lg:py-20">
          <h1 className="text-sm text-[#FB2E86] font-bold mb-4">
            Best Furniture For Your Castle....
          </h1>
          <h2 className="text-black md:text-5xl text-3xl md:w-[550px] font-semibold mb-4">
            New Furniture Collection Trends in 2020
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="px-6 py-3 bg-[#FB2E86] font-semibold rounded shadow hover:bg-gray-800 text-white transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="relative flex-1 flex justify-center items-center lg:py-20">
          <div className="absolute -top-20 -left-20 lg:w-64 lg:h-64 w-40 h-40 bg-[#ecd2fc] rounded-full opacity-50"></div>
          <div className="absolute -bottom-20 -right-20 lg:w-80 lg:h-80 w-48 h-48 bg-[#ecd2fc] rounded-full opacity-50"></div>
          <Image
            src="/heroSectionimg/sofa.webp"
            alt="Sofa"
            width={400}
            height={400}
            className="object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
