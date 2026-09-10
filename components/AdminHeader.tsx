"use client";

import React, { useState } from "react";
import { Bell, RefreshCw, ChevronDown, MapPin, Check } from "lucide-react";

export const ALL_VENUES_OPTION = "Wszystkie lokale";

export const VENUE_LIST = [
  ALL_VENUES_OPTION,
  "Dostana Kebab Wróbla",
  "Dostana Kebab Lipowa",
  "Dostana Kebab Krakowskie Przedmieście",
  "Dostana Kebab Sympatyczna",
  "Dostana Kebab Nadbystrzycka",
  "Dostana Kebab Turystyczna",
];

interface AdminHeaderProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  selectedVenue?: string;
  setSelectedVenue?: (venue: string) => void;
  activeTab: string;
  onRefresh?: () => void;
}

export default function AdminHeader({
  searchQuery,
  setSearchQuery,
  selectedVenue,
  setSelectedVenue,
  activeTab,
  onRefresh,
}: AdminHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [localVenue, setLocalVenue] = useState(ALL_VENUES_OPTION);

  const currentVenue = selectedVenue !== undefined ? selectedVenue : localVenue;

  const handleSelectVenue = (venue: string) => {
    setLocalVenue(venue);
    if (setSelectedVenue) {
      setSelectedVenue(venue);
    }
    if (setSearchQuery) {
      setSearchQuery(venue === ALL_VENUES_OPTION ? "" : venue);
    }
    setIsOpen(false);
  };

  const filteredVenues = VENUE_LIST.filter((v) =>
    v.toLowerCase().includes(filterText.toLowerCase())
  );

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
        return "Menu";
      case "locations":
        return "Lokale";
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

      {/* Actions & Venue Selector Dropdown */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        {/* Venue Dropdown Button */}
        <div
          className="relative flex-1 sm:w-72"
          tabIndex={0}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setIsOpen(false);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-[#0e0e0e] border border-white/15 hover:border-white/25 text-xs text-white rounded-xl px-3.5 py-2.5 flex items-center justify-between focus:outline-none focus:border-[#f26522] font-medium shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 truncate">
              <MapPin className="w-4 h-4 text-[#f26522] shrink-0" />
              <span className="truncate font-semibold">{currentVenue || ALL_VENUES_OPTION}</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Options Box */}
          {isOpen && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-[#1a1a1a] border border-white/15 rounded-2xl shadow-2xl z-50 p-2 space-y-2 animate-fadeIn max-h-80 overflow-y-auto no-scrollbar">
              {/* Filter search box inside dropdown */}
              <div className="relative">
                <input
                  type="text"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  placeholder="Filtruj lokale..."
                  className="w-full bg-[#0e0e0e] border border-white/10 text-xs text-white rounded-xl px-3 py-2 focus:outline-none focus:border-[#f26522] placeholder-neutral-500"
                  autoFocus
                />
              </div>

              {/* Venues List */}
              <div className="space-y-1">
                {filteredVenues.map((venue) => {
                  const isSelected = venue === currentVenue;
                  return (
                    <button
                      key={venue}
                      type="button"
                      onClick={() => handleSelectVenue(venue)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? "bg-[#f26522] text-white font-bold shadow-md shadow-[#f26522]/30"
                          : "text-neutral-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="truncate">{venue}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Refresh button */}
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-neutral-300 hover:text-white transition-all active:scale-95"
            title="Odśwież dane"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}

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
