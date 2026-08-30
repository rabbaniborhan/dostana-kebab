"use client";

import React, { useState, useEffect } from "react";
import { Location } from "../data/restaurantData";
import { CustomizedCartItem } from "./ItemCustomizerModal";
import { X, CheckCircle2, Truck, ShoppingBag, CreditCard, Banknote, ShieldCheck, Flame, Clock } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CustomizedCartItem[];
  currentLocation: Location;
  appliedPromoCode: string;
  onOrderCompleted: () => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  currentLocation,
  appliedPromoCode,
  onOrderCompleted,
}: CheckoutModalProps) {
  const [fulfillmentMethod, setFulfillmentMethod] = useState<"delivery" | "pickup">("delivery");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"blik" | "cash" | "card">("blik");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [countdownMinutes, setCountdownMinutes] = useState(25);

  useEffect(() => {
    if (orderConfirmed) {
      const timer = setInterval(() => {
        setCountdownMinutes((prev) => (prev > 1 ? prev - 1 : 1));
      }, 60000);
      return () => clearInterval(timer);
    }
  }, [orderConfirmed]);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  let discountAmount = 0;
  if (appliedPromoCode === "DOSTANA5") {
    discountAmount = subtotal * 0.05;
  } else if (appliedPromoCode === "STAMP5") {
    discountAmount = 24.9;
  }

  const freeDeliveryThreshold = 150;
  const deliveryFee =
    fulfillmentMethod === "pickup" || subtotal >= freeDeliveryThreshold ? 0 : 8.0;
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderConfirmed(true);
      setOrderNumber(`DK-${Math.floor(100000 + Math.random() * 900000)}`);
      onOrderCompleted();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-800 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
<div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
          <div className="flex items-center gap-3">
            <Flame className="w-6 h-6 text-orange-500 fill-orange-500" />
            <div>
              <h3 className="text-xl font-extrabold text-white">
                {orderConfirmed ? "Order Confirmation" : "Complete Your Order"}
              </h3>
              <p className="text-xs text-neutral-400">
                {currentLocation.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
<div className="p-6 overflow-y-auto space-y-6 flex-1">
          {orderConfirmed ? (
            /* Live Order Tracker Confirmation Screen */
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400 text-4xl shadow-xl shadow-emerald-500/20">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <span className="bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-black uppercase px-3 py-1 rounded-full">
                  ORDER PLACED #{orderNumber}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Kebab is Sizzling on the Grill! 🔥
                </h2>
                <p className="text-neutral-300 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-white">{name || "Valued Customer"}</strong>! Your order has been dispatched directly to our <span className="text-orange-400 font-bold">{currentLocation.name}</span> kitchen.
                </p>
              </div>
<div className="bg-neutral-950 p-6 rounded-3xl border border-neutral-800 max-w-sm mx-auto space-y-2">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" /> Estimated Delivery Time
                </div>
                <div className="text-5xl font-black text-white flame-gradient-text">
                  ~{countdownMinutes} MINS
                </div>
                <p className="text-[11px] text-neutral-400">
                  Our driver will deliver your order piping hot to {street} {houseNumber}.
                </p>
              </div>

              <button
                onClick={onClose}
                className="flame-btn-gradient text-white font-extrabold text-sm px-8 py-3.5 rounded-full inline-block shadow-xl"
              >
                Back To Main Page
              </button>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmitOrder} className="space-y-6">
<div className="grid grid-cols-2 gap-3 p-1.5 bg-neutral-950 rounded-2xl border border-neutral-800">
                <button
                  type="button"
                  onClick={() => setFulfillmentMethod("delivery")}
                  className={`py-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all ${
                    fulfillmentMethod === "delivery"
                      ? "flame-btn-gradient text-white shadow-lg"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Truck className="w-4 h-4" /> Express Delivery 🛵
                </button>
                <button
                  type="button"
                  onClick={() => setFulfillmentMethod("pickup")}
                  className={`py-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all ${
                    fulfillmentMethod === "pickup"
                      ? "flame-btn-gradient text-white shadow-lg"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" /> Self Pick-Up 🛍️
                </button>
              </div>
<div className="space-y-4">
                <h4 className="text-xs uppercase font-extrabold text-neutral-400 tracking-wider">
                  1. Contact & Location Info
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">
                      Phone Number (For SMS Confirmation) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+48 123 456 789"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                {fulfillmentMethod === "delivery" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-300 mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        placeholder="e.g. Krakowskie Przedmieście"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1">
                        House / Apt # *
                      </label>
                      <input
                        type="text"
                        required
                        value={houseNumber}
                        onChange={(e) => setHouseNumber(e.target.value)}
                        placeholder="12 / 4B"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    Special Cooking Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Extra spicy, no onions, door code 1420"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
<div className="space-y-3">
                <h4 className="text-xs uppercase font-extrabold text-neutral-400 tracking-wider">
                  2. Select Payment Method
                </h4>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("blik")}
                    className={`p-3 rounded-2xl text-xs font-bold text-center border transition-all flex flex-col items-center justify-center gap-1.5 ${
                      paymentMethod === "blik"
                        ? "bg-orange-500/20 border-orange-500 text-white"
                        : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <span className="text-base font-black text-amber-400">BLIK</span>
                    <span>Online BLIK ⚡</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cash")}
                    className={`p-3 rounded-2xl text-xs font-bold text-center border transition-all flex flex-col items-center justify-center gap-1.5 ${
                      paymentMethod === "cash"
                        ? "bg-orange-500/20 border-orange-500 text-white"
                        : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <Banknote className="w-5 h-5 text-emerald-400" />
                    <span>Cash On Door 💵</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3 rounded-2xl text-xs font-bold text-center border transition-all flex flex-col items-center justify-center gap-1.5 ${
                      paymentMethod === "card"
                        ? "bg-orange-500/20 border-orange-500 text-white"
                        : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-sky-400" />
                    <span>Card Terminal 💳</span>
                  </button>
                </div>
              </div>
<div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 space-y-2 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Items Total ({cartItems.length}):</span>
                  <span className="text-white font-bold">{subtotal.toFixed(2)} PLN</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Promo Discount ({appliedPromoCode}):</span>
                    <span>-{discountAmount.toFixed(2)} PLN</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-400">
                  <span>Delivery ({fulfillmentMethod}):</span>
                  <span className="text-white font-bold">
                    {deliveryFee === 0 ? "FREE" : `${deliveryFee.toFixed(2)} PLN`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-neutral-800">
                  <span>Total To Pay:</span>
                  <span className="text-amber-400 font-mono text-base">
                    {finalTotal.toFixed(2)} PLN
                  </span>
                </div>
              </div>
<button
                type="submit"
                disabled={isSubmitting}
                className="w-full flame-btn-gradient text-white font-black text-sm py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl"
              >
                {isSubmitting ? (
                  <span>DISPATCHING ORDER TO KITCHEN...</span>
                ) : (
                  <span>CONFIRM & PLACE ORDER ({finalTotal.toFixed(2)} PLN)</span>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
