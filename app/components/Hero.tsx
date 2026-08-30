"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Flame } from "lucide-react";
import { Location } from "../data/restaurantData";

interface HeroProps {
  currentLocation: Location;
}

const SLIDES = [
  {
    id: 1,
    supTitle: "Free Delivery",
    title: "for orders from 150 PLN!",
    description: "Enjoy hot & fresh charcoal roasted kebabs delivered directly to your home or office anywhere in Lublin!",
    buttonText: "Order online",
  },
  {
    id: 2,
    supTitle: "Special Promotion",
    title: "5% OFF for new customers!",
    description: "Receive 5% instant discount on your first online order. Simply select your items and enter coupon DOSTANA5 at checkout.",
    buttonText: "Order online",
  },
  {
    id: 3,
    supTitle: "Collect & Save",
    title: "Collect stamps for FREE !",
    description: "Earn 1 digital stamp with every order. Collect 5 stamps to unlock a FREE Small Rollo Kebab code!",
    buttonText: "Order online",
  },
];

export default function Hero({ currentLocation }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];
  const branchSlug = currentLocation?.id || "dostana-kebab-lipowa";

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-40 pb-20 bg-[#121212]">
<div className="absolute inset-0 z-0">
        <img
          src="https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/d605db37-0ee9-4cff-be61-3d8645a7553c.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=max&fp-x=0.5&fp-y=0.5&h=1080&w=1920"
          alt="Dostana Kebab Hero Cover"
          className="w-full h-full object-cover object-center filter brightness-80 contrast-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
<div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
<div key={slide.id} className="space-y-4 animate-in fade-in duration-500">
<div className="text-orange-400 font-extrabold text-sm sm:text-lg uppercase tracking-widest flex items-center justify-center gap-2 drop-shadow">
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span>{slide.supTitle}</span>
          </div>
<h1 className="font-judson text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight capitalize leading-tight drop-shadow-md">
            {slide.title}
          </h1>
<p className="font-lato text-base sm:text-xl text-neutral-100 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
            {slide.description}
          </p>
<div className="pt-6">
            <Link
              href={`/menu/restauracja/${branchSlug}`}
              className="flame-btn-gradient text-white font-black text-base sm:text-lg px-9 py-4 rounded-full inline-flex items-center gap-3 shadow-none transform hover:scale-105 active:scale-95 transition-all uppercase tracking-wide"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{slide.buttonText}</span>
            </Link>
          </div>
        </div>

      </div>
<div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "h-8 bg-orange-500"
                : "h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
