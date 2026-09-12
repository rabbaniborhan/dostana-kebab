"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import StatCard from "@/components/StatCard";
import { ShoppingBag, PhoneCall, CalendarCheck, DollarSign } from "lucide-react";

import { exportToCSV } from "@/utils/excelExport";

export default function AlexandaReportPage() {
  const alexandaRows = [
    { metric: "Wartość w okresie", value: "3 062,80 zł" },
    { metric: "Koszt minut", value: "- 396,00 zł" },
    { metric: "Bilans po koszcie", value: "2 666,80 zł" },
    { metric: "Zwrot z kosztu minut", value: "7x" },
    { metric: "Ilość zamówień zrealizowanych", value: "67" },
    { metric: "Uratowany przychód z zamówień", value: "3 062,80 zł" },
    { metric: "Liczba połączeń", value: "210" },
    { metric: "Liczba obsłużonych rezerwacji", value: "0" },
    { metric: "Liczba połączeń przekierowanych", value: "49" },
    { metric: "Koszt rozpoczętych minut", value: "396,00 zł" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activePreset, setActivePreset] = useState("poprzedni miesiąc");
  const [startDate, setStartDate] = useState("08/01/2026");
  const [endDate, setEndDate] = useState("08/31/2026");

  const [showFilters, setShowFilters] = useState(true);
  const [selectedVenue, setSelectedVenue] = useState("All venues");

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
          {/* Top Title */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Raport Alexandra</h1>
              <p className="text-xs text-neutral-400 mt-0.5">Wartość wygenerowana przez Alexandra</p>
            </div>
          </div>

          {/* Reusable Stats Filter Bar */}
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
            onExportCSV={() => exportToCSV(alexandaRows, "Alexanda_Report.csv")}
          />

          {/* Top Period Value Summary Bar */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 items-center">
              <div>
                <span className="text-xs text-neutral-400 font-medium">Wartość w okresie</span>
                <div className="text-2xl font-extrabold text-white mt-1">3 062,80 zł</div>
                <span className="text-[10px] text-neutral-500">szacowany przychód</span>
              </div>

              <div className="sm:pl-4">
                <span className="text-xs text-neutral-400 font-medium">Koszt minut</span>
                <div className="text-2xl font-extrabold text-rose-500 mt-1">- 396,00 zł</div>
                <span className="text-[10px] text-neutral-500">koszt minut</span>
              </div>

              <div className="sm:pl-4">
                <span className="text-xs text-neutral-400 font-medium">Bilans po koszcie</span>
                <div className="text-2xl font-extrabold text-[#38bdf8] mt-1">= 2 666,80 zł</div>
                <span className="text-[10px] text-neutral-500">bilans po koszcie</span>
              </div>

              <div className="sm:pl-4">
                <span className="text-xs text-neutral-400 font-medium">Zwrot z kosztu minut</span>
                <div className="text-2xl font-extrabold text-[#f26522] mt-1">7x</div>
                <span className="text-[10px] text-neutral-500">zwrot z kosztu minut</span>
              </div>
            </div>
          </div>

          {/* 6 Grid Metric Cards using StatCard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Ilość zamówień zrealizowanych"
              value="67"
              subValue="Zamówienia przyjęte i zrealizowane sukcesem."
              icon={<ShoppingBag className="w-5 h-5 text-purple-400" />}
            />

            <StatCard
              title="Uratowany przychód z zamówień"
              value="3 062,80 zł"
              subValue="Wartość zamówień obsłużonych."
              icon={<DollarSign className="w-5 h-5 text-emerald-400" />}
            />

            <StatCard
              title="Liczba połączeń"
              value="210"
              subValue="Rozmowy bez potrzeby angażowania lokalu."
              icon={<PhoneCall className="w-5 h-5 text-blue-400" />}
            />

            <StatCard
              title="Liczba obsłużonych rezerwacji"
              value="0"
              subValue="Rezerwacje przyjęte lub potwierdzone."
              icon={<CalendarCheck className="w-5 h-5 text-amber-400" />}
            />

            <StatCard
              title="Liczba połączeń przekierowanych"
              value="49"
              subValue="Połączenia przekazane do obsługi lokalu."
              icon={<PhoneCall className="w-5 h-5 text-[#f26522]" />}
            />

            <StatCard
              title="Koszt rozpoczętych minut"
              value="396,00 zł"
              subValue="Koszt operacyjny pracy Alexandra."
              icon={<DollarSign className="w-5 h-5 text-purple-400" />}
            />
          </div>

          {/* 2 Bar Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 space-y-4">
              <h3 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                Sprawy załatwione przez Alexandra
              </h3>

              <div className="h-64 flex items-end justify-around pt-6 pb-2 px-4 border-b border-white/10 relative">
                <div className="flex flex-col items-center gap-2 z-10">
                  <span className="text-xs font-bold text-emerald-400">67</span>
                  <div className="w-16 bg-emerald-500 rounded-t-lg transition-all duration-500" style={{ height: "67px" }} />
                  <span className="text-[11px] text-neutral-400 font-medium">Zamówienia</span>
                </div>

                <div className="flex flex-col items-center gap-2 z-10">
                  <span className="text-xs font-bold text-neutral-400">0</span>
                  <div className="w-16 bg-neutral-700 rounded-t-lg transition-all duration-500" style={{ height: "4px" }} />
                  <span className="text-[11px] text-neutral-400 font-medium">Rezerwacje</span>
                </div>

                <div className="flex flex-col items-center gap-2 z-10">
                  <span className="text-xs font-bold text-[#f26522]">210</span>
                  <div className="w-16 bg-[#f26522] rounded-t-lg transition-all duration-500" style={{ height: "210px" }} />
                  <span className="text-[11px] text-neutral-400 font-medium">Połączenia obsłużone</span>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 space-y-4">
              <h3 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                Uratowany przychód vs koszt minut
              </h3>

              <div className="h-64 flex items-end justify-around pt-6 pb-2 px-4 border-b border-white/10 relative">
                <div className="flex flex-col items-center gap-2 z-10">
                  <span className="text-xs font-bold text-emerald-400">3 062,80 zł</span>
                  <div className="w-24 bg-emerald-500 rounded-t-lg transition-all duration-500" style={{ height: "190px" }} />
                  <span className="text-[11px] text-neutral-400 font-medium">Przychód</span>
                </div>

                <div className="flex flex-col items-center gap-2 z-10">
                  <span className="text-xs font-bold text-rose-400">396,00 zł</span>
                  <div className="w-24 bg-rose-500 rounded-t-lg transition-all duration-500" style={{ height: "35px" }} />
                  <span className="text-[11px] text-neutral-400 font-medium">Koszt</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
