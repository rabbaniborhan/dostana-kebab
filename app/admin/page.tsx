"use client";

import React, { useState } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import StatCard from "@/components/StatCard";
import { LOCATIONS, MENU_ITEMS, REVIEWS } from "../data/restaurantData";
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  DollarSign, 
  CalendarDays, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  AlertTriangle,
  Plus,
  Eye,
  Edit2,
  Trash2,
  Filter,
  Check,
  ChevronDown,
  MapPin,
  UtensilsCrossed,
  Sparkles,
  Search,
  ArrowUpRight,
  Star,
  MessageSquare,
  Settings
} from "lucide-react";

// Mock Initial Orders Data (Matching Restaumatic/Dostana Admin format)
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
    location: "Dostana Kebab Krakowskie Przedmieście",
    items: [
      { name: "Kebab Rollo Wołowina (Duży)", qty: 2, price: 32 },
      { name: "Frytki Belgijskie", qty: 1, price: 14 }
    ],
    total: 78.00,
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
    location: "Dostana Kebab Lipowa",
    items: [
      { name: "Dostana Box Specjalny", qty: 2, price: 38 },
      { name: "Sosy Dodatkowe", qty: 2, price: 5 }
    ],
    total: 86.00,
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
    total: 49.00,
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
    location: "Dostana Kebab Sympatyczna",
    items: [
      { name: "Vege Falafel Rollo", qty: 2, price: 28 }
    ],
    total: 56.00,
    status: "Preparing",
    statusText: "⏳ W realizacji (w trakcie)",
    payment: "Gotówka w lokalu",
    source: "Strona WWW",
    type: "Odbiór osobisty"
  },
  {
    id: "54210983",
    orderNumber: 4,
    startOrder: "03.09.2026 17:50",
    placingOrder: "03.09.2026 17:50",
    serviceTime: "12s",
    customer: "Paweł Kamiński",
    phone: "+48791633078",
    address: "20-719 Lublin, Wróbla 66",
    location: "Dostana Kebab Wróbla",
    items: [
      { name: "Kebab Rollo Gigant Wołowina", qty: 1, price: 42 },
      { name: "Pepsi 0.5L", qty: 1, price: 8 }
    ],
    total: 50.00,
    status: "Delivered",
    statusText: "✓ 18:05 (15 minut)",
    payment: "Płatność online",
    source: "Aplikacja iOS",
    type: "Dostawa"
  },
  {
    id: "31098472",
    orderNumber: 5,
    startOrder: "03.09.2026 17:30",
    placingOrder: "03.09.2026 17:30",
    serviceTime: "19s",
    customer: "Ewa Lewandowska",
    phone: "+48512922942",
    address: "20-207 Lublin, Turystyczna 9b",
    location: "Dostana Kebab Turystyczna",
    items: [
      { name: "Kebab Box Serowy", qty: 2, price: 34 }
    ],
    total: 68.00,
    status: "Delivered",
    statusText: "✓ 17:48 (18 minut)",
    payment: "Gotówka przy odbiorze",
    source: "Aplikacja Android",
    type: "Dostawa"
  }
];

// Mock Initial Reservations
const INITIAL_RESERVATIONS = [
  {
    id: "RES-104",
    name: "Marek Kamiński",
    phone: "+48 505 111 222",
    guests: 4,
    date: "2026-09-05",
    time: "18:30",
    location: "Dostana Kebab Krakowskie Przedmieście",
    status: "Pending",
    notes: "Prośba o stolik przy oknie"
  },
  {
    id: "RES-103",
    name: "Magdalena Lewandowska",
    phone: "+48 600 333 444",
    guests: 2,
    date: "2026-09-04",
    time: "19:00",
    location: "Dostana Kebab Nadbystrzycka",
    status: "Confirmed",
    notes: "Urodziny"
  },
  {
    id: "RES-102",
    name: "Tomasz Dąbrowski",
    phone: "+48 791 555 666",
    guests: 6,
    date: "2026-09-04",
    time: "20:15",
    location: "Dostana Kebab Lipowa",
    status: "Confirmed",
    notes: "Spotkanie firmowe"
  },
  {
    id: "RES-101",
    name: "Agata Kowalczyk",
    phone: "+48 791 633 078",
    guests: 3,
    date: "2026-09-06",
    time: "17:00",
    location: "Dostana Kebab Wróbla",
    status: "Confirmed",
    notes: "Stolik na zewnątrz"
  },
  {
    id: "RES-100",
    name: "Krzysztof Wójcik",
    phone: "+48 512 922 942",
    guests: 5,
    date: "2026-09-06",
    time: "19:30",
    location: "Dostana Kebab Turystyczna",
    status: "Pending",
    notes: "Rezerwacja rodzinna"
  },
  {
    id: "RES-099",
    name: "Joanna Szymańska",
    phone: "+48 729 202 173",
    guests: 2,
    date: "2026-09-07",
    time: "18:00",
    location: "Dostana Kebab Sympatyczna",
    status: "Confirmed",
    notes: "Kolacja"
  }
];

