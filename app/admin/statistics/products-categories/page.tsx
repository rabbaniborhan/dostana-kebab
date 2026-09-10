"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import AdminPageHeader from "@/components/AdminPageHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import ColumnSettingsModal from "@/components/ColumnSettingsModal";
import StatCard from "@/components/StatCard";
import DonutChartCard from "@/components/DonutChartCard";
import { ShoppingBag, DollarSign, BarChart3, TrendingUp, Settings, Download } from "lucide-react";

import { exportToXLSX, exportMultipleCSVs } from "@/utils/excelExport";

import { PRODUCTS_VENUE_DATASET, EXTRAS_SUMMARY_ROWS } from "@/lib/statsData";

export default function ProductsCategoriesPage() {
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
    category: true,
    numberSold: true,
    shareUnitsSold: true,
    income: true,
    revenueShare: true,
  });

  const columnLabels: Record<string, string> = {
    category: "Kategoria",
    numberSold: "Liczba sprzedanych",
    shareUnitsSold: "Udział w liczbie sprzedanych jednostek",
    income: "Przychód",
    revenueShare: "Udział w przychodzie",
  };

  const handleToggleColumn = (key: string) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const extrasSummaryRows = EXTRAS_SUMMARY_ROWS;

  const [isSummarySummaryToggle, setIsSummarySummaryToggle] = useState(false);

  const currentDataset = PRODUCTS_VENUE_DATASET[selectedVenue] || PRODUCTS_VENUE_DATASET["Wszystkie lokale"];
  const quantityRankData = currentDataset.quantityRankData;
  const revenueRankData = currentDataset.revenueRankData;
  const donutQuantityData = currentDataset.donutQuantityData;
  const donutRevenueData = currentDataset.donutRevenueData;

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

        <main className="p-6 sm:p-8 space-y-6 flex-1 overflow-y-auto bg-[#0e0e0e] text-neutral-200">
          <AdminPageHeader
            title="Produkty i kategorie"
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
                { filename: "Podsumowanie_Kategorii.csv", data: currentDataset.categories },
                { filename: "Podsumowanie_Produktow.csv", data: currentDataset.products },
                { filename: "Podsumowanie_Dodatkow.csv", data: extrasSummaryRows },
              ])
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Liczba sprzedanych produktów"
              value={currentDataset.soldQty}
              icon={<ShoppingBag className="w-4.5 h-4.5 text-[#f26522]" />}
              accentColor="#f26522"
            />
            <StatCard
              title="Wartość produktów (zł)"
              value={currentDataset.revenue}
              icon={<DollarSign className="w-4.5 h-4.5 text-amber-400" />}
              accentColor="#fbbf24"
            />
            <StatCard
              title="Średnia liczba produktów w zamówieniu"
              value={currentDataset.avgOrderQty}
              icon={<BarChart3 className="w-4.5 h-4.5 text-sky-400" />}
              accentColor="#38bdf8"
            />
            <StatCard
              title="Średnia wartość produktów w zamówieniu (zł)"
              value={currentDataset.avgOrderRev}
              icon={<TrendingUp className="w-4.5 h-4.5 text-emerald-400" />}
              accentColor="#34d399"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="font-judson font-bold text-lg text-white">Liczba sprzedanych produktów</h3>

              <div className="space-y-2.5 pt-2">
                {quantityRankData.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-neutral-300 truncate max-w-[75%]">{item.name}</span>
                      <span className="font-bold text-white font-mono">{item.qty}</span>
                    </div>
                    <div className="w-full bg-[#0e0e0e] h-2.5 rounded-full overflow-hidden border border-white/5">
                      <div
                        style={{ width: `${(item.qty / item.maxQty) * 100}%` }}
                        className="h-full bg-gradient-to-r from-[#d9531e] to-[#f26522] rounded-full transition-all duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="font-judson font-bold text-lg text-white">Wartość sprzedanych produktów</h3>

              <div className="space-y-2.5 pt-2">
                {revenueRankData.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-neutral-300 truncate max-w-[70%]">{item.name}</span>
                      <span className="font-bold text-[#f26522] font-mono">{item.val}</span>
                    </div>
                    <div className="w-full bg-[#0e0e0e] h-2.5 rounded-full overflow-hidden border border-white/5">
                      <div
                        style={{ width: `${item.pct}%` }}
                        className="h-full bg-gradient-to-r from-[#d9531e] to-[#f26522] rounded-full transition-all duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DonutChartCard
              title="Udział liczby sprzedanych produktów wg kategorii"
              centerText="59 szt."
              centerSubtext="Łączna ilość"
              segments={donutQuantityData}
            />

            <DonutChartCard
              title="Udział wartości produktów wg kategorii"
              centerText="1 459 zł"
              centerSubtext="Łączna wartość"
              segments={donutRevenueData}
            />
          </div>

          <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#141414]">
              <h3 className="text-sm font-bold text-white tracking-wide">Podsumowanie sprzedaży wg kategorii</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => exportToXLSX(currentDataset.categories, "Category_Sales_Summary.xlsx", "Category Summary")}
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
              <table className="w-full text-left border-collapse text-xs">
                <thead className="sticky top-0 z-10 bg-[#0e0e0e]">
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[11px]">
                    {visibleColumns.category && <th className="py-3 px-4 font-semibold text-neutral-300">Kategoria ↑</th>}
                    {visibleColumns.numberSold && <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Liczba sprzedanych ↑↓</th>}
                    {visibleColumns.shareUnitsSold && <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Udział w liczbie sprzedanych jednostek ↑↓</th>}
                    {visibleColumns.income && <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Przychód ↑↓</th>}
                    {visibleColumns.revenueShare && <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Udział w przychodzie ↑↓</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300 font-sans">
                  {/* Total Row */}
                  <tr className="bg-white/5 font-bold text-white border-b border-white/10 sticky top-[37px] z-10">
                    {visibleColumns.category && <td className="py-3.5 px-4 text-white font-bold bg-[#141414]">Wszystkie kategorie</td>}
                    {visibleColumns.numberSold && <td className="py-3.5 px-4 text-right font-bold text-white bg-[#141414]">59</td>}
                    {visibleColumns.shareUnitsSold && <td className="py-3.5 px-4 text-right font-bold text-white bg-[#141414]">100%</td>}
                    {visibleColumns.income && <td className="py-3.5 px-4 text-right font-bold text-[#f26522] bg-[#141414]">1,459.00 PLN</td>}
                    {visibleColumns.revenueShare && <td className="py-3.5 px-4 text-right font-bold text-white bg-[#141414]">100%</td>}
                  </tr>

                  {/* Category Data Rows matching current dataset */}
                  {currentDataset.categories.map((row) => (
                    <tr key={row.id} className="hover:bg-white/[0.03] transition-colors border-b border-white/5">
                      {visibleColumns.category && <td className="py-3 px-4 text-neutral-200 font-medium">{row.category}</td>}
                      {visibleColumns.numberSold && <td className="py-3 px-4 text-right text-neutral-300 font-mono">{row.sold}</td>}
                      {visibleColumns.shareUnitsSold && <td className="py-3 px-4 text-right text-neutral-300 font-mono">{row.shareUnits}</td>}
                      {visibleColumns.income && <td className="py-3 px-4 text-right text-neutral-200 font-mono font-medium">{row.income}</td>}
                      {visibleColumns.revenueShare && <td className="py-3 px-4 text-right text-neutral-300 font-mono">{row.revenueShare}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5: Product Sales Summary Table */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl overflow-hidden mt-6">
            <div className="p-4 border-b border-white/10 bg-[#141414] space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white tracking-wide">Podsumowanie sprzedaży produktów</h3>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => exportToXLSX(currentDataset.products, "Product_Sales_Summary.xlsx", "Product Summary")}
                    className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Download className="w-3.5 h-3.5 text-[#f26522]" />
                    <span>Pobierz</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsColumnSettingsOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                    title="Ustawienia kolumn"
                  >
                    <Settings className="w-3.5 h-3.5 text-[#f26522]" />
                  </button>
                </div>
              </div>

              {/* Summary summary toggle checkbox/switch */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsSummarySummaryToggle(!isSummarySummaryToggle)}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors relative flex items-center ${
                    isSummarySummaryToggle ? "bg-[#f26522]" : "bg-white/20"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      isSummarySummaryToggle ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-xs text-neutral-300 font-medium select-none">Podsumowanie podsumowania</span>
              </div>
            </div>

            <div className="overflow-x-auto overflow-y-auto max-h-[380px] no-scrollbar">
              <table className="w-full text-left border-collapse text-xs">
                <thead className="sticky top-0 z-10 bg-[#0e0e0e]">
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[11px]">
                    <th className="py-3 px-4 font-semibold text-neutral-300">Produkt ↑</th>
                    {!isSummarySummaryToggle && <th className="py-3 px-4 font-semibold text-neutral-300">Kategoria ↑</th>}
                    {!isSummarySummaryToggle && <th className="py-3 px-4 font-semibold text-neutral-300">Parametr ↑</th>}
                    <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Liczba sprzedanych ↑</th>
                    <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Udział w liczbie sprzedanych ↑</th>
                    <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Udział w przychodzie ↑</th>
                    <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Przychód (zł) ↑</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300 font-sans">
                  {/* Total Row */}
                  <tr className="bg-white/5 font-bold text-white border-b border-white/10 sticky top-[37px] z-10">
                    <td className="py-3.5 px-4 text-white font-bold bg-[#141414]">Wszystkie produkty</td>
                    {!isSummarySummaryToggle && <td className="py-3.5 px-4 text-neutral-400 bg-[#141414]">wszystkie</td>}
                    {!isSummarySummaryToggle && <td className="py-3.5 px-4 text-neutral-500 bg-[#141414]">-</td>}
                    <td className="py-3.5 px-4 text-right font-bold text-white bg-[#141414]">{currentDataset.soldQty}</td>
                    <td className="py-3.5 px-4 text-right font-bold text-white bg-[#141414]">100%</td>
                    <td className="py-3.5 px-4 text-right font-bold text-white bg-[#141414]">100%</td>
                    <td className="py-3.5 px-4 text-right font-bold text-[#f26522] bg-[#141414]">{currentDataset.revenue} PLN</td>
                  </tr>

                  {/* Product Sales Rows */}
                  {currentDataset.products.map((row) => (
                    <tr key={row.id} className="hover:bg-white/[0.03] transition-colors border-b border-white/5">
                      <td className="py-3 px-4 text-neutral-200 font-medium">{row.product}</td>
                      {!isSummarySummaryToggle && <td className="py-3 px-4 text-neutral-400">{row.category}</td>}
                      {!isSummarySummaryToggle && <td className="py-3 px-4 text-neutral-500">{row.parameter || "-"}</td>}
                      <td className="py-3 px-4 text-right text-neutral-300 font-mono">{row.sold}</td>
                      <td className="py-3 px-4 text-right text-neutral-300 font-mono">{row.shareSold}</td>
                      <td className="py-3 px-4 text-right text-neutral-300 font-mono">{row.revenueShare}</td>
                      <td className="py-3 px-4 text-right text-neutral-200 font-mono font-medium">{row.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 6: Extras Table */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl overflow-hidden mt-6">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#141414]">
              <h3 className="text-sm font-bold text-white tracking-wide">Dodatki</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => exportToXLSX(extrasSummaryRows, "Extras_Summary.xlsx", "Extras Summary")}
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
              <table className="w-full text-left border-collapse text-xs">
                <thead className="sticky top-0 z-10 bg-[#0e0e0e]">
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[11px]">
                    <th className="py-3 px-4 font-semibold text-neutral-300">Produkt ↑</th>
                    <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Liczba sprzedanych ↑↓</th>
                    <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Udział ↑↓</th>
                    <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Przychód (zł) ↑↓</th>
                    <th className="py-3 px-4 font-semibold text-neutral-300 text-right">Udział w przychodzie ↑↓</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300 font-sans">
                  {/* Total Row */}
                  <tr className="bg-white/5 font-bold text-white border-b border-white/10 sticky top-[37px] z-10">
                    <td className="py-3.5 px-4 text-white font-bold bg-[#141414]">Wszystkie</td>
                    <td className="py-3.5 px-4 text-right font-bold text-white bg-[#141414]">108</td>
                    <td className="py-3.5 px-4 text-right font-bold text-white bg-[#141414]">100%</td>
                    <td className="py-3.5 px-4 text-right font-bold text-[#f26522] bg-[#141414]">79.00 PLN</td>
                    <td className="py-3.5 px-4 text-right font-bold text-white bg-[#141414]">100%</td>
                  </tr>

                  {/* Extras Rows */}
                  {extrasSummaryRows.map((row) => (
                    <tr key={row.id} className="hover:bg-white/[0.03] transition-colors border-b border-white/5">
                      <td className="py-3 px-4 text-neutral-200 font-medium">{row.product}</td>
                      <td className="py-3 px-4 text-right text-neutral-300 font-mono">{row.sold}</td>
                      <td className="py-3 px-4 text-right text-neutral-300 font-mono">{row.participation}</td>
                      <td className="py-3 px-4 text-right text-neutral-200 font-mono font-medium">{row.revenue}</td>
                      <td className="py-3 px-4 text-right text-neutral-300 font-mono">{row.revenueShare}</td>
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
