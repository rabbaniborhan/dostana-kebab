"use client";

import React from "react";
import { REVIEWS, Review } from "../data/restaurantData";
import { Star, ShieldCheck } from "lucide-react";

interface ReviewsSectionProps {
  showPattern?: boolean;
}

export default function ReviewsSection({ showPattern = false }: ReviewsSectionProps) {
  return (
    <section id="opinions" className="py-20 bg-[#121212] relative overflow-hidden">
{showPattern && (
        <>
          <div className="absolute inset-0 z-0 bg-dostana-pattern opacity-25 filter contrast-110" />
          <div className="absolute inset-0 z-0 bg-[#121212]/85" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
<div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 font-lato">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Zweryfikowane opinie klientów
          </div>
          <h2 className="font-judson font-bold text-3xl sm:text-5xl text-white tracking-tight">
            99.2% Zadowolonych <span className="flame-gradient-text">Klientów</span>
          </h2>
          <p className="font-lato text-neutral-400 mt-2 text-sm sm:text-base">
            Sprawdź, dlaczego tysiące miłośników kebaba w Lublinie wybiera Dostana Kebab każdego dnia!
          </p>
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-lato">
          {REVIEWS.map((rev: Review) => (
            <div
              key={rev.id}
              className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 hover:border-[#f26522]/40 transition-all shadow-lg"
            >
              <div className="space-y-3">
<div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#e5a93c] fill-[#e5a93c]" />
                  ))}
                </div>

                <p className="text-neutral-200 text-xs italic leading-relaxed">
                  &quot;{rev.comment}&quot;
                </p>
              </div>
<div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{rev.author}</div>
                  <div className="text-[10px] text-neutral-400">{rev.location}</div>
                </div>
                <span className="text-[10px] text-[#f26522] font-bold">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
