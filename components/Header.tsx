"use client";
import Link from "next/link";

import React, { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLogin,
  HiOutlineHeart,
  HiShoppingCart,
  HiOutlineChevronDown,
  HiOutlineMenu,
  HiOutlineSearch,
} from "react-icons/hi";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="w-full bg-white overflow-auto ">
      <div className="bg-[#7E33E0] flex justify-around md:justify-around items-center py-2 mb-2 text-gray-100 md:px-10">
        {/* Left Side: Email */}
        <div className="flex items-center">
          <HiOutlineMail className="mr-2" />
          <span className="sm:inline">mhhasanul@gmail.com</span>
        </div>

        {/* Language Dropdown */}
        <div className="flex items-center cursor-pointer hover:text-gray-300 sm:hidden">
          <span>English</span>
          <HiOutlineChevronDown className="ml-1" />
        </div>

        <Link href={'/ShopingCart'} className=" md:hidden text-xl items-center cursor-pointer hover:text-gray-300">
            <HiShoppingCart className="mr-2" />
         
          </Link>
        {/* Right Section: Phone, Currency, Login, Wishlist - Visible on desktop */}
        <div className="hidden sm:flex items-center space-x-4 ">
          {/* Phone */}
          <div className="flex items-center">
            <HiOutlinePhone className="mr-2" />
            <span>(12345)67890</span>
          </div>

          {/* Language Dropdown */}
          <div className="flex items-center cursor-pointer hover:text-gray-300">
            <span>English</span>
            <HiOutlineChevronDown className="ml-2" />
          </div>

          {/* Currency Dropdown */}
          <div className="flex items-center cursor-pointer hover:text-gray-300">
            <span>USD</span>
            <HiOutlineChevronDown className="ml-2" />
          </div>

          {/* Login */}
          <Link href={'/LoginForm'} className="flex items-center cursor-pointer hover:text-gray-300">
            <HiOutlineLogin className="mr-2" />
           <span>LogIn</span>
          </Link>

          {/* Wishlist */}
          <div className="flex items-center cursor-pointer hover:text-gray-300">
            <HiOutlineHeart className="mr-2" />
            <span>Wishlist</span>
          </div>
        </div>
      </div>

      {/* Navbar section */}
      <nav className="container mx-auto px-4">
  <div className="flex flex-wrap md:justify-around overflow-hidden justify-between items-center">
    {/* Logo */}
    <div className="flex items-center">
      <h1 className="text-[#0D0E43] font-semibold text-2xl">Hekto</h1>
    </div>

    {/* Hamburger menu for mobile */}
    <button
      className="lg:hidden"
      onClick={() => setIsNavOpen(!isNavOpen)}
      aria-label="Toggle navigation menu"
    >
      <HiOutlineMenu className="text-2xl text-gray-700" />
    </button>

    {/* Navigation links and search bar */}
    <div
      className={`${
        isNavOpen ? "block" : "hidden"
      } lg:flex flex-col lg:flex-row items-center w-full lg:w-auto mt-4 lg:mt-0`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2 mb-4 lg:mb-0">
        <div className="group flex items-center">
          <Link
            href={'/'}
            className="text-gray-700 hover:text-[#FB2E86] py-2 lg:py-0"
          >
            Home
          </Link>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <HiOutlineChevronDown className="text-gray-700 group-hover:text-[#FB2E86]" />
          </span>
        </div>

        <div className="group flex items-center">
          <Link
            href={'/pageS'}
            className="text-gray-700 hover:text-[#FB2E86] py-2 lg:py-0"
          >
            Pages
          </Link>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <HiOutlineChevronDown className="text-gray-700 group-hover:text-[#FB2E86]" />
          </span>
        </div>

        <div className="group flex items-center">
          <Link
            href={'/Product'}
            className="text-gray-700 hover:text-[#FB2E86] py-2 lg:py-0"
          >
            Products
          </Link>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <HiOutlineChevronDown className="text-gray-700 group-hover:text-[#FB2E86]" />
          </span>
        </div>

        <div className="group flex items-center">
          <Link
            href={'/Blog'}
            className="text-gray-700 hover:text-[#FB2E86] py-2 lg:py-0"
          >
            Blog
          </Link>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <HiOutlineChevronDown className="text-gray-700 group-hover:text-[#FB2E86]" />
          </span>
        </div>

        <div className="group flex items-center">
          <Link
            href={"/AboutUs"}
            className="text-gray-700 hover:text-[#FB2E86] py-2 lg:py-0"
          >
            AboutUs
          </Link>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <HiOutlineChevronDown className="text-gray-700 group-hover:text-[#FB2E86]" />
          </span>
        </div>

        <div className="group flex items-center">
          <Link
            href={'/contact'}
            className="text-gray-700 hover:text-[#FB2E86] py-2 lg:py-0"
          >
            Contact
          </Link>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <HiOutlineChevronDown className="text-gray-700 group-hover:text-[#FB2E86]" />
          </span>
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="outline-none border-gray-300 border-[1.5px] py-1 px-5"
        />
        <button
          className="px-4 py-2 bg-[#FB2E86] text-white border-[#FB2E86] border-[1.5px]"
          aria-label="Search"
        >
          <HiOutlineSearch className="text-gray-100 hover:text-black" />
        </button>
      </div>
    </div>
  </div>
</nav>

    </header>
  );
};

export default Header;
