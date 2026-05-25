import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-foreground";
  const sub = variant === "light" ? "text-white/70" : "text-muted-foreground";

  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-cta shadow-soft transition-transform group-hover:scale-105">
        <svg viewBox="0 0 32 32" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          {/* Stylized brain + nodes */}
          <path d="M11 7c-2.5 0-4 1.8-4 4 0 1 .3 1.7.8 2.3-1.1.5-1.8 1.6-1.8 2.9 0 1.3.7 2.4 1.8 2.9-.5.6-.8 1.3-.8 2.3 0 2.2 1.5 4 4 4" />
          <path d="M21 7c2.5 0 4 1.8 4 4 0 1-.3 1.7-.8 2.3 1.1.5 1.8 1.6 1.8 2.9 0 1.3-.7 2.4-1.8 2.9.5.6.8 1.3.8 2.3 0 2.2-1.5 4-4 4" />
          <path d="M16 7v18" />
          <circle cx="11" cy="11" r="1" fill="currentColor" />
          <circle cx="21" cy="11" r="1" fill="currentColor" />
          <circle cx="11" cy="21" r="1" fill="currentColor" />
          <circle cx="21" cy="21" r="1" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display font-bold text-base tracking-tight ${text}`}>
          Neuro Care
        </span>
        <span className={`text-[10px] uppercase tracking-[0.18em] ${sub}`}>
          Diagnostic Center
        </span>
      </span>
    </Link>
  );
}
