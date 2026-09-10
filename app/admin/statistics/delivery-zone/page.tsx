"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import AdminPageHeader from "@/components/AdminPageHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import ColumnSettingsModal from "@/components/ColumnSettingsModal";
import StatCard from "@/components/StatCard";
import { Truck, PieChart, Wallet, Edit2, Settings } from "lucide-react";
import { exportToCSV } from "@/utils/excelExport";

const ALL_ZONE_DATA = [
  {
    id: "wrobla",
    local: "Dostana Kebab Wróbla",
    zone: "Strefa Wróbla (3 km)",
    deliveries: 15,
    deliveriesPct: "10.4%",
    revenue: "620.00",
    revenueSharePct: "10.3%",
    avgOrder: "41.33",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15989.33777553335!2d22.5050!3d51.2312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4723b7b6c50785ab%3A0x6a19f2913e614532!2sWr%C3%B3bla%2066%2C%2020-719%20Lublin!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl",
    color: "#e11d48",
  },
  {
    id: "lipowa",
    local: "Dostana Kebab Lipowa",
    zone: "Strefa Centrum (4 km)",
    deliveries: 28,
    deliveriesPct: "19.4%",
    revenue: "1150.50",
    revenueSharePct: "19.1%",
    avgOrder: "41.09",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15989.33777553335!2d22.5520!3d51.2442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4723b5e40e6f3b11%3A0x7a29a70b135678ab!2sLipowa%2011%2F8%2C%2020-020%20Lublin!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl",
    color: "#3b82f6",
  },
  {
    id: "krakowskie",
    local: "Dostana Kebab Krakowskie Przedmieście",
    zone: "Strefa Stare Miasto (3 km)",
    deliveries: 42,
    deliveriesPct: "29.2%",
    revenue: "1840.00",
    revenueSharePct: "30.5%",
    avgOrder: "43.80",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15989.33777553335!2d22.5622!3d51.2475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4723b5f375088f11%3A0x92518fa1d28ab599!2sKrakowskie%20Przedmie%C5%9Bcie%208%2C%2020-002%20Lublin!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl",
    color: "#f59e0b",
  },
  {
    id: "sympatyczna",
    local: "Dostana Kebab Sympatyczna",
    zone: "Strefa Czuby (5 km)",
    deliveries: 19,
    deliveriesPct: "13.2%",
    revenue: "780.20",
    revenueSharePct: "13.0%",
    avgOrder: "41.06",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15989.33777553335!2d22.5180!3d51.2260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4723b80b2a5431cd%3A0x89291b156743ab11!2sSympatyczna%205b%2C%2020-530%20Lublin!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl",
    color: "#0f766e",
  },
  {
    id: "nadbystrzycka",
    local: "Dostana Kebab Nadbystrzycka",
    zone: "Strefa 5 km",
    deliveries: 22,
    deliveriesPct: "15.3%",
    revenue: "910.50",
    revenueSharePct: "15.1%",
    avgOrder: "41.38",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15989.33777553335!2d22.5450!3d51.2360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4723b5d259c6b325%3A0x6b87612ef17886a!2sNadbystrzycka%207%2C%2020-618%20Lublin!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl",
    color: "#2dd4bf",
  },
  {
    id: "turystyczna",
    local: "Dostana Kebab Turystyczna",
    zone: "Strefa 2",
    deliveries: 18,
    deliveriesPct: "12.5%",
    revenue: "735.40",
    revenueSharePct: "12.0%",
    avgOrder: "40.85",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15989.33777553335!2d22.6100!3d51.2650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4723b7a5a87b1234%3A0x98b87c12654312ab!2sTurystyczna%209b%2C%2020-207%20Lublin!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl",
    color: "#0d9488",
  },
];

