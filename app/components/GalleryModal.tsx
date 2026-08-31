"use client";

import React, { useState } from "react";
import { GALLERY_PHOTOS } from "../data/restaurantData";
import { Camera, X, ZoomIn, Flame } from "lucide-react";

export default function GalleryModal() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="gallery" className="py-16 bg-[#121212] relative border-t border-white/10 overflow-hidden">
<div className="absolute inset-0 z-0 bg-dostana-pattern opacity-25 filter contrast-110" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#121212]/90 via-[#121212]/80 to-[#121212]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
<div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#e5a93c] text-xs font-bold uppercase tracking-wider mb-2 font-lato">
            <Camera className="w-4 h-4 text-[#e5a93c]" /> Jedz oczami
          </div>
          <h2 className="font-judson font-bold text-3xl sm:text-5xl text-white tracking-tight">
            NASZA <span className="text-[#f26522]">GALERIA DAŃ</span>
          </h2>
          <p className="font-lato text-neutral-400 mt-2 text-sm sm:text-base">
            Prawdziwy smak, świeże składniki. Przygotowywane codziennie ze świeżych warzyw, ciepłego chlebka lawasz i soczystego mięsa z grilla.
          </p>
        </div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 font-lato">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(photo)}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#f26522] transition-colors shadow-lg"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <ZoomIn className="w-4 h-4 text-[#f26522]" />
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
{selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative max-w-4xl w-full bg-[#1c1c1c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 text-neutral-400 hover:text-white rounded-full bg-black/60 backdrop-blur-md border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video relative">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-[#121212] flex items-center justify-between font-lato">
                <div className="flex items-center gap-2 text-white font-judson font-bold text-xl">
                  <Flame className="w-5 h-5 text-[#f26522] fill-[#f26522]" />
                  <span>{selectedPhoto.title}</span>
                </div>
                <span className="text-xs text-[#f26522] font-bold uppercase tracking-wider">
                  Dostana Kebab Lublin
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
