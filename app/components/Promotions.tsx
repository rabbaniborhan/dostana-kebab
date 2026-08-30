"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Tag, Sparkles, ArrowRight, Percent, CheckCircle2, Ticket, X, Clock, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

interface PromotionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullTerms: string;
  discountBadge: string;
  code: string;
  borderColor: string;
  image: string;
  minOrder?: string;
  validDays: string[];
}

const PROMOTIONS: PromotionItem[] = [
  {
    id: "promo-1",
    title: "15% Off Your First Online Order",
    tagline: "WELCOME GIFT FOR NEW GUESTS",
    description: "Enjoy an exclusive 15% discount on all charcoal kebabs, pitas, and rolls when you place your first online order.",
    fullTerms: "Receive 15% off your first order placed via our online menu. *The discount code is automatically applied at checkout for orders above 40 PLN. **Valid for both delivery and pickup orders across all Lublin branches.",
    discountBadge: "15% OFF",
    code: "DOSTANA15",
    borderColor: "border-[#f26522]",
    image: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_32_d4cdebe687ae8357ddbd0422f5d84230-1-6f516b90be782e231d1e1dfe082d3819.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    minOrder: "40 PLN",
    validDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  {
    id: "promo-2",
    title: "Collect stamps = Free Rollo Kebab!",
    tagline: "DOSTANA KEBAB LOYALTY CARD",
    description: "Collect digital stamps on every order. After your 5th online order, receive a coupon for a free Rollo Kebab!",
    fullTerms: "Receive a stamp after every order. Collect 5 stamps. After your 5th online order, you'll receive a discount code for the Rollo Mały Free. *The free gift will be added to your cart after entering the code in an order of at least 70 PLN. ** This promotion requires marketing consent.\n\nFor every order, you receive a stamp valid for 12 months. After the fifth stamp, you'll receive a promotional coupon. Stamps are assigned to the phone number provided with the order.",
    discountBadge: "FREE ROLLO",
    code: "STAMP5",
    borderColor: "border-[#e5a93c]",
    image: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_31_5fb241fb6377e060e75bb960e11c4cc9-1-ac48b6f9294dd70f0360ca5743faa3e0.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    minOrder: "70 PLN",
    validDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  {
    id: "promo-3",
    title: "Free Express Home Delivery Over 150 PLN",
    tagline: "LUBLIN CITY DELIVERY SPECIAL",
    description: "Order hot kebabs for family, friends, or office parties over 150 PLN and get instant 100% free doorstep delivery.",
    fullTerms: "Enjoy free doorstep delivery on all orders exceeding 150 PLN. *The free delivery discount is calculated automatically at final checkout. **Valid for all delivery zones within Lublin city limits.",
    discountBadge: "FREE DELIVERY",
    code: "FREEDEL150",
    borderColor: "border-emerald-500",
    image: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_30_65e0cea829fe4acd3e3ff508bd30d5f8-1-e58f399429647cbce366334758f1110e.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    minOrder: "150 PLN",
    validDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
];

interface PromotionsProps {
  onApplyPromoCode?: (code: string) => void;
}

export default function Promotions({ onApplyPromoCode }: PromotionsProps) {
  const router = useRouter();
  const { currentLocation, applyPromoCode, setIsCartOpen } = useCart();
  
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [selectedPromoForModal, setSelectedPromoForModal] = useState<PromotionItem | null>(null);

  const branchSlug = currentLocation?.id || "dostana-kebab-lipowa";

  const handleApplyCodeAndProceed = (promo: PromotionItem) => {
    setAppliedCode(promo.code);
    applyPromoCode(promo.code);
    if (onApplyPromoCode) {
      onApplyPromoCode(promo.code);
    }
    setSelectedPromoForModal(null);
    setIsCartOpen(true);
    router.push(`/menu/${branchSlug}`);
  };

  return (
    <section className="py-10 bg-[#121212] relative overflow-hidden font-lato">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[#f26522] text-xs font-bold uppercase tracking-wider bg-[#d9531e]/20 border border-[#d9531e]/40 px-3 py-0.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#f26522]" /> Special Offers & Discounts
            </div>
            <h2 className="font-judson font-bold text-2xl sm:text-4xl text-white tracking-tight">
              EXCLUSIVE <span className="text-[#f26522]">DEALS</span>
            </h2>
          </div>

          <Link
            href={`/menu/${branchSlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-300 hover:text-[#f26522] transition-colors"
          >
            <span>Explore All Menu Items</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#f26522]" />
          </Link>
        </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROMOTIONS.map((promo) => {
            const isApplied = appliedCode === promo.code;

            return (
              <div
                key={promo.id}
                className={`bg-[#161616] rounded-2xl overflow-hidden border ${promo.borderColor}/50 flex flex-col justify-between transition-all duration-300 group hover:border-[#f26522] cursor-pointer shadow-lg`}
                onClick={() => setSelectedPromoForModal(promo)}
              >
<div className="relative h-36 w-full overflow-hidden bg-[#f7ebe1]">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/20" />
<div className="absolute top-2.5 left-2.5 bg-[#d9531e] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md z-10">
                    <Percent className="w-3 h-3" />
                    <span>{promo.discountBadge}</span>
                  </div>
<div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-md border border-white/20 text-[#f26522] text-[9px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 z-10 shadow-md">
                    <Tag className="w-2.5 h-2.5 text-[#f26522]" />
                    <span>{promo.code}</span>
                  </div>
                </div>
<div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between bg-[#161616]">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold text-[#f26522] uppercase tracking-wider block">
                      {promo.tagline}
                    </span>
                    <h3 className="font-judson font-bold text-base sm:text-lg text-white group-hover:text-[#f26522] transition-colors leading-snug">
                      {promo.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                      {promo.description}
                    </p>
                  </div>
<div className="pt-2 border-t border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPromoForModal(promo);
                      }}
                      className={`w-full font-bold text-xs uppercase py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all ${
                        isApplied
                          ? "bg-emerald-600 text-white font-black"
                          : "flame-btn-gradient text-white"
                      }`}
                    >
                      {isApplied ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          <span>PROMO CODE APPLIED!</span>
                        </>
                      ) : (
                        <>
                          <Ticket className="w-3.5 h-3.5" />
                          <span>CLAIM DEAL NOW</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
{selectedPromoForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/15 rounded-2xl overflow-hidden text-white shadow-2xl flex flex-col max-h-[90vh]">
<div className="relative h-44 w-full bg-[#f7ebe1] shrink-0 flex items-center justify-center p-4">
              <img
                src={selectedPromoForModal.image}
                alt={selectedPromoForModal.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-black/40" />

              <button
                onClick={() => setSelectedPromoForModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-5 right-5 z-10">
                <span className="bg-[#d9531e] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded inline-block mb-1">
                  {selectedPromoForModal.discountBadge}
                </span>
                <h3 className="font-judson font-bold text-xl sm:text-2xl text-white leading-tight drop-shadow-md">
                  {selectedPromoForModal.title}
                </h3>
              </div>
            </div>
<div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm font-lato">
<div className="space-y-3 text-neutral-300 leading-relaxed whitespace-pre-line">
                {selectedPromoForModal.fullTerms}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
<div className="flex items-center gap-2 font-bold text-white text-sm">
                  <Check className="w-4.5 h-4.5 text-[#f26522]" />
                  <span>Delivery and pickup</span>
                </div>
<div className="space-y-1.5 pl-1">
                  <div className="text-xs font-bold text-neutral-400 flex items-center gap-1.5 mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#e5a93c]" /> Available Days:
                  </div>
                  
                  <div className="space-y-1 pl-5 text-xs text-neutral-200">
                    {selectedPromoForModal.validDays.map((day) => (
                      <div key={day} className="flex items-center gap-2">
                        <span className="w-20 font-medium text-neutral-300">{day}:</span>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
<div className="p-4 bg-[#141414] border-t border-white/10 shrink-0">
              <button
                onClick={() => handleApplyCodeAndProceed(selectedPromoForModal)}
                className="w-full flame-btn-gradient text-white font-bold text-xs uppercase py-3 rounded-xl flex items-center justify-center gap-2 tracking-wider"
              >
                <Ticket className="w-4 h-4" />
                <span>APPLY CODE ({selectedPromoForModal.code}) & ORDER NOW</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
