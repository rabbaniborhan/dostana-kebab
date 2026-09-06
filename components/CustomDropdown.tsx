"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CustomDropdownProps {
  label?: string;
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  prefix?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function CustomDropdown({
  label,
  options,
  selectedOption,
  onSelect,
  prefix,
  className = "",
  icon,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${isOpen ? "z-50" : "z-10"} ${className}`}>
      {label && (
        <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-[#0e0e0e] border rounded-lg px-3 py-1.5 text-xs text-white flex items-center justify-between transition-colors ${
          isOpen ? "border-[#f26522]" : "border-white/10 hover:border-[#f26522]/50"
        }`}
      >
        <span className="flex items-center gap-1.5 truncate">
          {icon}
          {prefix && <span className="text-neutral-400 font-normal">{prefix}:</span>}
          <span className="font-semibold text-neutral-200 truncate">{selectedOption}</span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ml-2 shrink-0 ${
            isOpen ? "rotate-180 text-[#f26522]" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-full mt-1.5 w-full min-w-[220px] max-h-60 overflow-y-auto bg-[#141414] border border-[#f26522]/60 rounded-xl p-1.5 shadow-2xl z-50 animate-fadeIn space-y-0.5 no-scrollbar">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onSelect(opt);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                  selectedOption === opt
                    ? "bg-[#f26522] text-white"
                    : "text-neutral-300 hover:bg-[#f26522]/20 hover:text-white"
                }`}
              >
                <span className="truncate">{opt}</span>
                {selectedOption === opt && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-1" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
