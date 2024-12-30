// pages/page.tsx
import React from "react";
import HeroSection from "@/components/heroSection";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
    </div>
  );
}
