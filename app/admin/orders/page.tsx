"use client";

import React, { useState } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import CustomDatePicker from "@/components/CustomDatePicker";
import { LOCATIONS } from "../../data/restaurantData";
import { 
  CalendarDays, 
  ArrowUpRight, 
  Search, 
  Filter, 
  Settings, 
  Clock, 
  UtensilsCrossed, 
  ShoppingBag, 
  CheckCircle2, 
  XCircle,
  ChevronDown
} from "lucide-react";

const INITIAL_ORDERS = [
  {
    id: "60531484",
    orderNumber: 2,
    startOrder: "03.09.2026 19:05",
    placingOrder: "03.09.2026 19:05",
    serviceTime: "16s",
    customer: "Aneta Dziadosz",
    phone: "+48665768205",
    address: "20-283 Lublin, Zygmunta Augusta 39, m. 40",
    location: "Dostana Kebab Krakowskie",
    items: [
      { name: "Kebab Rollo Wołowina (Duży)", qty: 2, price: 32 },
      { name: "Frytki Belgijskie", qty: 1, price: 14 }
    ],
    total: 76.99,
    status: "Delivered",
    statusText: "✓ 19:26 (19 minut)",
    payment: "Płatność online",
    source: "Strona WWW",
    type: "Dostawa"
  },
  {
    id: "76164876",
    orderNumber: 1,
    startOrder: "03.09.2026 19:00",
    placingOrder: "03.09.2026 19:00",
    serviceTime: "17m",
    customer: "Jarosław Majek",
    phone: "+48505284867",
    address: "20-356 Lublin, Krańcowa 76B, lok 52",
    location: "Dostana Kebab Krakowskie",
    items: [
      { name: "Dostana Box Specjalny", qty: 2, price: 38 },
      { name: "Sosy Dodatkowe", qty: 2, price: 5 }
    ],
    total: 97.40,
    status: "Cancelled",
    statusText: "✕ Odrzucono: Przekroczono czas realizowania",
    payment: "Karta przy odbiorze",
    source: "Strona WWW",
    type: "Dostawa"
  },
  {
    id: "84467815",
    orderNumber: 2,
    startOrder: "03.09.2026 18:34",
    placingOrder: "03.09.2026 18:34",
    serviceTime: "14s",
    customer: "Marcin Ciechoński",
    phone: "+48501234567",
    address: "20-468 Lublin, Zbigniewa 12",
    location: "Dostana Kebab Nadbystrzycka",
    items: [
      { name: "Kebab Talerz Kurczak", qty: 1, price: 35 },
      { name: "Ayran Klasyczny", qty: 2, price: 7 }
    ],
    total: 65.99,
    status: "Delivered",
    statusText: "✓ 18:44 (9 minut)",
    payment: "Płatność online",
    source: "Strona WWW",
    type: "Dostawa"
  },
  {
    id: "92314502",
    orderNumber: 3,
    startOrder: "03.09.2026 18:15",
    placingOrder: "03.09.2026 18:15",
    serviceTime: "22s",
    customer: "Katarzyna Wójcik",
    phone: "+48602987654",
    address: "Odbiór osobisty w lokalu",
    location: "Dostana Kebab Głuska",
    items: [
      { name: "Vege Falafel Rollo", qty: 2, price: 28 }
    ],
    total: 56.00,
    status: "Preparing",
    statusText: "⏳ W realizacji (w trakcie)",
    payment: "Gotówka w lokalu",
    source: "Strona WWW",
    type: "Odbiór osobisty"
  }
];

