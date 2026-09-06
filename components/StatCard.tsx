"use client";

import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subValue?: string;
  changePct?: string | number;
  isPositive?: boolean;
  icon?: React.ReactNode;
  accentColor?: string;
}

export default function StatCard({
  title,
  value,
  subValue,
  changePct,
  isPositive = true,
  icon,
  accentColor = "#f26522",
}: StatCardProps) {
  return (
    <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 shadow-xl hover:border-[#f26522]/30 transition-all flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
          {title}
        </span>
        {icon && (
          <div
            className="p-2 rounded-xl bg-[#0e0e0e] border border-white/5"
            style={{ color: accentColor }}
          >
            {icon}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <div className="text-2xl font-black text-white tracking-tight">{value}</div>
        {(subValue || changePct !== undefined) && (
          <div className="flex items-center gap-2 text-xs">
            {changePct !== undefined && (
              <span
                className={`font-bold px-1.5 py-0.5 rounded-md ${
                  isPositive
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >
                {isPositive ? `+${changePct}%` : `${changePct}%`}
              </span>
            )}
            {subValue && <span className="text-neutral-400 font-medium">{subValue}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
