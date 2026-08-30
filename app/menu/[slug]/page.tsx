"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import SubpageHero from "../../components/SubpageHero";
import MenuSection from "../../components/MenuSection";
import Promotions from "../../components/Promotions";
import ItemCustomizerModal, { CustomizedCartItem } from "../../components/ItemCustomizerModal";
import { useCart } from "../../context/CartContext";
import { LOCATIONS, MenuItem } from "../../data/restaurantData";
import { MapPin, Phone, Truck, ShoppingBag, Clock, Store } from "lucide-react";

export default function BranchMenuPage() {
  const params = useParams();
  const rawSlug = (params?.slug as string) || "dostana-kebab-lipowa";
  
  const { addToCart, setIsCartOpen, applyPromoCode } = useCart();
  const [fulfillmentType, setFulfillmentType] = useState<"delivery" | "pickup">("delivery");
  const [selectedItemToCustomize, setSelectedItemToCustomize] = useState<MenuItem | null>(null);

  const branch =
    LOCATIONS.find((loc) => loc.id === rawSlug || loc.id.includes(rawSlug)) ||
    LOCATIONS.find((loc) => loc.id.includes("lipowa")) ||
    LOCATIONS[0];

  const handleAddToCart = (customizedItem: CustomizedCartItem) => {
    addToCart(customizedItem);
    setIsCartOpen(true);
  };

  return (
    <div className="font-lato bg-[#121212] min-h-screen text-white">
<SubpageHero
        title={branch.name}
        breadcrumb="Menu"
        subtitle={`Fresh charcoal-grilled kebab menu & online ordering from ${branch.street}, ${branch.city}`}
      />
<section className="bg-[#181818] border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#d9531e]/20 border border-[#d9531e]/50 flex items-center justify-center text-[#f26522] shrink-0">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="bg-[#d9531e]/20 border border-[#d9531e]/40 text-[#f26522] text-[10px] font-black uppercase px-2.5 py-0.5 rounded">
                  ACTIVE LOCATION
                </span>
                <h2 className="font-judson font-bold text-2xl text-white">{branch.name}</h2>
              </div>
              <p className="text-xs text-neutral-300 flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#f26522]" /> {branch.street}, {branch.postCode} {branch.city}
                </span>
                <span className="text-[#f26522]">•</span>
                <a href={`tel:${branch.phone.replace(/\s+/g, "")}`} className="text-emerald-400 font-bold hover:underline flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> {branch.phone}
                </a>
                <span className="text-[#f26522]">•</span>
                <span className="flex items-center gap-1 text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-[#e5a93c]" /> Today: <strong className="text-white">{branch.hours}</strong>
                </span>
              </p>
            </div>
          </div>
<div className="flex items-center gap-2 bg-[#121212] p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setFulfillmentType("delivery")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                fulfillmentType === "delivery"
                  ? "bg-[#d9531e] text-white font-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Express Delivery</span>
            </button>

            <button
              onClick={() => setFulfillmentType("pickup")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                fulfillmentType === "pickup"
                  ? "bg-[#d9531e] text-white font-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Takeaway Pickup</span>
            </button>
          </div>

        </div>
      </section>
<Promotions
        onApplyPromoCode={(code) => {
          applyPromoCode(code);
          setIsCartOpen(true);
        }}
      />
<div>
        <MenuSection
          showPattern={true}
          onSelectItemToCustomize={(item) => setSelectedItemToCustomize(item)}
        />
      </div>
{selectedItemToCustomize && (
        <ItemCustomizerModal
          item={selectedItemToCustomize}
          onClose={() => setSelectedItemToCustomize(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}
