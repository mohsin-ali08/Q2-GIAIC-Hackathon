'use client'
import { createContext, useState, ReactNode } from "react";

export const CartContext = createContext<{
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
 
}>({
  showCart: false,
  setShowCart: () => {},
  
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider value={{ showCart, setShowCart }}>
      <div>{children}</div>
    </CartContext.Provider>
  );
}
