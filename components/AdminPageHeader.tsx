"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

interface AdminPageHeaderProps {
  title: string;
  subtitle?: string;
  actionText?: string;
  onActionClick?: () => void;
  actionIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function AdminPageHeader({
  title,
  subtitle,
  actionText,
  onActionClick,
  actionIcon,
  children,
}: AdminPageHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">{title}</h1>
        {subtitle && <p className="text-xs text-neutral-400 mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        {children}
        {actionText && (
          <button
            type="button"
            onClick={onActionClick}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 rounded-lg text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
          >
            {actionIcon || <ExternalLink className="w-3.5 h-3.5 text-[#f26522]" />}
            <span>{actionText}</span>
          </button>
        )}
      </div>
    </div>
  );
}
