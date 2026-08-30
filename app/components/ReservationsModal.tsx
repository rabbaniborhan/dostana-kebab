"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Users, CheckCircle2, UtensilsCrossed } from "lucide-react";
import { Location } from "../data/restaurantData";

interface ReservationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocation: Location;
}

export default function ReservationsModal({
  isOpen,
  onClose,
  currentLocation,
}: ReservationsModalProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("18:00");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-800 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl flex flex-col">
<div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="w-5 h-5 text-orange-500" />
            <div>
              <h3 className="text-xl font-extrabold text-white">Table Reservation</h3>
              <p className="text-xs text-neutral-400">{currentLocation.name}</p>
            </div>
          </div>
          <button
            onClick={() => {
              setConfirmed(false);
              onClose();
            }}
            className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
<div className="p-6 space-y-4">
          {confirmed ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-3xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-white">Table Reserved!</h4>
              <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                Thank you, <strong className="text-white">{name}</strong>! Your table for <strong className="text-white">{guests} guests</strong> on <strong className="text-orange-400">{date} at {time}</strong> is confirmed at {currentLocation.name}.
              </p>
              <button
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="flame-btn-gradient text-white text-xs font-bold px-6 py-3 rounded-full inline-block"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    Time *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">
                  Number of Guests *
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="6">6 Persons</option>
                  <option value="8+">8+ Large Party</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+48 123 456 789"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">
                  Special Notes (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Birthday celebration, booth seating"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flame-btn-gradient text-white font-black text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-xl"
              >
                CONFIRM TABLE RESERVATION
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
