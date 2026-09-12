"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import AdminPageHeader from "@/components/AdminPageHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import ColumnSettingsModal from "@/components/ColumnSettingsModal";
import StatCard from "@/components/StatCard";
import { CalendarDays, Clock, TrendingUp, DollarSign, Settings, Download } from "lucide-react";

import { exportToXLSX, exportMultipleCSVs } from "@/utils/excelExport";

import { DAYS_HOURS_VENUE_DATASET } from "@/lib/statsData";

export default function DaysHoursPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePreset, setActivePreset] = useState("ten miesiąc");
  const [startDate, setStartDate] = useState("09/01/2026");
  const [endDate, setEndDate] = useState("09/04/2026");
  const [selectedCompareMode, setSelectedCompareMode] = useState("Porównaj z ubiegłym rokiem");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("Wszystkie lokale");
  const [selectedSalesChannel, setSelectedSalesChannel] = useState("Wszystkie kanały");
  const [isColumnSettingsOpen, setIsColumnSettingsOpen] = useState(false);

  const [heatmapMode, setHeatmapMode] = useState<"Income" | "Orders">("Income");
  const [chartMode, setChartMode] = useState<"Hours" | "Days of the week">("Hours");

  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>({
    dayOrTime: true,
    ordersCompleted: true,
    shareOfOrders: true,
    revenue: true,
    revenueSharePct: true,
    avgOrderValue: true,
  });

  const columnLabels: Record<string, string> = {
    dayOrTime: "Dzień / Przedział godzinowy",
    ordersCompleted: "Zamówienia zrealizowane",
    shareOfOrders: "Udział w zamówieniach (%)",
    revenue: "Przychód (zł)",
    revenueSharePct: "Udział w przychodzie (%)",
    avgOrderValue: "Średnia wartość zamówienia (zł)",
  };

  const handleToggleColumn = (key: string) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentDataset = DAYS_HOURS_VENUE_DATASET[selectedVenue] || DAYS_HOURS_VENUE_DATASET["Wszystkie lokale"];

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
          <AdminPageHeader
            title="W dniach i godzinach"
            actionText="Oceń raport"
          />

          <StatsFilterBar
            activePreset={activePreset}
            onPresetChange={setActivePreset}
            startDate={startDate}
            onStartDateChange={setStartDate}
            endDate={endDate}
            onEndDateChange={setEndDate}
            selectedCompareMode={selectedCompareMode}
            onCompareModeChange={setSelectedCompareMode}
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters(!showFilters)}
            selectedVenue={selectedVenue}
            onVenueChange={setSelectedVenue}
            selectedSalesChannel={selectedSalesChannel}
            onSalesChannelChange={setSelectedSalesChannel}
            onExportCSV={() =>
              exportMultipleCSVs([
                { filename: "Podsumowanie_Sprzedazy_Wg_Dni.csv", data: currentDataset.dayRows },
                { filename: "Podsumowanie_Sprzedazy_Wg_Godzin.csv", data: currentDataset.hourRows },
              ])
            }
          />

          {/* KPI Summary Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Dzień szczytu"
              value={currentDataset.peakDay}
              subValue={currentDataset.peakDayPct}
              icon={<CalendarDays className="w-4.5 h-4.5 text-[#f26522]" />}
              accentColor="#f26522"
            />
            <StatCard
              title="Godziny szczytu"
              value={currentDataset.peakHour}
              subValue={currentDataset.peakHourOrders}
              icon={<Clock className="w-4.5 h-4.5 text-amber-400" />}
              accentColor="#fbbf24"
            />
            <StatCard
              title="Łączny przychód w okresie"
              value={`${currentDataset.totalRev.toFixed(2)} PLN`}
              changePct="16.40"
              isPositive={true}
              icon={<DollarSign className="w-4.5 h-4.5 text-emerald-400" />}
              accentColor="#34d399"
            />
            <StatCard
              title="Średni przychód na zmianę"
              value={currentDataset.avgShiftRev}
              changePct="4.10"
              isPositive={true}
              icon={<TrendingUp className="w-4.5 h-4.5 text-sky-400" />}
              accentColor="#38bdf8"
            />
          </div>

          {/* Top Card: Revenue and number of orders Heatmap Grid */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-bold text-white tracking-wide">Przychód i liczba zamówień</h3>
              <button
                type="button"
                onClick={() =>
                  exportToXLSX(
                    heatmapMode === "Income"
                      ? [
                          { day: "Pn", "10:00": "0,00", "11:00": "0,00", "13:00": "0,00", "15:00": "0,00", "16:00": "0,00", "17:00": "0,00", "18:00": "0,00", "19:00": "0,00", "20:00": "0,00", "21:00": "0,00" },
                          { day: "Wt", "10:00": "47,00", "11:00": "213,40", "13:00": "0,00", "15:00": "25,00", "16:00": "0,00", "17:00": "0,00", "18:00": "0,00", "19:00": "44,00", "20:00": "29,00", "21:00": "48,00" },
                          { day: "Śr", "10:00": "0,00", "11:00": "0,00", "13:00": "0,00", "15:00": "55,00", "16:00": "23,00", "17:00": "196,90", "18:00": "0,00", "19:00": "39,00", "20:00": "0,00", "21:00": "0,00" },
                          { day: "Czw", "10:00": "0,00", "11:00": "43,00", "13:00": "0,00", "15:00": "0,00", "16:00": "0,00", "17:00": "0,00", "18:00": "118,90", "19:00": "64,00", "20:00": "0,00", "21:00": "0,00" },
                          { day: "Pt", "10:00": "0,00", "11:00": "0,00", "13:00": "0,00", "15:00": "0,00", "16:00": "0,00", "17:00": "0,00", "18:00": "38,00", "19:00": "0,00", "20:00": "0,00", "21:00": "0,00" },
                          { day: "Sb", "10:00": "0,00", "11:00": "0,00", "13:00": "46,00", "15:00": "0,00", "16:00": "0,00", "17:00": "0,00", "18:00": "56,00", "19:00": "0,00", "20:00": "0,00", "21:00": "0,00" },
                          { day: "Nd", "10:00": "0,00", "11:00": "0,00", "13:00": "0,00", "15:00": "265,90", "16:00": "0,00", "17:00": "0,00", "18:00": "0,00", "19:00": "0,00", "20:00": "0,00", "21:00": "103,00" },
                        ]
                      : [
                          { day: "Pn", "10:00": 0, "11:00": 0, "13:00": 0, "15:00": 0, "16:00": 0, "17:00": 0, "18:00": 0, "19:00": 0, "20:00": 0, "21:00": 0 },
                          { day: "Wt", "10:00": 1, "11:00": 1, "13:00": 0, "15:00": 1, "16:00": 0, "17:00": 0, "18:00": 0, "19:00": 1, "20:00": 1, "21:00": 1 },
                          { day: "Śr", "10:00": 0, "11:00": 0, "13:00": 0, "15:00": 1, "16:00": 1, "17:00": 2, "18:00": 0, "19:00": 1, "20:00": 0, "21:00": 0 },
                          { day: "Czw", "10:00": 0, "11:00": 1, "13:00": 0, "15:00": 0, "16:00": 0, "17:00": 0, "18:00": 2, "19:00": 1, "20:00": 0, "21:00": 0 },
                          { day: "Pt", "10:00": 0, "11:00": 0, "13:00": 0, "15:00": 0, "16:00": 0, "17:00": 0, "18:00": 1, "19:00": 0, "20:00": 0, "21:00": 0 },
                          { day: "Sb", "10:00": 0, "11:00": 0, "13:00": 1, "15:00": 0, "16:00": 0, "17:00": 0, "18:00": 1, "19:00": 0, "20:00": 0, "21:00": 0 },
                          { day: "Nd", "10:00": 0, "11:00": 0, "13:00": 0, "15:00": 3, "16:00": 0, "17:00": 0, "18:00": 0, "19:00": 0, "20:00": 0, "21:00": 2 },
                        ],
                    `Heatmap_${heatmapMode}.xlsx`,
                    `Heatmap ${heatmapMode}`
                  )
                }
                className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <Download className="w-3.5 h-3.5 text-[#f26522]" />
                <span>Pobierz</span>
              </button>
            </div>

            {/* Income / Orders Sub-tab selector */}
            <div className="flex items-center gap-1 bg-[#0e0e0e] p-1 rounded-xl w-fit border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setHeatmapMode("Income")}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  heatmapMode === "Income"
                    ? "bg-[#f26522] text-white shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Przychód
              </button>
              <button
                type="button"
                onClick={() => setHeatmapMode("Orders")}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  heatmapMode === "Orders"
                    ? "bg-[#f26522] text-white shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Zamówienia
              </button>
            </div>

            {/* Heatmap Grid Matrix Container with Scroll */}
            <div className="overflow-x-auto no-scrollbar pt-2">
              <div className="min-w-[600px]">
                <table className="w-full text-center border-separate border-spacing-1 text-xs">
                  <thead>
                    <tr className="text-neutral-400 text-[11px] font-mono">
                      <th className="w-12 text-left text-neutral-500 font-normal py-1"></th>
                      <th className="py-1">10:00</th>
                      <th className="py-1">11:00</th>
                      <th className="py-1">13:00</th>
                      <th className="py-1">15:00</th>
                      <th className="py-1">16:00</th>
                      <th className="py-1">17:00</th>
                      <th className="py-1">18:00</th>
                      <th className="py-1">19:00</th>
                      <th className="py-1">20:00</th>
                      <th className="py-1">21:00</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(heatmapMode === "Income"
                      ? [
                          { day: "Pn", values: ["0,00", "0,00", "0,00", "0,00", "0,00", "0,00", "0,00", "0,00", "0,00", "0,00"] },
                          { day: "Wt", values: ["47,00", "213,40", "0,00", "25,00", "0,00", "0,00", "0,00", "44,00", "29,00", "48,00"] },
                          { day: "Śr", values: ["0,00", "0,00", "0,00", "55,00", "23,00", "196,90", "0,00", "39,00", "0,00", "0,00"] },
                          { day: "Czw", values: ["0,00", "43,00", "0,00", "0,00", "0,00", "0,00", "118,90", "64,00", "0,00", "0,00"] },
                          { day: "Pt", values: ["0,00", "0,00", "0,00", "0,00", "0,00", "0,00", "38,00", "0,00", "0,00", "0,00"] },
                          { day: "Sb", values: ["0,00", "0,00", "46,00", "0,00", "0,00", "0,00", "56,00", "0,00", "0,00", "0,00"] },
                          { day: "Nd", values: ["0,00", "0,00", "0,00", "265,90", "0,00", "0,00", "0,00", "0,00", "0,00", "103,00"] },
                        ]
                      : [
                          { day: "Pn", values: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"] },
                          { day: "Wt", values: ["1", "1", "0", "1", "0", "0", "0", "1", "1", "1"] },
                          { day: "Śr", values: ["0", "0", "0", "1", "1", "2", "0", "1", "0", "0"] },
                          { day: "Czw", values: ["0", "1", "0", "0", "0", "0", "2", "1", "0", "0"] },
                          { day: "Pt", values: ["0", "0", "0", "0", "0", "0", "1", "0", "0", "0"] },
                          { day: "Sb", values: ["0", "0", "1", "0", "0", "0", "1", "0", "0", "0"] },
                          { day: "Nd", values: ["0", "0", "0", "3", "0", "0", "0", "0", "0", "2"] },
                        ]
                    ).map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td className="text-left font-semibold text-neutral-400 text-[11px] pr-2">{row.day}</td>
                        {row.values.map((val, cIdx) => {
                          const num = parseFloat(val.replace(",", "."));
                          let bgStyle = "bg-[#181818] text-neutral-500 border border-white/5";
                          if (heatmapMode === "Income") {
                            if (num > 200) bgStyle = "bg-[#f26522] text-white font-bold shadow-lg shadow-[#f26522]/30 border border-[#f26522]";
                            else if (num > 100) bgStyle = "bg-[#d9531e]/80 text-white font-bold border border-[#d9531e]";
                            else if (num > 40) bgStyle = "bg-[#f26522]/30 text-amber-200 border border-[#f26522]/40";
                            else if (num > 0) bgStyle = "bg-[#f26522]/15 text-neutral-300 border border-[#f26522]/20";
                          } else {
                            if (num >= 3) bgStyle = "bg-[#f26522] text-white font-bold shadow-lg shadow-[#f26522]/30 border border-[#f26522]";
                            else if (num === 2) bgStyle = "bg-[#d9531e]/80 text-white font-bold border border-[#d9531e]";
                            else if (num === 1) bgStyle = "bg-[#f26522]/25 text-amber-200 border border-[#f26522]/35";
                          }
                          return (
                            <td
                              key={cIdx}
                              className={`py-2 px-1 rounded-lg font-mono text-[11px] transition-all hover:scale-105 cursor-pointer ${bgStyle}`}
                            >
                              {val}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bottom Card: Hours and days of the week Bar/Line Chart */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white tracking-wide">Hours and days of the week</h3>
            </div>

            {/* Sub-tab selector: Hours vs Days of the week */}
            <div className="flex items-center gap-1 bg-[#0e0e0e] p-1 rounded-xl w-fit border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setChartMode("Hours")}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  chartMode === "Hours"
                    ? "bg-[#f26522] text-white shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Hours
              </button>
              <button
                type="button"
                onClick={() => setChartMode("Days of the week")}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  chartMode === "Days of the week"
                    ? "bg-[#f26522] text-white shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Days of the week
              </button>
            </div>

            {/* Combined Bar + Line Visualization with Scroll for Mobile */}
            <div className="pt-4 space-y-3">
              <div className="overflow-x-auto no-scrollbar pb-2">
                <div className="min-w-[700px]">
                  <div className="relative h-64 flex items-end justify-between gap-3 px-16 sm:px-20 pt-6 border-b border-white/10">
                    {/* Left Y-axis label */}
                    <span className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-neutral-400 font-medium tracking-wider">
                      Przychód (zł)
                    </span>

                    {/* Right Y-axis label */}
                    <span className="absolute right-1 top-1/2 -translate-y-1/2 rotate-90 text-[10px] text-neutral-400 font-medium tracking-wider">
                      Zamówienia
                    </span>

                    {/* Y-axis left markers (Przychód) */}
                    <div className="absolute left-8 top-6 bottom-6 flex flex-col justify-between text-[10px] text-neutral-400 font-mono pointer-events-none w-6 text-right">
                      <span>350</span>
                      <span>300</span>
                      <span>250</span>
                      <span>200</span>
                      <span>150</span>
                      <span>100</span>
                      <span>50</span>
                      <span>0</span>
                    </div>

                    {/* Y-axis right markers (Zamówienia) */}
                    <div className="absolute right-8 top-6 bottom-6 flex flex-col justify-between text-[10px] text-neutral-400 font-mono pointer-events-none w-6 text-left">
                      <span>5.0</span>
                      <span>4.5</span>
                      <span>4.0</span>
                      <span>3.5</span>
                      <span>3.0</span>
                      <span>2.5</span>
                      <span>2.0</span>
                      <span>1.5</span>
                      <span>1.0</span>
                      <span>0.5</span>
                      <span>0</span>
                    </div>

                    {/* SVG Line Overlay for Zamówienia (Thin Peach-Orange Line) */}
                    <svg className="absolute inset-x-16 sm:inset-x-20 top-6 bottom-6 w-[calc(100%-8rem)] sm:w-[calc(100%-10rem)] h-[calc(100%-3rem)] pointer-events-none z-20 overflow-visible" viewBox="0 0 1000 200" preserveAspectRatio="none">
                      {chartMode === "Hours" ? (
                        <>
                          <path
                            d="M 50 160 L 150 120 L 250 160 L 350 20 L 450 160 L 550 120 L 650 40 L 750 75 L 850 160 L 950 75"
                            fill="none"
                            stroke="#f97316"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {[
                            { cx: 50, cy: 160 },
                            { cx: 150, cy: 120 },
                            { cx: 250, cy: 160 },
                            { cx: 350, cy: 20 },
                            { cx: 450, cy: 160 },
                            { cx: 550, cy: 120 },
                            { cx: 650, cy: 40 },
                            { cx: 750, cy: 75 },
                            { cx: 850, cy: 160 },
                            { cx: 950, cy: 75 },
                          ].map((pt, pIdx) => (
                            <circle
                              key={pIdx}
                              cx={pt.cx}
                              cy={pt.cy}
                              r="3.5"
                              className="fill-[#141414] stroke-[#f97316] stroke-[1.5]"
                            />
                          ))}
                        </>
                      ) : (
                        <>
                          {/* Days of the week line path: Wt(6.0), Śr(5.0), Czw(4.0), Pt(1.0), Sb(2.0), Nd(5.0) */}
                          <path
                            d="M 83 20 L 250 50 L 416 80 L 583 170 L 750 140 L 916 50"
                            fill="none"
                            stroke="#f97316"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {[
                            { cx: 83, cy: 20 },
                            { cx: 250, cy: 50 },
                            { cx: 416, cy: 80 },
                            { cx: 583, cy: 170 },
                            { cx: 750, cy: 140 },
                            { cx: 916, cy: 50 },
                          ].map((pt, pIdx) => (
                            <circle
                              key={pIdx}
                              cx={pt.cx}
                              cy={pt.cy}
                              r="3.5"
                              className="fill-[#141414] stroke-[#f97316] stroke-[1.5]"
                            />
                          ))}
                        </>
                      )}
                    </svg>

                    {/* Bars for Przychód */}
                    {(chartMode === "Hours"
                      ? [
                          { label: "10:00", val: 50, orders: 1.0 },
                          { label: "11:00", val: 255, orders: 2.0 },
                          { label: "13:00", val: 50, orders: 1.0 },
                          { label: "15:00", val: 345, orders: 5.0 },
                          { label: "16:00", val: 25, orders: 1.0 },
                          { label: "17:00", val: 195, orders: 2.0 },
                          { label: "18:00", val: 215, orders: 4.0 },
                          { label: "19:00", val: 150, orders: 3.0 },
                          { label: "20:00", val: 30, orders: 1.0 },
                          { label: "21:00", val: 150, orders: 3.0 },
                        ]
                      : [
                          { label: "Wt", val: 407, orders: 6.0 },
                          { label: "Śr", val: 313, orders: 5.0 },
                          { label: "Czw", val: 225, orders: 4.0 },
                          { label: "Pt", val: 38, orders: 1.0 },
                          { label: "Sb", val: 102, orders: 2.0 },
                          { label: "Nd", val: 368, orders: 5.0 },
                        ]
                    ).map((col, idx) => (
                      <div key={idx} className={`flex-1 flex flex-col items-center h-full justify-end group z-10 ${chartMode === "Days of the week" ? "max-w-[110px]" : "max-w-[68px]"}`}>
                        <div
                          style={{ height: `${(col.val / 450) * 100}%` }}
                          className="w-full bg-gradient-to-t from-[#d9531e] to-[#f26522] rounded-t-sm group-hover:brightness-125 transition-all relative cursor-pointer"
                        >
                          <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white text-[10px] py-1 px-2 rounded-lg border border-[#f26522]/40 shadow-xl whitespace-nowrap pointer-events-none transition-opacity font-bold">
                            {col.val} PLN ({col.orders} orders)
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* X-axis Labels */}
                  <div className="flex justify-between text-[11px] text-neutral-400 font-mono px-16 sm:px-20 mt-2">
                    {(chartMode === "Hours"
                      ? ["10:00", "11:00", "13:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"]
                      : ["Wt", "Śr", "Czw", "Pt", "Sb", "Nd"]
                    ).map((t) => (
                      <span key={t} className="w-8 text-center">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chart Legend matching Dostana Kebab Brand Colors */}
              <div className="flex items-center justify-center gap-6 pt-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#f97316] bg-transparent" />
                  <span className="text-neutral-300 font-medium">Zamówienia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-sm bg-gradient-to-r from-[#d9531e] to-[#f26522]" />
                  <span className="text-neutral-300 font-medium">Przychód</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Sales summary by day of the week Table */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl overflow-hidden mt-6">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#141414]">
              <h3 className="text-sm font-bold text-white tracking-wide">Podsumowanie sprzedaży wg dni tygodnia</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => exportToXLSX(currentDataset.dayRows, "Sales_Summary_By_Day.xlsx", "Sales Summary By Day")}
                  className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                >
                  <Download className="w-3.5 h-3.5 text-[#f26522]" />
                  <span>Pobierz</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsColumnSettingsOpen(true)}
                  className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="Ustawienia kolumn"
                >
                  <Settings className="w-3.5 h-3.5 text-[#f26522]" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto overflow-y-auto max-h-[380px] no-scrollbar">
              <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                <thead className="sticky top-0 z-10 bg-[#0e0e0e]">
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[10px] sm:text-[11px]">
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 whitespace-nowrap">Dzień ↑</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Zamówienia zrealizowane ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Średnia liczba zamówień ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Udział w liczbie zamówień ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Przychód (zł) ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Średni przychód (zł) ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Udział w przychodzie ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Średnia wartość zamówienia (zł) ↑↓</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300 font-sans">
                  {/* Total Row */}
                  <tr className="bg-white/5 font-bold text-white border-b border-white/10 sticky top-[37px] z-10">
                    <td className="py-2.5 px-2.5 sm:px-4 text-white font-bold bg-[#141414] whitespace-nowrap">Wszystkie dni</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">23</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">2.9</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">100%</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-[#f26522] bg-[#141414] whitespace-nowrap">1,459.00 PLN</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">182.38 PLN</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">100%</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">63.43 PLN</td>
                  </tr>

                  {/* Day Rows matching dataset values */}
                  {currentDataset.dayRows.map((row) => (
                    <tr key={row.id} className="hover:bg-white/[0.03] transition-colors border-b border-white/5">
                      <td className="py-2 px-2.5 sm:px-4 text-neutral-200 font-medium whitespace-nowrap">{row.day}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-300 font-mono whitespace-nowrap">{row.orders}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-300 font-mono whitespace-nowrap">{row.avgOrders}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-300 font-mono whitespace-nowrap">{row.shareOrders}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-200 font-mono font-medium whitespace-nowrap">{row.revenue}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-300 font-mono whitespace-nowrap">{row.avgIncome}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-300 font-mono whitespace-nowrap">{row.revenueShare}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-200 font-mono font-medium whitespace-nowrap">{row.avgOrderValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Sales summary by hour Table */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl overflow-hidden mt-6">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#141414]">
              <h3 className="text-sm font-bold text-white tracking-wide">Podsumowanie sprzedaży wg godzin</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => exportToXLSX(currentDataset.hourRows, "Sales_Summary_By_Hour.xlsx", "Sales Summary By Hour")}
                  className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                >
                  <Download className="w-3.5 h-3.5 text-[#f26522]" />
                  <span>Pobierz</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsColumnSettingsOpen(true)}
                  className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="Ustawienia kolumn"
                >
                  <Settings className="w-3.5 h-3.5 text-[#f26522]" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto overflow-y-auto max-h-[380px] no-scrollbar">
              <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                <thead className="sticky top-0 z-10 bg-[#0e0e0e]">
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[10px] sm:text-[11px]">
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 whitespace-nowrap">Godzina ↑</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Zamówienia zrealizowane ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Średnia liczba zamówień ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Udział w liczbie zamówień ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Przychód (zł) ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Średni przychód (zł) ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Udział w przychodzie ↑↓</th>
                    <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 text-right whitespace-nowrap">Średnia wartość zamówienia (zł) ↑↓</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300 font-sans">
                  {/* Total Row */}
                  <tr className="bg-white/5 font-bold text-white border-b border-white/10 sticky top-[37px] z-10">
                    <td className="py-2.5 px-2.5 sm:px-4 text-white font-bold bg-[#141414] whitespace-nowrap">Wszystkie godziny</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">{currentDataset.hourRows.reduce((a, r) => a + r.orders, 0)}</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">-</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">100%</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-[#f26522] bg-[#141414] whitespace-nowrap">{currentDataset.totalRev.toFixed(2)} PLN</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">-</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">100%</td>
                    <td className="py-2.5 px-2.5 sm:px-4 text-right font-bold text-white bg-[#141414] whitespace-nowrap">-</td>
                  </tr>

                  {/* Hour Rows matching dataset values */}
                  {currentDataset.hourRows.map((row) => (
                    <tr key={row.id} className="hover:bg-white/[0.03] transition-colors border-b border-white/5">
                      <td className="py-2 px-2.5 sm:px-4 text-neutral-200 font-medium whitespace-nowrap">{row.time}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-300 font-mono whitespace-nowrap">{row.orders}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-300 font-mono whitespace-nowrap">{row.avgOrders}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-300 font-mono whitespace-nowrap">{row.shareOrders}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-200 font-mono font-medium whitespace-nowrap">{row.revenue}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-300 font-mono whitespace-nowrap">{row.avgIncome}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-300 font-mono whitespace-nowrap">{row.revenueShare}</td>
                      <td className="py-2 px-2.5 sm:px-4 text-right text-neutral-200 font-mono font-medium whitespace-nowrap">{row.avgOrderValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <ColumnSettingsModal
            isOpen={isColumnSettingsOpen}
            onClose={() => setIsColumnSettingsOpen(false)}
            columns={visibleColumns}
            columnLabels={columnLabels}
            onToggleColumn={handleToggleColumn}
          />
        </main>
      </div>
    </div>
  );
}
