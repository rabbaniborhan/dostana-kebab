"use client";

import React from "react";
import { Package, Settings } from "lucide-react";

interface AdminTableProps {
  title?: string;
  headerAction?: React.ReactNode;
  onOpenColumnSettings?: () => void;
  columns: { key: string; label: string; align?: "left" | "center" | "right"; visible?: boolean }[];
  children: React.ReactNode;
  emptyStateText?: string;
  isEmpty?: boolean;
}

export default function AdminTable({
  title,
  headerAction,
  onOpenColumnSettings,
  columns,
  children,
  emptyStateText,
  isEmpty = false,
}: AdminTableProps) {
  const visibleCols = columns.filter((col) => col.visible !== false);

  return (
    <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl overflow-hidden">
      {(title || headerAction || onOpenColumnSettings) && (
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          {title ? (
            <h3 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">{title}</h3>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            {headerAction}
            {onOpenColumnSettings && (
              <button
                type="button"
                onClick={onOpenColumnSettings}
                className="p-1.5 px-3 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Configure Columns"
              >
                <Settings className="w-3.5 h-3.5 text-[#f26522]" />
                <span>Columns</span>
              </button>
            )}
          </div>
        </div>
      )}

      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
          <thead>
            <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[10px] sm:text-[11px]">
              {visibleCols.map((col) => (
                <th
                  key={col.key}
                  className={`py-2.5 px-2.5 sm:px-4 font-semibold whitespace-nowrap ${
                    col.align === "center"
                      ? "text-center"
                      : col.align === "right"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-neutral-300">{children}</tbody>
        </table>
      </div>

      {isEmpty && emptyStateText && (
        <div className="p-8 text-center border-t border-white/5 bg-[#0e0e0e]/50">
          <Package className="w-8 h-8 text-neutral-600 mx-auto mb-2 opacity-60" />
          <p className="text-xs text-neutral-400 font-medium">{emptyStateText}</p>
        </div>
      )}
    </div>
  );
}
