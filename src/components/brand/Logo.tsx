import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/logo.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img
        src={logoUrl}
        alt="Neuro Care Diagnostic Centre & Hospital Logo"
        className="h-24 md:h-28 w-auto object-contain transition-transform group-hover:scale-105"
      />
    </Link>
  );
}
