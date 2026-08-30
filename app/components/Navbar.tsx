"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import { ShoppingBag, MapPin, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { currentLocation, cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const branchSlug = currentLocation?.id || "dostana-kebab-lipowa";

  const navLinks = [
    { href: "/", label: "Start" },
    { href: "/menu", label: "Menu" },
    { href: "/opinions", label: "Opinions" },
    { href: "/reservations", label: "Reservations" },
    { href: "/delivery", label: "Delivery" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 glass-nav transition-all duration-300 border-b border-white/10 font-lato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
<Link href="/" className="flex items-center shrink-0 py-1">
          <img
            src="https://restaumatic-production.imgix.net/uploads/restaurants/347020/logo/1733232577.png?auto=compress%2Cformat&crop=focalpoint&fit=clip&h=300&w=800"
            alt="Dostana Kebab Logo"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>
<nav className="hidden lg:flex items-center gap-5 sm:gap-6 text-xs sm:text-sm font-normal tracking-wide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-[#f26522] font-medium"
                    : "text-white/90 hover:text-[#f26522]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
<div className="flex items-center gap-2.5 font-lato">
<Link
            href="/contact"
            className="hidden xl:flex items-center gap-1.5 bg-[#1c1c1c] border border-white/10 px-2.5 py-1 rounded text-xs text-neutral-300 hover:text-white"
          >
            <MapPin className="w-3.5 h-3.5 text-[#f26522]" />
            <span className="truncate max-w-[130px] font-bold">
              {currentLocation.name.replace("Dostana Kebab ", "")}
            </span>
          </Link>
          <Link
            href={`/menu/${branchSlug}`}
            className="hidden lg:flex relative flame-btn-gradient text-white font-bold text-xs uppercase px-4 py-2.5 rounded-xl items-center gap-1.5 shadow-md transition-all shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Online</span>
            {cartCount > 0 && (
              <span className="bg-white text-[#d9531e] font-black text-xs w-4.5 h-4.5 rounded-full flex items-center justify-center ml-0.5">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded bg-[#1c1c1c] border border-neutral-800 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161616] border-b border-neutral-800 px-6 py-5 space-y-3 font-lato animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2.5 text-sm font-medium text-neutral-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 ${
                  pathname === link.href
                    ? "text-[#f26522] font-semibold"
                    : "hover:text-[#f26522]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={`/menu/${branchSlug}`}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flame-btn-gradient text-white font-bold text-xs uppercase py-2.5 rounded-xl flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Online Now</span>
            {cartCount > 0 && (
              <span className="bg-white text-[#d9531e] font-black text-xs w-4.5 h-4.5 rounded-full flex items-center justify-center ml-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </header>
  );
}
