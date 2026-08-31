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

  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const [guestsDropdownOpen, setGuestsDropdownOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [viewDate, setViewDate] = useState(new Date());

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const activeBranch = LOCATIONS.find((loc) => loc.id === selectedLocationId) || currentLocation;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div>
      <SubpageHero
        title="Rezerwacja Stolika"
        breadcrumb="Rezerwacje"
        subtitle="Zarezerwuj stolik online. Wyślij rezerwację, a potwierdzimy ją w ciągu 24 godzin!"
      />

      <div className="py-12 bg-[#121212] min-h-[70vh] relative overflow-hidden font-lato">
        <div className="absolute inset-0 z-0 bg-dostana-pattern opacity-25 filter contrast-110" />
        <div className="absolute inset-0 z-0 bg-[#121212]/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="font-judson font-bold text-3xl sm:text-5xl text-white">
              Zarezerwuj stolik już teraz!
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm">
              Wyślij nam prośbę o rezerwację, a potwierdzimy ją w ciągu 24 godzin.
            </p>
          </div>
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl glow-box-orange">
            {confirmed ? (
              <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-4xl shadow-xl">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="font-judson font-bold text-3xl text-white">Rezerwacja wysłana!</h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                  Dziękujemy, <strong className="text-white">{name}</strong>! Twoja rezerwacja stolika dla <strong className="text-white">{guests === "1" ? "1 osoby" : guests === "8+" ? "Grupy 8+" : `${guests} osób`}</strong> na dzień <strong className="text-[#f26522]">{date} o godzinie {time}</strong> w lokalu <strong className="text-white">{activeBranch.name}</strong> została wysłana.
                </p>
                <button
                  onClick={() => setConfirmed(false)}
                  className="flame-btn-gradient text-white text-xs font-black px-8 py-3.5 rounded-full inline-block shadow-lg"
                >
                  Złóż kolejną rezerwację
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#f26522]" /> Lokalizacja / Oddział restauracji *
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setBranchDropdownOpen(!branchDropdownOpen);
                      setTimeDropdownOpen(false);
                      setGuestsDropdownOpen(false);
                    }}
                    className={`w-full bg-[#161616] border rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white font-bold focus:outline-none cursor-pointer flex items-center justify-between transition-colors ${
                      branchDropdownOpen ? "border-[#f26522]" : "border-white/20 hover:border-[#f26522]"
                    }`}
                  >
                    <span className="truncate mr-2 text-left">
                      {activeBranch.name} ({activeBranch.street})
                    </span>
                    <span className="text-[#f26522] text-[10px]">▼</span>
                  </button>

                  {branchDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setBranchDropdownOpen(false)} />
                      <div className="absolute right-0 left-0 mt-1.5 bg-[#161616] border border-[#f26522] rounded-xl overflow-hidden shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto">
                        {LOCATIONS.map((loc) => {
                          const isSelected = selectedLocationId === loc.id;
                          return (
                            <button
                              key={loc.id}
                              type="button"
                              onClick={() => {
                                setSelectedLocationId(loc.id);
                                setCurrentLocation(loc);
                                setBranchDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3.5 text-xs sm:text-sm font-bold transition-all flex items-center justify-between ${
                                isSelected 
                                  ? "bg-[#f26522] text-white" 
                                  : "text-neutral-300 hover:bg-[#f26522] hover:text-white"
                              }`}
                            >
                              <span className="truncate mr-2">
                                {loc.name} ({loc.street})
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="relative">
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#f26522]" /> Data rezerwacji *
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setDatePickerOpen(!datePickerOpen);
                        setBranchDropdownOpen(false);
                        setTimeDropdownOpen(false);
                        setGuestsDropdownOpen(false);
                      }}
                      className={`w-full bg-[#161616] border rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none cursor-pointer flex items-center justify-between transition-colors ${
                        datePickerOpen ? "border-[#f26522]" : "border-white/20 hover:border-[#f26522]"
                      }`}
                    >
                      <span>{date ? date : "Wybierz datę"}</span>
                      <Calendar className="w-4 h-4 text-[#f26522]" />
                    </button>

                    {datePickerOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setDatePickerOpen(false)} />
                        <div className="absolute left-0 mt-1.5 bg-[#161616] border border-[#f26522] rounded-xl p-4 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-100 w-72">
                          <div className="flex items-center justify-between mb-3">
                            <button
                              type="button"
                              onClick={() => {
                                const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
                                setViewDate(newDate);
                              }}
                              className="p-1 text-neutral-400 hover:text-white font-bold"
                            >
                              ◀
                            </button>
                            <span className="text-xs font-bold text-white uppercase">
                              {viewDate.toLocaleString("pl", { month: "long", year: "numeric" })}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
                                setViewDate(newDate);
                              }}
                              className="p-1 text-neutral-400 hover:text-white font-bold"
                            >
                              ▶
                            </button>
                          </div>

                          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black text-neutral-500 mb-2 uppercase">
                            <span>Nd</span>
                            <span>Pn</span>
                            <span>Wt</span>
                            <span>Śr</span>
                            <span>Cz</span>
                            <span>Pt</span>
                            <span>So</span>
                          </div>

                          <div className="grid grid-cols-7 gap-1">
                            {(() => {
                              const year = viewDate.getFullYear();
                              const month = viewDate.getMonth();
                              const daysCount = getDaysInMonth(year, month);
                              const firstDay = getFirstDayOfMonth(year, month);
                              const days = [];

                              for (let i = 0; i < firstDay; i++) {
                                days.push(<div key={`empty-${i}`} />);
                              }

                              for (let day = 1; day <= daysCount; day++) {
                                const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                                const isSelected = date === formattedDate;
                                days.push(
                                  <button
                                    key={day}
                                    type="button"
                                    onClick={() => {
                                      setDate(formattedDate);
                                      setDatePickerOpen(false);
                                    }}
                                    className={`w-7 h-7 text-[11px] font-bold rounded-lg flex items-center justify-center transition-colors ${
                                      isSelected
                                        ? "bg-[#f26522] text-white"
                                        : "text-neutral-300 hover:bg-[#f26522] hover:text-white"
                                    }`}
                                  >
                                    {day}
                                  </button>
                                );
                              }
                              return days;
                            })()}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#e5a93c]" /> Godzina rezerwacji *
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setTimeDropdownOpen(!timeDropdownOpen);
                        setBranchDropdownOpen(false);
                        setGuestsDropdownOpen(false);
                      }}
                      className={`w-full bg-[#161616] border rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none cursor-pointer flex items-center justify-between transition-colors ${
                        timeDropdownOpen ? "border-[#f26522]" : "border-white/20 hover:border-[#f26522]"
                      }`}
                    >
                      <span>
                        {time.includes("AM") || time.includes("PM") ? time : 
                          parseInt(time.split(":")[0]) >= 12 
                            ? `${parseInt(time.split(":")[0]) === 12 ? 12 : parseInt(time.split(":")[0]) - 12}:${time.split(":")[1]} PM`
                            : `${time} AM`
                        }
                      </span>
                      <span className="text-[#f26522] text-[10px]">▼</span>
                    </button>

                    {timeDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setTimeDropdownOpen(false)} />
                        <div className="absolute right-0 left-0 mt-1.5 bg-[#161616] border border-[#f26522] rounded-xl overflow-hidden shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto">
                          {[
                            { value: "11:30", label: "11:30 AM" },
                            { value: "12:00", label: "12:00 PM" },
                            { value: "13:00", label: "1:00 PM" },
                            { value: "14:00", label: "2:00 PM" },
                            { value: "15:00", label: "3:00 PM" },
                            { value: "16:00", label: "4:00 PM" },
                            { value: "17:00", label: "5:00 PM" },
                            { value: "18:00", label: "6:00 PM" },
                            { value: "19:00", label: "7:00 PM" },
                            { value: "20:00", label: "8:00 PM" },
                            { value: "21:00", label: "9:00 PM" },
                          ].map((item) => {
                            const isSelected = time === item.value;
                            return (
                              <button
                                key={item.value}
                                type="button"
                                onClick={() => {
                                  setTime(item.value);
                                  setTimeDropdownOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-bold transition-all flex items-center justify-between ${
                                  isSelected 
                                    ? "bg-[#f26522] text-white" 
                                    : "text-neutral-300 hover:bg-[#f26522] hover:text-white"
                                }`}
                              >
                                <span>{item.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-400" /> Liczba gości *
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setGuestsDropdownOpen(!guestsDropdownOpen);
                        setBranchDropdownOpen(false);
                        setTimeDropdownOpen(false);
                      }}
                      className={`w-full bg-[#161616] border rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none cursor-pointer flex items-center justify-between transition-colors ${
                        guestsDropdownOpen ? "border-[#f26522]" : "border-white/20 hover:border-[#f26522]"
                      }`}
                    >
                      <span>
                        {guests === "1" ? "1 osoba" : guests === "8+" ? "Grupa 8+" : `${guests} osób`}
                      </span>
                      <span className="text-[#f26522] text-[10px]">▼</span>
                    </button>

                    {guestsDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setGuestsDropdownOpen(false)} />
                        <div className="absolute right-0 left-0 mt-1.5 bg-[#161616] border border-[#f26522] rounded-xl overflow-hidden shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto">
                          {[
                            { value: "1", label: "1 osoba" },
                            { value: "2", label: "2 osoby" },
                            { value: "3", label: "3 osoby" },
                            { value: "4", label: "4 osoby" },
                            { value: "5", label: "5 osób" },
                            { value: "6", label: "6 osób" },
                            { value: "8+", label: "Grupa 8+" },
                          ].map((item) => {
                            const isSelected = guests === item.value;
                            return (
                              <button
                                key={item.value}
                                type="button"
                                onClick={() => {
                                  setGuests(item.value);
                                  setGuestsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-bold transition-all flex items-center justify-between ${
                                  isSelected 
                                    ? "bg-[#f26522] text-white" 
                                    : "text-neutral-300 hover:bg-[#f26522] hover:text-white"
                                }`}
                              >
                                <span>{item.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-neutral-400" /> Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jan Kowalski"
                      className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-emerald-400" /> Numer telefonu *
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
                      <Mail className="w-4 h-4 text-[#e5a93c]" /> Adres e-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jan.kowalski@example.com"
                      className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-neutral-400" /> Uwagi specjalne (Opcjonalnie)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="np. preferowane miejsce przy oknie, świętowanie urodzin..."
                    className="w-full bg-[#161616] border border-white/20 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flame-btn-gradient text-white font-black text-sm uppercase py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl"
                >
                  POTWIERDŹ REZERWACJĘ STOLIKA
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
