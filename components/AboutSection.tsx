"use client";

import Link from "next/link";
import { ArrowRight, Flame, Sparkles, Star, Clock, Award } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function AboutSection() {
  const { currentLocation } = useCart();
  const branchSlug = currentLocation?.id || "dostana-kebab-lipowa";

  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden border-t border-white/10 font-lato">
<div className="absolute inset-0 z-0 bg-dostana-pattern opacity-20 filter contrast-125" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#121212] via-[#121212]/95 to-[#121212]" />
<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#d9531e]/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-[#f26522]/10 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
<div className="lg:col-span-6 relative flex justify-center items-center py-6 sm:py-10">
<div className="relative w-full max-w-md h-80 sm:h-[420px] rounded-3xl overflow-hidden border-2 border-white/15 group bg-[#181818] z-10 shadow-2xl shadow-black/80">
              <img
                src="https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/b75529f5-94e3-4439-b736-d6a4e724895c.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&w=600"
                alt="Dostana Charcoal Rollo Kebab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
<div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold text-[#f26522] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Flame className="w-3.5 h-3.5 fill-[#f26522]" />
                <span>Z rożna opalanego węglem</span>
              </div>
            </div>
<div className="absolute -top-4 -right-2 sm:-right-6 z-20 w-44 sm:w-52 h-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/20 bg-[#161616] group hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/90">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
                alt="Farm Fresh Veggies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-white/10 flex items-center justify-between text-white shadow-md">
                <span className="text-[10px] font-extrabold uppercase tracking-wider">Świeże surówki</span>
                <span className="text-emerald-400 text-[10px]">🥗</span>
              </div>
            </div>
<div className="absolute -bottom-4 -left-2 sm:-left-6 z-20 w-48 sm:w-56 h-32 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/20 bg-[#161616] group hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/90">
              <img
                src="https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/47d722b2-8df1-40db-b7c0-bc5c3f22f812.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800"
                alt="Loaded Kebab Box"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-white/10 text-white shadow-md">
                <span className="text-[9px] text-[#f26522] font-black uppercase tracking-wider block">Ulubieniec klientów</span>
                <span className="text-xs font-bold block">Wypasiony Box z frytkami</span>
              </div>
            </div>
<div className="absolute top-10 -left-4 z-30 bg-[#1c1c1c] border border-white/20 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-xl">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <div>
                <span className="font-bold text-white text-xs block">Ocena 4.9</span>
                <span className="text-[9px] text-neutral-400 block">Ponad 2,000 opinii</span>
              </div>
            </div>

          </div>
<div className="lg:col-span-6 space-y-7 text-left relative z-10">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[#f26522] text-xs font-bold uppercase tracking-wider bg-[#d9531e]/15 border border-[#d9531e]/30 px-3.5 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#f26522]" /> Nasza historia i dbałość o jakość
              </div>

              <h2 className="font-judson font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                Dostana Kebab <span className="text-[#f26522]">Lublin</span>
              </h2>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-lato">
              Zapraszamy na prawdziwie aromatyczne dania, gdzie każdy kebab to połączenie świeżych warzyw 🥒, soczystego mięsa pieczonego na ogniu 🔥 i naszych oryginalnych sosów. W &quot;Dostana Kebab&quot; stawiamy na jakość i smak, który zadowoli każdego fana dobrego kebaba! 😋
            </p>

            <p className="font-judson font-bold text-white text-lg sm:text-xl text-[#f26522]">
              Wpadnij, skosztuj i zakochaj się w naszych wyjątkowych smakach!
            </p>
<div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-3 text-center space-y-1 hover:border-[#f26522]/50 transition-colors shadow-lg">
                <Flame className="w-5 h-5 text-[#f26522] mx-auto" />
                <span className="text-[11px] font-bold text-white block">Z rożna</span>
                <span className="text-[9px] text-neutral-400 block">100% Węgiel</span>
              </div>

              <div className="bg-[#181818] border border-white/10 rounded-2xl p-3 text-center space-y-1 hover:border-[#e5a93c]/50 transition-colors shadow-lg">
                <Award className="w-5 h-5 text-[#e5a93c] mx-auto" />
                <span className="text-[11px] font-bold text-white block">Świeżość</span>
                <span className="text-[9px] text-neutral-400 block">Codzienne surówki</span>
              </div>

              <div className="bg-[#181818] border border-white/10 rounded-2xl p-3 text-center space-y-1 hover:border-emerald-500/50 transition-colors shadow-lg">
                <Clock className="w-5 h-5 text-emerald-400 mx-auto" />
                <span className="text-[11px] font-bold text-white block">Dostawa</span>
                <span className="text-[9px] text-neutral-400 block">Szybko i na gorąco</span>
              </div>
            </div>
<div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/menu/${branchSlug}`}
                className="flame-btn-gradient text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl inline-flex items-center gap-2.5 shadow-xl transition-all transform hover:scale-105 active:scale-95"
              >
                <span>Zobacz pełne menu</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/contact"
                className="bg-[#1c1c1c] border border-white/15 hover:border-white/40 text-neutral-200 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-md"
              >
                <span>Znajdź najbliższy lokal</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
