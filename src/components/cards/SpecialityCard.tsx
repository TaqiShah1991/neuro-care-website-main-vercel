import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Speciality } from "@/lib/specialities";

export function SpecialityCard({ speciality }: { speciality: Speciality }) {
  const Icon = speciality.icon;
  return (
    <Card className="group relative p-6 hover-lift border-border/60 gradient-card overflow-hidden">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-teal/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-cta text-primary-foreground shadow-soft">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">{speciality.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{speciality.description}</p>
        <Link
          to="/doctors"
          hash={speciality.doctorSlug}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
        >
          Learn More <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Card>
  );
}
