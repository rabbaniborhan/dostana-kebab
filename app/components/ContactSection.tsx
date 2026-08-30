"use client";

import React, { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, Compass } from "lucide-react";
import { LOCATIONS, Location } from "../data/restaurantData";

export default function ContactSection() {
  const [selectedVenue, setSelectedVenue] = useState<Location>(LOCATIONS[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${selectedVenue.name}, ${selectedVenue.street}, ${selectedVenue.postCode} ${selectedVenue.city}, Poland`
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-16 bg-[#121212] relative overflow-hidden font-lato">
      <div className="absolute inset-0 z-0 bg-dostana-pattern opacity-25 filter contrast-110" />
      <div className="absolute inset-0 z-0 bg-[#121212]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-[#f26522] text-xs font-bold uppercase tracking-wider bg-[#d9531e]/20 border border-[#d9531e]/40 px-3.5 py-1 rounded-full">
            <MessageSquare className="w-4 h-4 text-[#f26522]" /> Get In Touch
          </div>
          <h2 className="font-judson font-bold text-3xl sm:text-5xl text-white tracking-tight">
            CONTACT <span className="text-[#f26522]">DOSTANA KEBAB</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base">
            Select your preferred Lublin venue to view live map directions, or send us a direct message!
          </p>
        </div>
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#f26522] uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#f26522]" /> Click to select a venue:
              </label>
              <h3 className="font-judson font-bold text-2xl sm:text-3xl text-white">
                Interactive Restaurant Map Locator
              </h3>
            </div>
            <div className="w-full md:w-96 relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`w-full bg-[#161616] border rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white font-bold focus:outline-none cursor-pointer flex items-center justify-between transition-colors ${
                  dropdownOpen ? "border-[#f26522]" : "border-white/20 hover:border-white/45"
                }`}
              >
                <span className="truncate mr-2 text-left">
                  {selectedVenue.name} - {selectedVenue.street}
                </span>
                <span className="text-[#f26522] text-[10px]">▼</span>
              </button>

              {dropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                  <div className="absolute right-0 left-0 mt-1.5 bg-[#161616] border border-[#f26522] rounded-xl overflow-hidden shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto">
                    {LOCATIONS.map((loc) => {
                      const isSelected = selectedVenue.id === loc.id;
                      return (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => {
                            setSelectedVenue(loc);
                            setDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-xs sm:text-sm font-bold transition-all flex items-center justify-between ${
                            isSelected 
                              ? "bg-[#f26522] text-white" 
                              : "text-neutral-300 hover:bg-[#f26522] hover:text-white"
                          }`}
                        >
                          <span className="truncate mr-2">
                            {loc.name} - {loc.street}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-4 bg-[#161616] p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-xs text-neutral-300">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-[#f26522] uppercase tracking-widest bg-[#d9531e]/20 border border-[#d9531e]/40 px-2.5 py-0.5 rounded">
                    SELECTED VENUE
                  </span>
                  <h4 className="font-judson font-bold text-2xl text-white pt-1">
                    {selectedVenue.name}
                  </h4>
                  <p className="text-neutral-400 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#f26522] shrink-0" />
                    <span>{selectedVenue.street}, {selectedVenue.postCode} {selectedVenue.city}</span>
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-emerald-400" /> Phone:
                    </span>
                    <a
                      href={`tel:${selectedVenue.phone.replace(/\s+/g, "")}`}
                      className="font-bold text-emerald-400 hover:underline"
                    >
                      {selectedVenue.phone}
                    </a>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#e5a93c]" /> Hours:
                    </span>
                    <span className="font-bold text-white">{selectedVenue.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${selectedVenue.name}, ${selectedVenue.street}, ${selectedVenue.city}, Poland`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flame-btn-gradient text-white font-bold text-xs uppercase py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Open In Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
<div className="lg:col-span-8 h-80 lg:h-auto min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-[#161616] relative">
              <iframe
                title={`Map for ${selectedVenue.name}`}
                src={mapEmbedUrl}
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
                allowFullScreen
              />
            </div>

          </div>

        </div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5 space-y-6">
<div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-4">
              <img
                src="https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/ee39356f-0878-4640-bdbd-9af8924847a8.png?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&rect=0%2C0%2C657%2C656"
                alt="Dostana Kebab Food Showcase"
                className="w-24 h-24 object-cover rounded-xl border border-[#d9531e]/50 shrink-0"
              />
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#f26522] uppercase tracking-wider">
                  Always Fresh In Lublin
                </span>
                <h4 className="font-judson font-bold text-white text-xl">
                  Order Hot & Delicious
                </h4>
                <p className="text-xs text-neutral-300">
                  Delivered from 6 local branches across Lublin.
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="font-judson font-bold text-xl text-white">Main Branch Contact</h3>
              
              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f26522] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-extrabold text-white text-sm">Dostana Kebab Krakowskie Przedmieście</div>
                    <div>Krakowskie Przedmieście 8, 20-400 Lublin</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-extrabold text-white">Direct Phone:</div>
                    <a href="tel:732816154" className="text-emerald-400 font-bold hover:underline">
                      732 816 154
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#e5a93c] shrink-0" />
                  <div>
                    <div className="font-extrabold text-white">Opening Hours:</div>
                    <div>Monday - Sunday: 11:00 AM - 9:30 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="font-judson font-bold text-2xl text-white">Send Us A Message</h3>
              
              {sent ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-3xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-judson font-bold text-2xl text-white">Message Sent!</h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{name}</strong>! We have received your message and will reply shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="flame-btn-gradient text-white text-xs font-bold px-6 py-3 rounded inline-block"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-neutral-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-neutral-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      className="w-full bg-[#161616] border border-white/10 rounded-xl p-4 text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flame-btn-gradient text-white font-bold uppercase py-3.5 rounded flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
