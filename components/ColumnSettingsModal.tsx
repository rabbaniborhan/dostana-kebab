"use client";

import React from "react";
import { Settings, X } from "lucide-react";

interface ColumnSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  columns: Record<string, boolean>;
  columnLabels: Record<string, string>;
  onToggleColumn: (key: string) => void;
}

export default function ColumnSettingsModal({
  isOpen,
  onClose,
  columns,
  columnLabels,
  onToggleColumn,
}: ColumnSettingsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="bg-[#141414] border border-[#f26522]/40 rounded-2xl p-5 max-w-sm w-full shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Settings className="w-4 h-4 text-[#f26522]" />
            <span>Visible Columns</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
          {Object.keys(columns).map((key) => (
            <label
              key={key}
              className="flex items-center justify-between p-2 rounded-xl bg-[#0e0e0e] border border-white/5 hover:border-[#f26522]/30 cursor-pointer text-xs font-semibold text-neutral-200 transition-colors"
            >
              <span>{columnLabels[key] || key}</span>
              <input
                type="checkbox"
                checked={columns[key]}
                onChange={() => onToggleColumn(key)}
                className="w-4 h-4 accent-[#f26522] rounded cursor-pointer"
              />
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full py-2 bg-[#f26522] text-white font-bold text-xs rounded-xl hover:bg-[#d85416] transition-colors shadow-lg shadow-[#f26522]/20"
        >
          Done
        </button>
      </div>
    </div>
  );
}
