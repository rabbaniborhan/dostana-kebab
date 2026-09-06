"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { Users, MessageSquare, CheckCircle2, Star } from "lucide-react";
import { REVIEWS } from "../../../data/restaurantData";

export default function AdminOpinionsPage() {
  const [searchQuery, setSearchQuery] = useState("");

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
                  Opinie & Recenzje Klientów
                </h2>
                <p className="text-xs text-neutral-400">
                  Zarządzanie opiniami i ocenami wystawionymi przez klientów
                </p>
              </div>
            </div>

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
          </div>
        </main>
      </div>
    </div>
  );
}
