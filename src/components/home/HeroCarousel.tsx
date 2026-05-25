import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import slide1 from "@/assets/hero-clinic.jpg";
import slide2 from "@/assets/hero-diagnostics.jpg";
import slide3 from "@/assets/hero-consultation.jpg";
import slide4 from "@/assets/hero-lab.jpg";
import slide5 from "@/assets/hero-family.jpg";

const SLIDES = [
  {
    image: slide1,
    eyebrow: "Welcome to Neuro Care",
    title: "Advanced Healthcare, Trusted Diagnostics, Compassionate Care.",
    subtitle:
      "A modern polyclinic offering expert consultations, reliable diagnostics, and patient-first treatment under one roof.",
  },
  {
    image: slide2,
    eyebrow: "Modern Diagnostics",
    title: "Accurate Reports, Cutting-Edge Equipment.",
    subtitle: "Advanced imaging and lab testing to support confident, timely clinical decisions.",
  },
  {
    image: slide3,
    eyebrow: "Expert Consultations",
    title: "Specialists You Can Trust.",
    subtitle: "Doctors across cardiology, neurology, ENT, pediatrics, and more — all in one place.",
  },
  {
    image: slide4,
    eyebrow: "Lab Tests & Packages",
    title: "Reliable Lab Testing, Made Simple.",
    subtitle: "Affordable health packages with fast, accurate reporting from our in-house laboratory.",
  },
  {
    image: slide5,
    eyebrow: "Family Wellness",
    title: "Caring for Every Generation.",
    subtitle: "Comprehensive care for children, adults, and seniors — your whole family in trusted hands.",
  },
] as const;

export function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 30 },
    [autoplay.current]
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[88vh] min-h-[560px] max-h-[820px] w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  width={1920}
                  height={1080}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
                  <div className="max-w-2xl text-primary-foreground animate-fade-up">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white border border-white/20">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal" />
                      {slide.eyebrow}
                    </span>
                    <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="mt-5 text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elevated">
                        <Link to="/appointment">
                          <CalendarCheck className="mr-2 h-4 w-4" />
                          Book an Appointment
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-white/50 text-white hover:bg-white/10 hover:text-white"
                      >
                        <Link to="/specialities">
                          View Our Services
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Previous slide"
        onClick={() => emblaApi?.scrollPrev()}
        className="hidden md:inline-flex absolute left-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 backdrop-blur text-white border border-white/30 transition"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="hidden md:inline-flex absolute right-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 backdrop-blur text-white border border-white/30 transition"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              selected === i ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
