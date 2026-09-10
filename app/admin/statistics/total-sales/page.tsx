"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import AdminPageHeader from "@/components/AdminPageHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import ColumnSettingsModal from "@/components/ColumnSettingsModal";
import StatCard from "@/components/StatCard";
import DonutChartCard from "@/components/DonutChartCard";
import TotalSalesChartCard from "@/components/statistics/TotalSalesChartCard";
import TotalSalesSummaryTable from "@/components/statistics/TotalSalesSummaryTable";
import { ShoppingBag, Wallet, CreditCard } from "lucide-react";
import { exportMultipleCSVs } from "@/utils/excelExport";

import { 
  TOTAL_SALES_VENUE_DATASET, 
  TOTAL_SALES_COMBO_CHART, 
  TOTAL_SALES_CHANNELS_DATA 
} from "@/lib/statsData";

export default function TotalSalesPage() {
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
    salesChannel: "Kanał sprzedaży",
    ordersCompleted: "Zamówienia zrealizowane",
    shareOfOrders: "Udział w zamówieniach",
    cash: "Gotówka",
    card: "Karta",
    transfer: "Przelew",
    onlinePayment: "Płatność online",
    revenue: "Przychód (zł)",
    revenueShare: "Udział w przychodzie",
    avgOrderValue: "Średnia wartość zamówienia",
  };

  const handleToggleColumn = (key: string) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentDataset = TOTAL_SALES_VENUE_DATASET[selectedVenue] || TOTAL_SALES_VENUE_DATASET["Wszystkie lokale"];
  const comboChartData = TOTAL_SALES_COMBO_CHART[selectedVenue] || TOTAL_SALES_COMBO_CHART["Wszystkie lokale"];
  const channelsData = TOTAL_SALES_CHANNELS_DATA;

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
          {/* Reusable Admin Header */}
          <AdminPageHeader
            title="Sprzedaż całkowita"
            subtitle={`Okresy porównania: 4 dni (${startDate} - ${endDate}) do 4 dni w ubiegłym roku`}
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
            onExportCSV={() =>
              exportMultipleCSVs([
                { filename: "Sprzedaz_Calkowita_Wykres.csv", data: comboChartData },
                { filename: "Sprzedaz_Kanaly_Data.csv", data: channelsData },
                { filename: "Sprzedaz_Podsumowanie_Tabela.csv", data: currentDataset.summaryRows },
              ])
            }
          />

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Zamówienia zrealizowane"
              value={currentDataset.orders}
              changePct={currentDataset.ordersChange}
              isPositive={true}
              icon={<ShoppingBag className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Przychód (zł)"
              value={currentDataset.revenue}
              changePct={currentDataset.revenueChange}
              isPositive={true}
              icon={<Wallet className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Średnia wartość zamówienia (zł)"
              value={currentDataset.avgOrder}
              changePct={currentDataset.avgOrderChange}
              isPositive={true}
              icon={<CreditCard className="w-4.5 h-4.5" />}
            />
          </div>

          {/* Modular Chart Card Component */}
          <TotalSalesChartCard
            comboChartData={comboChartData}
            channelsData={channelsData}
          />

          {/* Donut Chart Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DonutChartCard
              title="Udział w przychodzie"
              centerText={`${currentDataset.webPct.toFixed(1)}%`}
              centerSubtext="Strona WWW"
              segments={[
                { label: "Strona WWW", percentage: currentDataset.webPct, color: "#f26522" },
                { label: "Zamówienie głosowe", percentage: currentDataset.voicePct, color: "#fbbf24" },
              ]}
            />

            <DonutChartCard
              title="Udział w liczbie zamówień"
              centerText={`${currentDataset.webPct.toFixed(1)}%`}
              centerSubtext="Strona WWW"
              segments={[
                { label: "Strona WWW", percentage: currentDataset.webPct, color: "#f26522" },
                { label: "Zamówienie głosowe", percentage: currentDataset.voicePct, color: "#fbbf24" },
              ]}
            />
          </div>

          {/* Modular Summary Table Component */}
          <TotalSalesSummaryTable
            summaryRows={currentDataset.summaryRows}
            visibleColumns={visibleColumns}
            onOpenColumnSettings={() => setIsColumnSettingsOpen(true)}
          />

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
