"use client";

import React from "react";
import { Filter, ExternalLink } from "lucide-react";
import DatePresetFilter from "./DatePresetFilter";
import CustomDropdown from "./CustomDropdown";
import { LOCATIONS } from "@/app/data/restaurantData";

interface StatsFilterBarProps {
  activePreset: string;
  onPresetChange: (preset: string) => void;
  startDate: string;
  onStartDateChange: (date: string) => void;
  endDate: string;
  onEndDateChange: (date: string) => void;

  selectedCompareMode?: string;
  onCompareModeChange?: (mode: string) => void;
  compareOptions?: string[];

  showFilters?: boolean;
  onToggleFilters?: () => void;
  selectedVenue?: string;
  onVenueChange?: (venue: string) => void;
  selectedSalesChannel?: string;
  onSalesChannelChange?: (channel: string) => void;

  onOpenColumnSettings?: () => void;
  onExportCSV?: () => void;
}

export default function StatsFilterBar({
  activePreset,
  onPresetChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,

  selectedCompareMode = "Porównaj z ubiegłym rokiem",
  onCompareModeChange,
  compareOptions = ["Porównaj z ubiegłym rokiem", "Porównaj z poprzednim okresem", "Nie porównuj"],

  showFilters = false,
  onToggleFilters,
  selectedVenue = "Wszystkie lokale",
  onVenueChange,
  selectedSalesChannel = "Wszystkie kanały",
  onSalesChannelChange,

  onExportCSV,
}: StatsFilterBarProps) {
  const venueOptions = ["Wszystkie lokale", ...LOCATIONS.map((loc) => loc.name)];
  const channelOptions = [
    "Wszystkie kanały",
    "Strona WWW",
    "Zamówienie głosowe",
    "Telefon",
    "Na miejscu",
    "QR Kelner",
    "Aplikacja",
    "Aplikacje Android",
    "Aplikacje iOS",
    "Portal 1",
    "Uber Eats",
    "Glovo",
    "Wolt",
    "Bolt Food",
    "Własne",
    "POS"
  ];

  return (
    <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 shadow-xl mb-6 space-y-4 relative z-30">
      {/* Top Filter Control Bar */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        {/* Date Presets & Custom Pickers Side-by-Side */}
        <DatePresetFilter
          activePreset={activePreset}
          onPresetChange={onPresetChange}
          startDate={startDate}
          onStartDateChange={onStartDateChange}
          endDate={endDate}
          onEndDateChange={onEndDateChange}
        />

        {/* Right Actions (Compare, Filter, Export) Side-by-Side */}
        <div className="flex flex-wrap items-center gap-2">
          {onCompareModeChange && (
            <CustomDropdown
              options={compareOptions}
              selectedOption={selectedCompareMode}
              onSelect={onCompareModeChange}
              className="w-48 sm:w-56"
            />
          )}

          {onToggleFilters && (
            <button
              type="button"
              onClick={onToggleFilters}
              className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                showFilters
                  ? "border-[#f26522] bg-[#f26522]/10 text-[#f26522]"
                  : "border-white/10 text-neutral-300 hover:border-white/20 bg-[#0e0e0e]"
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filtry</span>
            </button>
          )}

          {onExportCSV && (
            <button
              type="button"
              onClick={onExportCSV}
              className="px-3.5 py-2 rounded-xl bg-[#0e0e0e] border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white hover:border-[#f26522]/50 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#f26522]" />
              <span>Eksportuj CSV</span>
            </button>
          )}
        </div>
      </div>

      {/* Expandable Extra Filters Panel */}
      {showFilters && (
        <div className="pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fadeIn">
          {onVenueChange && (
            <CustomDropdown
              label="Lokal"
              options={venueOptions}
              selectedOption={selectedVenue}
              onSelect={onVenueChange}
            />
          )}

          {onSalesChannelChange && (
            <CustomDropdown
              label="Kanał sprzedaży"
              options={channelOptions}
              selectedOption={selectedSalesChannel}
              onSelect={onSalesChannelChange}
            />
          )}
        </div>
      )}
    </div>
  );
}
