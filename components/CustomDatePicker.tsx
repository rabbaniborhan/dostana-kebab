"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";

interface CustomDatePickerProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  prefixText?: string;
}

export default function CustomDatePicker({ label, value, onChange, prefixText }: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => {
    const parts = value.split("/");
    if (parts.length === 3) {
      return new Date(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1]));
    }
    return new Date();
  });

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  return (
    <div className="relative">
      {label && <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">{label}</label>}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#0e0e0e] border rounded-lg px-3 py-1.5 text-xs text-white flex items-center justify-between transition-colors min-w-[130px] ${
          isOpen ? "border-[#f26522]" : "border-white/10 hover:border-[#f26522]/50"
        }`}
      >
        <span className="flex items-center gap-1">
          {prefixText && <span className="text-neutral-400 font-normal">{prefixText}</span>}
          <span className="font-semibold">{value}</span>
        </span>
        <Calendar className="w-3.5 h-3.5 text-[#f26522] ml-1.5 shrink-0" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 mt-2 bg-[#141414] border border-[#f26522] rounded-2xl p-3.5 shadow-2xl z-50 animate-fadeIn w-64">
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
                className="p-1 text-neutral-400 hover:text-white font-bold text-xs"
              >
                ◀
              </button>
              <span className="text-xs font-bold text-white uppercase">
                {viewDate.toLocaleString("en-US", { month: "short", year: "numeric" })}
              </span>
              <button
                type="button"
                onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
                className="p-1 text-neutral-400 hover:text-white font-bold text-xs"
              >
                ▶
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-neutral-500 mb-2 uppercase">
              <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {Array.from({ length: getFirstDayOfMonth(viewDate.getFullYear(), viewDate.getMonth()) }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth()) }).map((_, i) => {
                const day = i + 1;
                const formatted = `${String(viewDate.getMonth() + 1).padStart(2, "0")}/${String(day).padStart(2, "0")}/${viewDate.getFullYear()}`;
                const isSelected = value === formatted;
                return (
                  <button
                    key={`day-${day}`}
                    type="button"
                    onClick={() => {
                      onChange(formatted);
                      setIsOpen(false);
                    }}
                    className={`w-7 h-7 text-[11px] font-bold rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-[#f26522] text-white shadow-md shadow-[#f26522]/30"
                        : "text-neutral-300 hover:bg-[#f26522] hover:text-white"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
