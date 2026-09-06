"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import StatsFilterBar from "@/components/StatsFilterBar";
import ColumnSettingsModal from "@/components/ColumnSettingsModal";
import StatCard from "@/components/StatCard";
import { Package, RotateCcw, Wallet, ExternalLink, Download, Settings } from "lucide-react";

export default function DepositPackagingPage() {
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
    packagingName: "Opakowanie (Packaging)",
    issuedQty: "Liczba wydanych (Issued Qty)",
    returnedQty: "Liczba zwróconych (Returned Qty)",
    balanceQty: "Bilans (szt.) (Balance Qty)",
    issuedValue: "Wartość wydanych (zł) (Issued Value)",
    returnedValue: "Wartość zwróconych (zł) (Returned Value)",
    balanceValue: "Bilans (zł) (Balance Value)",
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
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white tracking-tight">Opakowania kaucyjne (Deposit packaging)</h1>
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
            selectedSalesChannel={selectedSalesChannel}
            onSalesChannelChange={setSelectedSalesChannel}
            onExportCSV={() => alert("Downloading deposit report...")}
          />

          {/* KPI Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Liczba wydanych (Issued Qty)"
              value="0 szt."
              icon={<Package className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Liczba zwróconych (Returned Qty)"
              value="0 szt."
              icon={<RotateCcw className="w-4.5 h-4.5" />}
            />
            <StatCard
              title="Bilans wartości (Value Balance)"
              value="0,00 zł"
              icon={<Wallet className="w-4.5 h-4.5" />}
            />
          </div>

          {/* Table */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Raport kaucyjny (Deposit Report)</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsColumnSettingsOpen(true)}
                  className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="Configure Columns"
                >
                  <Settings className="w-3.5 h-3.5 text-[#f26522]" />
                  <span>Column Settings</span>
                </button>
                <button
                  type="button"
                  onClick={() => alert("Downloading report...")}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0e0e0e] border border-white/10 hover:border-white/20 rounded-lg text-xs font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#f26522]" />
                  <span>Pobierz (Download)</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[11px]">
                    {visibleColumns.packagingName && <th className="py-3 px-4 font-semibold text-neutral-300">Opakowanie ↕</th>}
                    {visibleColumns.issuedQty && <th className="py-3 px-4 font-semibold text-center">Liczba wydanych ↕</th>}
                    {visibleColumns.returnedQty && <th className="py-3 px-4 font-semibold text-center">Liczba zwróconych ↕</th>}
                    {visibleColumns.balanceQty && <th className="py-3 px-4 font-semibold text-center">Bilans (szt.) ↕</th>}
                    {visibleColumns.issuedValue && <th className="py-3 px-4 font-semibold text-right">Wartość wydanych (zł) ↕</th>}
                    {visibleColumns.returnedValue && <th className="py-3 px-4 font-semibold text-right">Wartość zwróconych (zł) ↕</th>}
                    {visibleColumns.balanceValue && <th className="py-3 px-4 font-semibold text-right">Bilans (zł) ↕</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  <tr className="bg-white/5 font-bold hover:bg-white/10 transition-colors">
                    {visibleColumns.packagingName && <td className="py-3.5 px-4 text-white">Wszystkie opakowania kaucyjne</td>}
                    {visibleColumns.issuedQty && <td className="py-3.5 px-4 text-center">0</td>}
                    {visibleColumns.returnedQty && <td className="py-3.5 px-4 text-center">0</td>}
                    {visibleColumns.balanceQty && <td className="py-3.5 px-4 text-center">0</td>}
                    {visibleColumns.issuedValue && <td className="py-3.5 px-4 text-right font-medium">0,00</td>}
                    {visibleColumns.returnedValue && <td className="py-3.5 px-4 text-right font-medium">0,00</td>}
                    {visibleColumns.balanceValue && <td className="py-3.5 px-4 text-right font-medium">0,00</td>}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-8 text-center border-t border-white/5 bg-[#0e0e0e]/50">
              <Package className="w-8 h-8 text-neutral-600 mx-auto mb-2 opacity-60" />
              <p className="text-xs text-neutral-400 font-medium">Nie znaleziono opakowań kaucyjnych</p>
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
