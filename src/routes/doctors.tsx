import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { CtaBand } from "@/components/common/CtaBand";
import { DOCTORS } from "@/lib/doctors";

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
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DOCTORS.map((d) => <DoctorCard key={d.slug} doctor={d} />)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
