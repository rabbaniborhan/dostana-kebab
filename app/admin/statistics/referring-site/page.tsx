"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import { Globe, ExternalLink, ArrowUpRight } from "lucide-react";

import { exportToCSV } from "@/utils/excelExport";

export default function ReferringSitePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePreset, setActivePreset] = useState("this month");
  const [startDate, setStartDate] = useState("09/01/2026");
  const [endDate, setEndDate] = useState("09/07/2026");

  const [showFilters, setShowFilters] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("All venues");

  const referralData = [
    { site: "www.google.com", visits: 20908, pct: "75.8%" },
    { site: "www.dostanakebab.com", visits: 2974, pct: "10.8%" },
    { site: "www.google.pl", visits: 529, pct: "1.9%" },
    { site: "m.facebook.com", visits: 443, pct: "1.6%" },
    { site: "l.facebook.com", visits: 353, pct: "1.3%" },
    { site: "l.instagram.com", visits: 220, pct: "0.8%" },
    { site: "www.bing.com", visits: 204, pct: "0.7%" },
    { site: "lm.facebook.com", visits: 190, pct: "0.7%" },
    { site: "dostanakebab.com", visits: 141, pct: "0.5%" },
    { site: "go.przelewy24.pl", visits: 119, pct: "0.4%" },
    { site: "facebook.com", visits: 106, pct: "0.4%" },
    { site: "search.brave.com", visits: 44, pct: "0.2%" },
    { site: "duckduckgo.com", visits: 40, pct: "0.1%" },
    { site: "statics.teams.cdn.office.net", visits: 18, pct: "<0.1%" },
    { site: "com.google.android.googlequicksearchbox", visits: 13, pct: "<0.1%" },
  ];

  const VENUE_REFERRALS: Record<string, typeof referralData> = {
    "Wszystkie lokale": referralData,
    "Dostana Kebab Wróbla": [
      { site: "www.google.com", visits: 5210, pct: "72.5%" },
      { site: "www.dostanakebab.com", visits: 850, pct: "11.8%" },
      { site: "m.facebook.com", visits: 180, pct: "2.5%" },
      { site: "www.google.pl", visits: 140, pct: "1.9%" },
      { site: "l.instagram.com", visits: 95, pct: "1.3%" },
    ],
    "Dostana Kebab Lipowa": [
      { site: "www.google.com", visits: 4120, pct: "74.1%" },
      { site: "www.dostanakebab.com", visits: 620, pct: "11.1%" },
      { site: "www.google.pl", visits: 110, pct: "2.0%" },
      { site: "l.facebook.com", visits: 90, pct: "1.6%" },
    ],
    "Dostana Kebab Krakowskie Przedmieście": [
      { site: "www.google.com", visits: 6890, pct: "78.2%" },
      { site: "www.dostanakebab.com", visits: 980, pct: "11.1%" },
      { site: "m.facebook.com", visits: 150, pct: "1.7%" },
      { site: "www.bing.com", visits: 85, pct: "1.0%" },
    ],
    "Dostana Kebab Sympatyczna": [
      { site: "www.google.com", visits: 2310, pct: "70.5%" },
      { site: "www.dostanakebab.com", visits: 340, pct: "10.4%" },
      { site: "l.facebook.com", visits: 70, pct: "2.1%" },
    ],
    "Dostana Kebab Nadbystrzycka": [
      { site: "www.google.com", visits: 1840, pct: "76.0%" },
      { site: "www.dostanakebab.com", visits: 260, pct: "10.7%" },
    ],
    "Dostana Kebab Turystyczna": []
  };

  const currentReferralData = VENUE_REFERRALS[selectedVenue] || VENUE_REFERRALS["Wszystkie lokale"];
  const totalVisits = currentReferralData.reduce((acc, item) => acc + item.visits, 0);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex font-lato">
      <AdminSidebar pendingOrdersCount={1} pendingReservationsCount={1} />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedVenue={selectedVenue}
          setSelectedVenue={setSelectedVenue}
          activeTab="statistics"
          onRefresh={() => {}}
        />

        <main className="p-4 sm:p-6 lg:p-8 space-y-5 flex-1 overflow-y-auto bg-[#0e0e0e] text-neutral-200">
          {/* Header Title */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Witryny odsyłające</h1>
              <p className="text-xs text-neutral-400 mt-0.5 font-semibold text-[#f26522]">Dostana Kebab</p>
            </div>

            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 rounded-lg text-xs font-semibold text-neutral-300 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 text-[#f26522]" />
              <span>Oceń raport</span>
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
            onExportCSV={() => exportToCSV(currentReferralData, "Witryny_Odsylajace_Raport.csv")}
          />

          {/* Table Card */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#f26522]" />
                  <span>Witryny odsyłające</span>
                </h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">Łączna liczba odwiedzin: <span className="text-white font-bold">{totalVisits.toLocaleString()}</span></p>
              </div>
            </div>

            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                <thead>
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[10px] sm:text-[11px]">
                    <th className="py-2.5 px-3 sm:px-6 font-bold text-neutral-300 whitespace-nowrap">Witryna</th>
                    <th className="py-2.5 px-3 sm:px-6 font-bold text-right text-neutral-300 whitespace-nowrap">Liczba odwiedzin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-200">
                  {currentReferralData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-2.5 px-3 sm:px-6 font-medium text-white flex items-center gap-2 whitespace-nowrap">
                        <span className="text-neutral-400 font-mono text-[11px] w-5 text-right">{idx + 1}.</span>
                        <a 
                          href={`https://${row.site}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[#f26522] hover:underline flex items-center gap-1 transition-colors"
                        >
                          <span>{row.site}</span>
                          <ArrowUpRight className="w-3 h-3 text-neutral-500 opacity-70" />
                        </a>
                      </td>
                      <td className="py-2.5 px-3 sm:px-6 text-right font-bold text-white font-mono whitespace-nowrap">
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
