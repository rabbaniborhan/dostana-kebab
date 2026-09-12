"use client";

import React, { useState } from "react";
import CustomDropdown from "@/components/CustomDropdown";

export interface ComboChartDataItem {
  date: string;
  revenue: number;
  prevRevenue: number;
  orders: number;
  prevOrders: number | null;
  revPct: number;
  prevRevPct: number;
}

export interface ChannelsDataItem {
  date: string;
  incomeWeb: number;
  incomeVoice: number;
  prevIncomeWeb: number;
  prevIncomeVoice: number;
  ordersWeb: number;
  ordersVoice: number;
  prevOrdersWeb: number;
  prevOrdersVoice: number;
  incomeWebPct: number;
  incomeVoicePct: number;
  prevIncomeWebPct: number;
  ordersWebPct: number;
  ordersVoicePct: number;
  prevOrdersWebPct: number;
}

interface TotalSalesChartCardProps {
  comboChartData: ComboChartDataItem[];
  channelsData: ChannelsDataItem[];
}

export default function TotalSalesChartCard({
  comboChartData,
  channelsData,
}: TotalSalesChartCardProps) {
  const [selectedView, setSelectedView] = useState<"total" | "by_sales_channels">("total");
  const [channelMetric, setChannelMetric] = useState<"income" | "orders">("income");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 space-y-6 relative shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-base font-semibold text-white">Sprzedaż</h2>
          <CustomDropdown
            options={["Łącznie", "wg kanałów sprzedaży"]}
            selectedOption={selectedView === "total" ? "Łącznie" : "wg kanałów sprzedaży"}
            onSelect={(opt) => setSelectedView(opt === "Łącznie" ? "total" : "by_sales_channels")}
            className="w-48"
          />

          {selectedView === "by_sales_channels" && (
            <div className="flex items-center bg-[#0e0e0e] border border-white/10 p-0.5 rounded-lg">
              <button
                onClick={() => setChannelMetric("income")}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  channelMetric === "income" ? "bg-[#f26522] text-white font-bold" : "text-neutral-400 hover:text-white"
                }`}
              >
                Przychód
              </button>
              <button
                onClick={() => setChannelMetric("orders")}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  channelMetric === "orders" ? "bg-[#f26522] text-white font-bold" : "text-neutral-400 hover:text-white"
                }`}
              >
                Zamówienia
              </button>
            </div>
          )}
        </div>
      </div>

      {/* VIEW MODE 1: TOTAL (Combo Bar & Line Chart with Points, Legend & Tooltip) */}
      {selectedView === "total" && (
        <div className="space-y-4">
          {/* Scrollable Container for Mobile */}
          <div className="overflow-x-auto no-scrollbar pb-2">
            <div className="min-w-[650px]">
              <div className="relative h-64 border-b border-white/10 pt-4 pb-2 px-12 sm:px-20 flex items-end justify-between">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] sm:text-[10px] text-neutral-400 font-medium whitespace-nowrap">
                  Przychód (zł)
                </span>

                <div className="absolute left-6 sm:left-10 top-2 bottom-6 flex flex-col justify-between text-[9px] sm:text-[10px] text-neutral-400 font-mono text-right w-6">
                  <span>300</span><span>250</span><span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
                </div>

                <div className="absolute right-6 sm:right-10 top-2 bottom-6 flex flex-col justify-between text-[9px] sm:text-[10px] text-neutral-400 font-mono text-left w-6">
                  <span>4.0</span><span>3.5</span><span>3.0</span><span>2.5</span><span>2.0</span><span>1.5</span><span>1.0</span><span>0.5</span><span>0</span>
                </div>

                <span className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[9px] sm:text-[10px] text-neutral-400 font-medium whitespace-nowrap">
                  Zamówienia
                </span>

                <div className="absolute inset-x-12 sm:inset-x-20 top-4 bottom-6 flex flex-col justify-between pointer-events-none">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="border-b border-white/5 w-full" />
                  ))}
                </div>

                {/* Line Chart Paths */}
                <svg className="absolute inset-x-12 sm:inset-x-20 top-4 bottom-6 w-[calc(100%-6rem)] sm:w-[calc(100%-10rem)] h-[calc(100%-2.5rem)] pointer-events-none overflow-visible z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 8.33 25 L 25.0 25 L 41.67 0 L 58.33 75 L 75.0 50 L 91.67 25" fill="none" stroke="#38bdf8" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path d="M 8.33 75 L 25.0 75 L 41.67 75 L 58.33 75 L 75.0 25" fill="none" stroke="#fbbf24" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                </svg>

                {/* Line Chart Item Dots / Points */}
                <div className="absolute inset-x-12 sm:inset-x-20 top-4 bottom-6 pointer-events-none z-20">
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
                      <div style={{ height: `${d.revPct}%` }} className="w-8 sm:w-14 bg-[#f26522] rounded-t-md transition-all group-hover:brightness-125 shadow-lg shadow-[#f26522]/10" />
                      <div style={{ height: `${d.prevRevPct}%` }} className="w-5 sm:w-10 bg-[#f26522]/30 border border-[#f26522]/40 rounded-t-md transition-all group-hover:bg-[#f26522]/50" />

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

              <div className="flex justify-between px-12 sm:px-20 text-[10px] sm:text-[11px] text-neutral-400 font-mono mt-2">
                {comboChartData.map((d) => <span key={d.date}>{d.date}</span>)}
              </div>
            </div>
          </div>

          {/* Chart Color Legend Footer */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-1 text-xs text-neutral-400">
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
        </div>
      )}

      {/* VIEW MODE 2: BY SALES CHANNELS (Stacked Channel Bar Chart with Legend & Tooltip) */}
      {selectedView === "by_sales_channels" && (
        <div className="space-y-4">
          <div className="overflow-x-auto no-scrollbar pb-2">
            <div className="min-w-[650px]">
              <div className="relative h-64 border-b border-white/10 pt-4 pb-2 px-12 sm:px-20 flex items-end justify-between">
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
                        <div style={{ height: `${totalPct}%` }} className="w-8 sm:w-14 flex flex-col justify-end rounded-t-md overflow-hidden transition-all shadow-lg shadow-[#f26522]/10">
                          {voicePct > 0 && <div style={{ height: `${(voicePct / totalPct) * 100}%` }} className="w-full bg-[#fbbf24]" />}
                          <div style={{ height: `${(webPct / totalPct) * 100}%` }} className="w-full bg-[#f26522]" />
                        </div>
                        <div style={{ height: `${prevPct}%` }} className="w-5 sm:w-10 bg-[#f26522]/30 border border-[#f26522]/40 rounded-t-md" />

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

              <div className="flex justify-between px-12 sm:px-20 text-[10px] sm:text-[11px] text-neutral-400 font-mono mt-2">
                {channelsData.map((d) => <span key={d.date}>{d.date}</span>)}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-1 text-xs text-neutral-400">
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
        </div>
      )}
    </div>
  );
}
