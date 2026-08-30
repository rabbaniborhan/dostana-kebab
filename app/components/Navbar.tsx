"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { currentLocation, cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 font-lato ${
        isScrolled
          ? "top-0 bg-black/95 border-b border-white/10 shadow-lg backdrop-blur-md"
          : "top-4 sm:top-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16 sm:h-20" : "h-24 sm:h-28"
        }`}
      >
        <Link href="/" className="flex items-center shrink-0 py-1">
          <img
            src="https://restaumatic-production.imgix.net/uploads/restaurants/347020/logo/1733232577.png?auto=compress%2Cformat&crop=focalpoint&fit=clip&h=300&w=800"
            alt="Dostana Kebab Logo"
            className={`w-auto object-contain hover:scale-105 transition-all duration-300 ${
              isScrolled ? "h-12 sm:h-14 md:h-16" : "h-20 sm:h-24 md:h-28"
            }`}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-7 lg:gap-9 text-sm lg:text-[15px] font-normal tracking-wide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-[#f26522] font-medium"
                    : "text-[#ffffff] hover:text-[#f26522]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2.5 font-lato">
          <Link
            href={`/menu/${branchSlug}`}
            className="hidden lg:flex relative bg-transparent border border-[#f26522] hover:bg-[#f26522]/10 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-xl items-center gap-1.5 transition-all shrink-0"
          >
            <span>Order Online</span>
            {cartCount > 0 && (
              <span className="bg-[#f26522] text-white font-black text-xs w-4.5 h-4.5 rounded-full flex items-center justify-center ml-0.5">
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
                className={`py-1 transition-colors ${
                  pathname === link.href
                    ? "text-[#f26522] font-semibold"
                    : "text-[#ffffff] hover:text-[#f26522]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={`/menu/${branchSlug}`}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-transparent border border-[#f26522] hover:bg-[#f26522]/10 text-white font-bold text-xs uppercase py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <span>Order Online Now</span>
            {cartCount > 0 && (
              <span className="bg-[#f26522] text-white font-black text-xs w-4.5 h-4.5 rounded-full flex items-center justify-center ml-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </header>
  );
}
