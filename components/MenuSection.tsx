"use client";

import React, { useState } from "react";
import { CATEGORIES, MENU_ITEMS, MenuItem } from "@/app/data/restaurantData";
import { Search, Flame, Plus } from "lucide-react";

interface MenuSectionProps {
  onSelectItemToCustomize: (item: MenuItem) => void;
  showPattern?: boolean;
}

export default function MenuSection({
  onSelectItemToCustomize,
  showPattern = false,
}: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-16 relative overflow-hidden bg-[#121212]">
{showPattern && (
        <>
          <div className="absolute inset-0 z-0 bg-dostana-pattern opacity-25 filter contrast-110" />
          <div className="absolute inset-0 z-0 bg-[#121212]/85" />
        </>
      )}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 glow-box-orange">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#f26522] text-xs font-bold uppercase tracking-wider font-lato bg-[#d9531e]/20 border border-[#d9531e]/40 px-3 py-1 rounded-full">
              <Flame className="w-4 h-4 text-[#f26522] fill-[#f26522]" /> Przysmaki z węgla drzewnego
            </div>
            <h2 className="font-judson font-bold text-3xl sm:text-5xl text-white tracking-tight drop-shadow-md">
              POZNAJ NASZE <span className="flame-gradient-text">MENU</span>
            </h2>
            <p className="font-lato text-neutral-200 text-xs sm:text-sm max-w-xl leading-relaxed drop-shadow">
              Dostosuj swoje ulubione mięso, rozmiar porcji, sosy czosnkowe lub harissa oraz dodatki!
            </p>
          </div>
<div className="relative w-full md:w-80 font-lato">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj Rollo, Box, Falafel..."
              className="w-full bg-neutral-950/90 border border-white/20 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-[#f26522] transition-colors shadow-lg backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Wyczyść
              </button>
            )}
          </div>
        </div>
<div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar font-lato">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[#d9531e] text-white shadow-md font-black"
                    : "bg-[#1c1c1c]/90 hover:bg-[#242424] text-neutral-300 border border-white/10 hover:text-white backdrop-blur-md"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
{filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#1c1c1c]/90 rounded-3xl border border-white/10 font-lato backdrop-blur-md">
            <p className="text-neutral-400 text-base font-medium">
              Nie znaleziono dań pasujących do &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 text-xs font-bold text-[#f26522] underline"
            >
              Resetuj filtry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-lato">
            {filteredItems.map((item: MenuItem) => (
              <div
                key={item.id}
                className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#f26522]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
<div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                    
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-[#d9531e] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                        {item.badge}
                      </span>
                    )}

                    {item.isVegetarian && (
                      <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                        🌱 WEGETARIAŃSKIE
                      </span>
                    )}
                  </div>
<div className="p-5 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-judson font-bold text-xl text-white group-hover:text-[#f26522] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-lato font-extrabold text-lg text-[#e5a93c] shrink-0">
                        {item.price.toFixed(2)} PLN
                      </span>
                    </div>

                    <p className="text-neutral-300 text-xs leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
<div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectItemToCustomize(item)}
                    className="w-full bg-[#242424] hover:bg-[#d9531e] text-neutral-200 hover:text-white border border-white/10 font-bold text-xs py-2.5 rounded flex items-center justify-center gap-2 transition-all uppercase tracking-wide"
                  >
                    <Plus className="w-4 h-4 text-[#f26522] group-hover:text-white" />
                    <span>Dostosuj i dodaj</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