export default function DeliveryZonePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePreset, setActivePreset] = useState("ten miesiąc");
  const [startDate, setStartDate] = useState("09/01/2026");
  const [endDate, setEndDate] = useState("09/04/2026");
  const [selectedCompareMode, setSelectedCompareMode] = useState("Porównaj z ubiegłym rokiem");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("Wszystkie lokale");
  const [selectedSalesChannel, setSelectedSalesChannel] = useState("Wszystkie kanały");
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
    deliveryZone: "Strefa dostawy",
    local: "Lokal",
    deliveriesCompleted: "Dostawy zrealizowane",
    deliveriesCompletedPct: "Dostawy zrealizowane (%)",
    revenue: "Przychód z dostaw (zł)",
    revenueSharePct: "Udział w przychodzie (%)",
    avgOrderValue: "Średnia wartość zamówienia (zł)",
  };

  const handleToggleColumn = (key: string) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Current active venue selector filter
  const currentActiveVenue = searchQuery || (selectedVenue !== "Wszystkie lokale" && selectedVenue !== "All venues" ? selectedVenue : "");

  const filteredZoneData = ALL_ZONE_DATA.filter((item) => {
    if (!currentActiveVenue || currentActiveVenue.startsWith("Wszystkie") || currentActiveVenue === "All venues") {
      return true;
    }
    const q = currentActiveVenue.toLowerCase();
    const loc = item.local.toLowerCase();
    return loc.includes(q) || q.includes(loc);
  });

  const activeVenueData = filteredZoneData[0] || ALL_ZONE_DATA[0];

  const totalDeliveries = filteredZoneData.reduce((acc, item) => acc + item.deliveries, 0);
  const totalRevenueNum = filteredZoneData.reduce((acc, item) => acc + parseFloat(item.revenue), 0);

  const mapSrcUrl = currentActiveVenue && !currentActiveVenue.startsWith("Wszystkie") && currentActiveVenue !== "All venues"
    ? activeVenueData.mapEmbed
    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79948.33777553335!2d22.476483569502694!3d51.24647318021021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47234759a2341435%3A0x500d07525380590!2sLublin%2C%20Poland!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl";

  return (
    <div className="h-screen overflow-hidden bg-[#0e0e0e] text-white flex font-lato">
      <AdminSidebar pendingOrdersCount={1} pendingReservationsCount={1} />

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <AdminHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedVenue={selectedVenue}
          setSelectedVenue={setSelectedVenue}
          activeTab="statistics"
          onRefresh={() => {}}
        />

        <main className="p-6 sm:p-8 space-y-5 flex-1 overflow-y-auto bg-[#0e0e0e] text-neutral-200">
          {/* Header Title & Action */}
          <AdminPageHeader
            title="Strefy dostaw"
            actionText="Oceń raport"
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
            onExportCSV={() => exportToCSV(filteredZoneData, "Podsumowanie_Stref_Dostaw.csv")}
          />

          {/* KPI Summary Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Dostawy zrealizowane"
              value={totalDeliveries.toString()}
              changePct="12.50"
              isPositive={true}
              icon={<Truck className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Udział zamówień z dostawą"
              value={filteredZoneData.length === 1 ? activeVenueData.deliveriesPct : "36.36%"}
              changePct="38.38"
              isPositive={true}
              icon={<PieChart className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Przychód z dostaw (zł)"
              value={totalRevenueNum.toFixed(2)}
              changePct="14.20"
              isPositive={true}
              icon={<Wallet className="w-4.5 h-4.5" />}
            />
          </div>

          {/* Map Section */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white">
                Sprzedaż w strefach - {currentActiveVenue || "Wszystkie lokale"}
              </h2>
              <button className="flex items-center gap-1 px-3 py-1 bg-[#0e0e0e] border border-white/10 rounded-lg text-xs font-medium text-neutral-300 hover:bg-white/5 transition-colors">
                <Edit2 className="w-3 h-3 text-[#f26522]" />
                <span>Edytuj</span>
              </button>
            </div>

            <div className="relative h-[480px] bg-[#eef1f3] overflow-hidden flex items-center justify-center">
              <iframe
                key={mapSrcUrl}
                title="Delivery Zone Google Map"
                className="absolute inset-0 w-full h-full border-0 pointer-events-auto"
                src={mapSrcUrl}
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
                {filteredZoneData.map((item) => (
                  <div key={item.id}>
                    <div className="font-bold text-neutral-900">{item.local}</div>
                    <div className="flex items-center gap-1.5 text-neutral-600 mt-0.5">
                      <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                      <span>{item.zone} ({item.deliveries} dostaw)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Podsumowanie</h3>
              <button
                type="button"
                onClick={() => setIsColumnSettingsOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Ustawienia kolumn"
              >
                <Settings className="w-3.5 h-3.5 text-[#f26522]" />
                <span>Ustawienia kolumn</span>
              </button>
            </div>

            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[11px]">
                    {visibleColumns.deliveryZone && <th className="py-2.5 px-4 font-normal">Strefa dostawy ↕</th>}
                    {visibleColumns.local && <th className="py-2.5 px-4 font-normal">Lokal ↕</th>}
                    {visibleColumns.deliveriesCompleted && <th className="py-2.5 px-4 font-normal">Dostawy zrealizowane ↕</th>}
                    {visibleColumns.deliveriesCompletedPct && <th className="py-2.5 px-4 font-normal">Dostawy zrealizowane (%) ↕</th>}
                    {visibleColumns.revenue && <th className="py-2.5 px-4 font-normal">Przychód z dostaw (zł) ↓</th>}
                    {visibleColumns.revenueSharePct && <th className="py-2.5 px-4 font-normal">Udział w przychodzie z dostaw (%) ↕</th>}
                    {visibleColumns.avgOrderValue && <th className="py-2.5 px-4 font-normal">Średnia wartość zamówienia (zł) ↕</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  <tr className="bg-white/5 font-medium">
                    {visibleColumns.deliveryZone && <td className="py-3 px-4 text-white">Suma (Łącznie)</td>}
                    {visibleColumns.local && <td className="py-3 px-4 text-neutral-500">-</td>}
                    {visibleColumns.deliveriesCompleted && (
                      <td className="py-3 px-4">
                        <div>{totalDeliveries}</div>
                        <div className="text-[10px] text-neutral-400">100.0%</div>
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
                        <div>{totalRevenueNum.toFixed(2)}</div>
                        <div className="text-[10px] text-neutral-400">100.0%</div>
                      </td>
                    )}
                    {visibleColumns.revenueSharePct && <td className="py-3 px-4">100.0%</td>}
                    {visibleColumns.avgOrderValue && <td className="py-3 px-4">{(totalRevenueNum / (totalDeliveries || 1)).toFixed(2)}</td>}
                  </tr>

                  {filteredZoneData.map((item) => (
                    <tr key={item.id}>
                      {visibleColumns.deliveryZone && <td className="py-3 px-4 text-neutral-200">{item.zone}</td>}
                      {visibleColumns.local && <td className="py-3 px-4 text-neutral-400">{item.local}</td>}
                      {visibleColumns.deliveriesCompleted && <td className="py-3 px-4">{item.deliveries}</td>}
                      {visibleColumns.deliveriesCompletedPct && <td className="py-3 px-4">{item.deliveriesPct}</td>}
                      {visibleColumns.revenue && <td className="py-3 px-4 font-semibold text-neutral-200">{item.revenue} PLN</td>}
                      {visibleColumns.revenueSharePct && <td className="py-3 px-4">{item.revenueSharePct}</td>}
                      {visibleColumns.avgOrderValue && <td className="py-3 px-4">{item.avgOrder} PLN</td>}
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
