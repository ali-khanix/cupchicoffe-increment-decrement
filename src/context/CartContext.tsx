"use client";

import { MenuItem } from "@/types/product-types";
import { createContext, ReactNode, useContext, useState } from "react";

type CartContextType = {
  cart: MenuItem[];
  addToCart: (product: MenuItem) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");

  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<MenuItem[]>([]);

  const addToCart = (product: MenuItem) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
