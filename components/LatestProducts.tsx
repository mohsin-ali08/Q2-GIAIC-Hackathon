// 'use client';
// import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button"; // shadcn button
// import { toast } from "@/components/ui/toast"; // shadcn toast
// import { useCartStore } from "@/store/cartStore";

// const LatestProducts: React.FC = () => {
//   const addToCart = useCartStore((state) => state.addToCart);

//   const products = [
//     {
//       id: 1,
//       name: "Armchair",
//       image: "/Products/product1.png",
//       price: "$200",
//       originalPrice: "$300",
//     },
//     {
//       id: 2,
//       name: "Desk Lamp",
//       image: "/Products/product2.png",
//       price: "$50",
//       originalPrice: "$75",
//     },
//   ];

//   const handleAddToCart = (product: any) => {
//     addToCart({ ...product, quantity: 1 });
//     toast({
//       title: "Added to Cart",
//       description: `${product.name} has been added to your cart.`,
//     });
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//       {products.map((product) => (
//         <div key={product.id} className="group bg-white shadow-md p-4">
//           <Image src={product.image} alt={product.name} width={200} height={200} />
//           <h3>{product.name}</h3>
//           <p className="text-red-500">{product.price}</p>
//           <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LatestProducts;

