"use client";

import React, { useState } from "react";
import Link from "next/link";
import SubpageHero from "../components/SubpageHero";
import MenuSection from "../components/MenuSection";
import { useCart } from "../context/CartContext";
import { LOCATIONS, Location } from "../data/restaurantData";
import { MapPin, Search, Phone, Clock, ArrowRight, CheckCircle2, Store } from "lucide-react";

export default function MenuPage() {
  const { setSelectedItemToCustomize, setCurrentLocation } = useCart();
  const [streetQuery, setStreetQuery] = useState("");
  const [addressChecked, setAddressChecked] = useState(false);
  const [matchedBranch, setMatchedBranch] = useState<Location>(LOCATIONS[0]);

  const handleCheckAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!streetQuery.trim()) return;

    const queryLower = streetQuery.toLowerCase();
    const found = LOCATIONS.find((loc) =>
      loc.street.toLowerCase().includes(queryLower) ||
      loc.name.toLowerCase().includes(queryLower)
    ) || LOCATIONS[0];

    setMatchedBranch(found);
    setAddressChecked(true);
  };

  return (
    <div className="font-lato">
<SubpageHero
        title="Menu & Premises"
        breadcrumb="Menu"
        subtitle="Find a place that delivers to your address or explore our 6 restaurant premises in Lublin!"
      />

      <div className="py-12 bg-[#121212] relative overflow-hidden space-y-16">
<div className="absolute inset-0 z-0 bg-dostana-pattern opacity-25 filter contrast-110" />
        <div className="absolute inset-0 z-0 bg-[#121212]/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
<div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[#f26522] text-xs font-bold uppercase tracking-wider bg-[#d9531e]/20 border border-[#d9531e]/40 px-3 py-1 rounded-full">
                <MapPin className="w-4 h-4 text-[#f26522]" /> Delivery Coverage Search
              </div>
              <h2 className="font-judson font-bold text-3xl sm:text-4xl text-white">
                Find a place that delivers to your address
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm">
                Enter your street address in Lublin to locate your assigned Dostana Kebab branch.
              </p>
            </div>

            <form onSubmit={handleCheckAddress} className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    required
                    value={streetQuery}
                    onChange={(e) => setStreetQuery(e.target.value)}
                    placeholder="e.g. Lipowa, Krakowskie Przedmieście, Turystyczna..."
                    className="w-full bg-[#161616] border border-white/20 rounded-xl pl-4 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                  />
                </div>

                <button
                  type="submit"
                  className="flame-btn-gradient text-white font-bold text-xs uppercase px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 shrink-0"
                >
                  <Search className="w-4 h-4" /> Check Address
                </button>
              </div>
            </form>
{addressChecked && (
              <div className="bg-emerald-950/40 border border-emerald-500/40 p-5 rounded-2xl space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-emerald-400 font-judson font-bold text-xl">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span>Your Nearest Branch: {matchedBranch.name}</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Address: <strong className="text-white">{matchedBranch.street}, Lublin</strong> • Phone: <strong className="text-emerald-400">{matchedBranch.phone}</strong>
                </p>
                <div className="pt-2">
                  <Link
                    href={`/menu/${matchedBranch.id}`}
                    onClick={() => setCurrentLocation(matchedBranch)}
                    className="flame-btn-gradient text-white font-bold text-xs uppercase px-6 py-2.5 rounded-lg inline-flex items-center gap-2"
                  >
                    <span>See the offer</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
<div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 text-[#f26522] text-xs font-bold uppercase tracking-wider bg-[#d9531e]/20 border border-[#d9531e]/40 px-3.5 py-1 rounded-full">
                <Store className="w-4 h-4 text-[#f26522]" /> Restaurant Locations
              </div>
              <h2 className="font-judson font-bold text-3xl sm:text-5xl text-white tracking-tight">
                ALL <span className="text-[#f26522]">PREMISES</span>
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm">
                Pick your preferred Dostana Kebab branch to view its complete menu offer and place an online order!
              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS.map((loc: Location) => (
                <div
                  key={loc.id}
                  className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#f26522]/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
<div className="flex items-start justify-between gap-2 border-b border-white/10 pb-4">
                      <div>
                        <h3 className="font-judson font-bold text-2xl text-white group-hover:text-[#f26522] transition-colors leading-snug">
                          {loc.name}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#f26522] shrink-0" />
                          <span>{loc.street}, {loc.postCode} {loc.city}</span>
                        </p>
                      </div>
                      <span className="bg-[#d9531e]/20 border border-[#d9531e]/40 text-[#f26522] text-[10px] font-black uppercase px-2.5 py-1 rounded-full shrink-0">
                        LUBLIN
                      </span>
                    </div>
<div className="space-y-2 text-xs text-neutral-300">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-400 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#e5a93c]" /> Opening hours:
                        </span>
                        <span className="font-bold text-white">{loc.hours}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-neutral-400 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-emerald-400" /> Phone:
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
                    <Link
                      href={`/menu/${loc.id}`}
                      onClick={() => setCurrentLocation(loc)}
                      className="w-full flame-btn-gradient text-white font-bold text-xs uppercase py-3.5 rounded-xl flex items-center justify-center gap-2 tracking-wider"
                    >
                      <span>SEE THE OFFER</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
<div className="pt-6 border-t border-white/10">
            <MenuSection
              showPattern={false}
              onSelectItemToCustomize={(item) => setSelectedItemToCustomize(item)}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
