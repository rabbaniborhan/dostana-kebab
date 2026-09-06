"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { Users, MessageSquare, CheckCircle2, Star } from "lucide-react";
import { REVIEWS } from "../../data/restaurantData";

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

export default function AdminCustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [customerSubTab, setCustomerSubTab] = useState<"customers" | "opinions">("customers");

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex font-lato">
      <AdminSidebar pendingOrdersCount={1} pendingReservationsCount={1} />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeTab="customers"
          onRefresh={() => {}}
        />

        <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1 overflow-y-auto">
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-judson font-bold text-2xl text-white">
                  {customerSubTab === "customers" ? "Baza Klientów & CRM" : "Opinie & Recenzje Klientów"}
                </h2>
                <p className="text-xs text-neutral-400">
                  {customerSubTab === "customers"
                    ? "Historia zamówień, wydatki i segmentacja klientów"
                    : "Zarządzanie opiniami i ocenami wystawionymi przez klientów"}
                </p>
              </div>

              {/* Sub-tab Navigation Pill */}
              <div className="flex items-center gap-1.5 bg-[#151515] border border-white/10 p-1 rounded-xl">
                <button
                  onClick={() => setCustomerSubTab("customers")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    customerSubTab === "customers"
                      ? "bg-[#f26522] text-white shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Klienci</span>
                </button>
                <button
                  onClick={() => setCustomerSubTab("opinions")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    customerSubTab === "opinions"
                      ? "bg-[#f26522] text-white shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Opinie</span>
                </button>
              </div>
            </div>

            {/* SUB TAB 1: CUSTOMERS LIST */}
            {customerSubTab === "customers" && (
              <div className="bg-[#151515] border border-white/10 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-neutral-300">
                    <thead className="bg-[#0e0e0e] text-neutral-400 uppercase tracking-wider text-[10px] border-b border-white/10">
                      <tr>
                        <th className="p-4">ID Klienta</th>
                        <th className="p-4">Imię & Email</th>
                        <th className="p-4">Telefon</th>
                        <th className="p-4">Ulubione Danie</th>
                        <th className="p-4">Zamówienia</th>
                        <th className="p-4">Łączny Wydatek</th>
                        <th className="p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {INITIAL_CUSTOMERS.map((c) => (
                        <tr key={c.id} className="hover:bg-white/[0.02]">
                          <td className="p-4 font-bold text-white">{c.id}</td>
                          <td className="p-4">
                            <div className="font-semibold text-white">{c.name}</div>
                            <div className="text-[11px] text-neutral-500">{c.email}</div>
                          </td>
                          <td className="p-4 text-neutral-300 font-mono">{c.phone}</td>
                          <td className="p-4 text-[#f26522] font-medium">{c.favoriteItem}</td>
                          <td className="p-4 font-bold text-white">{c.totalOrders} zamówień</td>
                          <td className="p-4 font-bold text-emerald-400">{c.totalSpent}.00 PLN</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                              c.status === "VIP" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            }`}>
                              {c.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SUB TAB 2: OPINIONS & REVIEWS */}
            {customerSubTab === "opinions" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {REVIEWS.map((review) => (
                  <div key={review.id} className="bg-[#151515] border border-white/10 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-white text-base">{review.author}</h4>
                        <p className="text-xs text-neutral-400">{review.location} • {review.date}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs font-bold text-amber-400 ml-1">{review.rating}.0</span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-300 italic leading-relaxed bg-[#0e0e0e] border border-white/5 rounded-xl p-3">
                      "{review.comment}"
                    </p>

                    <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Zweryfikowany zakup
                      </span>
                      <div className="flex gap-2">
                        <button className="px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-colors">
                          Odpowiedz
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
