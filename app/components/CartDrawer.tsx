"use client";

import React, { useState } from "react";
import { CustomizedCartItem } from "./ItemCustomizerModal";
import { X, Trash2, Plus, Minus, Tag, ShoppingBag, ArrowRight, Truck, Gift } from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CustomizedCartItem[];
  onUpdateQuantity: (cartId: string, newQty: number) => void;
  onRemoveItem: (cartId: string) => void;
  appliedPromoCode: string;
  onApplyPromoCode: (code: string) => void;
  onProceedToCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  appliedPromoCode,
  onApplyPromoCode,
  onProceedToCheckout,
}: CartDrawerProps) {
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  let discountAmount = 0;
  if (appliedPromoCode === "DOSTANA5") {
    discountAmount = subtotal * 0.05;
  } else if (appliedPromoCode === "STAMP5") {
    discountAmount = 24.9; // Value of small rollo
  }

  const freeDeliveryThreshold = 150;
  const amountNeededForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const deliveryFee = subtotal >= freeDeliveryThreshold || subtotal === 0 ? 0 : 8.0;
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (code === "DOSTANA5" || code === "STAMP5" || code === "FREEDEL150") {
      onApplyPromoCode(code);
      setPromoError("");
      setPromoInput("");
    } else {
      setPromoError("Invalid code. Use DOSTANA5, STAMP5 or FREEDEL150");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-neutral-950 border-l border-neutral-800 shadow-2xl flex flex-col justify-between">
<div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/80">
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="w-6 h-6 text-orange-500" />
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
              <h2 className="text-xl font-black text-white">Your Order Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
<div className="bg-neutral-900 p-4 border-b border-neutral-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-neutral-300 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-orange-500" />
                <span>
                  {amountNeededForFreeDelivery === 0
                    ? "🎉 You qualified for FREE Delivery!"
                    : `Add ${amountNeededForFreeDelivery.toFixed(2)} PLN more for FREE Delivery`}
                </span>
              </span>
              <span className="text-amber-400 font-mono">
                {Math.min(100, (subtotal / freeDeliveryThreshold) * 100).toFixed(0)}%
              </span>
            </div>
            <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-orange-500 to-amber-400 h-full transition-all duration-500"
                style={{
                  width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%`,
                }}
              />
            </div>
          </div>
<div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-3xl">
                  🌯
                </div>
                <h3 className="text-lg font-extrabold text-white">Your Cart is Empty</h3>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                  Looks like you haven&apos;t added any delicious Dostana kebabs yet. Explore our menu!
                </p>
                <button
                  onClick={onClose}
                  className="flame-btn-gradient text-white text-xs font-extrabold px-6 py-3 rounded-full inline-block shadow-lg"
                >
                  BROWSE MENU NOW
                </button>
              </div>
            ) : (
              cartItems.map((cartItem) => (
                <div
                  key={cartItem.cartId}
                  className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl space-y-3 relative group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        className="w-14 h-14 object-cover rounded-xl shrink-0"
                      />
                      <div>
                        <h4 className="font-extrabold text-white text-sm">
                          {cartItem.item.name}
                        </h4>
                        <div className="text-[11px] text-orange-400 font-medium">
                          {cartItem.selectedSize.name} • {cartItem.selectedMeat}
                        </div>
                        <div className="text-[11px] text-neutral-400">
                          Sauce: {cartItem.selectedSauce}
                        </div>
                        {cartItem.selectedExtras.length > 0 && (
                          <div className="text-[10px] text-amber-300">
                            + {cartItem.selectedExtras.map((e) => e.name).join(", ")}
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(cartItem.cartId)}
                      className="text-neutral-500 hover:text-red-400 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
                    <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 px-2 py-1 rounded-full">
                      <button
                        onClick={() =>
                          onUpdateQuantity(cartItem.cartId, cartItem.quantity - 1)
                        }
                        className="w-6 h-6 rounded-full bg-neutral-800 text-white flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-extrabold text-white w-4 text-center">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(cartItem.cartId, cartItem.quantity + 1)
                        }
                        className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-black text-amber-400 text-sm">
                      {cartItem.totalPrice.toFixed(2)} PLN
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
{cartItems.length > 0 && (
            <div className="p-6 border-t border-neutral-800 bg-neutral-900 space-y-4">
<form onSubmit={handleApplyCoupon} className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Coupon Code (e.g. DOSTANA5)"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold px-4 py-2 rounded-xl"
                  >
                    Apply
                  </button>
                </div>
                {appliedPromoCode && (
                  <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                    <Gift className="w-3.5 h-3.5" /> Coupon &quot;{appliedPromoCode}&quot; active!
                  </div>
                )}
                {promoError && (
                  <div className="text-[11px] text-red-400 font-medium">
                    {promoError}
                  </div>
                )}
              </form>
<div className="space-y-1.5 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-white font-bold">{subtotal.toFixed(2)} PLN</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Discount:</span>
                    <span>-{discountAmount.toFixed(2)} PLN</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee:</span>
                  <span className="text-white font-bold">
                    {deliveryFee === 0 ? "FREE" : `${deliveryFee.toFixed(2)} PLN`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-neutral-800">
                  <span>Total Amount:</span>
                  <span className="text-amber-400">{finalTotal.toFixed(2)} PLN</span>
                </div>
              </div>
<button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full flame-btn-gradient text-white font-black text-sm py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
