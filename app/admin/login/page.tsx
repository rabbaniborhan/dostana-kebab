"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (email === "admin@dostanakebab.com" && password === "admin123") {
        router.push("/admin");
      } else {
        setError("Invalid email or password. Please try again.");
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="bg-[#0e0e0e] min-h-screen flex items-center justify-center px-4 py-12 font-lato relative overflow-hidden">
<div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#f26522]/10 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#d9531e]/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md space-y-8">
<div className="text-center space-y-4">
          <Link href="/" className="inline-block">
            <img
              src="https://restaumatic-production.imgix.net/uploads/restaurants/347020/logo/1733232577.png?auto=compress%2Cformat&crop=focalpoint&fit=clip&h=300&w=800"
              alt="Dostana Kebab Logo"
              className="h-16 sm:h-20 w-auto object-contain mx-auto hover:scale-105 transition-transform"
            />
          </Link>
          <div>
            <h1 className="font-judson font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Administrator Panel
            </h1>
            <p className="text-sm text-neutral-400 mt-1">
              Sign in to manage orders, venues & menu
            </p>
          </div>
        </div>
<div className="bg-[#151515] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
{error && (
            <div className="bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-medium px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
<div className="space-y-1.5">
              <label htmlFor="admin-email" className="text-xs text-neutral-400 font-medium block uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@dostanakebab.com"
                  className="w-full bg-[#0e0e0e] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-[#f26522] transition-colors"
                  autoComplete="email"
                />
              </div>
            </div>
<div className="space-y-1.5">
              <label htmlFor="admin-password" className="text-xs text-neutral-400 font-medium block uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-[#0e0e0e] border border-white/10 rounded-xl pl-10 pr-11 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-[#f26522] transition-colors"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
<button
              type="submit"
              disabled={loading}
              className="w-full flame-btn-gradient text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
<div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Secure Access</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
<div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>SSL encrypted • Authorized personnel only</span>
          </div>

        </div>
<div className="text-center">
          <Link
            href="/"
            className="text-xs text-neutral-500 hover:text-white transition-colors"
          >
            ← Back to Dostana Kebab website
          </Link>
        </div>

      </div>
    </div>
  );
}
