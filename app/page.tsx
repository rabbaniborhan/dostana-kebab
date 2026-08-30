"use client";

import React from "react";
import Hero from "./components/Hero";
import QuickInfoSection from "./components/QuickInfoSection";
import AboutSection from "./components/AboutSection";
import Promotions from "./components/Promotions";
import MenuSection from "./components/MenuSection";
import ReviewsSection from "./components/ReviewsSection";
import GalleryModal from "./components/GalleryModal";
import LocationsSection from "./components/LocationsSection";
import { useCart } from "./context/CartContext";

export default function HomePage() {
  const {
    currentLocation,
    setCurrentLocation,
    setIsCartOpen,
    setSelectedItemToCustomize,
    applyPromoCode,
  } = useCart();

  return (
    <div className="space-y-0">
<Hero currentLocation={currentLocation} />
<QuickInfoSection />
<AboutSection />
<Promotions
        onApplyPromoCode={(code) => {
          applyPromoCode(code);
          setIsCartOpen(true);
        }}
      />
<MenuSection
        showPattern={true}
        onSelectItemToCustomize={(item) => setSelectedItemToCustomize(item)}
      />
<ReviewsSection showPattern={false} />
<GalleryModal />
<LocationsSection
        showPattern={false}
        currentLocation={currentLocation}
        onSelectLocation={(loc) => setCurrentLocation(loc)}
      />
    </div>
  );
}
