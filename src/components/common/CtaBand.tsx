import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container mx-auto px-4 lg:px-8 my-20">
      <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-14 shadow-elevated">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />

        <div className="relative grid md:grid-cols-[1.4fr_auto] gap-8 items-center">
          <div className="text-primary-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80 mb-3">
              Your health, our priority
            </p>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to take the next step toward better health?
            </h3>
            <p className="mt-3 text-white/85 max-w-xl">
              Book an appointment with our expert doctors or call us — our team is here to help.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-soft">
              <Link to="/appointment">
                <CalendarCheck className="mr-2 h-4 w-4" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white">
              <a href={`tel:${SITE.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {SITE.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
