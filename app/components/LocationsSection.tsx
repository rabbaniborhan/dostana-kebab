"use client";

import React from "react";
import { LOCATIONS, Location } from "../data/restaurantData";
import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from "lucide-react";

interface LocationsSectionProps {
  currentLocation: Location;
  onSelectLocation: (loc: Location) => void;
  showPattern?: boolean;
}

export default function LocationsSection({
  currentLocation,
  onSelectLocation,
}: LocationsSectionProps) {
  return (
    <section id="locations" className="py-20 bg-[#121212] relative border-t border-white/10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
<div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#f26522] text-xs font-bold uppercase tracking-wider mb-2 font-lato">
            <MapPin className="w-4 h-4 text-[#f26522]" /> Convenient Across Lublin
          </div>
          <h2 className="font-judson font-bold text-3xl sm:text-5xl text-white tracking-tight">
            OUR <span className="flame-gradient-text">6 LOCATIONS IN LUBLIN</span>
          </h2>
          <p className="font-lato text-neutral-400 mt-2 text-sm sm:text-base">
            Pick your nearest Dostana Kebab branch for lightning-fast express delivery or hot takeaway pickup!
          </p>
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-lato">
          {LOCATIONS.map((loc: Location) => {
            const isSelected = currentLocation.id === loc.id;
            return (
              <div
                key={loc.id}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  isSelected
                    ? "border-[#f26522] bg-[#1c1c1c]/90 shadow-xl ring-1 ring-[#f26522]/50"
                    : "border-white/10 hover:border-neutral-700 bg-[#1c1c1c]/80"
                }`}
              >
                <div className="space-y-4">
<div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-judson font-bold text-xl text-white leading-snug">
                        {loc.name}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-[#f26522]" />
                        <span>{loc.street}, {loc.postCode} {loc.city}</span>
                      </p>
                    </div>

                    {isSelected && (
                      <span className="bg-[#d9531e] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shrink-0 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> ACTIVE
                      </span>
                    )}
                  </div>
<div className="space-y-2 text-xs text-neutral-300 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-neutral-400">
                        <Clock className="w-3.5 h-3.5 text-[#e5a93c]" /> Hours:
                      </span>
                      <span className="font-bold text-white">{loc.hours}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-neutral-400">
                        <Phone className="w-3.5 h-3.5 text-emerald-400" /> Direct Line:
                      </span>
                      <a
                        href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                        className="font-bold text-emerald-400 hover:underline"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                </div>
<div className="pt-2">
                  <button
                    onClick={() => onSelectLocation(loc)}
                    className={`w-full font-bold text-xs py-2.5 rounded transition-all uppercase tracking-wider ${
                      isSelected
                        ? "bg-[#d9531e] text-white shadow-md cursor-default"
                        : "bg-[#242424] hover:bg-[#d9531e] text-white"
                    }`}
                  >
                    <span>{isSelected ? "Order From This Branch" : "Set As Active Branch"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
