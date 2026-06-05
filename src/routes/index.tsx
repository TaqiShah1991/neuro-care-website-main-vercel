import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ShieldCheck, Award, HeartHandshake, Microscope, ArrowRight, CheckCircle2,
  CalendarCheck, ClipboardList, Stethoscope, Smile, Quote, Pill, ScanLine, Building2,
} from "lucide-react";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SpecialityCard } from "@/components/cards/SpecialityCard";
import { CtaBand } from "@/components/common/CtaBand";
import { SPECIALITIES } from "@/lib/specialities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neuro Care and Diagnostic Center — Advanced Healthcare & Diagnostics" },
      { name: "description", content: "Trusted polyclinic and diagnostic center offering expert consultations, modern lab testing, OPD, pharmacy, and compassionate care." },
      { property: "og:title", content: "Neuro Care and Diagnostic Center" },
      { property: "og:description", content: "Advanced Healthcare, Trusted Diagnostics, Compassionate Care." },
    ],
  }),
  component: Home,
});

const TRUST = [
  { icon: ShieldCheck, title: "Trusted Care", text: "Years of patient trust and proven clinical outcomes." },
  { icon: Award, title: "Expert Doctors", text: "Highly qualified specialists across leading disciplines." },
  { icon: Microscope, title: "Modern Diagnostics", text: "Advanced equipment for accurate, timely reports." },
  { icon: HeartHandshake, title: "Patient First", text: "Compassionate, personalised care for every visit." },
];

const STEPS = [
  { n: "01", icon: CalendarCheck, title: "Book Appointment", text: "Choose your doctor and preferred time online." },
  { n: "02", icon: ClipboardList, title: "Quick Check-in", text: "Hassle-free check-in at our welcoming reception." },
  { n: "03", icon: Stethoscope, title: "Consultation", text: "Meet your specialist for a thorough consultation." },
  { n: "04", icon: Smile, title: "Recover Well", text: "Reports, prescriptions, and follow-up — handled." },
];

const TESTIMONIALS = [
  { name: "Ayesha M.", role: "Patient", text: "The staff is warm and professional. Dr. Arif explained everything patiently — I felt genuinely cared for." },
  { name: "Hamza R.", role: "Patient", text: "Quick lab reports and a clean, modern facility. Booking online saved me so much time." },
  { name: "Nadia K.", role: "Patient", text: "From reception to consultation, every step was smooth. Truly a patient-first clinic." },
];

const PACKAGES = [
  { icon: ScanLine, title: "Basic Health Check", text: "Essential screenings for a quick wellness snapshot." },
  { icon: Microscope, title: "Comprehensive Panel", text: "In-depth blood work and diagnostics for full clarity." },
  { icon: HeartHandshake, title: "Family Wellness", text: "Care packages designed for the whole family." },
];

function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Overview */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="space-y-5 animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal" />
              About the Clinic
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A modern polyclinic built around <span className="text-gradient">your wellbeing</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Neuro Care and Diagnostic Center brings together experienced consultants, modern
              diagnostics, an on-site pharmacy, and a comfortable patient experience — all under one
              roof. We're committed to clear communication, accurate testing, and compassionate care
              for every patient who walks through our doors.
            </p>
            <ul className="space-y-2.5">
              {[
                "Specialist consultations across 10+ disciplines",
                "Accurate in-house lab and diagnostic services",
                "Friendly, patient-first appointment process",
                "Affordable health and wellness packages",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="gradient-cta border-0 text-primary-foreground">
                <Link to="/about">Read Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/facilities">Explore Facilities</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {TRUST.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="p-5 hover-lift border-border/60 gradient-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities preview */}
      <section className="gradient-soft py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading eyebrow="Our Facilities" title="Everything you need under one roof" subtitle="OPD consultations, an on-site pharmacy, and a modern diagnostic lab — all designed around your comfort." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "OPD", text: "Comfortable outpatient department with specialists across disciplines." },
              { icon: Pill, title: "Pharmacy", text: "On-site pharmacy for convenient access to prescribed medicines." },
              { icon: Microscope, title: "Lab & Diagnostics", text: "Accurate, timely lab reports from our modern in-house facility." },
            ].map(({ icon: Icon, title, text }) => (
              <Card key={title} className="p-7 hover-lift border-border/60 gradient-card group">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-cta text-primary-foreground shadow-soft">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
                <Link to="/facilities" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <SectionHeading eyebrow="Popular Specialities" title="Expert care across leading disciplines" subtitle="Consult with experienced specialists for a wide range of medical needs." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECIALITIES.slice(0, 6).map((s) => (
            <SpecialityCard key={s.slug} speciality={s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/specialities">View All Specialities <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>


      {/* Health Packages */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <SectionHeading eyebrow="Health Packages" title="Affordable check-ups, complete clarity" subtitle="Curated wellness packages and lab offers for individuals and families." />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {PACKAGES.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="p-7 border-border/60 gradient-card hover-lift">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 text-teal">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                Enquire now <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="gradient-soft py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="A simple, patient-friendly process" subtitle="From booking to recovery — every step designed for clarity and comfort." />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map(({ n, icon: Icon, title, text }) => (
              <div key={n} className="relative p-6 rounded-2xl bg-card border border-border/60 hover-lift">
                <span className="absolute top-4 right-4 text-4xl font-bold text-primary/10">{n}</span>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-cta text-primary-foreground shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <SectionHeading eyebrow="Patient Stories" title="Trusted by patients who matter most" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="p-7 border-border/60 gradient-card relative">
              <Quote className="h-8 w-8 text-teal/40" />
              <p className="mt-3 text-foreground/85 leading-relaxed">{t.text}</p>
              <div className="mt-5 pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
