"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { Users, CalendarDays, MapPin, Check, XCircle } from "lucide-react";

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

export default function AdminReservationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [reservations, setReservations] = useState(INITIAL_RESERVATIONS);

  const handleUpdateReservationStatus = (resId: string, newStatus: string) => {
    setReservations((prev) =>
      prev.map((res) => (res.id === resId ? { ...res, status: newStatus } : res))
    );
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex font-lato">
      <AdminSidebar pendingOrdersCount={1} pendingReservationsCount={1} />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeTab="reservations"
          onRefresh={() => {}}
        />

        <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1 overflow-y-auto">
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h2 className="font-judson font-bold text-2xl text-white">Rezerwacje Stolików</h2>
              <p className="text-xs text-neutral-400">Akceptuj lub odrzucaj nadchodzące rezerwacje klientów</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reservations
                .filter((res) => {
                  if (!searchQuery || searchQuery.startsWith("Wszystkie")) return true;
                  const q = searchQuery.toLowerCase();
                  const loc = res.location.toLowerCase();
                  return loc.includes(q) || q.includes(loc);
                })
                .map((res) => (
                <div key={res.id} className="bg-[#151515] border border-white/10 rounded-2xl p-5 space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{res.id}</span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      res.status === "Confirmed" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}>
                      {res.status === "Confirmed" ? "Potwierdzono" : "Oczekuje"}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-semibold text-lg text-white">{res.name}</h4>
                    <p className="text-xs text-neutral-400 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#f26522]" /> {res.guests} Gości
                    </p>
                    <p className="text-xs text-neutral-400 flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5 text-blue-400" /> {res.date} godz. {res.time}
                    </p>
                    <p className="text-xs text-neutral-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {res.location}
                    </p>
                  </div>

                  {res.notes && (
                    <div className="bg-[#0e0e0e] border border-white/5 rounded-xl p-2.5 text-xs text-neutral-400 italic">
                      "{res.notes}"
                    </div>
                  )}

                  <div className="pt-2 flex gap-2 border-t border-white/10">
                    <button
                      onClick={() => handleUpdateReservationStatus(res.id, "Confirmed")}
                      className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" /> Potwierdź
                    </button>
                    <button
                      onClick={() => handleUpdateReservationStatus(res.id, "Cancelled")}
                      className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <XCircle className="w-3.5 h-3.5" /> Anuluj
                    </button>
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
