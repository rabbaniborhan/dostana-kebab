"use client";

import React, { useState, useEffect } from "react";
import { MenuItem, MEAT_OPTIONS, SAUCE_OPTIONS, EXTRA_TOPPINGS } from "../data/restaurantData";
import { X, Check, Flame, Plus, Minus, ShoppingBag, MessageSquare } from "lucide-react";

export interface CustomizedCartItem {
  cartId: string;
  item: MenuItem;
  selectedSize: { name: string; extraPrice: number };
  selectedMeat: string;
  selectedSauce: string;
  selectedExtras: { id: string; name: string; price: number }[];
  specialNotes?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface ItemCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (customizedItem: CustomizedCartItem) => void;
}

export default function ItemCustomizerModal({
  item,
  onClose,
  onAddToCart,
}: ItemCustomizerModalProps) {
  const [selectedSize, setSelectedSize] = useState<{ name: string; extraPrice: number }>({
    name: "Porcja standardowa",
    extraPrice: 0,
  });
  const [selectedMeat, setSelectedMeat] = useState<string>(MEAT_OPTIONS[0]);
  const [selectedSauce, setSelectedSauce] = useState<string>(SAUCE_OPTIONS[0]);
  const [selectedExtras, setSelectedExtras] = useState<
    { id: string; name: string; price: number }[]
  >([]);
  const [specialNotes, setSpecialNotes] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (item) {
      if (item.availableSizes && item.availableSizes.length > 0) {
        setSelectedSize(item.availableSizes[0]);
      } else {
        setSelectedSize({ name: "Porcja standardowa", extraPrice: 0 });
      }

      if (item.availableMeats && item.availableMeats.length > 0) {
        setSelectedMeat(item.availableMeats[0]);
      } else {
        setSelectedMeat(MEAT_OPTIONS[0]);
      }

      if (item.availableSauces && item.availableSauces.length > 0) {
        setSelectedSauce(item.availableSauces[0]);
      } else {
        setSelectedSauce(SAUCE_OPTIONS[0]);
      }

      setSelectedExtras([]);
      setSpecialNotes("");
      setQuantity(1);
    }
  }, [item]);

  if (!item) return null;

  const extrasTotalPrice = selectedExtras.reduce(
    (sum, ext) => sum + ext.price,
    0
  );
  const unitPrice = item.price + selectedSize.extraPrice + extrasTotalPrice;
  const totalPrice = unitPrice * quantity;

  const toggleExtra = (extra: { id: string; name: string; price: number }) => {
    if (selectedExtras.some((e) => e.id === extra.id)) {
      setSelectedExtras(selectedExtras.filter((e) => e.id !== extra.id));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  const handleAdd = () => {
    const customizedItem: CustomizedCartItem = {
      cartId: `${item.id}-${Date.now()}`,
      item,
      selectedSize,
      selectedMeat,
      selectedSauce,
      selectedExtras,
      specialNotes: specialNotes.trim() || undefined,
      quantity,
      unitPrice,
      totalPrice,
    };
    onAddToCart(customizedItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 font-lato">
      <div className="bg-[#161616] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] glow-box-orange">
        <div className="relative p-6 border-b border-white/10 flex items-center bg-[#121212]">
          <div className="flex items-start gap-3 pr-10">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#d9531e]/20 border border-[#d9531e]/50 flex items-center justify-center text-[#f26522] shrink-0 mt-0.5">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 fill-[#f26522]" />
            </div>
            <div>
              <h3 className="font-judson font-bold text-xl sm:text-2xl text-white leading-tight">{item.name}</h3>
              <p className="text-[10px] sm:text-xs text-[#f26522] font-bold mt-1">
                Dostosuj smak, mięso i autorskie sosy
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 text-neutral-400 hover:text-white rounded-full bg-[#1c1c1c] border border-white/10 z-10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          <div className="flex gap-4 bg-[#121212] p-4 rounded-2xl border border-white/10 items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-xl shrink-0 border border-white/10"
            />
            <div className="space-y-1">
              <p className="text-neutral-300 leading-relaxed">{item.description}</p>
              <div className="text-[#e5a93c] font-bold text-sm">
                Cena podstawowa: {item.price.toFixed(2)} zł
              </div>
            </div>
          </div>
          {item.availableSizes && item.availableSizes.length > 0 && (
            <div className="space-y-3">
              <label className="text-xs uppercase font-extrabold text-white tracking-wider flex items-center justify-between">
                <span>1. Wybierz rozmiar porcji</span>
                <span className="text-[#f26522] font-bold text-[10px] bg-[#d9531e]/20 px-2 py-0.5 rounded">*WYMAGANE</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {item.availableSizes.map((size) => {
                  const isSelected = selectedSize.name === size.name;
                  return (
                    <button
                      key={size.name}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`p-3.5 rounded-2xl text-xs font-bold text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#d9531e]/20 border-[#f26522] text-white shadow-md"
                          : "bg-[#121212] border-white/10 text-neutral-300 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{size.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#f26522]" />}
                      </div>
                      <span className="text-[11px] text-[#e5a93c] mt-1.5 font-mono">
                        {size.extraPrice > 0 ? `+${size.extraPrice.toFixed(2)} zł` : "W cenie"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {item.availableMeats && item.availableMeats.length > 0 && (
            <div className="space-y-3">
              <label className="text-xs uppercase font-extrabold text-white tracking-wider flex items-center justify-between">
                <span>2. Wybierz mięso z węgla drzewnego</span>
                <span className="text-[#f26522] font-bold text-[10px] bg-[#d9531e]/20 px-2 py-0.5 rounded">*WYMAGANE</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.availableMeats.map((meat) => {
                  const isSelected = selectedMeat === meat;
                  return (
                    <button
                      key={meat}
                      type="button"
                      onClick={() => setSelectedMeat(meat)}
                      className={`p-3.5 rounded-2xl text-xs font-bold text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-[#d9531e]/20 border-[#f26522] text-white shadow-md"
                          : "bg-[#121212] border-white/10 text-neutral-300 hover:border-white/20"
                      }`}
                    >
                      <span>{meat}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#f26522]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {item.availableSauces && item.availableSauces.length > 0 && (
            <div className="space-y-3">
              <label className="text-xs uppercase font-extrabold text-white tracking-wider flex items-center justify-between">
                <span>3. Wybierz autorski sos</span>
                <span className="text-[#f26522] font-bold text-[10px] bg-[#d9531e]/20 px-2 py-0.5 rounded">*WYMAGANE</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.availableSauces.map((sauce) => {
                  const isSelected = selectedSauce === sauce;
                  return (
                    <button
                      key={sauce}
                      type="button"
                      onClick={() => setSelectedSauce(sauce)}
                      className={`p-3.5 rounded-2xl text-xs font-bold text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-[#d9531e]/20 border-[#f26522] text-white shadow-md"
                          : "bg-[#121212] border-white/10 text-neutral-300 hover:border-white/20"
                      }`}
                    >
                      <span>{sauce}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#f26522]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          <div className="space-y-3">
            <label className="text-xs uppercase font-extrabold text-white tracking-wider">
              4. Dodaj dodatki i ser (Opcjonalnie)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EXTRA_TOPPINGS.map((extra) => {
                const isSelected = selectedExtras.some((e) => e.id === extra.id);
                return (
                  <button
                    key={extra.id}
                    type="button"
                    onClick={() => toggleExtra(extra)}
                    className={`p-3.5 rounded-2xl text-xs font-bold border transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-[#e5a93c]/20 border-[#e5a93c] text-white"
                        : "bg-[#121212] border-white/10 text-neutral-300 hover:border-white/20"
                    }`}
                  >
                    <span>{extra.name}</span>
                    <span className="text-[#e5a93c] font-mono">
                      +{extra.price.toFixed(2)} zł
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-extrabold text-white tracking-wider flex items-start gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#f26522] shrink-0 mt-0.5" />
              <span>5. Specjalne instrukcje dla kuchni (Opcjonalnie)</span>
            </label>
            <textarea
              rows={2}
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="np. bardzo chrupiąca pita, bez surowej cebuli, sos osobno..."
              className="w-full bg-[#121212] border border-white/10 rounded-2xl p-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#f26522]"
            />
          </div>
        </div>
        <div className="p-3 sm:p-6 border-t border-white/10 bg-[#121212] flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 bg-[#1c1c1c] border border-white/10 p-1 rounded-full shrink-0">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 rounded-full bg-[#242424] hover:bg-neutral-700 text-white flex items-center justify-center font-bold"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-extrabold text-xs text-white w-5 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 rounded-full bg-[#d9531e] hover:bg-[#f26522] text-white flex items-center justify-center font-bold"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          <button
            onClick={handleAdd}
            className="flex-1 flame-btn-gradient text-white font-black text-[10px] xs:text-xs sm:text-sm md:text-base uppercase py-3 px-2 sm:px-4 rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 shadow-xl whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 shrink-0" />
            <span>DODAJ DO ZAMÓWIENIA ({totalPrice.toFixed(2)} zł)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
