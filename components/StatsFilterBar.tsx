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

  selectedCompareMode = "Compare with last year",
  onCompareModeChange,
  compareOptions = ["Compare with last year", "Compare with previous period", "Do not compare"],

  showFilters = false,
  onToggleFilters,
  selectedVenue = "All venues",
  onVenueChange,
  selectedSalesChannel = "All channels",
  onSalesChannelChange,

  onExportCSV,
}: StatsFilterBarProps) {
  const venueOptions = ["All venues", ...LOCATIONS.map((loc) => loc.name)];
  const channelOptions = [
    "All channels",
    "Website",
    "Voice order",
    "Telephone",
    "Local",
    "QR Waiter",
    "Appetite",
    "Android mobile applications",
    "iOS mobile applications",
    "Portal 1",
    "Uber Eats",
    "Glovo",
    "Wolt",
    "Bolt Food",
    "Own",
    "POS"
  ];

  return (
    <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 shadow-xl mb-6 space-y-4 relative z-30">
      {/* Top Filter Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Date Presets and Pickers */}
        <DatePresetFilter
          activePreset={activePreset}
          onPresetChange={onPresetChange}
          startDate={startDate}
          onStartDateChange={onStartDateChange}
          endDate={endDate}
          onEndDateChange={onEndDateChange}
        />

        {/* Right Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {onCompareModeChange && (
            <CustomDropdown
              options={compareOptions}
              selectedOption={selectedCompareMode}
              onSelect={onCompareModeChange}
              className="w-48"
            />
          )}

          {onToggleFilters && (
            <button
              type="button"
              onClick={onToggleFilters}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                showFilters
                  ? "border-[#f26522] bg-[#f26522]/10 text-[#f26522]"
                  : "border-white/10 text-neutral-300 hover:border-white/20 bg-[#0e0e0e]"
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          )}

          {onExportCSV && (
            <button
              type="button"
              onClick={onExportCSV}
              className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white hover:border-[#f26522]/50 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#f26522]" />
              <span>Export CSV</span>
            </button>
          )}
        </div>
      </div>

      {/* Expandable Extra Filters Panel */}
      {showFilters && (
        <div className="pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fadeIn">
          {onVenueChange && (
            <CustomDropdown
              label="Venue / Location"
              options={venueOptions}
              selectedOption={selectedVenue}
              onSelect={onVenueChange}
            />
          )}

          {onSalesChannelChange && (
            <CustomDropdown
              label="Sales Channel"
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
