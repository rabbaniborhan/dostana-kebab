"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import ColumnSettingsModal from "@/components/ColumnSettingsModal";
import StatCard from "@/components/StatCard";
import { Package, RotateCcw, Wallet, ExternalLink, Download, Settings } from "lucide-react";

import { exportToCSV } from "@/utils/excelExport";

export default function DepositPackagingPage() {
  const depositRows = [
    {
      packagingName: "Wszystkie opakowania kaucyjne",
      issuedQty: 0,
      returnedQty: 0,
      balanceQty: 0,
      issuedValue: "0,00 PLN",
      returnedValue: "0,00 PLN",
      balanceValue: "0,00 PLN",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activePreset, setActivePreset] = useState("this month");
  const [startDate, setStartDate] = useState("09/01/2026");
  const [endDate, setEndDate] = useState("09/07/2026");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("All venues");
  const [selectedSalesChannel, setSelectedSalesChannel] = useState("All channels");
  const [isColumnSettingsOpen, setIsColumnSettingsOpen] = useState(false);

  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>({
    packagingName: true,
    issuedQty: true,
    returnedQty: true,
    balanceQty: true,
    issuedValue: true,
    returnedValue: true,
    balanceValue: true,
  });

  const columnLabels: Record<string, string> = {
    packagingName: "Opakowanie",
    issuedQty: "Liczba wydanych",
    returnedQty: "Liczba zwróconych",
    balanceQty: "Bilans (szt.)",
    issuedValue: "Wartość wydanych (zł)",
    returnedValue: "Wartość zwróconych (zł)",
    balanceValue: "Bilans (zł)",
  };

  const handleToggleColumn = (key: string) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const VENUE_DEPOSITS: Record<string, {
    issued: string;
    returned: string;
    balance: string;
    rows: typeof depositRows;
  }> = {
    "Wszystkie lokale": {
      issued: "125 szt.",
      returned: "110 szt.",
      balance: "30,00 zł",
      rows: [
        { packagingName: "Opakowanie kaucyjne Burger Box", issuedQty: 65, returnedQty: 60, balanceQty: 5, issuedValue: "130,00 PLN", returnedValue: "120,00 PLN", balanceValue: "10,00 PLN" },
        { packagingName: "Opakowanie kaucyjne Rollo Box", issuedQty: 60, returnedQty: 50, balanceQty: 10, issuedValue: "120,00 PLN", returnedValue: "100,00 PLN", balanceValue: "20,00 PLN" },
      ]
    },
    "Dostana Kebab Wróbla": {
      issued: "45 szt.",
      returned: "40 szt.",
      balance: "10,00 zł",
      rows: [
        { packagingName: "Opakowanie kaucyjne Burger Box", issuedQty: 45, returnedQty: 40, balanceQty: 5, issuedValue: "90,00 PLN", returnedValue: "80,00 PLN", balanceValue: "10,00 PLN" }
      ]
    },
    "Dostana Kebab Lipowa": {
      issued: "35 szt.",
      returned: "32 szt.",
      balance: "6,00 zł",
      rows: [
        { packagingName: "Opakowanie kaucyjne Rollo Box", issuedQty: 35, returnedQty: 32, balanceQty: 3, issuedValue: "70,00 PLN", returnedValue: "64,00 PLN", balanceValue: "6,00 PLN" }
      ]
    },
    "Dostana Kebab Krakowskie Przedmieście": {
      issued: "45 szt.",
      returned: "38 szt.",
      balance: "14,00 zł",
      rows: [
        { packagingName: "Opakowanie kaucyjne Burger Box", issuedQty: 20, returnedQty: 18, balanceQty: 2, issuedValue: "40,00 PLN", returnedValue: "36,00 PLN", balanceValue: "4,00 PLN" },
        { packagingName: "Opakowanie kaucyjne Rollo Box", issuedQty: 25, returnedQty: 20, balanceQty: 5, issuedValue: "50,00 PLN", returnedValue: "40,00 PLN", balanceValue: "10,00 PLN" },
      ]
    },
    "Dostana Kebab Sympatyczna": {
      issued: "0 szt.",
      returned: "0 szt.",
      balance: "0,00 zł",
      rows: []
    },
    "Dostana Kebab Nadbystrzycka": {
      issued: "0 szt.",
      returned: "0 szt.",
      balance: "0,00 zł",
      rows: []
    },
    "Dostana Kebab Turystyczna": {
      issued: "0 szt.",
      returned: "0 szt.",
      balance: "0,00 zł",
      rows: []
    }
  };

  const currentDeposit = VENUE_DEPOSITS[selectedVenue] || VENUE_DEPOSITS["Wszystkie lokale"];

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
          {/* Header Title & Action */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white tracking-tight">Opakowania kaucyjne</h1>
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
            selectedSalesChannel={selectedSalesChannel}
            onSalesChannelChange={setSelectedSalesChannel}
            onExportCSV={() => exportToCSV(currentDeposit.rows, "Opakowania_Kaucyjne_Raport.csv")}
          />

          {/* KPI Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Liczba wydanych"
              value={currentDeposit.issued}
              icon={<Package className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Liczba zwróconych"
              value={currentDeposit.returned}
              icon={<RotateCcw className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Bilans wartości"
              value={currentDeposit.balance}
              icon={<Wallet className="w-4.5 h-4.5" />}
            />
          </div>

          {/* Table */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl">
            <div className="p-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Raport kaucyjny</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsColumnSettingsOpen(true)}
                  className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="Ustawienia kolumn"
                >
                  <Settings className="w-3.5 h-3.5 text-[#f26522]" />
                  <span>Ustawienia kolumn</span>
                </button>
                <button
                  type="button"
                  onClick={() => exportToCSV(currentDeposit.rows, "Opakowania_Kaucyjne_Raport.csv")}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0e0e0e] border border-white/10 hover:border-white/20 rounded-lg text-xs font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#f26522]" />
                  <span>Pobierz</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                <thead>
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[10px] sm:text-[11px]">
                    {visibleColumns.packagingName && <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-neutral-300 whitespace-nowrap">Opakowanie ↕</th>}
                    {visibleColumns.issuedQty && <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-center whitespace-nowrap">Liczba wydanych ↕</th>}
                    {visibleColumns.returnedQty && <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-center whitespace-nowrap">Liczba zwróconych ↕</th>}
                    {visibleColumns.balanceQty && <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-center whitespace-nowrap">Bilans (szt.) ↕</th>}
                    {visibleColumns.issuedValue && <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-right whitespace-nowrap">Wartość wydanych (zł) ↕</th>}
                    {visibleColumns.returnedValue && <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-right whitespace-nowrap">Wartość zwróconych (zł) ↕</th>}
                    {visibleColumns.balanceValue && <th className="py-2.5 px-2.5 sm:px-4 font-semibold text-right whitespace-nowrap">Bilans (zł) ↕</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  {currentDeposit.rows.map((row, idx) => (
                    <tr key={idx} className="bg-white/5 font-medium hover:bg-white/10 transition-colors">
                      {visibleColumns.packagingName && <td className="py-2.5 px-2.5 sm:px-4 text-white whitespace-nowrap">{row.packagingName}</td>}
                      {visibleColumns.issuedQty && <td className="py-2.5 px-2.5 sm:px-4 text-center whitespace-nowrap">{row.issuedQty}</td>}
                      {visibleColumns.returnedQty && <td className="py-2.5 px-2.5 sm:px-4 text-center whitespace-nowrap">{row.returnedQty}</td>}
                      {visibleColumns.balanceQty && <td className="py-2.5 px-2.5 sm:px-4 text-center whitespace-nowrap">{row.balanceQty}</td>}
                      {visibleColumns.issuedValue && <td className="py-2.5 px-2.5 sm:px-4 text-right font-medium whitespace-nowrap">{row.issuedValue}</td>}
                      {visibleColumns.returnedValue && <td className="py-2.5 px-2.5 sm:px-4 text-right font-medium whitespace-nowrap">{row.returnedValue}</td>}
                      {visibleColumns.balanceValue && <td className="py-2.5 px-2.5 sm:px-4 text-right font-medium whitespace-nowrap">{row.balanceValue}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {currentDeposit.rows.length === 0 && (
              <div className="p-8 text-center border-t border-white/5 bg-[#0e0e0e]/50">
                <Package className="w-8 h-8 text-neutral-600 mx-auto mb-2 opacity-60" />
                <p className="text-xs text-neutral-400 font-medium">Nie znaleziono opakowań kaucyjnych</p>
              </div>
            )}
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
