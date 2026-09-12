"use client";

import React from "react";
import { Settings } from "lucide-react";

export interface TotalSalesSummaryRow {
  channel: string;
  orders: number;
  shareOrders: string;
  cash: string;
  card: string;
  transfer: string;
  onlinePayment: string;
  revenue: string;
  revenueShare: string;
  avgOrderValue: string;
}

interface TotalSalesSummaryTableProps {
  summaryRows: TotalSalesSummaryRow[];
  visibleColumns: Record<string, boolean>;
  onOpenColumnSettings: () => void;
}

export default function TotalSalesSummaryTable({
  summaryRows,
  visibleColumns,
  onOpenColumnSettings,
}: TotalSalesSummaryTableProps) {
  return (
    <div className="bg-[#141414] border border-white/10 rounded-2xl relative shadow-xl">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <h3 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Podsumowanie</h3>
        <button
          type="button"
          onClick={onOpenColumnSettings}
          className="px-3 py-1.5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-[#f26522]/50 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
          title="Ustawienia kolumn"
        >
          <Settings className="w-3.5 h-3.5 text-[#f26522]" />
          <span>Ustawienia kolumn</span>
        </button>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
          <thead>
            <tr className="bg-[#0e0e0e] border-b border-white/10 text-neutral-400 text-[10px] sm:text-[11px]">
              {visibleColumns.salesChannel && <th className="py-2.5 px-2.5 sm:px-4 font-normal whitespace-nowrap">Kanał sprzedaży ↕</th>}
              {visibleColumns.ordersCompleted && <th className="py-2.5 px-2.5 sm:px-4 font-normal whitespace-nowrap">Zamówienia zrealizowane ↕</th>}
              {visibleColumns.shareOfOrders && <th className="py-2.5 px-2.5 sm:px-4 font-normal whitespace-nowrap">Udział w zamówieniach ↕</th>}
              {visibleColumns.cash && <th className="py-2.5 px-2.5 sm:px-4 font-normal whitespace-nowrap">Gotówka ↕</th>}
              {visibleColumns.card && <th className="py-2.5 px-2.5 sm:px-4 font-normal whitespace-nowrap">Karta ↕</th>}
              {visibleColumns.transfer && <th className="py-2.5 px-2.5 sm:px-4 font-normal whitespace-nowrap">Przelew ↕</th>}
              {visibleColumns.onlinePayment && <th className="py-2.5 px-2.5 sm:px-4 font-normal whitespace-nowrap">Płatność online ↕</th>}
              {visibleColumns.revenue && <th className="py-2.5 px-2.5 sm:px-4 font-normal whitespace-nowrap">Przychód (zł) ↓</th>}
              {visibleColumns.revenueShare && <th className="py-2.5 px-2.5 sm:px-4 font-normal whitespace-nowrap">Udział w przychodzie ↕</th>}
              {visibleColumns.avgOrderValue && <th className="py-2.5 px-2.5 sm:px-4 font-normal whitespace-nowrap">Średnia wartość zamówienia ↕</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-neutral-300">
            {summaryRows.map((row, idx) => (
              <tr
                key={idx}
                className={idx === 0 ? "bg-white/5 font-medium" : "hover:bg-white/[0.02] transition-colors"}
              >
                {visibleColumns.salesChannel && (
                  <td className={`py-2 px-2.5 sm:px-4 whitespace-nowrap ${idx === 0 ? "text-white font-bold" : "text-neutral-200"}`}>
                    {row.channel}
                  </td>
                )}
                {visibleColumns.ordersCompleted && (
                  <td className="py-2 px-2.5 sm:px-4 whitespace-nowrap">
                    <div>{row.orders}</div>
                    {idx === 0 && <div className="text-[10px] text-emerald-400">288.87%</div>}
                  </td>
                )}
                {visibleColumns.shareOfOrders && (
                  <td className="py-2 px-2.5 sm:px-4 whitespace-nowrap">
                    <div>{row.shareOrders}</div>
                    {idx === 0 && <div className="text-[10px] text-neutral-500">0.00 p.p.</div>}
                  </td>
                )}
                {visibleColumns.cash && <td className="py-2 px-2.5 sm:px-4 whitespace-nowrap">{row.cash}</td>}
                {visibleColumns.card && <td className="py-2 px-2.5 sm:px-4 whitespace-nowrap">{row.card}</td>}
                {visibleColumns.transfer && <td className="py-2 px-2.5 sm:px-4 whitespace-nowrap">{row.transfer}</td>}
                {visibleColumns.onlinePayment && <td className="py-2 px-2.5 sm:px-4 whitespace-nowrap">{row.onlinePayment}</td>}
                {visibleColumns.revenue && (
                  <td className={`py-2 px-2.5 sm:px-4 whitespace-nowrap font-semibold ${idx === 0 ? "text-white" : "text-neutral-200"}`}>
                    {row.revenue}
                  </td>
                )}
                {visibleColumns.revenueShare && <td className="py-2 px-2.5 sm:px-4 whitespace-nowrap">{row.revenueShare}</td>}
                {visibleColumns.avgOrderValue && <td className="py-2 px-2.5 sm:px-4 whitespace-nowrap">{row.avgOrderValue}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
