import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CtaBand } from "@/components/common/CtaBand";
import { Target, Eye, HeartHandshake, ShieldCheck, User } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Neuro Care and Diagnostic Center" },
      { name: "description", content: "Learn about Neuro Care and Diagnostic Center — our mission, values, founders, and lead doctor." },
      { property: "og:title", content: "About Neuro Care and Diagnostic Center" },
      { property: "og:description", content: "Modern polyclinic and diagnostic center focused on quality healthcare and compassionate care." },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Target, title: "Our Mission", text: "Make modern, reliable healthcare accessible through expert consultations and accurate diagnostics." },
  { icon: Eye, title: "Our Vision", text: "Be the most trusted neighborhood polyclinic, recognised for quality and patient experience." },
  { icon: HeartHandshake, title: "Compassion", text: "Treat every patient with empathy, respect, and clear, honest communication." },
  { icon: ShieldCheck, title: "Integrity", text: "Evidence-based care, transparent pricing, and reports you can trust." },
];

const FOUNDERS = [
  { name: "Muhammad Usman", role: "Co-Founder", bio: "Driving operations and patient experience with a focus on long-term clinic excellence." },
  { name: "Rizwan Yousaf", role: "Co-Founder", bio: "Leads strategy and growth, ensuring the clinic continues to serve the community well." },
  { name: "Wali Ahmad", role: "Co-Founder", bio: "Oversees facility standards and the integration of modern diagnostic technology." },
  { name: "Anoosh Manzoor", role: "Co-Founder", bio: "Champions patient communication, brand, and the digital experience for every visitor." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Healthcare built on trust, expertise, and care"
        subtitle="Neuro Care and Diagnostic Center is a modern polyclinic and diagnostic facility focused on providing quality healthcare, expert consultations, reliable diagnostics, and patient-centered medical services."
      />

      {/* Story */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal" /> Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A clinic founded on <span className="text-gradient">care, clarity, and competence</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Neuro Care and Diagnostic Center was created to bring together specialist consultations,
              modern diagnostics, and on-site pharmacy services in one welcoming space. From the
              moment you walk in, you'll experience a clinic designed around your comfort and
              wellbeing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team blends clinical excellence with a warm, attentive approach — because the best
              healthcare experiences are built on both expertise and empathy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="p-6 hover-lift border-border/60 gradient-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="gradient-soft py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet our leadership team"
            subtitle="Our founders and lead doctor — guiding the clinic with vision and care."
          />

          {/* Lead doctor highlight */}
          <div className="mt-14 grid lg:grid-cols-[1.1fr_1.4fr] gap-8 items-center bg-card border border-border/60 rounded-3xl overflow-hidden shadow-elevated">
            <div className="aspect-square lg:aspect-auto lg:h-full relative bg-muted flex items-center justify-center min-h-[320px]">
              <div className="text-center p-8">
                <User className="h-20 w-20 mx-auto text-muted-foreground/30 mb-3" />
                <p className="text-sm font-semibold text-muted-foreground/60">Dr. Arif's Photo</p>
                <p className="text-xs text-muted-foreground/40 mt-1">Placeholder (To be updated)</p>
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Lead Doctor
              </span>
              <h3 className="mt-3 text-3xl md:text-4xl font-bold">Dr. Arif</h3>
              <p className="mt-1 text-primary font-medium">Consultant Neurologist • MBBS, FCPS</p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Dr. Arif leads clinical care at Neuro Care and Diagnostic Center, bringing extensive
                experience in neurology and a deeply patient-centered approach. He's known for taking
                the time to listen, explain, and guide patients through their care with clarity.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Consulting hours: <span className="text-foreground font-medium">Mon – Sat, 5:00 PM – 9:00 PM</span>
              </p>
            </div>
          </div>

          {/* Founders grid */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold text-center mb-10">Our Founders</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FOUNDERS.map((f) => (
                <Card key={f.name} className="overflow-hidden hover-lift border-border/60 gradient-card p-0">
                  <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center">
                    <div className="text-center p-4">
                      <User className="h-12 w-12 mx-auto text-muted-foreground/30 mb-2" />
                      <p className="text-xs font-medium text-muted-foreground/50">Photo Placeholder</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold text-foreground">{f.name}</h4>
                    <p className="text-sm text-primary">{f.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
