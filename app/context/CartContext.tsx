"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { LOCATIONS, Location, MenuItem } from "../data/restaurantData";
import { CustomizedCartItem } from "../components/ItemCustomizerModal";

interface CartContextType {
  currentLocation: Location;
  setCurrentLocation: (loc: Location) => void;
  cartItems: CustomizedCartItem[];
  addToCart: (item: CustomizedCartItem) => void;
  updateQuantity: (cartId: string, qty: number) => void;
  removeItem: (cartId: string) => void;
  appliedPromoCode: string;
  applyPromoCode: (code: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  selectedItemToCustomize: MenuItem | null;
  setSelectedItemToCustomize: (item: MenuItem | null) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [currentLocation, setCurrentLocation] = useState<Location>(LOCATIONS[0]);
  const [cartItems, setCartItems] = useState<CustomizedCartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedItemToCustomize, setSelectedItemToCustomize] = useState<MenuItem | null>(null);
  const [appliedPromoCode, setAppliedPromoCode] = useState<string>("DOSTANA5");

  const addToCart = (customizedItem: CustomizedCartItem) => {
    setCartItems((prev) => [...prev, customizedItem]);
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId: string, newQty: number) => {
    if (newQty <= 0) {
      removeItem(cartId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: newQty, totalPrice: item.unitPrice * newQty }
          : item
      )
    );
  };

  const removeItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const applyPromoCode = (code: string) => {
    setAppliedPromoCode(code);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        currentLocation,
        setCurrentLocation,
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        appliedPromoCode,
        applyPromoCode,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedItemToCustomize,
        setSelectedItemToCustomize,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
