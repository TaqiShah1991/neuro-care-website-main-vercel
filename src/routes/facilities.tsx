import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { CtaBand } from "@/components/common/CtaBand";
import { Building2, Pill, Microscope, CheckCircle2, ArrowRight, type LucideIcon } from "lucide-react";

import opdImg from "@/assets/facility-opd.jpg";
import pharmacyImg from "@/assets/facility-pharmacy.jpg";
import labImg from "@/assets/facility-lab.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — OPD, Pharmacy & Lab | Neuro Care" },
      { name: "description", content: "Modern OPD, on-site pharmacy, and diagnostic laboratory designed for patient comfort and accurate, timely care." },
      { property: "og:title", content: "Facilities at Neuro Care and Diagnostic Center" },
      { property: "og:description", content: "OPD, pharmacy, and lab — all under one roof." },
    ],
  }),
  component: Facilities,
});

interface Facility {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const FACILITIES: Facility[] = [
  {
    icon: Building2,
    title: "OPD — Outpatient Department",
    description: "A comfortable outpatient department offering consultations with qualified doctors across multiple specialities.",
    benefits: ["Specialists across 10+ disciplines", "Welcoming, calm patient areas", "Easy online and walk-in booking", "Clear, attentive consultations"],
    image: opdImg,
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "An on-site pharmacy providing convenient access to prescribed medicines and healthcare products.",
    benefits: ["Genuine, quality-checked medicines", "Pharmacist-led guidance", "Prescription fulfilment on site", "Wellness and healthcare products"],
    image: pharmacyImg,
  },
  {
    icon: Microscope,
    title: "Lab & Diagnostics",
    description: "A modern diagnostic laboratory offering reliable testing services with accurate and timely reports.",
    benefits: ["Comprehensive lab test menu", "Modern, well-maintained equipment", "Fast turnaround on reports", "Affordable health packages"],
    image: labImg,
  },
];

function Facilities() {
  return (
    <>
      <PageHero
        eyebrow="Our Facilities"
        title="Modern facilities, designed around your comfort"
        subtitle="From outpatient consultations to in-house diagnostics and pharmacy services — everything you need is right here."
      />

      <section className="container mx-auto px-4 lg:px-8 py-20 space-y-24">
        {FACILITIES.map((f, idx) => {
          const Icon = f.icon;
          const reverse = idx % 2 === 1;
          return (
            <div key={f.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl gradient-cta opacity-10 blur-2xl" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/60 shadow-elevated">
                  <img src={f.image} alt={f.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="space-y-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-cta text-primary-foreground shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">{f.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
                <ul className="grid sm:grid-cols-2 gap-2.5 pt-1">
                  {f.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild className="gradient-cta border-0 text-primary-foreground">
                    <Link to="/appointment">Book a Visit <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <CtaBand />
    </>
  );
}
