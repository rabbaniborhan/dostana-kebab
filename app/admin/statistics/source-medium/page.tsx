"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import { Share2, ExternalLink, ArrowUpRight } from "lucide-react";

export default function SourceMediumPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePreset, setActivePreset] = useState("this month");
  const [startDate, setStartDate] = useState("09/01/2026");
  const [endDate, setEndDate] = useState("09/07/2026");

  const [showFilters, setShowFilters] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("All venues");

  const sourceMediumData = [
    { sourceMedium: "ig / social", visits: 100, pct: "60.2%" },
    { sourceMedium: "chatgpt.com /", visits: 35, pct: "21.1%" },
    { sourceMedium: "fb / paid", visits: 32, pct: "19.3%" },
    { sourceMedium: "google / organic", visits: 14, pct: "8.4%" },
    { sourceMedium: "restaumatic-website / referral", visits: 7, pct: "4.2%" },
    { sourceMedium: "review_email / email", visits: 5, pct: "3.0%" },
    { sourceMedium: "perplexity /", visits: 2, pct: "1.2%" },
    { sourceMedium: "restaurantguru / referral", visits: 2, pct: "1.2%" },
    { sourceMedium: "copilot.com /", visits: 1, pct: "0.6%" },
  ];

  const totalVisits = sourceMediumData.reduce((acc, item) => acc + item.visits, 0);

  return (
    <div className="h-screen overflow-hidden bg-[#0e0e0e] text-white flex font-lato">
      <AdminSidebar pendingOrdersCount={1} pendingReservationsCount={1} />

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <AdminHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeTab="statistics"
          onRefresh={() => {}}
        />

        <main className="p-6 sm:p-8 space-y-5 flex-1 overflow-y-auto bg-[#0e0e0e] text-neutral-200">
          {/* Header Title */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Odwiedziny ze źródła/medium (Source / Medium)</h1>
              <p className="text-xs text-neutral-400 mt-0.5 font-semibold text-[#f26522]">Dostana Kebab</p>
            </div>

            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 rounded-lg text-xs font-semibold text-neutral-300 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 text-[#f26522]" />
              <span>Oceń raport (Rate report)</span>
            </button>
          </div>

          {/* Reusable Filter Controls Bar */}
          <StatsFilterBar
            activePreset={activePreset}
            onPresetChange={setActivePreset}
            startDate={startDate}
            onStartDateChange={setStartDate}
            endDate={endDate}
            onEndDateChange={setEndDate}
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters(!showFilters)}
            selectedVenue={selectedVenue}
            onVenueChange={setSelectedVenue}
          />

          {/* Table Card */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#f26522]" />
                  <span>Odwiedziny ze źródła/medium</span>
                </h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">Łączna liczba odwiedzin: <span className="text-white font-bold">{totalVisits.toLocaleString()}</span></p>
              </div>
            </div>

            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[11px]">
                    <th className="py-3 px-6 font-bold text-neutral-300">Źródło / medium (Source / Medium)</th>
                    <th className="py-3 px-6 font-bold text-right text-neutral-300">Liczba odwiedzin (Visits)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-200">
                  {sourceMediumData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-6 font-medium text-white flex items-center gap-2">
                        <span className="text-neutral-400 font-mono text-[11px] w-5 text-right">{idx + 1}.</span>
                        <span className="font-semibold text-neutral-200">{row.sourceMedium}</span>
                      </td>
                      <td className="py-3 px-6 text-right font-bold text-white font-mono">
                        {row.visits.toLocaleString()} <span className="text-[10px] text-neutral-500 font-sans font-normal ml-1">({row.pct})</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#0e0e0e]/80 border-t border-white/5 text-xs text-neutral-400 space-y-1">
              <p className="font-semibold text-neutral-300">Chcesz badać efekty zmiany cen, promocji, reklamy ... ?</p>
              <ul className="list-disc pl-5 text-[11px] text-[#f26522] space-y-0.5">
                <li>
                  <a href="#" className="hover:underline flex items-center gap-1 font-medium">
                    <span>Analiza ruchu Dostana Kebab</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
