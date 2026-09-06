"use client";

import React from "react";
import CustomDatePicker from "./CustomDatePicker";

interface DatePresetFilterProps {
  activePreset: string;
  onPresetChange: (preset: string) => void;
  startDate: string;
  onStartDateChange: (date: string) => void;
  endDate: string;
  onEndDateChange: (date: string) => void;
  presets?: string[];
  showCustomDates?: boolean;
}

const DEFAULT_PRESETS = [
  "Today",
  "Yesterday",
  "this week",
  "last week",
  "this month",
  "previous month",
  "own compartment",
];

export default function DatePresetFilter({
  activePreset,
  onPresetChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  presets = DEFAULT_PRESETS,
  showCustomDates = true,
}: DatePresetFilterProps) {
  const handlePresetSelect = (preset: string) => {
    onPresetChange(preset);
    const today = new Date();

    const formatDateStr = (d: Date) => {
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const yyyy = d.getFullYear();
      return `${mm}/${dd}/${yyyy}`;
    };

    if (preset === "Today") {
      const formatted = formatDateStr(today);
      onStartDateChange(formatted);
      onEndDateChange(formatted);
    } else if (preset === "Yesterday") {
      const yest = new Date(today);
      yest.setDate(yest.getDate() - 1);
      const formatted = formatDateStr(yest);
      onStartDateChange(formatted);
      onEndDateChange(formatted);
    } else if (preset === "this week") {
      const day = today.getDay();
      const diffToMon = today.getDate() - day + (day === 0 ? -6 : 1);
      const mon = new Date(today.setDate(diffToMon));
      onStartDateChange(formatDateStr(mon));
      onEndDateChange(formatDateStr(new Date()));
    } else if (preset === "last week") {
      const mon = new Date();
      const day = mon.getDay();
      const diffToMon = mon.getDate() - day + (day === 0 ? -6 : 1) - 7;
      mon.setDate(diffToMon);
      const sun = new Date(mon);
      sun.setDate(sun.getDate() + 6);
      onStartDateChange(formatDateStr(mon));
      onEndDateChange(formatDateStr(sun));
    } else if (preset === "this month") {
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      onStartDateChange(formatDateStr(start));
      onEndDateChange(formatDateStr(new Date()));
    } else if (preset === "previous month") {
      const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const end = new Date(today.getFullYear(), today.getMonth(), 0);
      onStartDateChange(formatDateStr(start));
      onEndDateChange(formatDateStr(end));
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex flex-wrap items-center bg-[#0e0e0e] p-1 rounded-xl border border-white/10 gap-1">
        {presets.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => handlePresetSelect(preset)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activePreset.toLowerCase() === preset.toLowerCase()
                ? "bg-[#f26522] text-white shadow-md shadow-[#f26522]/20"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {preset}
          </button>
        ))}
      </div>

      {showCustomDates && (
        <div className="flex items-center gap-2 bg-[#0e0e0e] px-3 py-1 rounded-xl border border-white/10">
          <CustomDatePicker
            value={startDate}
            onChange={onStartDateChange}
            prefixText="From:"
          />
          <span className="text-neutral-500 font-bold">-</span>
          <CustomDatePicker
            value={endDate}
            onChange={onEndDateChange}
            prefixText="To:"
          />
        </div>
      )}
    </div>
  );
}
