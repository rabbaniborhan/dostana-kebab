"use client"
import { useState } from "react";
import SubpageHero from "../components/SubpageHero";
import { useCart } from "../context/CartContext";
import { LOCATIONS } from "../data/restaurantData";
import { CheckCircle2, Calendar, Clock, Users, MapPin, User, Phone, Mail, FileText } from "lucide-react";

export default function ReservationsPage() {
  const { currentLocation, setCurrentLocation } = useCart();

  const [selectedLocationId, setSelectedLocationId] = useState(currentLocation.id);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("18:00");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const activeBranch = LOCATIONS.find((loc) => loc.id === selectedLocationId) || currentLocation;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div>
<SubpageHero
        title="Table Reservations"
        breadcrumb="Reservations"
        subtitle="Book a table online. Send your reservation and we will confirm it within 24 hours!"
      />

      <div className="py-12 bg-[#121212] min-h-[70vh] relative overflow-hidden font-lato">
<div className="absolute inset-0 z-0 bg-dostana-pattern opacity-25 filter contrast-110" />
        <div className="absolute inset-0 z-0 bg-[#121212]/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
<div className="text-center space-y-2">
            <h2 className="font-judson font-bold text-3xl sm:text-5xl text-white">
              Reserve Your Table Now!
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm">
              Send us your reservation request and we will confirm it within 24 hours.
            </p>
          </div>
<div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl glow-box-orange">
            {confirmed ? (
              <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-4xl shadow-xl">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="font-judson font-bold text-3xl text-white">Reservation Submitted!</h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>! Your table reservation for <strong className="text-white">{guests} guests</strong> on <strong className="text-[#f26522]">{date} at {time}</strong> at <strong className="text-white">{activeBranch.name}</strong> has been submitted.
                </p>
                <button
                  onClick={() => setConfirmed(false)}
                  className="flame-btn-gradient text-white text-xs font-black px-8 py-3.5 rounded-full inline-block shadow-lg"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
<div>
                  <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#f26522]" /> Restaurant Location / Branch *
                  </label>
                  <select
                    value={selectedLocationId}
                    onChange={(e) => {
                      setSelectedLocationId(e.target.value);
                      const found = LOCATIONS.find((l) => l.id === e.target.value);
                      if (found) setCurrentLocation(found);
                    }}
                    className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white font-bold focus:outline-none focus:border-[#f26522]"
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.id} className="bg-[#161616] text-white">
                        {loc.name} ({loc.street}) - Tel: {loc.phone}
                      </option>
                    ))}
                  </select>
                </div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#f26522]" /> Reservation Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#f26522]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#e5a93c]" /> Reservation Time *
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#f26522]"
                    >
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-400" /> Number of Guests *
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#f26522]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5">5 Persons</option>
                      <option value="6">6 Persons</option>
                      <option value="8+">8+ Group Party</option>
                    </select>
                  </div>
                </div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-neutral-400" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-emerald-400" /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+48 123 456 789"
                      className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-[#e5a93c]" /> Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                    />
                  </div>
                </div>
<div>
                  <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-neutral-400" /> Special Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Window booth seat preference, birthday celebration..."
                    className="w-full bg-[#161616] border border-white/20 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                  />
                </div>
<button
                  type="submit"
                  className="w-full flame-btn-gradient text-white font-black text-sm uppercase py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl"
                >
                  CONFIRM TABLE RESERVATION
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
