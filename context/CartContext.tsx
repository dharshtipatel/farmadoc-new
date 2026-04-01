"use client";

import { createContext, useContext, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  variant: { count: string; pack: string };
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("CartContext missing");
  return ctx;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
  setItems((currentItems) => {
    const existingIndex = currentItems.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingIndex !== -1) {
      const updated = [...currentItems];
      updated[existingIndex] = newItem; // replace quantity
      return updated;
    }

    return [...currentItems, newItem];
  });
};

  const removeItem = (id: string) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, qty: number) => {
    setItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: qty } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeItem, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};