export default function AdminOrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [selectedOrder, setSelectedOrder] = useState<typeof INITIAL_ORDERS[0] | null>(null);

  const [startDate, setStartDate] = useState("05/08/2026");
  const [endDate, setEndDate] = useState("09/04/2026");
  const [startPickerOpen, setStartPickerOpen] = useState(false);
  const [endPickerOpen, setEndPickerOpen] = useState(false);
  const [viewDateStart, setViewDateStart] = useState(new Date(2026, 4, 8));
  const [viewDateEnd, setViewDateEnd] = useState(new Date(2026, 8, 4));

  // Advanced Search Panel Toggle & Form States
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [filterStatus, setFilterStatus] = useState("Wszystkie statusy (All statuses)");
  const [filterId, setFilterId] = useState("");
  const [filterOrderNum, setFilterOrderNum] = useState("");
  const [filterClientPhone, setFilterClientPhone] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterStreet, setFilterStreet] = useState("");
  const [filterPayment, setFilterPayment] = useState("Wszystkie płatności (All payments)");
  const [filterFulfillment, setFilterFulfillment] = useState("Wszystkie sposoby (All methods)");
  const [filterVenue, setFilterVenue] = useState("Wszystkie lokale (All venues)");
  const [filterSource, setFilterSource] = useState("Wszystkie źródła (All sources)");
  const [filterNip, setFilterNip] = useState("");
  const [filterInvoiceNum, setFilterInvoiceNum] = useState("");
  const [filterDiscounted, setFilterDiscounted] = useState(false);
  const [filterWithInvoice, setFilterWithInvoice] = useState(false);
  const [filterPreorder, setFilterPreorder] = useState(false);

  // Dropdown open states
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);
  const [isFulfillmentDropdownOpen, setIsFulfillmentDropdownOpen] = useState(false);
  const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);
  const [isSourceDropdownOpen, setIsSourceDropdownOpen] = useState(false);

  // Table Column Toggle States
  const [isColumnPickerOpen, setIsColumnPickerOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    number: true,
    startOrder: true,
    placingOrder: true,
    serviceTime: true,
    status: true,
    client: true,
    address: true,
    payment: true,
    local: true,
    source: true,
    together: true,
  });

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const toggleColumn = (key: keyof typeof visibleColumns) => {
    setVisibleColumns((prev: typeof visibleColumns) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAllColumns = (show: boolean) => {
    setVisibleColumns({
      id: show,
      number: show,
      startOrder: show,
      placingOrder: show,
      serviceTime: show,
      status: show,
      client: show,
      address: show,
      payment: show,
      local: show,
      source: show,
      together: show,
    });
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex font-lato">
      <AdminSidebar pendingOrdersCount={1} pendingReservationsCount={1} />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeTab="orders"
          onRefresh={() => {}}
        />

        <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1 overflow-y-auto">
          <div className="space-y-6 animate-fadeIn">
            {/* Header & Date Range Toolbar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#151515] border border-white/10 p-5 rounded-3xl relative z-30">
              <div className="flex items-center gap-3 flex-wrap">
                {/* Start Date Picker */}
                <CustomDatePicker
                  label="Od:"
                  value={startDate}
                  onChange={setStartDate}
                />

                {/* End Date Picker */}
                <CustomDatePicker
                  label="Do:"
                  value={endDate}
                  onChange={setEndDate}
                />
              </div>

              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-neutral-300 flex items-center gap-2 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" /> Export
                </button>
                <button
                  type="button"
                  onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                    showAdvancedSearch
                      ? "bg-[#f26522] text-white shadow-lg shadow-[#f26522]/30"
                      : "flame-btn-gradient text-white shadow-lg shadow-[#f26522]/20 hover:opacity-95"
                  }`}
                >
                  <Search className="w-4 h-4" />
                  <span>Szukaj (Search Filters)</span>
                  {showAdvancedSearch && <span className="w-1.5 h-1.5 rounded-full bg-white ml-0.5" />}
                </button>
              </div>
            </div>

            {/* Collapsible Advanced Search Panel (Matching all 13 inputs from user screenshot) */}
            {showAdvancedSearch && (
              <div className="bg-[#151515] border border-white/10 p-6 rounded-3xl space-y-5 animate-fadeIn shadow-2xl relative z-20">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                    <Filter className="w-4 h-4 text-[#f26522]" />
                    <span>Zaawansowane wyszukiwanie (Advanced Search Filters)</span>
                  </div>
                  <button
                    onClick={() => {
                      setFilterStatus("Wszystkie statusy (All statuses)");
                      setFilterId("");
                      setFilterOrderNum("");
                      setFilterClientPhone("");
                      setFilterCity("");
                      setFilterStreet("");
                      setFilterPayment("Wszystkie płatności (All payments)");
                      setFilterFulfillment("Wszystkie sposoby (All methods)");
                      setFilterVenue("Wszystkie lokale (All venues)");
                      setFilterSource("Wszystkie źródła (All sources)");
                      setFilterNip("");
                      setFilterInvoiceNum("");
                      setFilterDiscounted(false);
                      setFilterWithInvoice(false);
                      setFilterPreorder(false);
                    }}
                    className="text-xs text-[#f26522] hover:underline font-semibold"
                  >
                    Wyczyść filtry (Clear filters)
                  </button>
                </div>

                {/* 12 Grid Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
                  {/* Field 1: Status */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Status</label>
                    <div className="relative" tabIndex={0} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsStatusDropdownOpen(false); }}>
                      <button
                        type="button"
                        onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                        className="w-full bg-[#0e0e0e] border border-white/15 hover:border-white/25 text-xs text-white rounded-xl px-3.5 py-2.5 flex items-center justify-between focus:outline-none focus:border-[#f26522] font-medium"
                      >
                        <span className="truncate">{filterStatus}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#f26522] transition-transform ${isStatusDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isStatusDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-[#1a1a1a] border border-white/15 rounded-xl shadow-2xl z-50 p-1 space-y-0.5 max-h-48 overflow-y-auto">
                          {["Wszystkie statusy (All statuses)", "Delivered", "Cancelled", "Preparing", "New"].map((st) => (
                            <button
                              key={st}
                              type="button"
                              onClick={() => { setFilterStatus(st); setIsStatusDropdownOpen(false); }}
                              className={`w-full text-left px-3 py-2 rounded-lg ${filterStatus === st ? "bg-[#f26522]/20 text-[#f26522] font-bold" : "text-neutral-300 hover:bg-white/5 hover:text-white"}`}
                            >
                              {st}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Field 2: ID */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">ID</label>
                    <input
                      type="text"
                      placeholder="np. 60531484"
                      value={filterId}
                      onChange={(e) => setFilterId(e.target.value)}
                      className="w-full bg-[#0e0e0e] border border-white/15 focus:border-[#f26522] text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none placeholder-neutral-600 transition-colors"
                    />
                  </div>

                  {/* Field 3: Numer zamówienia */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Numer zamówienia</label>
                    <input
                      type="text"
                      placeholder="np. 2"
                      value={filterOrderNum}
                      onChange={(e) => setFilterOrderNum(e.target.value)}
                      className="w-full bg-[#0e0e0e] border border-white/15 focus:border-[#f26522] text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none placeholder-neutral-600 transition-colors"
                    />
                  </div>

                  {/* Field 4: Telefon klienta */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Telefon klienta</label>
                    <input
                      type="text"
                      placeholder="+48 000 000 000"
                      value={filterClientPhone}
                      onChange={(e) => setFilterClientPhone(e.target.value)}
                      className="w-full bg-[#0e0e0e] border border-white/15 focus:border-[#f26522] text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none placeholder-neutral-600 transition-colors"
                    />
                  </div>

                  {/* Field 5: Miasto */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Miasto</label>
                    <input
                      type="text"
                      placeholder="Lublin"
                      value={filterCity}
                      onChange={(e) => setFilterCity(e.target.value)}
                      className="w-full bg-[#0e0e0e] border border-white/15 focus:border-[#f26522] text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none placeholder-neutral-600 transition-colors"
                    />
                  </div>

                  {/* Field 6: Ulica */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Ulica</label>
                    <input
                      type="text"
                      placeholder="Zygmunta Augusta 39"
                      value={filterStreet}
                      onChange={(e) => setFilterStreet(e.target.value)}
                      className="w-full bg-[#0e0e0e] border border-white/15 focus:border-[#f26522] text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none placeholder-neutral-600 transition-colors"
                    />
                  </div>

                  {/* Field 7: Płatność */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Płatność</label>
                    <div className="relative" tabIndex={0} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsPaymentDropdownOpen(false); }}>
                      <button
                        type="button"
                        onClick={() => setIsPaymentDropdownOpen(!isPaymentDropdownOpen)}
                        className="w-full bg-[#0e0e0e] border border-white/15 hover:border-white/25 text-xs text-white rounded-xl px-3.5 py-2.5 flex items-center justify-between focus:outline-none focus:border-[#f26522] font-medium"
                      >
                        <span className="truncate">{filterPayment}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#f26522] transition-transform ${isPaymentDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isPaymentDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-[#1a1a1a] border border-white/15 rounded-xl shadow-2xl z-50 p-1 space-y-0.5 max-h-48 overflow-y-auto">
                          {["Wszystkie płatności (All payments)", "Płatność online", "Gotówka w lokalu", "Karta przy odbiorze"].map((pm) => (
                            <button
                              key={pm}
                              type="button"
                              onClick={() => { setFilterPayment(pm); setIsPaymentDropdownOpen(false); }}
                              className={`w-full text-left px-3 py-2 rounded-lg ${filterPayment === pm ? "bg-[#f26522]/20 text-[#f26522] font-bold" : "text-neutral-300 hover:bg-white/5 hover:text-white"}`}
                            >
                              {pm}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Field 8: Sposób realizacji */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Sposób realizacji</label>
                    <div className="relative" tabIndex={0} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsFulfillmentDropdownOpen(false); }}>
                      <button
                        type="button"
                        onClick={() => setIsFulfillmentDropdownOpen(!isFulfillmentDropdownOpen)}
                        className="w-full bg-[#0e0e0e] border border-white/15 hover:border-white/25 text-xs text-white rounded-xl px-3.5 py-2.5 flex items-center justify-between focus:outline-none focus:border-[#f26522] font-medium"
                      >
                        <span className="truncate">{filterFulfillment}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#f26522] transition-transform ${isFulfillmentDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isFulfillmentDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-[#1a1a1a] border border-white/15 rounded-xl shadow-2xl z-50 p-1 space-y-0.5 max-h-48 overflow-y-auto">
                          {["Wszystkie sposoby (All methods)", "Dostawa", "Odbiór osobisty"].map((fm) => (
                            <button
                              key={fm}
                              type="button"
                              onClick={() => { setFilterFulfillment(fm); setIsFulfillmentDropdownOpen(false); }}
                              className={`w-full text-left px-3 py-2 rounded-lg ${filterFulfillment === fm ? "bg-[#f26522]/20 text-[#f26522] font-bold" : "text-neutral-300 hover:bg-white/5 hover:text-white"}`}
                            >
                              {fm}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Field 9: Lokal */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Lokal</label>
                    <div className="relative" tabIndex={0} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsVenueDropdownOpen(false); }}>
                      <button
                        type="button"
                        onClick={() => setIsVenueDropdownOpen(!isVenueDropdownOpen)}
                        className="w-full bg-[#0e0e0e] border border-white/15 hover:border-white/25 text-xs text-white rounded-xl px-3.5 py-2.5 flex items-center justify-between focus:outline-none focus:border-[#f26522] font-medium"
                      >
                        <span className="truncate">{filterVenue}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#f26522] transition-transform ${isVenueDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isVenueDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-[#1a1a1a] border border-white/15 rounded-xl shadow-2xl z-50 p-1 space-y-0.5 max-h-48 overflow-y-auto">
                          <button
                            type="button"
                            onClick={() => { setFilterVenue("Wszystkie lokale (All venues)"); setIsVenueDropdownOpen(false); }}
                            className={`w-full text-left px-3 py-2 rounded-lg ${filterVenue.startsWith("Wszystkie") ? "bg-[#f26522]/20 text-[#f26522] font-bold" : "text-neutral-300 hover:bg-white/5 hover:text-white"}`}
                          >
                            Wszystkie lokale (All venues)
                          </button>
                          {LOCATIONS.map((loc) => (
                            <button
                              key={loc.id}
                              type="button"
                              onClick={() => { setFilterVenue(loc.name); setIsVenueDropdownOpen(false); }}
                              className={`w-full text-left px-3 py-2 rounded-lg ${filterVenue === loc.name ? "bg-[#f26522]/20 text-[#f26522] font-bold" : "text-neutral-300 hover:bg-white/5 hover:text-white"}`}
                            >
                              {loc.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Field 10: Źródło */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Źródło</label>
                    <div className="relative" tabIndex={0} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsSourceDropdownOpen(false); }}>
                      <button
                        type="button"
                        onClick={() => setIsSourceDropdownOpen(!isSourceDropdownOpen)}
                        className="w-full bg-[#0e0e0e] border border-white/15 hover:border-white/25 text-xs text-white rounded-xl px-3.5 py-2.5 flex items-center justify-between focus:outline-none focus:border-[#f26522] font-medium"
                      >
                        <span className="truncate">{filterSource}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#f26522] transition-transform ${isSourceDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isSourceDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-[#1a1a1a] border border-white/15 rounded-xl shadow-2xl z-50 p-1 space-y-0.5 max-h-48 overflow-y-auto">
                          {["Wszystkie źródła (All sources)", "Strona WWW", "Aplikacja Android", "Aplikacja iOS", "Telefon"].map((src) => (
                            <button
                              key={src}
                              type="button"
                              onClick={() => { setFilterSource(src); setIsSourceDropdownOpen(false); }}
                              className={`w-full text-left px-3 py-2 rounded-lg ${filterSource === src ? "bg-[#f26522]/20 text-[#f26522] font-bold" : "text-neutral-300 hover:bg-white/5 hover:text-white"}`}
                            >
                              {src}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Field 11: NIP */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">NIP</label>
                    <input
                      type="text"
                      placeholder="Numer NIP"
                      value={filterNip}
                      onChange={(e) => setFilterNip(e.target.value)}
                      className="w-full bg-[#0e0e0e] border border-white/15 focus:border-[#f26522] text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none placeholder-neutral-600 transition-colors"
                    />
                  </div>

                  {/* Field 12: Numer faktury */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Numer faktury</label>
                    <input
                      type="text"
                      placeholder="np. FV/2026/09/12"
                      value={filterInvoiceNum}
                      onChange={(e) => setFilterInvoiceNum(e.target.value)}
                      className="w-full bg-[#0e0e0e] border border-white/15 focus:border-[#f26522] text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none placeholder-neutral-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Section 13: Inne (Checkboxes) & Szukaj Submit Button */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Inne</span>
                    <div className="flex flex-wrap items-center gap-5 text-xs text-neutral-300">
                      <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                        <input
                          type="checkbox"
                          checked={filterDiscounted}
                          onChange={(e) => setFilterDiscounted(e.target.checked)}
                          className="w-4 h-4 rounded accent-[#f26522] bg-[#0e0e0e] border-white/20 cursor-pointer"
                        />
                        <span>Zamówienia z obniżoną kwotą</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                        <input
                          type="checkbox"
                          checked={filterWithInvoice}
                          onChange={(e) => setFilterWithInvoice(e.target.checked)}
                          className="w-4 h-4 rounded accent-[#f26522] bg-[#0e0e0e] border-white/20 cursor-pointer"
                        />
                        <span>Zamówienia z fakturą</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                        <input
                          type="checkbox"
                          checked={filterPreorder}
                          onChange={(e) => setFilterPreorder(e.target.checked)}
                          className="w-4 h-4 rounded accent-[#f26522] bg-[#0e0e0e] border-white/20 cursor-pointer"
                        />
                        <span>Zamówienia z wyprzedzeniem</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowAdvancedSearch(false)}
                    className="px-6 py-2.5 bg-[#f26522] hover:bg-[#d95318] text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#f26522]/30 active:scale-95"
                  >
                    <Search className="w-4 h-4" />
                    <span>Szukaj (Search)</span>
                  </button>
                </div>
              </div>
            )}

            {/* Main Orders Datatable Container */}
            <div className="bg-[#151515] border border-white/10 rounded-3xl p-6 space-y-4 relative">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-judson font-bold text-xl text-white">Orders</h3>
                  <p className="text-xs text-neutral-400">Wszystkie zamówienia online (Suma: <span className="font-bold text-[#f26522]">12,787.23 PLN</span>)</p>
                </div>
                
                {/* Column Settings Gear Button & Dropdown Menu */}
                <div className="relative">
                  <button
                    onClick={() => setIsColumnPickerOpen(!isColumnPickerOpen)}
                    className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-neutral-300 hover:text-white transition-all active:scale-95"
                    title="Ustawienia widoczności kolumn"
                  >
                    <Settings className="w-4 h-4 text-[#f26522]" />
                  </button>

                  {/* Columns Selector Dropdown */}
                  {isColumnPickerOpen && (
                    <div className="absolute right-0 top-12 z-40 bg-[#1a1a1a] border border-white/15 rounded-2xl p-4 w-56 shadow-2xl space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="font-bold text-white text-xs uppercase tracking-wider">Kolumny</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleAllColumns(true)}
                            className="text-[10px] text-[#f26522] hover:underline font-bold"
                          >
                            Wszystkie
                          </button>
                          <span className="text-neutral-600">|</span>
                          <button
                            onClick={() => toggleAllColumns(false)}
                            className="text-[10px] text-neutral-400 hover:underline font-bold"
                          >
                            Brak
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                        {[
                          { key: "id", label: "ID" },
                          { key: "number", label: "Number" },
                          { key: "startOrder", label: "Start order" },
                          { key: "placingOrder", label: "Placing an order" },
                          { key: "serviceTime", label: "Service time" },
                          { key: "status", label: "Status" },
                          { key: "client", label: "Client" },
                          { key: "address", label: "Delivery address" },
                          { key: "payment", label: "Payment" },
                          { key: "local", label: "Local" },
                          { key: "source", label: "Source" },
                          { key: "together", label: "Together" },
                        ].map((col) => {
                          const isChecked = visibleColumns[col.key as keyof typeof visibleColumns];
                          return (
                            <label
                              key={col.key}
                              className="flex items-center gap-2.5 text-xs text-neutral-300 cursor-pointer hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors select-none"
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleColumn(col.key as keyof typeof visibleColumns)}
                                className="w-3.5 h-3.5 accent-[#f26522] rounded bg-[#0e0e0e] border-white/20 cursor-pointer"
                              />
                              <span className={isChecked ? "font-semibold text-white" : "text-neutral-500"}>
                                {col.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-neutral-300 border-collapse">
                  <thead className="bg-[#0e0e0e] text-neutral-400 uppercase tracking-wider text-[10px] border-b border-white/10">
                    <tr>
                      {visibleColumns.id && <th className="p-3.5">ID ↑↓</th>}
                      {visibleColumns.number && <th className="p-3.5 text-center">Number ↑↓</th>}
                      {visibleColumns.startOrder && <th className="p-3.5">Start order ↓</th>}
                      {visibleColumns.placingOrder && <th className="p-3.5">Placing an order ↑↓</th>}
                      {visibleColumns.serviceTime && <th className="p-3.5">Service time</th>}
                      {visibleColumns.status && <th className="p-3.5">Status ↑↓</th>}
                      {visibleColumns.client && <th className="p-3.5">Client ↑↓</th>}
                      {visibleColumns.address && <th className="p-3.5">Delivery address ↑↓</th>}
                      {visibleColumns.payment && <th className="p-3.5">Payment</th>}
                      {visibleColumns.local && <th className="p-3.5">Local ↑↓</th>}
                      {visibleColumns.source && <th className="p-3.5">Source ↑↓</th>}
                      {visibleColumns.together && <th className="p-3.5 text-right">Together ↑↓</th>}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                        {visibleColumns.id && (
                          <td className="p-3.5">
                            <button
                              onClick={() => setSelectedOrder(order)}
                              className="font-bold text-[#f26522] hover:underline"
                            >
                              {order.id}
                            </button>
                          </td>
                        )}
                        {visibleColumns.number && (
                          <td className="p-3.5 font-bold text-white text-center">{order.orderNumber}</td>
                        )}
                        {visibleColumns.startOrder && (
                          <td className="p-3.5 text-neutral-300 font-mono text-[11px] whitespace-pre-line">{order.startOrder.replace(" ", "\n")}</td>
                        )}
                        {visibleColumns.placingOrder && (
                          <td className="p-3.5 text-neutral-300 font-mono text-[11px] whitespace-pre-line">{order.placingOrder.replace(" ", "\n")}</td>
                        )}
                        {visibleColumns.serviceTime && (
                          <td className="p-3.5 text-neutral-400 font-medium">{order.serviceTime}</td>
                        )}
                        {visibleColumns.status && (
                          <td className="p-3.5">
                            <span className={`text-xs font-semibold ${
                              order.status === "Cancelled" ? "text-red-400" : "text-emerald-400"
                            }`}>
                              {order.statusText}
                            </span>
                          </td>
                        )}
                        {visibleColumns.client && (
                          <td className="p-3.5">
                            <div className="font-bold text-[#f26522] hover:underline cursor-pointer">{order.customer}</div>
                            <div className="text-[11px] text-neutral-400 font-mono">{order.phone}</div>
                          </td>
                        )}
                        {visibleColumns.address && (
                          <td className="p-3.5 text-neutral-300 max-w-[180px] leading-relaxed text-[11px]">
                            {order.address}
                          </td>
                        )}
                        {visibleColumns.payment && (
                          <td className="p-3.5 text-neutral-300">{order.payment}</td>
                        )}
                        {visibleColumns.local && (
                          <td className="p-3.5 text-neutral-300">{order.location}</td>
                        )}
                        {visibleColumns.source && (
                          <td className="p-3.5 text-neutral-400">{order.source}</td>
                        )}
                        {visibleColumns.together && (
                          <td className="p-3.5 font-bold text-white text-right text-sm">{order.total.toFixed(2)} PLN</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#151515] border border-white/10 rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="font-judson font-bold text-2xl text-white">Szczegóły Zamówienia {selectedOrder.id}</h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 hover:bg-white/10 rounded-xl text-neutral-400 hover:text-white"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-4 space-y-1.5 text-xs">
                <div className="text-neutral-400 font-bold uppercase tracking-wider">Dane Klienta</div>
                <div className="font-semibold text-white text-sm">{selectedOrder.customer}</div>
                <div className="text-neutral-400">Telefon: {selectedOrder.phone}</div>
                <div className="text-neutral-400">Adres: {selectedOrder.address}</div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Zamówione Pozycje</div>
                <div className="divide-y divide-white/5 border border-white/10 rounded-2xl p-3 bg-[#0e0e0e] text-xs">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="py-2 flex items-center justify-between">
                      <span className="text-white font-medium">{item.qty}x {item.name}</span>
                      <span className="font-bold text-[#f26522]">{item.price * item.qty}.00 PLN</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-sm font-bold">
                <span>Razem do zapłaty:</span>
                <span className="text-xl text-[#f26522]">{selectedOrder.total.toFixed(2)} PLN</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-full flame-btn-gradient text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider"
              >
                Zamknij Okno
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
