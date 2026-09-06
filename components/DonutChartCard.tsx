"use client";

import React from "react";

interface DonutSegment {
  label: string;
  percentage: number;
  color: string;
}

interface DonutChartCardProps {
  title: string;
  centerText: string;
  centerSubtext?: string;
  segments: DonutSegment[];
}

export default function DonutChartCard({
  title,
  centerText,
  centerSubtext,
  segments,
}: DonutChartCardProps) {
  let accumulatedOffset = 0;

  return (
    <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 space-y-4 hover:border-white/20 transition-all shadow-xl">
      <h3 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">{title}</h3>
      <div className="flex items-center justify-around py-2">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            {segments.map((seg, idx) => {
              const dashArray = `${seg.percentage} ${100 - seg.percentage}`;
              const dashOffset = -accumulatedOffset;
              accumulatedOffset += seg.percentage;

              return (
                <circle
                  key={idx}
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="4.5"
                  strokeDasharray={dashArray}
                  strokeDashoffset={dashOffset}
                />
              );
            })}
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-sm font-black text-white">{centerText}</span>
            {centerSubtext && (
              <span className="text-[9px] text-neutral-400 font-medium">{centerSubtext}</span>
            )}
          </div>
        </div>

        <div className="space-y-2 text-xs">
          {segments.map((seg, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <span
                className="w-3 h-3 rounded-full shadow-sm"
                style={{ backgroundColor: seg.color }}
              />
              <div>
                <span className="text-neutral-400 block text-[11px]">{seg.label}</span>
                <span className="font-mono font-bold text-white text-sm">
                  {seg.percentage.toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
