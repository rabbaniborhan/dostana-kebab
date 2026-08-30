import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SubpageHeroProps {
  title: string;
  breadcrumb: string;
  subtitle?: string;
}

export default function SubpageHero({
  title,
  breadcrumb,
  subtitle,
}: SubpageHeroProps) {
  return (
    <div className="relative pt-40 sm:pt-52 pb-20 sm:pb-28 overflow-hidden bg-[#121212] border-b border-white/10">
<div className="absolute inset-0 z-0">
        <img
          src="https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/0c8b0ea5-d1ac-443f-86c9-0422c585baa3.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=max&fp-x=0.5&fp-y=0.5&h=768&rect=0%2C0%2C2000%2C1124&w=1920"
          alt="Dostana Kebab Cover"
          className="w-full h-full object-cover filter brightness-80 contrast-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
<h1 className="font-judson font-bold text-4xl sm:text-6xl text-white tracking-tight capitalize drop-shadow-md">
          {title}
        </h1>

        {subtitle && (
          <p className="font-lato text-xs sm:text-sm text-neutral-200 max-w-xl mx-auto drop-shadow">
            {subtitle}
          </p>
        )}
<div className="flex items-center justify-center gap-2 text-xs font-lato text-neutral-300 pt-1 drop-shadow">
          <Link href="/" className="hover:text-[#f26522] transition-colors font-medium">
            Start
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-[#f26522] font-bold">{breadcrumb}</span>
        </div>

      </div>
    </div>
  );
}
