import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SpecialityCard } from "@/components/cards/SpecialityCard";
import { CtaBand } from "@/components/common/CtaBand";
import { SPECIALITIES } from "@/lib/specialities";

export const Route = createFileRoute("/specialities")({
  head: () => ({
    meta: [
      { title: "Specialities — Expert Medical Care | Neuro Care" },
      { name: "description", content: "Consultations across cardiology, neurology, ENT, orthopedics, pediatrics, gynecology, dermatology, gastroenterology, and radiology." },
      { property: "og:title", content: "Specialities at Neuro Care and Diagnostic Center" },
      { property: "og:description", content: "Expert care across 10 leading medical specialities." },
    ],
  }),
  component: Specialities,
});

function Specialities() {
  return (
    <>
      <PageHero
        eyebrow="Specialities"
        title="Expert care across 10 leading specialities"
        subtitle="From routine consultations to specialised treatments, our team is here to support your health journey."
      />
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECIALITIES.map((s) => <SpecialityCard key={s.slug} speciality={s} />)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
