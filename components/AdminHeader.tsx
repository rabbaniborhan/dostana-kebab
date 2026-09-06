"use client";

import React from "react";
import { Bell, Search, RefreshCw, Clock, Globe } from "lucide-react";

interface AdminHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTab: string;
  onRefresh: () => void;
}

export default function AdminHeader({
  searchQuery,
  setSearchQuery,
  activeTab,
  onRefresh,
}: AdminHeaderProps) {
  const getTabTitle = (tab: string) => {
    switch (tab) {
      case "overview":
        return "Przegląd Ogólny";
      case "orders":
        return "Zarządzanie Zamówieniami";
      case "reservations":
        return "Rezerwacje Stolików";
      case "customers":
        return "Baza Klientów & CRM";
      case "statistics":
        return "Statystyki & Raporty Finansowe";
      case "menu":
        return "Menu & Produkty";
      case "locations":
        return "Godziny & Lokale";
      default:
        return "Panel Administratora";
    }
  };

  return (
    <header className="bg-[#141414]/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Title & Live Status */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
        <div>
          <h1 className="font-judson font-bold text-xl sm:text-2xl text-white tracking-wide">
            {getTabTitle(activeTab)}
          </h1>
          <p className="text-xs text-neutral-400 flex items-center gap-2 mt-0.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Na żywo • Ostatnia aktualizacja: przed chwilą</span>
          </p>
        </div>
      </div>

      {/* Actions & Search */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        {/* Search bar */}
        <div className="relative flex-1 sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Szukaj zamówień, potraw..."
            className="w-full bg-[#0e0e0e] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522] transition-colors"
          />
        </div>

        {/* Refresh button */}
        <button
          onClick={onRefresh}
          className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-neutral-300 hover:text-white transition-all active:scale-95"
          title="Odśwież dane"
        >
          <RefreshCw className="w-4 h-4" />
        </button>

        {/* Notification indicator */}
        <button
          className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-neutral-300 hover:text-white relative transition-all active:scale-95"
          title="Powiadomienia"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f26522] rounded-full" />
        </button>
      </div>
    </header>
  );
}
