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
    phone: "+48 501 234 567",
    email: "jan.kowalski@example.com",
    phoneMarketing: true,
    emailMarketing: true,
    business: "Kowalski Sp. z o.o."
  },
  {
    id: "CUST-002",
    name: "Anna Nowak",
    phone: "+48 602 987 654",
    email: "anna.nowak@example.com",
    phoneMarketing: true,
    emailMarketing: false,
    business: "Nowak Studio"
  },
  {
    id: "CUST-003",
    name: "Piotr Wiśniewski",
    phone: "+48 730 112 233",
    email: "piotr.w@example.com",
    phoneMarketing: false,
    emailMarketing: true,
    business: "-"
  },
  {
    id: "CUST-004",
    name: "Michał Zieliński",
    phone: "+48 512 445 667",
    email: "m.zielinski@example.com",
    phoneMarketing: false,
    emailMarketing: false,
    business: "Zieliński Tech"
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
                  {customerSubTab === "customers" ? "Baza Klientów & CRM" : "Opinie Klientów"}
                </h2>
                <p className="text-xs text-neutral-400">
                  {customerSubTab === "customers"
                    ? "Zarządzanie danymi kontaktowymi i zgody marketingowe klientów"
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
              <div className="bg-[#151515] border border-white/10 rounded-3xl overflow-hidden p-6 space-y-4">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left text-xs text-neutral-300 border-collapse">
                    <thead className="bg-[#0e0e0e] text-neutral-400 uppercase tracking-wider text-[10px] border-b border-white/10">
                      <tr>
                        <th className="p-3.5 whitespace-nowrap">Name and surname</th>
                        <th className="p-3.5 whitespace-nowrap">Telephone</th>
                        <th className="p-3.5 whitespace-nowrap">Email</th>
                        <th className="p-3.5 whitespace-nowrap">Telephone marketing</th>
                        <th className="p-3.5 whitespace-nowrap">Marketing email</th>
                        <th className="p-3.5 whitespace-nowrap">Business</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {INITIAL_CUSTOMERS.map((c) => (
                        <tr key={c.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-3.5 font-bold text-white whitespace-nowrap">{c.name}</td>
                          <td className="p-3.5 text-neutral-300 font-mono text-[11px] whitespace-nowrap">{c.phone}</td>
                          <td className="p-3.5 text-neutral-300 font-mono text-[11px] whitespace-nowrap">{c.email}</td>
                          <td className="p-3.5 whitespace-nowrap">
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              c.phoneMarketing ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                            }`}>
                              {c.phoneMarketing ? "Yes" : "No"}
                            </span>
                          </td>
                          <td className="p-3.5 whitespace-nowrap">
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              c.emailMarketing ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                            }`}>
                              {c.emailMarketing ? "Yes" : "No"}
                            </span>
                          </td>
                          <td className="p-3.5 text-neutral-300 font-medium whitespace-nowrap">{c.business}</td>
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
