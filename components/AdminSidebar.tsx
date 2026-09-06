"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  CalendarDays, 
  UtensilsCrossed, 
  MapPin, 
  LogOut, 
  Users,
  BarChart3,
  ChevronDown,
  MessageSquare
} from "lucide-react";

interface AdminSidebarProps {
  pendingOrdersCount?: number;
  pendingReservationsCount?: number;
}

export default function AdminSidebar({
  pendingOrdersCount = 1,
  pendingReservationsCount = 1,
}: AdminSidebarProps) {
  const pathname = usePathname();
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [isStatsDropdownOpen, setIsStatsDropdownOpen] = useState(false);

  const menuItems = [
    {
      id: "overview",
      label: "Przegląd",
      href: "/admin",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: "orders",
      label: "Zamówienia",
      href: "/admin/orders",
      icon: ShoppingBag,
      badge: pendingOrdersCount > 0 ? pendingOrdersCount : null,
      badgeColor: "bg-[#f26522] text-white",
    },
    {
      id: "reservations",
      label: "Rezerwacje",
      href: "/admin/reservations",
      icon: CalendarDays,
      badge: pendingReservationsCount > 0 ? pendingReservationsCount : null,
      badgeColor: "bg-amber-500 text-black",
    },
    {
      id: "customers",
      label: "Klienci",
      href: "/admin/customers",
      icon: Users,
      badge: null,
    },
    {
      id: "statistics",
      label: "Statistics",
      href: "/admin/statistics",
      icon: BarChart3,
      badge: null,
    },
    {
      id: "menu",
      label: "Zarządzanie Menu",
      href: "/admin/menu",
      icon: UtensilsCrossed,
      badge: null,
    },
    {
      id: "locations",
      label: "Lokale & Godziny",
      href: "/admin/locations",
      icon: MapPin,
      badge: null,
    },
  ];

  return (
    <aside className="w-64 bg-[#141414] border-r border-white/10 flex flex-col justify-between shrink-0 hidden md:flex min-h-screen sticky top-0 h-screen overflow-hidden">
      {/* Fixed Brand Header */}
      <div className="p-5 pb-4 shrink-0 bg-[#141414]">
        <Link href="/admin" className="flex items-center gap-3 px-2 group">
          <img
            src="https://restaumatic-production.imgix.net/uploads/restaurants/347020/logo/1733232577.png?auto=compress%2Cformat&crop=focalpoint&fit=clip&h=300&w=800"
            alt="Dostana Logo"
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="font-judson font-bold text-white text-lg leading-tight flex items-center gap-1.5">
              Dostana <span className="text-[#f26522] text-xs font-sans px-1.5 py-0.5 rounded bg-[#f26522]/20 border border-[#f26522]/30">ADMIN</span>
            </div>
            <p className="text-[11px] text-neutral-400">System Zarządzania</p>
          </div>
        </Link>
        <div className="h-px bg-white/10 mt-5" />
      </div>

      {/* Scrollable Navigation Section */}
      <div className="px-5 py-2 flex-1 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden space-y-1">
        <p className="px-3 text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-2">
          Nawigacja główne
        </p>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === "/admin" 
              ? pathname === "/admin" 
              : pathname.startsWith(item.href);
            const isCustomerTab = item.id === "customers";
            const isStatsTab = item.id === "statistics";

            if (isCustomerTab) {
              return (
                <div key={item.id} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setIsCustomerDropdownOpen(!isCustomerDropdownOpen)}
                    className={`w-full flex items-center justify-between rounded-xl transition-all px-3.5 py-2.5 text-sm font-medium ${
                      isActive
                        ? "bg-gradient-to-r from-[#f26522] to-[#d9531e] text-white shadow-lg shadow-[#f26522]/20 font-semibold"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-400"}`} />
                      <span>{item.label}</span>
                    </div>

                    <ChevronDown className={`w-4 h-4 transition-transform ${isCustomerDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Sub-menu Container */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isCustomerDropdownOpen
                        ? "grid-rows-[1fr] opacity-100 mt-1"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 pl-9 pr-2 space-y-1">
                      <Link
                        href="/admin/customers"
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          pathname === "/admin/customers"
                            ? "bg-white/10 text-white font-bold"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Users className="w-3.5 h-3.5 text-[#f26522]" />
                        <span>Lista Klientów</span>
                      </Link>

                      <Link
                        href="/admin/customers/opinions"
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          pathname === "/admin/customers/opinions"
                            ? "bg-white/10 text-white font-bold"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                        <span>Opinie & Recenzje</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            if (isStatsTab) {
              return (
                <div key={item.id} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setIsStatsDropdownOpen(!isStatsDropdownOpen)}
                    className={`w-full flex items-center justify-between rounded-xl transition-all px-3.5 py-2.5 text-sm font-medium ${
                      isActive
                        ? "bg-gradient-to-r from-[#f26522] to-[#d9531e] text-white shadow-lg shadow-[#f26522]/20 font-semibold"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-400"}`} />
                      <span>{item.label}</span>
                    </div>

                    <ChevronDown className={`w-4 h-4 transition-transform ${isStatsDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Sub-menu Container for Statistics */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isStatsDropdownOpen
                        ? "grid-rows-[1fr] opacity-100 mt-1"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 pl-9 pr-2 space-y-1">
                      <Link
                        href="/admin/statistics/total-sales"
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          pathname === "/admin/statistics/total-sales"
                            ? "bg-white/10 text-white font-bold"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Total Sales</span>
                      </Link>

                      <Link
                        href="/admin/statistics/delivery-zone"
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          pathname === "/admin/statistics/delivery-zone"
                            ? "bg-white/10 text-white font-bold"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>In the delivery zone</span>
                      </Link>

                      <Link
                        href="/admin/statistics/deposit-packaging"
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          pathname === "/admin/statistics/deposit-packaging"
                            ? "bg-white/10 text-white font-bold"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Deposit packaging</span>
                      </Link>

                      <Link
                        href="/admin/statistics/alexanda-report"
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          pathname === "/admin/statistics/alexanda-report"
                            ? "bg-white/10 text-white font-bold"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>Alexanda Report</span>
                      </Link>

                      <Link
                        href="/admin/statistics/referring-site"
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          pathname === "/admin/statistics/referring-site"
                            ? "bg-white/10 text-white font-bold"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>Referring Site</span>
                      </Link>

                      <Link
                        href="/admin/statistics/source-medium"
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          pathname === "/admin/statistics/source-medium"
                            ? "bg-white/10 text-white font-bold"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span>Source and Medium</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#f26522] to-[#d9531e] text-white shadow-lg shadow-[#f26522]/20 font-semibold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-400"}`} />
                  <span className="truncate">{item.label}</span>
                </div>

                {item.badge !== null && (
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${item.badgeColor || "bg-white/10 text-white"}`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
      </div>

      {/* Bottom Profile & Actions */}
      <div className="p-4 border-t border-white/10 bg-[#101010]/80 space-y-3">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f26522] to-amber-500 flex items-center justify-center font-bold text-white text-sm shadow-md">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-semibold text-white truncate">Administrator</h4>
            <p className="text-[10px] text-neutral-400 truncate">admin@dostanakebab.com</p>
          </div>
        </div>

        <div className="pt-1 flex gap-2">
          <Link
            href="/"
            className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 text-xs font-medium py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Strona główna</span>
          </Link>
          <Link
            href="/admin/login"
            className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 p-2 rounded-xl flex items-center justify-center transition-colors"
            title="Wyloguj się"
          >
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
