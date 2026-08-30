"use client";

import React, { useState } from "react";
import { Truck, MapPin, Search, CheckCircle2, Phone, Clock, CreditCard, DollarSign, ShieldAlert, ArrowRight, Home, Building } from "lucide-react";
import { LOCATIONS } from "../data/restaurantData";
import { useCart } from "../context/CartContext";

export default function DeliverySection() {
  const { setIsCartOpen } = useCart();
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("Lublin");
  const [checked, setChecked] = useState(false);
  const [matchedBranch, setMatchedBranch] = useState(LOCATIONS[0]);

  const handleCheckDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!street.trim()) return;

    const queryLower = street.toLowerCase();
    const found = LOCATIONS.find((loc) =>
      loc.street.toLowerCase().includes(queryLower) ||
      loc.name.toLowerCase().includes(queryLower)
    ) || LOCATIONS[0];

    setMatchedBranch(found);
    setChecked(true);
  };

  return (
    <section id="delivery" className="py-16 bg-[#121212] relative overflow-hidden font-lato">
<div className="absolute inset-0 z-0 bg-dostana-pattern opacity-25 filter contrast-110" />
      <div className="absolute inset-0 z-0 bg-[#121212]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
<div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[#f26522] text-xs font-bold uppercase tracking-wider bg-[#d9531e]/20 border border-[#d9531e]/40 px-3.5 py-1 rounded-full">
            <Truck className="w-4 h-4 text-[#f26522]" /> Express Food Delivery
          </div>
          <h2 className="font-judson font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Check Where We Deliver!
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Enter your street, house number, and city to verify express delivery availability and local branch hotline details.
          </p>
        </div>
<div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6 glow-box-orange">
          <form onSubmit={handleCheckDelivery} className="space-y-6">
            <h3 className="font-judson font-bold text-xl text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#f26522]" /> Check Delivery Address Availability:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
<div className="sm:col-span-6">
                <label className="block text-xs font-bold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#f26522]" /> Street Name *
                </label>
                <input
                  type="text"
                  required
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="e.g. Lipowa, Krakowskie Przedmieście"
                  className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                />
              </div>
<div className="sm:col-span-3">
                <label className="block text-xs font-bold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-[#e5a93c]" /> House / Apt No *
                </label>
                <input
                  type="text"
                  required
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                  placeholder="e.g. 11/8 or 8"
                  className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                />
              </div>
<div className="sm:col-span-3">
                <label className="block text-xs font-bold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-emerald-400" /> City *
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Lublin"
                  className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flame-btn-gradient text-white font-black text-xs sm:text-sm uppercase py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl"
            >
              <Search className="w-4.5 h-4.5" /> CHECK ADDRESS COVERAGE NOW
            </button>
          </form>
{checked && (
            <div className="bg-emerald-950/40 border border-emerald-500/40 p-6 rounded-2xl space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 text-emerald-400 font-judson font-bold text-2xl">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" />
                <span>We Deliver To {street} {houseNumber}, {city}!</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs text-neutral-200 border-t border-emerald-500/20">
                <div className="space-y-2">
                  <div className="font-extrabold text-white text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#f26522]" /> Fulfilling Branch:
                  </div>
                  <div className="text-neutral-300 font-medium">{matchedBranch.name}</div>
                  <div className="text-neutral-400">{matchedBranch.street}, {city}</div>
                  <div className="text-emerald-400 font-bold pt-1">
                    Direct Line: <a href={`tel:${matchedBranch.phone.replace(/\s+/g, "")}`} className="hover:underline">{matchedBranch.phone}</a>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-extrabold text-white text-sm flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#e5a93c]" /> Delivery Operating Hours:
                  </div>
                  <div>Today: <strong className="text-white">{matchedBranch.hours}</strong></div>
                  <div>Estimated Arrival: <strong className="text-emerald-400">~30 minutes</strong></div>
                  <div>Free Delivery Threshold: <strong className="text-[#e5a93c]">Orders over 150 PLN</strong></div>
                </div>
              </div>

              <div className="pt-2 text-center sm:text-left">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="flame-btn-gradient text-white font-bold text-xs uppercase px-6 py-2.5 rounded-lg inline-flex items-center gap-2"
                >
                  <span>Order Online Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 hover:border-[#f26522]/50 transition-colors">
            <div className="w-10 h-10 bg-[#d9531e]/20 border border-[#d9531e]/40 rounded-xl flex items-center justify-center text-[#f26522]">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-judson font-bold text-xl text-white">Delivery Charges</h3>
            <ul className="text-xs text-neutral-300 space-y-1.5">
              <li>• Free Delivery: <strong className="text-emerald-400">Orders over 150 PLN</strong></li>
              <li>• Standard Local Delivery: <strong className="text-white">Calculated by zone</strong></li>
              <li>• Minimum Order Value: <strong className="text-white">Applicable per zone</strong></li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 hover:border-[#f26522]/50 transition-colors">
            <div className="w-10 h-10 bg-[#e5a93c]/20 border border-[#e5a93c]/40 rounded-xl flex items-center justify-center text-[#e5a93c]">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-judson font-bold text-xl text-white">Driver Cash Limit</h3>
            <ul className="text-xs text-neutral-300 space-y-1.5">
              <li>• Driver carries max change: <strong className="text-[#e5a93c]">20 PLN</strong></li>
              <li>• Please prepare exact change for cash orders if possible</li>
              <li>• High denomination bills accepted upon prior request</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 hover:border-[#f26522]/50 transition-colors">
            <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center justify-center text-emerald-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="font-judson font-bold text-xl text-white">Accepted Payments</h3>
            <ul className="text-xs text-neutral-300 space-y-1.5">
              <li>• <strong className="text-white">Cash on Delivery</strong></li>
              <li>• <strong className="text-white">Online BLIK & Instant Transfer</strong></li>
              <li>• <strong className="text-white">Card Payment Terminal at Doorstep</strong></li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 hover:border-[#f26522]/50 transition-colors">
            <div className="w-10 h-10 bg-red-500/20 border border-red-500/40 rounded-xl flex items-center justify-center text-red-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-judson font-bold text-xl text-white">Hotline Assistance</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              If your address is outside standard automatic geolocation, call your nearest branch directly for manual order dispatch.
            </p>
          </div>

        </div>
<div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="font-judson font-bold text-2xl text-white">
                Lublin Branch Delivery Hotlines
              </h3>
              <p className="text-xs text-neutral-400">
                Contact your local branch hotline for custom orders or delivery inquiries
              </p>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="flame-btn-gradient text-white font-bold text-xs uppercase px-6 py-2.5 rounded-lg shrink-0"
            >
              Order Online
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-[#161616] p-4 rounded-xl border border-white/10 space-y-2 hover:border-[#f26522]/40 transition-colors"
              >
                <div className="font-bold text-white text-sm flex items-center justify-between">
                  <span>{loc.name}</span>
                  <span className="text-[10px] text-[#f26522] font-black uppercase">LUBLIN</span>
                </div>
                <div className="text-neutral-400">{loc.street}, {loc.postCode}</div>
                <div className="flex items-center justify-between pt-1 border-t border-neutral-800">
                  <span className="text-neutral-400">Hours: {loc.hours}</span>
                  <a
                    href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                    className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{loc.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
