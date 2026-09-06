"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import AdminPageHeader from "@/components/AdminPageHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import ColumnSettingsModal from "@/components/ColumnSettingsModal";
import StatCard from "@/components/StatCard";
import DonutChartCard from "@/components/DonutChartCard";
import CustomDropdown from "@/components/CustomDropdown";
import { ShoppingBag, Wallet, CreditCard, Settings } from "lucide-react";

export default function TotalSalesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePreset, setActivePreset] = useState("this month");
  const [startDate, setStartDate] = useState("09/01/2026");
  const [endDate, setEndDate] = useState("09/04/2026");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [selectedCompareMode, setSelectedCompareMode] = useState("Compare with last year");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("All venues");
  const [selectedSalesChannel, setSelectedSalesChannel] = useState("All channels");
  const [isColumnSettingsOpen, setIsColumnSettingsOpen] = useState(false);

  const [selectedView, setSelectedView] = useState<"total" | "by_sales_channels">("total");
  const [channelMetric, setChannelMetric] = useState<"income" | "orders">("income");

  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>({
    salesChannel: true,
    ordersCompleted: true,
    shareOfOrders: true,
    cash: true,
    card: true,
    transfer: true,
    onlinePayment: true,
    revenue: true,
    revenueShare: true,
    avgOrderValue: true,
  });

  const columnLabels: Record<string, string> = {
    salesChannel: "Sales channel",
    ordersCompleted: "Orders completed",
    shareOfOrders: "Share of orders",
    cash: "Cash",
    card: "Card",
    transfer: "Transfer",
    onlinePayment: "Online payment",
    revenue: "Revenue (PLN)",
    revenueShare: "Revenue share",
    avgOrderValue: "Avg order value",
  };

  const handleToggleColumn = (key: string) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const comboChartData = [
    { date: "01.9", revenue: 285, prevRevenue: 45, orders: 3.0, prevOrders: 1.0, revPct: 95, prevRevPct: 15 },
    { date: "02.9", revenue: 200, prevRevenue: 25, orders: 3.0, prevOrders: 1.0, revPct: 67, prevRevPct: 8 },
    { date: "03.9", revenue: 250, prevRevenue: 25, orders: 4.0, prevOrders: 1.0, revPct: 83, prevRevPct: 8 },
    { date: "04.9", revenue: 40,  prevRevenue: 25, orders: 1.0, prevOrders: 1.0, revPct: 13, prevRevPct: 8 },
    { date: "05.9", revenue: 100, prevRevenue: 265, orders: 2.0, prevOrders: 3.0, revPct: 33, prevRevPct: 88 },
    { date: "06.9", revenue: 278, prevRevenue: 0,   orders: 3.0, prevOrders: null, revPct: 93, prevRevPct: 0 },
  ];

  const channelsData = [
    {
      date: "01.9",
      incomeWeb: 260,
      incomeVoice: 25,
      prevIncomeWeb: 45,
      prevIncomeVoice: 0,
      ordersWeb: 2,
      ordersVoice: 1,
      prevOrdersWeb: 1,
      prevOrdersVoice: 0,
      incomeWebPct: 87,
      incomeVoicePct: 8,
      prevIncomeWebPct: 15,
      ordersWebPct: 50,
      ordersVoicePct: 25,
      prevOrdersWebPct: 25,
    },
    {
      date: "02.9",
      incomeWeb: 160,
      incomeVoice: 40,
      prevIncomeWeb: 25,
      prevIncomeVoice: 0,
      ordersWeb: 2,
      ordersVoice: 1,
      prevOrdersWeb: 1,
      prevOrdersVoice: 0,
      incomeWebPct: 53,
      incomeVoicePct: 13,
      prevIncomeWebPct: 8,
      ordersWebPct: 50,
      ordersVoicePct: 25,
      prevOrdersWebPct: 25,
    },
    {
      date: "03.9",
      incomeWeb: 250,
      incomeVoice: 0,
      prevIncomeWeb: 25,
      prevIncomeVoice: 0,
      ordersWeb: 4,
      ordersVoice: 0,
      prevOrdersWeb: 1,
      prevOrdersVoice: 0,
      incomeWebPct: 83,
      incomeVoicePct: 0,
      prevIncomeWebPct: 8,
      ordersWebPct: 100,
      ordersVoicePct: 0,
      prevOrdersWebPct: 25,
    },
    {
      date: "04.9",
      incomeWeb: 40,
      incomeVoice: 0,
      prevIncomeWeb: 25,
      prevIncomeVoice: 0,
      ordersWeb: 1,
      ordersVoice: 0,
      prevOrdersWeb: 1,
      prevOrdersVoice: 0,
      incomeWebPct: 13,
      incomeVoicePct: 0,
      prevIncomeWebPct: 8,
      ordersWebPct: 25,
      ordersVoicePct: 0,
      prevOrdersWebPct: 25,
    },
    {
      date: "05.9",
      incomeWeb: 100,
      incomeVoice: 0,
      prevIncomeWeb: 265,
      prevIncomeVoice: 0,
      ordersWeb: 2,
      ordersVoice: 0,
      prevOrdersWeb: 3,
      prevOrdersVoice: 0,
      incomeWebPct: 33,
      incomeVoicePct: 0,
      prevIncomeWebPct: 88,
      ordersWebPct: 50,
      ordersVoicePct: 0,
      prevOrdersWebPct: 75,
    },
    {
      date: "06.9",
      incomeWeb: 278,
      incomeVoice: 0,
      prevIncomeWeb: 0,
      prevIncomeVoice: 0,
      ordersWeb: 3,
      ordersVoice: 0,
      prevOrdersWeb: 0,
      prevOrdersVoice: 0,
      incomeWebPct: 93,
      incomeVoicePct: 0,
      prevIncomeWebPct: 0,
      ordersWebPct: 75,
      ordersVoicePct: 0,
      prevOrdersWebPct: 0,
    },
  ];

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

        <main className="p-6 sm:p-8 space-y-6 flex-1 overflow-y-auto bg-[#0e0e0e] text-neutral-200">
          {/* Reusable Admin Header */}
          <AdminPageHeader
            title="Total sales"
            subtitle={`Comparison periods: 4 days (${startDate} - ${endDate}) to 4 days in previous year`}
            actionText="Rate the report"
          />

          {/* Reusable Stats Filter Bar */}
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
            onExportCSV={() => alert("Exporting CSV...")}
          />

          {/* Reusable Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Orders completed"
              value="11"
              changePct="288.87"
              isPositive={true}
              icon={<ShoppingBag className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Revenue (PLN)"
              value="780,07"
              changePct="887.86"
              isPositive={true}
              icon={<Wallet className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Average order value (PLN)"
              value="70,92"
              changePct="114.81"
              isPositive={true}
              icon={<CreditCard className="w-4.5 h-4.5" />}
            />
          </div>

          {/* Chart Block */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 space-y-6 relative shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-base font-semibold text-white">Sale</h2>
                <CustomDropdown
                  options={["Total", "by sales channels"]}
                  selectedOption={selectedView === "total" ? "Total" : "by sales channels"}
                  onSelect={(opt) => setSelectedView(opt === "Total" ? "total" : "by_sales_channels")}
                  className="w-44"
                />

                {selectedView === "by_sales_channels" && (
                  <div className="flex items-center bg-[#0e0e0e] border border-white/10 p-0.5 rounded-lg">
                    <button
                      onClick={() => setChannelMetric("income")}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                        channelMetric === "income" ? "bg-[#f26522] text-white font-bold" : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      Income
                    </button>
                    <button
                      onClick={() => setChannelMetric("orders")}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                        channelMetric === "orders" ? "bg-[#f26522] text-white font-bold" : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      Orders
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* VIEW MODE 1: TOTAL (Combo Bar & Line Chart with Points, Legend & Tooltip) */}
            {selectedView === "total" && (
              <>
                <div className="relative h-64 border-b border-white/10 pt-4 pb-2 px-20 flex items-end justify-between">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-neutral-400 font-medium whitespace-nowrap">
                    Przychód (zł)
                  </span>

                  <div className="absolute left-10 top-2 bottom-6 flex flex-col justify-between text-[10px] text-neutral-400 font-mono text-right w-6">
                    <span>300</span><span>250</span><span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
                  </div>

                  <div className="absolute right-10 top-2 bottom-6 flex flex-col justify-between text-[10px] text-neutral-400 font-mono text-left w-6">
                    <span>4.0</span><span>3.5</span><span>3.0</span><span>2.5</span><span>2.0</span><span>1.5</span><span>1.0</span><span>0.5</span><span>0</span>
                  </div>

                  <span className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[10px] text-neutral-400 font-medium whitespace-nowrap">
                    Zamówienia
                  </span>

                  <div className="absolute inset-x-20 top-4 bottom-6 flex flex-col justify-between pointer-events-none">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="border-b border-white/5 w-full" />
                    ))}
                  </div>

                  {/* Line Chart Paths */}
                  <svg className="absolute inset-x-20 top-4 bottom-6 w-[calc(100%-10rem)] h-[calc(100%-2.5rem)] pointer-events-none overflow-visible z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 8.33 25 L 25.0 25 L 41.67 0 L 58.33 75 L 75.0 50 L 91.67 25" fill="none" stroke="#38bdf8" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <path d="M 8.33 75 L 25.0 75 L 41.67 75 L 58.33 75 L 75.0 25" fill="none" stroke="#fbbf24" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  </svg>

                  {/* Line Chart Item Dots / Points */}
                  <div className="absolute inset-x-20 top-4 bottom-6 pointer-events-none z-20">
                    <div style={{ left: '8.33%', top: '25%' }} className="absolute w-2 h-2 rounded-full bg-[#38bdf8] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />
                    <div style={{ left: '25.0%', top: '25%' }} className="absolute w-2 h-2 rounded-full bg-[#38bdf8] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />
                    <div style={{ left: '41.67%', top: '0%' }} className="absolute w-2 h-2 rounded-full bg-[#38bdf8] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />
                    <div style={{ left: '58.33%', top: '75%' }} className="absolute w-2 h-2 rounded-full bg-[#38bdf8] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />
                    <div style={{ left: '75.0%', top: '50%' }} className="absolute w-2 h-2 rounded-full bg-[#38bdf8] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />
                    <div style={{ left: '91.67%', top: '25%' }} className="absolute w-2 h-2 rounded-full bg-[#38bdf8] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />

                    <div style={{ left: '8.33%', top: '75%' }} className="absolute w-2 h-2 rounded-full bg-[#fbbf24] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />
                    <div style={{ left: '25.0%', top: '75%' }} className="absolute w-2 h-2 rounded-full bg-[#fbbf24] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />
                    <div style={{ left: '41.67%', top: '75%' }} className="absolute w-2 h-2 rounded-full bg-[#fbbf24] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />
                    <div style={{ left: '58.33%', top: '75%' }} className="absolute w-2 h-2 rounded-full bg-[#fbbf24] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />
                    <div style={{ left: '75.0%', top: '25%' }} className="absolute w-2 h-2 rounded-full bg-[#fbbf24] ring-2 ring-[#141414] -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* Dual Bars & Hover Tooltip */}
                  <div className="relative z-10 flex items-end justify-between w-full h-full">
                    {comboChartData.map((d, idx) => (
                      <div
                        key={d.date}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="flex items-end gap-1 flex-1 justify-center h-full group cursor-pointer relative"
                      >
                        <div style={{ height: `${d.revPct}%` }} className="w-10 sm:w-14 bg-[#f26522] rounded-t-md transition-all group-hover:brightness-125 shadow-lg shadow-[#f26522]/10" />
                        <div style={{ height: `${d.prevRevPct}%` }} className="w-7 sm:w-10 bg-[#f26522]/30 border border-[#f26522]/40 rounded-t-md transition-all group-hover:bg-[#f26522]/50" />

                        {hoveredIndex === idx && (
                          <div className="absolute bottom-full mb-3 z-30 w-52 bg-[#090909] border border-white/20 p-3 rounded-xl shadow-2xl space-y-1.5 text-xs text-neutral-200 animate-fadeIn pointer-events-none">
                            <div className="font-bold text-white border-b border-white/10 pb-1 flex justify-between">
                              <span>Data: {d.date}</span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-neutral-300">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-sm bg-[#f26522]" /> Przychód:
                                </span>
                                <span className="font-mono font-bold text-white">{d.revenue}.00 zł</span>
                              </div>
                              <div className="flex items-center justify-between text-neutral-300">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-sm bg-[#f26522]/40" /> Przychód (popr):
                                </span>
                                <span className="font-mono font-bold text-neutral-300">{d.prevRevenue}.00 zł</span>
                              </div>
                              <div className="flex items-center justify-between text-neutral-300">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" /> Zamówienia:
                                </span>
                                <span className="font-mono font-bold text-[#38bdf8]">{d.orders.toFixed(1)}</span>
                              </div>
                              <div className="flex items-center justify-between text-neutral-300">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" /> Zamówienia (popr):
                                </span>
                                <span className="font-mono font-bold text-[#fbbf24]">
                                  {d.prevOrders !== null ? d.prevOrders.toFixed(1) : "-"}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between px-20 text-[11px] text-neutral-400 font-mono">
                  {comboChartData.map((d) => <span key={d.date}>{d.date}</span>)}
                </div>

                {/* Chart Color Legend Footer */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-1 text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#38bdf8]" />
                    <span>Line 1: Zamówienia</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                    <span>Line 2: Zamówienia (poprzedni okres)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-sm bg-[#f26522]" />
                    <span>Bar 1: Przychód</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-sm bg-[#f26522]/30 border border-[#f26522]/40" />
                    <span>Bar 2: Przychód (poprzedni okres)</span>
                  </div>
                </div>
              </>
            )}

            {/* VIEW MODE 2: BY SALES CHANNELS (Stacked Channel Bar Chart with Legend & Tooltip) */}
            {selectedView === "by_sales_channels" && (
              <>
                <div className="relative h-64 border-b border-white/10 pt-4 pb-2 px-20 flex items-end justify-between">
                  <div className="relative z-10 flex items-end justify-between w-full h-full">
                    {channelsData.map((d, idx) => {
                      const totalPct = channelMetric === "income" ? d.incomeWebPct + d.incomeVoicePct : d.ordersWebPct + d.ordersVoicePct;
                      const webPct = channelMetric === "income" ? d.incomeWebPct : d.ordersWebPct;
                      const voicePct = channelMetric === "income" ? d.incomeVoicePct : d.ordersVoicePct;
                      const prevPct = channelMetric === "income" ? d.prevIncomeWebPct : d.prevOrdersWebPct;

                      return (
                        <div
                          key={d.date}
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="flex items-end gap-1.5 flex-1 justify-center h-full group cursor-pointer relative"
                        >
                          <div style={{ height: `${totalPct}%` }} className="w-10 sm:w-14 flex flex-col justify-end rounded-t-md overflow-hidden transition-all shadow-lg shadow-[#f26522]/10">
                            {voicePct > 0 && <div style={{ height: `${(voicePct / totalPct) * 100}%` }} className="w-full bg-[#fbbf24]" />}
                            <div style={{ height: `${(webPct / totalPct) * 100}%` }} className="w-full bg-[#f26522]" />
                          </div>
                          <div style={{ height: `${prevPct}%` }} className="w-7 sm:w-10 bg-[#f26522]/30 border border-[#f26522]/40 rounded-t-md" />

                          {hoveredIndex === idx && (
                            <div className="absolute bottom-full mb-3 z-30 w-56 bg-[#090909] border border-white/20 p-3 rounded-xl shadow-2xl space-y-1.5 text-xs text-neutral-200 animate-fadeIn pointer-events-none">
                              <div className="font-bold text-white border-b border-white/10 pb-1 flex justify-between">
                                <span>Data: {d.date}</span>
                                <span className="uppercase text-[10px] text-[#f26522]">{channelMetric}</span>
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center justify-between text-neutral-300">
                                  <span className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-sm bg-[#f26522]" /> Strona WWW:
                                  </span>
                                  <span className="font-mono font-bold text-white">
                                    {channelMetric === "income" ? `${(d.incomeWeb || 0).toFixed(2)} zł` : `${d.ordersWeb || 0} zamówień`}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-neutral-300">
                                  <span className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-sm bg-[#fbbf24]" /> Zamówienie głosowe:
                                  </span>
                                  <span className="font-mono font-bold text-[#fbbf24]">
                                    {channelMetric === "income" ? `${(d.incomeVoice || 0).toFixed(2)} zł` : `${d.ordersVoice || 0} zamówień`}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-between px-20 text-[11px] text-neutral-400 font-mono">
                  {channelsData.map((d) => <span key={d.date}>{d.date}</span>)}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-1 text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-sm bg-[#f26522]" />
                    <span>Strona WWW</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-sm bg-[#fbbf24]" />
                    <span>Zamówienie głosowe</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-sm bg-[#f26522]/30 border border-[#f26522]/40" />
                    <span>Strona WWW (poprzedni okres)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-sm bg-[#fbbf24]/30 border border-[#fbbf24]/40" />
                    <span>Zamówienie głosowe (poprzedni okres)</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Reusable Donut Chart Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DonutChartCard
              title="Revenue share"
              centerText="91.7%"
              centerSubtext="Strona WWW"
              segments={[
                { label: "Strona WWW", percentage: 91.68, color: "#f26522" },
                { label: "Zamówienie głosowe", percentage: 8.32, color: "#fbbf24" },
              ]}
            />

            <DonutChartCard
              title="Share of the number of orders"
              centerText="81.8%"
              centerSubtext="Strona WWW"
              segments={[
                { label: "Strona WWW", percentage: 81.82, color: "#f26522" },
                { label: "Zamówienie głosowe", percentage: 18.18, color: "#fbbf24" },
              ]}
            />
          </div>

          {/* Summary Table */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Summary</h3>
              <button
                type="button"
                onClick={() => setIsColumnSettingsOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Configure Columns"
              >
                <Settings className="w-3.5 h-3.5 text-[#f26522]" />
                <span>Column Settings</span>
              </button>
            </div>

            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[11px]">
                    {visibleColumns.salesChannel && <th className="py-2.5 px-4 font-normal">Sales channel ↕</th>}
                    {visibleColumns.ordersCompleted && <th className="py-2.5 px-4 font-normal">Orders completed ↕</th>}
                    {visibleColumns.shareOfOrders && <th className="py-2.5 px-4 font-normal">Share of orders ↕</th>}
                    {visibleColumns.cash && <th className="py-2.5 px-4 font-normal">Cash ↕</th>}
                    {visibleColumns.card && <th className="py-2.5 px-4 font-normal">Card ↕</th>}
                    {visibleColumns.transfer && <th className="py-2.5 px-4 font-normal">Transfer ↕</th>}
                    {visibleColumns.onlinePayment && <th className="py-2.5 px-4 font-normal">Online payment ↕</th>}
                    {visibleColumns.revenue && <th className="py-2.5 px-4 font-normal">Revenue (PLN) ↓</th>}
                    {visibleColumns.revenueShare && <th className="py-2.5 px-4 font-normal">Revenue share ↕</th>}
                    {visibleColumns.avgOrderValue && <th className="py-2.5 px-4 font-normal">Avg order value ↕</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  <tr className="bg-white/5 font-medium">
                    {visibleColumns.salesChannel && <td className="py-3 px-4 text-white">Addition</td>}
                    {visibleColumns.ordersCompleted && (
                      <td className="py-3 px-4">
                        <div>11</div>
                        <div className="text-[10px] text-emerald-400">288.87%</div>
                      </td>
                    )}
                    {visibleColumns.shareOfOrders && (
                      <td className="py-3 px-4">
                        <div>100.00%</div>
                        <div className="text-[10px] text-neutral-500">0.00 p.p.</div>
                      </td>
                    )}
                    {visibleColumns.cash && <td className="py-3 px-4">25,00</td>}
                    {visibleColumns.card && <td className="py-3 px-4">39,90</td>}
                    {visibleColumns.transfer && <td className="py-3 px-4">0,00</td>}
                    {visibleColumns.onlinePayment && <td className="py-3 px-4">715,17</td>}
                    {visibleColumns.revenue && <td className="py-3 px-4 text-white font-semibold">780,07</td>}
                    {visibleColumns.revenueShare && <td className="py-3 px-4">100.00%</td>}
                    {visibleColumns.avgOrderValue && <td className="py-3 px-4">70,92</td>}
                  </tr>

                  <tr>
                    {visibleColumns.salesChannel && <td className="py-3 px-4 text-neutral-200">Website</td>}
                    {visibleColumns.ordersCompleted && <td className="py-3 px-4">9</td>}
                    {visibleColumns.shareOfOrders && <td className="py-3 px-4">81.82%</td>}
                    {visibleColumns.cash && <td className="py-3 px-4">0,00</td>}
                    {visibleColumns.card && <td className="py-3 px-4">0,00</td>}
                    {visibleColumns.transfer && <td className="py-3 px-4">0,00</td>}
                    {visibleColumns.onlinePayment && <td className="py-3 px-4">715,17</td>}
                    {visibleColumns.revenue && <td className="py-3 px-4 font-semibold text-neutral-200">715,17</td>}
                    {visibleColumns.revenueShare && <td className="py-3 px-4">91.68%</td>}
                    {visibleColumns.avgOrderValue && <td className="py-3 px-4">79,46</td>}
                  </tr>

                  <tr>
                    {visibleColumns.salesChannel && <td className="py-3 px-4 text-neutral-200">Voice order</td>}
                    {visibleColumns.ordersCompleted && <td className="py-3 px-4">2</td>}
                    {visibleColumns.shareOfOrders && <td className="py-3 px-4">18.18%</td>}
                    {visibleColumns.cash && <td className="py-3 px-4">25,00</td>}
                    {visibleColumns.card && <td className="py-3 px-4">39,90</td>}
                    {visibleColumns.transfer && <td className="py-3 px-4">0,00</td>}
                    {visibleColumns.onlinePayment && <td className="py-3 px-4">0,00</td>}
                    {visibleColumns.revenue && <td className="py-3 px-4 font-semibold text-neutral-200">64,90</td>}
                    {visibleColumns.revenueShare && <td className="py-3 px-4">8.32%</td>}
                    {visibleColumns.avgOrderValue && <td className="py-3 px-4">-</td>}
                  </tr>
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
