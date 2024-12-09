import FilterSection from "@/components/FilterSection";
import Image from "next/image";
import React from "react";

const shoppingCart = [
  {
    name: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    img: "/ShopingCart/cart1.jpg",
  },
  {
    name: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    img: "/ShopingCart/cart2.jpg",
  },
  {
    name: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    img: "/ShopingCart/cart3.jpg",
  },
  {
    name: "Elit massa diam",
    color: "Brown",
    size: "XL",
    img: "/ShopingCart/cart4.jpg",
  },
  {
    name: "Proin pharetra elementum",
    color: "Brown",
    size: "XL",
    img: "/ShopingCart/cart5.jpg",
  },
];

const Page = () => {
  return (
    <section className="py-3 md:px-0 px-5 pb-10 ">
      {/* Filter Section */}
      <FilterSection
        textTitle="Shopping Cart"
        textNavigation="Home . Pages ."
        pageName="Shopping Cart"
      />

      {/* Shopping Cart Section */}
      <div className="mt-12 flex flex-col lg:flex-row lg:gap-8 md:px-20 md:py-10">
        {/* Left Side: Cart Items */}
        <div className="flex-1">
          <div className="hidden lg:flex justify-around items-center text-lg font-semibold text-gray-700">
            <p>Product</p>
            <p>Price</p>
            <p>Total</p>
          </div>

          {shoppingCart.map((item, index) => (
            <div
              key={index}
              className="mt-6 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-4 border-b border-gray-200 pb-4"
            >
              {/* Product Details */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <div className="text-sm text-gray-500">
                    <p>{item.size}</p>
                    <p>{item.color}</p>
                  </div>
                </div>
              </div>
              {/* Price */}
              <p className="text-gray-800 font-medium lg:text-center">$32.00</p>
              {/* Total */}
              <p className="text-gray-800 font-medium lg:text-center">$219.00</p>
            </div>
          ))}

          {/* Cart Actions */}
          <div className="flex flex-col lg:flex-row gap-4 mt-6">
            <button className="w-full lg:w-auto bg-pink-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-600 transition">
              Update Cart
            </button>
            <button className="w-full lg:w-auto bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 transition">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Right Side: Cart Summary */}
        <div className="lg:w-[30%] w-full">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Cart Total
          </h2>
          <div className="mt-5 flex justify-center">
          <div className="bg-gray-100 p-6 mt-5 rounded-md space-y-5">
            <div className="border-b flex justify-between ">
              <h1 className="text-[#1D3178] font-semibold" >Subtotals:</h1>
              <h2 className="text-[#1D3178] font-semibold" >£219.00</h2>
            </div>
            <div>
              <div className="border-b flex justify-between">
              <h1 className="text-[#1D3178] font-semibold" >Totals:</h1>
              <h2 className="text-[#1D3178] font-semibold" >£325.0</h2>
              </div>
            </div>
            <p className="">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-[#19D16F] hover:bg-green-400 text-sm text-white font-semibold py-2">
              Calculate Shipping
            </button>
          </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 text-center mt-8">
            Calculate Shipping
          </h2>
          <div className="bg-gray-100 p-6 mt-5 rounded-md">
            <input
              type="text"
              placeholder="Country"
              className="w-full border-b bg-gray-100 border-gray-300 py-2 outline-none mb-4 text-gray-700"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border-b bg-gray-100 border-gray-300 py-2 outline-none mb-4 text-gray-700"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border-b bg-gray-100 border-gray-300 py-2 outline-none mb-4 text-gray-700"
            />
            <button className="w-full bg-pink-500 text-white text-sm font-semibold py-2 rounded-md hover:bg-pink-600 transition">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
