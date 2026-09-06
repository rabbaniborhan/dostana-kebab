"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { CartProvider, useCart } from "@/context/CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ItemCustomizerModal from "./ItemCustomizerModal";
import CartDrawer from "./CartDrawer";
import CheckoutModal from "./CheckoutModal";

function GlobalModalContainer({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  const {
    currentLocation,
    cartItems,
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
    addToCart,
    clearCart,
  } = useCart();

  if (isAdminRoute) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] text-gray-100 flex flex-col font-sans">
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
<ItemCustomizerModal
        item={selectedItemToCustomize}
        onClose={() => setSelectedItemToCustomize(null)}
        onAddToCart={addToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        appliedPromoCode={appliedPromoCode}
        onApplyPromoCode={applyPromoCode}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        currentLocation={currentLocation}
        appliedPromoCode={appliedPromoCode}
        onOrderCompleted={clearCart}
      />
    </div>
  );
}

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <GlobalModalContainer>{children}</GlobalModalContainer>
    </CartProvider>
  );
}
