"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  PhoneCall,
  X,
  Cookie,
  Check,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";
import { LOCATIONS } from "@/app/data/restaurantData";

export default function Footer() {
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [savedCookies, setSavedCookies] = useState(false);

  return (
    <footer className="bg-[#0b0b0b] text-neutral-400 pt-16 pb-12 border-t border-white/10 font-lato relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
<div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <img
                src="https://restaumatic-production.imgix.net/uploads/restaurants/347020/logo/1733232577.png?auto=compress%2Cformat&crop=focalpoint&fit=clip&h=300&w=800"
                alt="Dostana Kebab Logo"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-lato max-w-sm">
              Zapraszamy na prawdziwie aromatyczne dania z węgla drzewnego! Każdy kebab to wyśmienite połączenie chrupiących warzyw, soczystego mięsa pieczonego na ogniu i naszych autorskich sosów.
            </p>

            <div className="pt-1">
              <a
                href="https://www.facebook.com/dostanakebab/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#171717] hover:bg-[#d9531e] text-white rounded-xl border border-white/10 hover:border-transparent transition-all duration-300 text-xs font-bold font-lato shadow-md group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Śledź na Facebooku</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-judson font-bold text-white text-lg tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#f26522] rounded-full inline-block" />
              Nawigacja
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { label: "Start", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "Opinie", href: "/opinions" },
                { label: "Rezerwacje", href: "/reservations" },
                { label: "Dostawa", href: "/delivery" },
                { label: "Galeria", href: "/gallery" },
                { label: "Kontakt", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#f26522] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-judson font-bold text-white text-lg tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f26522]" />
              Oddziały w Lublinie
            </h4>
            <ul className="space-y-2 text-xs font-lato">
              {LOCATIONS.map((loc) => (
                <li key={loc.id} className="flex justify-between items-center py-1">
                  <span className="text-neutral-400 font-medium">{loc.street}</span>
                  <a
                    href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                    className="text-[#f26522] font-bold hover:underline flex items-center shrink-0 ml-2"
                  >
                    <span>{loc.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 space-y-4 font-lato">
            <h4 className="font-judson font-bold text-white text-lg tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#e5a93c]" />
              Godziny otwarcia
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between pb-1.5 border-b border-white/5">
                <span className="text-neutral-400">Pon - Czw:</span>
                <span className="text-white font-medium">11:00 - 21:30</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-white/5">
                <span className="text-neutral-400">Pt - Sob:</span>
                <span className="text-[#f26522] font-bold">10:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Niedziela:</span>
                <span className="text-white font-medium">11:00 - 21:30</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/menu"
                className="w-full flame-btn-gradient text-white font-bold text-xs uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all transform hover:scale-[1.02]"
              >
                <span>Zamów online</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-neutral-400 font-lato text-center py-3 px-4 rounded-2xl bg-[#141414]/70 border border-white/5">
            <Link href="/terms" className="hover:text-white transition-colors">
              Regulamin
            </Link>
            <span className="text-neutral-700">|</span>
            
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Polityka Prywatności
            </Link>
            <span className="text-neutral-700">|</span>
            
            <button
              onClick={() => setCookieModalOpen(true)}
              className="hover:text-[#f26522] transition-colors cursor-pointer"
            >
              Ustawienia Cookies
            </button>
            <span className="text-neutral-700">|</span>
            
            <Link href="/marketing-consents" className="hover:text-white transition-colors">
              Zgody Marketingowe
            </Link>
            <span className="text-neutral-700">|</span>
            
            <Link href="/accessibility-statement" className="hover:text-white transition-colors">
              Deklaracja Dostępności
            </Link>
            <span className="text-neutral-700">|</span>
            
            <Link href="/admin/login" className="text-[#f26522] font-bold hover:underline">
              Panel Administratora
            </Link>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 font-lato">
          <p>© {new Date().getFullYear()} Dostana Kebab Lublin. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>

      {cookieModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#141414] border border-white/15 rounded-3xl overflow-hidden text-white shadow-2xl p-6 sm:p-8 space-y-6 font-lato">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5 font-judson font-bold text-2xl text-white">
                <Cookie className="w-6 h-6 text-[#f26522]" />
                <span>Preferencje Cookies</span>
              </div>
              <button
                onClick={() => setCookieModalOpen(false)}
                className="text-neutral-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Używamy plików cookie, aby zapewnić szybkie składanie zamówień online, zapamiętać wybrany lokal w Lublinie i poprawić wydajność witryny. Możesz dostosować swoje preferencje poniżej.
            </p>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1c1c1c] border border-white/10">
                <div>
                  <span className="font-bold text-white text-sm block">Niezbędne pliki cookie</span>
                  <span className="text-[11px] text-neutral-400">Wymagane do zamawiania online i koszyka zakupowego</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">Zawsze aktywne</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1c1c1c] border border-white/10">
                <div>
                  <span className="font-bold text-white text-sm block">Statystyka i wydajność</span>
                  <span className="text-[11px] text-neutral-400">Pomaga nam optymalizować szybkość dostawy i wydajność strony</span>
                </div>
                <input type="checkbox" defaultChecked className="accent-[#f26522] w-4 h-4 cursor-pointer" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1c1c1c] border border-white/10">
                <div>
                  <span className="font-bold text-white text-sm block">Marketing i program lojalnościowy</span>
                  <span className="text-[11px] text-neutral-400">Umożliwia zbieranie pieczątek na darmowy Rollo Kebab</span>
                </div>
                <input type="checkbox" defaultChecked className="accent-[#f26522] w-4 h-4 cursor-pointer" />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSavedCookies(true);
                  setTimeout(() => {
                    setSavedCookies(false);
                    setCookieModalOpen(false);
                  }, 800);
                }}
                className="w-full flame-btn-gradient text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl"
              >
                {savedCookies ? (
                  <>
                    <Check className="w-4 h-4" /> Preferencje zapisane!
                  </>
                ) : (
                  "Zapisz preferencje i zaakceptuj"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
