import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Doctor } from "@/lib/doctors";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="overflow-hidden hover-lift border-border/60 gradient-card group p-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-accent/40">
        <img
          src={doctor.image}
          alt={doctor.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {doctor.lead && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Lead Doctor
          </span>
        )}
      </div>
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground leading-tight">{doctor.name}</h3>
          <p className="text-sm font-medium text-primary">{doctor.speciality}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{doctor.qualification}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{doctor.bio}</p>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="flex items-start gap-2 text-xs text-foreground/80">
            <Calendar className="h-3.5 w-3.5 mt-0.5 text-teal shrink-0" />
            <span>{doctor.days}</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-foreground/80">
            <Clock className="h-3.5 w-3.5 mt-0.5 text-teal shrink-0" />
            <span>{doctor.timings}</span>
          </div>
        </div>
        <Button asChild size="sm" className="w-full gradient-cta border-0 text-primary-foreground mt-2">
          <Link
            to="/appointment"
            search={{ doctor: doctor.slug }}
          >
            Book Appointment
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
