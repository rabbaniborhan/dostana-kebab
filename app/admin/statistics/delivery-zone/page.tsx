"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import AdminPageHeader from "@/components/AdminPageHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import ColumnSettingsModal from "@/components/ColumnSettingsModal";
import StatCard from "@/components/StatCard";
import { Truck, PieChart, Wallet, Edit2, Settings } from "lucide-react";

export default function DeliveryZonePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePreset, setActivePreset] = useState("this month");
  const [startDate, setStartDate] = useState("09/01/2026");
  const [endDate, setEndDate] = useState("09/04/2026");
  const [selectedCompareMode, setSelectedCompareMode] = useState("Compare with last year");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("All venues");
  const [selectedSalesChannel, setSelectedSalesChannel] = useState("All channels");
  const [isColumnSettingsOpen, setIsColumnSettingsOpen] = useState(false);

  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>({
    deliveryZone: true,
    local: true,
    deliveriesCompleted: true,
    deliveriesCompletedPct: true,
    revenue: true,
    revenueSharePct: true,
    avgOrderValue: true,
  });

  const columnLabels: Record<string, string> = {
    deliveryZone: "Delivery zone",
    local: "Local",
    deliveriesCompleted: "Deliveries completed",
    deliveriesCompletedPct: "Deliveries completed (%)",
    revenue: "Revenue from deliveries (PLN)",
    revenueSharePct: "Share of revenue (%)",
    avgOrderValue: "Average order value (PLN)",
  };

  const handleToggleColumn = (key: string) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
          {/* Header Title & Action */}
          <AdminPageHeader
            title="In the delivery zones"
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

          {/* KPI Summary Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Deliveries completed"
              value="4"
              changePct="0.00"
              isPositive={true}
              icon={<Truck className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Share of orders with delivery"
              value="36.36%"
              changePct="38.38"
              isPositive={true}
              icon={<PieChart className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Revenue from deliveries (PLN)"
              value="496,27"
              changePct="0.00"
              isPositive={true}
              icon={<Wallet className="w-4.5 h-4.5" />}
            />
          </div>

          {/* Map Section */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white">Sprzedaż w strefach</h2>
              <button className="flex items-center gap-1 px-3 py-1 bg-[#0e0e0e] border border-white/10 rounded-lg text-xs font-medium text-neutral-300 hover:bg-white/5 transition-colors">
                <Edit2 className="w-3 h-3 text-[#f26522]" />
                <span>Edytuj</span>
              </button>
            </div>

            <div className="relative h-[480px] bg-[#eef1f3] overflow-hidden flex items-center justify-center">
              <iframe
                title="Delivery Zone Google Map"
                className="absolute inset-0 w-full h-full border-0 pointer-events-auto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79948.33777553335!2d22.476483569502694!3d51.24647318021021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47234759a2341435%3A0x500d07525380590!2sLublin%2C%20Poland!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl"
                style={{ filter: "brightness(0.98) contrast(1.02)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 480" preserveAspectRatio="xMidYMid meet">
                <polygon
                  points="320,240 360,180 440,150 540,140 640,180 720,230 750,290 700,340 600,380 480,390 400,360 340,310"
                  fill="rgba(45, 212, 191, 0.25)"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon
                  points="360,240 400,190 480,165 570,160 660,200 680,260 630,320 520,350 430,330 380,280"
                  fill="rgba(20, 184, 166, 0.32)"
                  stroke="#0d9488"
                  strokeWidth="2"
                />
                <polygon
                  points="420,240 460,200 520,185 590,210 610,250 570,290 500,300 440,270"
                  fill="rgba(13, 148, 136, 0.42)"
                  stroke="#0f766e"
                  strokeWidth="2.5"
                />

                <circle cx="475" cy="245" r="5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                <circle cx="518" cy="255" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                <circle cx="560" cy="305" r="5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                <circle cx="572" cy="315" r="5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                <circle cx="660" cy="290" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                <circle cx="695" cy="305" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
              </svg>

              <div className="absolute left-3 bottom-8 bg-white/95 backdrop-blur-sm border border-neutral-300 rounded-lg p-3 text-[11px] space-y-2 shadow-lg z-20 text-neutral-800 min-w-[210px]">
                <div>
                  <div className="font-bold text-neutral-900">Dostana Kebab Nadbystrzycka</div>
                  <div className="flex items-center gap-1.5 text-neutral-600 mt-0.5">
                    <span className="w-2.5 h-2.5 bg-[#2dd4bf] rounded-sm" />
                    <span>Strefa 5 km</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Dostana Kebab Turystyczna</div>
                  <div className="flex items-center gap-1.5 text-neutral-600 mt-0.5">
                    <span className="w-2.5 h-2.5 bg-[#0d9488] rounded-sm" />
                    <span>Strefa 2</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Dostana Kebab Sympatyczna</div>
                  <div className="flex items-center gap-1.5 text-neutral-600 mt-0.5">
                    <span className="w-2.5 h-2.5 bg-[#0f766e] rounded-sm" />
                    <span>Strefa 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative">
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
                    {visibleColumns.deliveryZone && <th className="py-2.5 px-4 font-normal">Delivery zone ↕</th>}
                    {visibleColumns.local && <th className="py-2.5 px-4 font-normal">Local ↕</th>}
                    {visibleColumns.deliveriesCompleted && <th className="py-2.5 px-4 font-normal">Deliveries completed ↕</th>}
                    {visibleColumns.deliveriesCompletedPct && <th className="py-2.5 px-4 font-normal">Deliveries completed (%) ↕</th>}
                    {visibleColumns.revenue && <th className="py-2.5 px-4 font-normal">Revenue from deliveries (PLN) ↓</th>}
                    {visibleColumns.revenueSharePct && <th className="py-2.5 px-4 font-normal">Share of revenue from deliveries (%) ↕</th>}
                    {visibleColumns.avgOrderValue && <th className="py-2.5 px-4 font-normal">Average order value (PLN) ↕</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  <tr className="bg-white/5 font-medium">
                    {visibleColumns.deliveryZone && <td className="py-3 px-4 text-white">Addition</td>}
                    {visibleColumns.local && <td className="py-3 px-4 text-neutral-500">-</td>}
                    {visibleColumns.deliveriesCompleted && (
                      <td className="py-3 px-4">
                        <div>4</div>
                        <div className="text-[10px] text-neutral-400">0.00%</div>
                      </td>
                    )}
                    {visibleColumns.deliveriesCompletedPct && (
                      <td className="py-3 px-4">
                        <div>100.0%</div>
                        <div className="text-[10px] text-neutral-400">0.00 p.p.</div>
                      </td>
                    )}
                    {visibleColumns.revenue && (
                      <td className="py-3 px-4 font-semibold text-white">
                        <div>496,27</div>
                        <div className="text-[10px] text-neutral-400">0.00%</div>
                      </td>
                    )}
                    {visibleColumns.revenueSharePct && <td className="py-3 px-4">100.0%</td>}
                    {visibleColumns.avgOrderValue && <td className="py-3 px-4">124,07</td>}
                  </tr>

                  <tr>
                    {visibleColumns.deliveryZone && <td className="py-3 px-4 text-neutral-200">Zone 2</td>}
                    {visibleColumns.local && <td className="py-3 px-4 text-neutral-400">Dostana Kebab Tourist</td>}
                    {visibleColumns.deliveriesCompleted && <td className="py-3 px-4">2</td>}
                    {visibleColumns.deliveriesCompletedPct && <td className="py-3 px-4">50.0%</td>}
                    {visibleColumns.revenue && <td className="py-3 px-4 font-semibold text-neutral-200">290,39</td>}
                    {visibleColumns.revenueSharePct && <td className="py-3 px-4">37.23%</td>}
                    {visibleColumns.avgOrderValue && <td className="py-3 px-4">-</td>}
                  </tr>

                  <tr>
                    {visibleColumns.deliveryZone && <td className="py-3 px-4 text-neutral-200">5 km zone</td>}
                    {visibleColumns.local && <td className="py-3 px-4 text-neutral-400">Dostana Kebab Nadbystrzycka</td>}
                    {visibleColumns.deliveriesCompleted && <td className="py-3 px-4">2</td>}
                    {visibleColumns.deliveriesCompletedPct && <td className="py-3 px-4">50.0%</td>}
                    {visibleColumns.revenue && <td className="py-3 px-4 font-semibold text-neutral-200">205,88</td>}
                    {visibleColumns.revenueSharePct && <td className="py-3 px-4">26.39%</td>}
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
