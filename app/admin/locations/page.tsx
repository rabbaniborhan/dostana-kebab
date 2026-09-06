"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { LOCATIONS } from "../../data/restaurantData";
import { Plus, XCircle, MapPin, Phone, Clock, Building, Trash2 } from "lucide-react";

export default function AdminLocationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState(LOCATIONS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Location Form State
  const [newLocation, setNewLocation] = useState({
    name: "",
    street: "",
    postCode: "",
    city: "Lublin",
    phone: "",
    hours: "Pon - Sob: 10:00 - 23:00, Niedziela: 12:00 - 22:00",
  });

  const handleToggleLocationStatus = (locId: string) => {
    setLocations((prev) =>
      prev.map((loc) => (loc.id === locId ? { ...loc, isOpen: !loc.isOpen } : loc))
    );
  };

  const handleDeleteLocation = (locId: string) => {
    if (window.confirm("Czy na pewno chcesz usunąć ten lokal?")) {
      setLocations((prev) => prev.filter((loc) => loc.id !== locId));
    }
  };

  const handleAddLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLocation.name || !newLocation.street || !newLocation.phone) {
      alert("Proszę wypełnić wszystkie wymagane pola!");
      return;
    }

    const createdLocation = {
      id: `loc-${Date.now()}`,
      name: newLocation.name,
      street: newLocation.street,
      postCode: newLocation.postCode || "20-001",
      city: newLocation.city,
      phone: newLocation.phone,
      hours: newLocation.hours,
      isOpen: true,
      slug: newLocation.name.toLowerCase().replace(/\s+/g, "-"),
    };

    setLocations((prev) => [createdLocation, ...prev]);
    setIsAddModalOpen(false);
    setNewLocation({
      name: "",
      street: "",
      postCode: "",
      city: "Lublin",
      phone: "",
      hours: "Pon - Sob: 10:00 - 23:00, Niedziela: 12:00 - 22:00",
    });
  };

  const filteredLocations = locations.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex font-lato">
      <AdminSidebar pendingOrdersCount={1} pendingReservationsCount={1} />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeTab="locations"
          onRefresh={() => {}}
        />

        <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1 overflow-y-auto">
          <div className="space-y-6 animate-fadeIn">
            {/* Header & Add Venue Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-judson font-bold text-2xl text-white">Lokale Dostana Kebab</h2>
                <p className="text-xs text-neutral-400">Zarządzaj otwarciem punktów w czasie rzeczywistym i dodawaj nowe lokale</p>
              </div>

              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-5 py-2.5 flame-btn-gradient text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#f26522]/20 transition-all transform hover:scale-[1.02] active:scale-95"
              >
                <Plus className="w-4 h-4" /> Dodaj Nowy Lokal
              </button>
            </div>

            {/* Locations Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredLocations.map((loc) => (
                <div key={loc.id} className="bg-[#151515] border border-white/10 rounded-3xl p-6 space-y-5 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        loc.isOpen ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}>
                        {loc.isOpen ? "Otwarte" : "Zamknięte"}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleLocationStatus(loc.id)}
                          className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-xl font-bold transition-colors"
                        >
                          {loc.isOpen ? "Zamknij punkt" : "Otwórz punkt"}
                        </button>
                        <button
                          onClick={() => handleDeleteLocation(loc.id)}
                          className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 rounded-xl transition-colors"
                          title="Usuń lokal"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-judson font-bold text-xl text-white">{loc.name}</h3>
                      <p className="text-xs text-neutral-400">{loc.street}, {loc.postCode} {loc.city}</p>
                      <p className="text-xs text-neutral-400 font-mono">{loc.phone}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-xs text-neutral-400 space-y-1">
                    <div className="font-bold text-white">Godziny otwarcia:</div>
                    <div>{loc.hours}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Add New Venue Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#151515] border border-white/10 rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-[#f26522]/10 text-[#f26522]">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-judson font-bold text-2xl text-white">Dodaj Nowy Lokal</h3>
                  <p className="text-xs text-neutral-400">Wprowadź dane nowej restauracji Dostana Kebab</p>
                </div>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-xl text-neutral-400 hover:text-white transition-colors"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddLocationSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 uppercase font-bold tracking-wider block">
                  Nazwa Lokalu *
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    required
                    value={newLocation.name}
                    onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
                    placeholder="np. Dostana Kebab Lipowa"
                    className="w-full bg-[#0e0e0e] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#f26522]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 uppercase font-bold tracking-wider block">
                    Ulica i numer *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      type="text"
                      required
                      value={newLocation.street}
                      onChange={(e) => setNewLocation({ ...newLocation, street: e.target.value })}
                      placeholder="np. ul. Lipowa 14"
                      className="w-full bg-[#0e0e0e] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#f26522]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 uppercase font-bold tracking-wider block">
                    Kod pocztowy & Miasto
                  </label>
                  <input
                    type="text"
                    value={newLocation.postCode}
                    onChange={(e) => setNewLocation({ ...newLocation, postCode: e.target.value })}
                    placeholder="20-020 Lublin"
                    className="w-full bg-[#0e0e0e] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#f26522]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 uppercase font-bold tracking-wider block">
                  Numer Telefonu *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    required
                    value={newLocation.phone}
                    onChange={(e) => setNewLocation({ ...newLocation, phone: e.target.value })}
                    placeholder="np. +48 81 743 00 00"
                    className="w-full bg-[#0e0e0e] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#f26522]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 uppercase font-bold tracking-wider block">
                  Godziny Otwarcia
                </label>
                <div className="relative">
                  <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    value={newLocation.hours}
                    onChange={(e) => setNewLocation({ ...newLocation, hours: e.target.value })}
                    placeholder="np. Pon - Nie: 10:00 - 23:00"
                    className="w-full bg-[#0e0e0e] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#f26522]"
                  />
                </div>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors"
                >
                  Anuluj
                </button>
                <button
                  type="submit"
                  className="flex-1 flame-btn-gradient text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#f26522]/20 transition-all transform hover:scale-[1.02] active:scale-95"
                >
                  Zapisz Lokal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

