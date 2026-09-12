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
  "Dzisiaj",
  "Wczoraj",
  "ten tydzień",
  "ubiegły tydzień",
  "ten miesiąc",
  "poprzedni miesiąc",
  "własny przedział",
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

    const lower = preset.toLowerCase();
    if (lower === "dzisiaj" || lower === "today") {
      const formatted = formatDateStr(today);
      onStartDateChange(formatted);
      onEndDateChange(formatted);
    } else if (lower === "wczoraj" || lower === "yesterday") {
      const yest = new Date(today);
      yest.setDate(yest.getDate() - 1);
      const formatted = formatDateStr(yest);
      onStartDateChange(formatted);
      onEndDateChange(formatted);
    } else if (lower === "ten tydzień" || lower === "this week") {
      const day = today.getDay();
      const diffToMon = today.getDate() - day + (day === 0 ? -6 : 1);
      const mon = new Date(today.setDate(diffToMon));
      onStartDateChange(formatDateStr(mon));
      onEndDateChange(formatDateStr(new Date()));
    } else if (lower === "ubiegły tydzień" || lower === "last week") {
      const mon = new Date();
      const day = mon.getDay();
      const diffToMon = mon.getDate() - day + (day === 0 ? -6 : 1) - 7;
      mon.setDate(diffToMon);
      const sun = new Date(mon);
      sun.setDate(sun.getDate() + 6);
      onStartDateChange(formatDateStr(mon));
      onEndDateChange(formatDateStr(sun));
    } else if (lower === "ten miesiąc" || lower === "this month") {
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      onStartDateChange(formatDateStr(start));
      onEndDateChange(formatDateStr(new Date()));
    } else if (lower === "poprzedni miesiąc" || lower === "previous month") {
      const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const end = new Date(today.getFullYear(), today.getMonth(), 0);
      onStartDateChange(formatDateStr(start));
      onEndDateChange(formatDateStr(end));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-3 max-w-full">
      {/* Preset Pill Buttons Row */}
      <div className="flex items-center bg-[#0e0e0e] p-1 rounded-xl border border-white/10 gap-1 overflow-x-auto no-scrollbar max-w-full">
        {presets.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => handlePresetSelect(preset)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activePreset.toLowerCase() === preset.toLowerCase()
                ? "bg-[#f26522] text-white shadow-md shadow-[#f26522]/20"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {preset}
          </button>
        ))}
      </div>

      {/* Side-by-Side Horizontal Custom Date Pickers Container */}
      {showCustomDates && (
        <div className="flex items-center gap-2 bg-[#0e0e0e] p-1.5 px-2.5 rounded-xl border border-white/10 shrink-0">
          <CustomDatePicker
            value={startDate}
            onChange={onStartDateChange}
            prefixText="Od:"
          />
          <div className="flex items-center justify-center text-neutral-500 font-bold text-xs px-0.5">
            ➔
          </div>
          <CustomDatePicker
            value={endDate}
            onChange={onEndDateChange}
            prefixText="Do:"
          />
        </div>
      )}
    </div>
  );
}
