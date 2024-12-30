'use client'
import { createContext, useState, ReactNode } from "react";

export const CartContext = createContext<{
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  qty: number;
}>({
  showCart: false,
  setShowCart: () => {},
  qty: 1,
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);

  return (
    <CartContext.Provider value={{ showCart, setShowCart, qty }}>
      <div>{children}</div>
    </CartContext.Provider>
  );
}