// Mock Initial Customers Data
const INITIAL_CUSTOMERS = [
  {
    id: "CUST-001",
    name: "Jan Kowalski",
    email: "jan.kowalski@example.com",
    phone: "+48 501 234 567",
    totalOrders: 14,
    totalSpent: 512,
    favoriteItem: "Kebab Rollo Wołowina",
    status: "VIP",
    lastOrder: "Dzisiaj, 18:45"
  },
  {
    id: "CUST-002",
    name: "Anna Nowak",
    email: "anna.nowak@example.com",
    phone: "+48 602 987 654",
    totalOrders: 8,
    totalSpent: 340,
    favoriteItem: "Dostana Box Specjalny",
    status: "Stały Klient",
    lastOrder: "Wczoraj, 14:20"
  },
  {
    id: "CUST-003",
    name: "Piotr Wiśniewski",
    email: "piotr.w@example.com",
    phone: "+48 730 112 233",
    totalOrders: 5,
    totalSpent: 210,
    favoriteItem: "Kebab Talerz Kurczak",
    status: "Aktywny",
    lastOrder: "2 dni temu"
  },
  {
    id: "CUST-004",
    name: "Michał Zieliński",
    email: "m.zielinski@example.com",
    phone: "+48 512 445 667",
    totalOrders: 3,
    totalSpent: 115,
    favoriteItem: "Vege Falafel Rollo",
    status: "Nowy",
    lastOrder: "3 dni temu"
  }
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "reservations" | "menu" | "locations" | "customers" | "statistics">("overview");
  const [searchQuery, setSearchQuery] = useState("");
  
  // State management for live dashboard
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [reservations, setReservations] = useState(INITIAL_RESERVATIONS);
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  const [locations, setLocations] = useState(LOCATIONS);
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);

  // Sub-tab for Customers section
  const [customerSubTab, setCustomerSubTab] = useState<"customers" | "opinions">("customers");

  // Column visibility state for Orders table
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

  const toggleColumn = (key: keyof typeof visibleColumns) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
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

  // Selected Order for Modal
  const [selectedOrder, setSelectedOrder] = useState<typeof INITIAL_ORDERS[0] | null>(null);

  // Quick Action Handlers
  const handleUpdateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
    );
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleUpdateReservationStatus = (resId: string, newStatus: string) => {
    setReservations((prev) =>
      prev.map((res) => (res.id === resId ? { ...res, status: newStatus } : res))
    );
  };

  const handleToggleLocationStatus = (locId: string) => {
    setLocations((prev) =>
      prev.map((loc) => (loc.id === locId ? { ...loc, isOpen: !loc.isOpen } : loc))
    );
  };

  const pendingOrdersCount = orders.filter((o) => o.status === "Pending").length;
  const pendingReservationsCount = reservations.filter((r) => r.status === "Pending").length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1.5"><Clock className="w-3 h-3" /> Oczekuje</span>;
      case "Preparing":
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center gap-1.5"><UtensilsCrossed className="w-3 h-3" /> Przygotowywane</span>;
      case "Out for Delivery":
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center gap-1.5"><ShoppingBag className="w-3 h-3" /> W dostawie</span>;
      case "Delivered":
      case "Confirmed":
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Zrealizowane</span>;
      case "Cancelled":
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1.5"><XCircle className="w-3 h-3" /> Anulowane</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-neutral-800 text-neutral-300">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex font-lato">
      {/* Sidebar */}
      <AdminSidebar
        pendingOrdersCount={pendingOrdersCount}
        pendingReservationsCount={pendingReservationsCount}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeTab={activeTab}
          onRefresh={() => {}}
        />

        <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1 overflow-y-auto bg-[#0e0e0e]">
          <div className="space-y-8 animate-fadeIn">
            {/* Top Welcome Banner & Quick Action Buttons */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-[#141414] border border-white/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#f26522] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Dostana Kebab Dashboard Overview
                </span>
                <h1 className="font-judson font-bold text-2xl sm:text-3xl text-white mt-1">
                  Witaj z powrotem, Menedżerze! 👋
                </h1>
                <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                  Przegląd aktywności 3 lokali w Lublinie. Wszystkie systemy zamówień, dostaw i rezerwacji działają prawidłowo.
                </p>
              </div>

              {/* Quick Action Shortcuts */}
              <div className="flex flex-wrap items-center gap-2.5 z-10">
                <Link
                  href="/admin/orders"
                  className="px-4 py-2.5 bg-[#f26522] hover:bg-[#d95318] text-white font-bold text-xs rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-[#f26522]/25 active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Zamówienia ({pendingOrdersCount})</span>
                </Link>
                <Link
                  href="/admin/menu"
                  className="px-4 py-2.5 bg-[#0e0e0e] border border-white/10 hover:border-white/20 text-neutral-200 hover:text-white font-bold text-xs rounded-xl transition-all flex items-center gap-2"
                >
                  <UtensilsCrossed className="w-4 h-4 text-[#f26522]" />
                  <span>Zarządzaj Menu</span>
                </Link>
                <Link
                  href="/admin/statistics/total-sales"
                  className="px-4 py-2.5 bg-[#0e0e0e] border border-white/10 hover:border-white/20 text-neutral-200 hover:text-white font-bold text-xs rounded-xl transition-all flex items-center gap-2"
                >
                  <TrendingUp className="w-4 h-4 text-[#38bdf8]" />
                  <span>Raporty Sprzedaży</span>
                </Link>
              </div>
            </div>

            {/* Stat Cards - 4 Key Performance Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Dzisiejszy Przychód"
                value="4,820.00 PLN"
                subValue="od wczoraj"
                changePct="14.2"
                isPositive={true}
                icon={<DollarSign className="w-4 h-4" />}
              />
              <StatCard
                title="Zamówienia Dzisiaj"
                value="128 szt."
                subValue={`W tym oczekujących: ${pendingOrdersCount} Nowe`}
                icon={<ShoppingBag className="w-4 h-4 text-blue-400" />}
                accentColor="#38bdf8"
              />
              <StatCard
                title="Rezerwacje Stolików"
                value="12 rezerwacji"
                subValue={`${pendingReservationsCount} wymaga potwierdzenia`}
                icon={<CalendarDays className="w-4 h-4 text-amber-400" />}
                accentColor="#fbbf24"
              />
              <StatCard
                title="Status Punkty Lublin"
                value="3 / 3 Otwarte"
                subValue="Wszystkie lokale obsługują zamówienia"
                icon={<MapPin className="w-4 h-4 text-emerald-400" />}
                accentColor="#34d399"
              />
            </div>

            {/* Revenue Hourly Chart & Top Selling Menu Items (2-Column Grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart (Spans 2 cols) */}
              <div className="lg:col-span-2 bg-[#141414] border border-white/10 rounded-3xl p-6 space-y-6 shadow-xl">
                <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="font-judson font-bold text-xl text-white">Statystyki Sprzedaży (Godzinowe)</h3>
                    <p className="text-xs text-neutral-400">Godzinowy rozkład przychodu i natężenia zamówień w dniu dzisiejszym</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#0e0e0e] border border-white/10 rounded-xl p-1 text-xs">
                    <button className="px-3 py-1 bg-[#f26522] text-white font-bold rounded-lg shadow-sm">Dzisiaj</button>
                    <button className="px-3 py-1 text-neutral-400 hover:text-white rounded-lg transition-colors">Tydzień</button>
                    <button className="px-3 py-1 text-neutral-400 hover:text-white rounded-lg transition-colors">Miesiąc</button>
                  </div>
                </div>

                {/* Visual Bar Chart */}
                <div className="overflow-x-auto no-scrollbar pb-2">
                  <div className="h-52 min-w-[500px] flex items-end justify-between gap-2 pt-6 px-2 border-b border-white/10 pb-2">
                    {[
                      { hour: "11:00", val: 35, pln: "1,575 zł" },
                      { hour: "12:00", val: 65, pln: "2,925 zł" },
                      { hour: "13:00", val: 95, pln: "4,275 zł" },
                      { hour: "14:00", val: 80, pln: "3,600 zł" },
                      { hour: "15:00", val: 50, pln: "2,250 zł" },
                      { hour: "16:00", val: 40, pln: "1,800 zł" },
                      { hour: "17:00", val: 75, pln: "3,375 zł" },
                      { hour: "18:00", val: 100, pln: "4,820 zł" },
                      { hour: "19:00", val: 90, pln: "4,050 zł" },
                      { hour: "20:00", val: 60, pln: "2,700 zł" },
                      { hour: "21:00", val: 30, pln: "1,350 zł" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                        <div
                          style={{ height: `${item.val}%` }}
                          className="w-full max-w-[28px] bg-gradient-to-t from-[#d9531e] to-[#f26522] rounded-t-lg group-hover:brightness-125 transition-all relative cursor-pointer"
                        >
                          <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white text-[10px] py-1 px-2 rounded-lg border border-[#f26522]/40 shadow-xl whitespace-nowrap pointer-events-none transition-opacity font-bold">
                            {item.pln}
                          </div>
                        </div>
                        <span className="text-[10px] text-neutral-400 font-mono">{item.hour}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-neutral-400">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#f26522]" />
                    <span>Szczyt zamówień: <strong className="text-white">18:00 - 19:00</strong></span>
                  </span>
                  <span>Średnia wartość zamówienia: <strong className="text-white">37.65 PLN</strong></span>
                </div>
              </div>

              {/* Top Selling Dishes Widget */}
              <div className="bg-[#141414] border border-white/10 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-judson font-bold text-lg text-white flex items-center gap-2">
                      <UtensilsCrossed className="w-4 h-4 text-[#f26522]" />
                      <span>Najpopularniejsze Dania</span>
                    </h3>
                    <Link href="/admin/menu" className="text-[11px] text-[#f26522] hover:underline font-bold">
                      Zobacz menu
                    </Link>
                  </div>

                  <div className="space-y-3 pt-3">
                    {[
                      { name: "Kebab Rollo Wołowina (Duży)", orders: "342 zamówień", price: "32.00 PLN", tag: "#1 Bestseller" },
                      { name: "Dostana Box Specjalny", orders: "289 zamówień", price: "38.00 PLN", tag: "Popularne" },
                      { name: "Kebab Talerz Kurczak", orders: "215 zamówień", price: "35.00 PLN", tag: "Talerze" },
                      { name: "Frytki Belgijskie z Sosami", orders: "180 zamówień", price: "14.00 PLN", tag: "Dodatki" },
                    ].map((dish, i) => (
                      <div key={i} className="flex items-center justify-between p-2.5 bg-[#0e0e0e] border border-white/5 rounded-xl text-xs hover:border-white/15 transition-colors">
                        <div>
                          <div className="font-bold text-white flex items-center gap-1.5">
                            <span>{dish.name}</span>
                          </div>
                          <span className="text-[10px] text-neutral-400">{dish.orders}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-[#f26522]">{dish.price}</span>
                          <span className="block text-[9px] text-neutral-500">{dish.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-[#0e0e0e] border border-white/5 rounded-xl text-[11px] text-neutral-400 flex items-center justify-between mt-2">
                  <span>Wszystkie dania dostępne w lokalu</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>

            {/* Quick Venue Status Management & Recent Customer Opinions Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Venue Status Switcher */}
              <div className="bg-[#141414] border border-white/10 rounded-3xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="font-judson font-bold text-lg text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#f26522]" />
                    <span>Punkty Dostana Kebab</span>
                  </h3>
                  <Link href="/admin/locations" className="text-[11px] text-[#f26522] hover:underline font-bold">
                    Zarządzaj
                  </Link>
                </div>

                <div className="space-y-3">
                  {locations.map((loc) => (
                    <div key={loc.id} className="p-3 bg-[#0e0e0e] border border-white/5 rounded-2xl flex items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="font-bold text-white">{loc.name}</div>
                        <div className="text-[10px] text-neutral-400">{loc.street}, Lublin</div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleToggleLocationStatus(loc.id)}
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                          loc.isOpen
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25"
                            : "bg-rose-500/15 text-rose-400 border border-rose-500/30 hover:bg-rose-500/25"
                        }`}
                      >
                        {loc.isOpen ? "✓ Otwarty" : "✕ Zamknięty"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Customer Reviews Preview (Spans 2 cols) */}
              <div className="lg:col-span-2 bg-[#141414] border border-white/10 rounded-3xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="font-judson font-bold text-lg text-white flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>Ostatnie Opinie Klientów</span>
                  </h3>
                  <Link href="/admin/customers/opinions" className="text-[11px] text-[#f26522] hover:underline font-bold">
                    Wszystkie opinie ({REVIEWS.length})
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {REVIEWS.slice(0, 4).map((rev) => (
                    <div key={rev.id} className="p-3.5 bg-[#0e0e0e] border border-white/5 rounded-2xl space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{rev.author}</span>
                        <div className="flex items-center text-amber-400 text-[10px]">
                          {"★".repeat(rev.rating)}
                        </div>
                      </div>
                      <p className="text-[11px] text-neutral-300 line-clamp-2 italic">"{rev.comment}"</p>
                      <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1 border-t border-white/5">
                        <span>{rev.location}</span>
                        <span>{rev.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Orders Datatable Section */}
            <div className="bg-[#141414] border border-white/10 rounded-3xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-judson font-bold text-xl text-white">Najnowsze Zamówienia Online</h3>
                  <p className="text-xs text-neutral-400">Ostatnie spływające zamówienia ze strony i aplikacji</p>
                </div>
                <Link
                  href="/admin/orders"
                  className="px-4 py-2 bg-[#0e0e0e] border border-white/10 hover:border-white/20 text-[#f26522] hover:underline font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <span>Wszystkie zamówienia</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left text-xs text-neutral-300 border-collapse">
                  <thead className="bg-[#0e0e0e] text-neutral-400 uppercase tracking-wider text-[10px] border-b border-white/10">
                    <tr>
                      <th className="p-3.5">ID Zamówienia</th>
                      <th className="p-3.5">Klient & Telefon</th>
                      <th className="p-3.5">Lokal</th>
                      <th className="p-3.5">Płatność & Typ</th>
                      <th className="p-3.5">Wartość</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5 text-right">Akcja</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {orders
                      .filter((o) => {
                        if (!searchQuery || searchQuery.startsWith("Wszystkie")) return true;
                        const q = searchQuery.toLowerCase();
                        const loc = o.location.toLowerCase();
                        return loc.includes(q) || q.includes(loc);
                      })
                      .slice(0, 5)
                      .map((order) => (
                      <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-3.5 font-bold text-white font-mono">#{order.id}</td>
                        <td className="p-3.5">
                          <div className="font-bold text-white">{order.customer}</div>
                          <div className="text-[10px] text-neutral-400 font-mono">{order.phone}</div>
                        </td>
                        <td className="p-3.5 text-neutral-300 font-medium">{order.location}</td>
                        <td className="p-3.5">
                          <span className="font-semibold text-neutral-200">{order.payment}</span>
                          <span className="block text-[10px] text-neutral-500">{order.type}</span>
                        </td>
                        <td className="p-3.5 font-extrabold text-[#f26522] font-mono">{order.total}.00 PLN</td>
                        <td className="p-3.5">{getStatusBadge(order.status)}</td>
                        <td className="p-3.5 text-right">
                          <button
                            type="button"
                            onClick={() => setSelectedOrder(order)}
                            className="px-3 py-1.5 bg-[#0e0e0e] hover:bg-[#f26522] hover:text-white border border-white/10 text-neutral-300 rounded-lg text-xs font-semibold transition-all"
                          >
                            Szczegóły
                          </button>
                        </td>
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
                <p className="text-xs text-neutral-400">{selectedOrder.startOrder}</p>
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
                <div className="text-neutral-400">Adres dostawy/lokal: {selectedOrder.location}</div>
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
                <span>Razem do zapłaty ({selectedOrder.payment}):</span>
                <span className="text-xl text-[#f26522]">{selectedOrder.total}.00 PLN</span>
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
