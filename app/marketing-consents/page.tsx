"use client";

import React, { useState } from "react";
import SubpageHero from "../components/SubpageHero";
import { Check } from "lucide-react";

export default function MarketingConsentsPage() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-[#121212] min-h-screen text-neutral-200 font-lato">
      <SubpageHero
        title="Zgody marketingowe"
        breadcrumb="Zgody marketingowe"
        subtitle="Zarządzaj swoimi preferencjami komunikacji marketingowej dla Dostana Kebab Lublin."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl">

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Jeśli chcesz wycofać swoją zgodę marketingową, nie będziemy już wysyłać Ci informacji o promocjach i rabatach specjalnych.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-[#f26522] text-sm font-medium block">
                Telefon
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#0e0e0e] border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#f26522] transition-colors"
                placeholder="Wpisz swój numer telefonu"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[#f26522] text-sm font-medium block">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0e0e0e] border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#f26522] transition-colors"
                placeholder="Wpisz swój adres e-mail"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="flame-btn-gradient text-white font-bold text-sm uppercase tracking-wider px-8 py-3 rounded-xl flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4" /> Wycofano zgodę pomyślnie
                  </>
                ) : (
                  "Wycofaj zgodę"
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
