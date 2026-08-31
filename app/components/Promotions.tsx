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
    title: "5% rabatu na pierwsze zamówienie online",
    tagline: "PREZENT POWITALNY DLA NOWYCH KLIENTÓW",
    description: "Otrzymaj 5% rabatu na pierwsze zamówienie online za minimum 70 zł!",
    fullTerms: "Otrzymaj 5% rabatu na pierwsze zamówienie online.\n1. Wejdź w menu i dodaj swoje ulubione dania do koszyka za min. 70 zł.\n2. W formularzu zamówienia, podaj swoje dane.\n3. Otrzymasz SMS z jednorazowym kodem rabatowym na to zamówienie.",
    discountBadge: "5% RABATU",
    code: "DOSTANA5",
    borderColor: "border-[#f26522]",
    image: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_32_d4cdebe687ae8357ddbd0422f5d84230-1-6f516b90be782e231d1e1dfe082d3819.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    minOrder: "70 PLN",
    validDays: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
  },
  {
    id: "promo-2",
    title: "Zbieraj pieczątki i odbierz darmowy Rollo!",
    tagline: "KARTA LOJALNOŚCIOWA DOSTANA KEBAB",
    description: "Po każdym zamówieniu otrzymujesz pieczątkę. Zgromadź 5 pieczątek i odbierz DARMOWY mały rollo kebab!",
    fullTerms: "Po każdym zamówieniu otrzymujesz pieczątkę. Uzbieraj 5 pieczątek. Po 5 zamówieniu online otrzymasz kod rabatowy na Rollo Mały Gratis. *Gratis zostanie dodany do koszyka po wpisaniu kodu do zamówienia za min. 70 zł. **Promocja wymaga zgody marketingowej.",
    discountBadge: "DARMOWY ROLLO",
    code: "STAMP5",
    borderColor: "border-[#e5a93c]",
    image: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_31_5fb241fb6377e060e75bb960e11c4cc9-1-ac48b6f9294dd70f0360ca5743faa3e0.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    minOrder: "70 PLN",
    validDays: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
  },
  {
    id: "promo-3",
    title: "Darmowa dostawa od 150 zł",
    tagline: "SPECJALNA OFERTA DOSTAWY W LUBLINIE",
    description: "Zamów jedzenie dla rodziny, znajomych lub do biura powyżej 150 zł i skorzystaj z darmowej dostawy pod same drzwi.",
    fullTerms: "Darmowa dostawa na terenie Lublina dla wszystkich zamówień powyżej 150 zł. *Rabat na darmową dostawę nalicza się automatycznie w podsumowaniu koszyka. **Dotyczy wszystkich stref dostawy w granicach miasta Lublin.",
    discountBadge: "DARMOWA DOSTAWA",
    code: "FREEDEL150",
    borderColor: "border-emerald-500",
    image: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_30_65e0cea829fe4acd3e3ff508bd30d5f8-1-e58f399429647cbce366334758f1110e.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    minOrder: "150 PLN",
    validDays: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
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
              <Sparkles className="w-3.5 h-3.5 text-[#f26522]" /> Oferty Specjalne & Rabaty
            </div>
            <h2 className="font-judson font-bold text-2xl sm:text-4xl text-white tracking-tight">
              PROMOCJE <span className="text-[#f26522]">& ZNIŻKI</span>
            </h2>
          </div>

          <Link
            href={`/menu/${branchSlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-300 hover:text-[#f26522] transition-colors"
          >
            <span>Zobacz całe menu</span>
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
                    <Percent className="w-3.5 h-3.5" />
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
                          <span>KOD RABATOWY NALICZONY!</span>
                        </>
                      ) : (
                        <>
                          <Ticket className="w-3.5 h-3.5" />
                          <span>SKORZYSTAJ Z PROMOCJI</span>
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
                  <span>Dostawa i odbiór osobisty</span>
                </div>
                <div className="space-y-1.5 pl-1">
                  <div className="text-xs font-bold text-neutral-400 flex items-center gap-1.5 mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#e5a93c]" /> Dostępne dni:
                  </div>
                  
                  <div className="space-y-1 pl-5 text-xs text-neutral-200">
                    {selectedPromoForModal.validDays.map((day) => (
                      <div key={day} className="flex items-center gap-2">
                        <span className="w-24 font-medium text-neutral-300">{day}:</span>
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
                <span>ZASTOSUJ KOD ({selectedPromoForModal.code}) & ZAMÓW TERAZ</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
