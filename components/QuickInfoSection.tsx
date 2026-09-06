"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Utensils, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function QuickInfoSection() {
  const { currentLocation } = useCart();

  const branchSlug = currentLocation?.id || "dostana-kebab-lipowa";

  return (
    <section className="relative py-14 bg-[#121212] border-y border-white/10 overflow-hidden font-lato">
      <div className="absolute inset-0 z-0 bg-dostana-pattern opacity-25 filter contrast-110" />
      <div className="absolute inset-0 z-0 bg-[#121212]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#f26522]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#d9531e]/20 border border-[#d9531e]/50 flex items-center justify-center text-[#f26522] group-hover:bg-[#d9531e] group-hover:text-white transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-judson font-bold text-2xl text-white">Gdzie jesteśmy?</h3>
                <p className="text-xs font-bold text-[#f26522]">{currentLocation.name}</p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {currentLocation.street}, {currentLocation.postCode} {currentLocation.city}
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-400 hover:text-white transition-colors pt-2 border-t border-white/10"
            >
              <span>Zobacz wszystkie 6 lokalizacji</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#f26522]" />
            </Link>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#f26522]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#d9531e]/20 border border-[#d9531e]/50 flex items-center justify-center text-[#f26522] group-hover:bg-[#d9531e] group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-judson font-bold text-2xl text-white">Zadzwoń do nas</h3>
                <a
                  href={`tel:${currentLocation.phone.replace(/\s+/g, "")}`}
                  className="block font-judson font-extrabold text-2xl text-emerald-400 hover:underline tracking-tight"
                >
                  {currentLocation.phone}
                </a>
                <p className="text-xs text-neutral-300">
                  Bezpośrednia infolinia lokalna do zamawiania na wynos i z dostawą.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold pt-2 border-t border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Infolinia otwarta na zamówienia</span>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#f26522]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#d9531e]/20 border border-[#d9531e]/50 flex items-center justify-center text-[#f26522] group-hover:bg-[#d9531e] group-hover:text-white transition-colors">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-judson font-bold text-2xl text-white">Godziny otwarcia</h3>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-neutral-300">Dzisiaj:</span>
                  <span className="font-bold text-white">{currentLocation.hours}</span>
                </div>
                <p className="text-[11px] text-neutral-400 pt-1">
                  Pt - Sob: 10:00 - 00:00
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold pt-2 border-t border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Teraz otwarte</span>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-[#f26522]/40 bg-[#1c1c1c]/90 flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#d9531e] text-white flex items-center justify-center">
                <Utensils className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-judson font-bold text-2xl text-white">Zamów online</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Szybkie zamawianie bez logowania. Zapłać gotówką, kartą lub BLIKiem.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/menu/${branchSlug}`}
                className="w-full flame-btn-gradient text-white font-bold text-xs uppercase py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <span>Zobacz ofertę</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
