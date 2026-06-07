import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { CtaBand } from "@/components/common/CtaBand";
import { DOCTORS } from "@/lib/doctors";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, GraduationCap, Stethoscope, CalendarCheck, User } from "lucide-react";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Trusted Specialists | Neuro Care" },
      { name: "description", content: "Meet our team of experienced consultants — neurology, cardiology, general medicine, ENT, and more." },
      { property: "og:title", content: "Doctors at Neuro Care and Diagnostic Center" },
      { property: "og:description", content: "Experienced specialists dedicated to your health and recovery." },
    ],
  }),
  component: Doctors,
});

function Doctors() {
  return (
    <>
      <PageHero
        eyebrow="Our Doctors"
        title="Trusted specialists, dedicated to your care"
        subtitle="Experienced consultants across multiple disciplines, here to support every step of your health journey."
      />
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="space-y-8 max-w-5xl mx-auto">
          {DOCTORS.map((d) => (
            <Card key={d.slug} className="overflow-hidden hover-lift border-border/60 gradient-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-full sm:w-72 md:w-64 shrink-0 aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-sm relative">
                  {d.image ? (
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-center p-4 bg-muted">
                      <div>
                        <User className="h-12 w-12 mx-auto text-muted-foreground/30 mb-2" />
                        <p className="text-xs font-medium text-muted-foreground/50">Photo Placeholder</p>
                      </div>
                    </div>
                  )}
                  {d.lead && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-primary/95 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                      Lead Doctor
                    </span>
                  )}
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start items-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{d.name}</h3>
                      </div>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 text-sm text-primary font-semibold mt-1">
                        <span className="inline-flex items-center gap-1">
                          <Stethoscope className="h-4 w-4" />
                          {d.speciality}
                        </span>
                        <span className="text-muted-foreground/45 hidden sm:inline">•</span>
                        <span className="inline-flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          {d.qualification}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{d.bio}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-2 text-sm text-foreground/85">
                        <Calendar className="h-4 w-4 text-teal shrink-0" />
                        <span className="font-medium">{d.days}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-teal shrink-0" />
                        <span>{d.timings}</span>
                      </div>
                    </div>
                    
                    <Button asChild className="gradient-cta text-primary-foreground shadow-soft hover:shadow-glow border-0 shrink-0">
                      <Link to="/appointment" search={{ doctor: d.slug }}>
                        <CalendarCheck className="mr-2 h-4 w-4" />
                        Book Appointment
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

