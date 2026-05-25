import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { CalendarCheck, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/common/PageHero";
import { DOCTORS } from "@/lib/doctors";
import { SPECIALITIES } from "@/lib/specialities";

const searchSchema = z.object({ doctor: z.string().optional() });

export const Route = createFileRoute("/appointment")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book an Appointment — Neuro Care and Diagnostic Center" },
      { name: "description", content: "Request an appointment with our specialists. Choose your doctor, speciality, date, and time." },
      { property: "og:title", content: "Book an Appointment" },
      { property: "og:description", content: "Quick, friendly appointment booking with our expert team." },
    ],
  }),
  component: Appointment,
});

function Appointment() {
  const { doctor: preselected } = Route.useSearch();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: integrate with InstaCare appointment system here.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.currentTarget as HTMLFormElement).reset();
    toast.success("Appointment request received!", {
      description: "Our clinic team will confirm your appointment shortly.",
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Book an Appointment"
        title="Schedule your visit in a few simple steps"
        subtitle="Choose your preferred doctor, date, and time. Our team will confirm your appointment shortly."
      />

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8">
          {/* Side panel */}
          <div className="space-y-4">
            <Card className="p-6 gradient-card border-border/60">
              <h3 className="font-semibold flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-teal" /> Why book online?
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2.5"><Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Save time — no waiting in queues.</li>
                <li className="flex gap-2.5"><ShieldCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Choose the doctor that's right for you.</li>
                <li className="flex gap-2.5"><CalendarCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Pick a date and time that suits you.</li>
              </ul>
            </Card>

            <Card className="p-6 border-dashed border-border bg-accent/30">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Integration Ready</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                This form is prepared for integration with the <span className="font-medium text-foreground">InstaCare</span> appointment
                system. Submissions are captured here and will be routed once enabled.
              </p>
            </Card>
          </div>

          {/* Form */}
          <Card className="p-7 lg:p-9 gradient-card border-border/60 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              <CalendarCheck className="h-4 w-4" /> Appointment Form
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">Request your appointment</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">All fields marked are required. We'll confirm by phone.</p>

            <form onSubmit={onSubmit} className="mt-7 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="a-name">Patient Full Name *</Label>
                  <Input id="a-name" name="name" required placeholder="Your full name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="a-phone">Phone Number *</Label>
                  <Input id="a-phone" name="phone" required type="tel" placeholder="+92 ..." />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="a-email">Email Address</Label>
                <Input id="a-email" name="email" type="email" placeholder="you@example.com" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="a-doctor">Select Doctor *</Label>
                  <Select name="doctor" defaultValue={preselected ?? undefined} required>
                    <SelectTrigger id="a-doctor"><SelectValue placeholder="Choose a doctor" /></SelectTrigger>
                    <SelectContent>
                      {DOCTORS.map((d) => (
                        <SelectItem key={d.slug} value={d.slug}>{d.name} — {d.speciality}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="a-spec">Select Speciality *</Label>
                  <Select name="speciality" required>
                    <SelectTrigger id="a-spec"><SelectValue placeholder="Choose a speciality" /></SelectTrigger>
                    <SelectContent>
                      {SPECIALITIES.map((s) => (
                        <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="a-date">Preferred Date *</Label>
                  <Input id="a-date" name="date" type="date" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="a-time">Preferred Time *</Label>
                  <Input id="a-time" name="time" type="time" required />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="a-msg">Message / Symptoms</Label>
                <Textarea id="a-msg" name="message" rows={4} placeholder="Briefly describe your symptoms or reason for visit (optional)" />
              </div>

              <Button type="submit" size="lg" disabled={submitting} className="w-full gradient-cta border-0 text-primary-foreground">
                <CalendarCheck className="mr-2 h-4 w-4" />
                {submitting ? "Submitting..." : "Submit Appointment Request"}
              </Button>

              <p className="text-xs text-center text-muted-foreground pt-1">
                Appointment booking will be confirmed by our clinic team.
              </p>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
