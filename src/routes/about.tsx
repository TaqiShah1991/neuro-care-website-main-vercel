import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CtaBand } from "@/components/common/CtaBand";
import { Target, Eye, HeartHandshake, ShieldCheck, User } from "lucide-react";

// Import assets
import drArif from "@/assets/doctor-arif.jpg";
import founderAnoosh from "@/assets/founder-anoosh.jpg";
import founderRizwan from "@/assets/founder-rizwan.jpg";
import founderUsman from "@/assets/founder-usman.jpg";
import founderAli from "@/assets/founder-ali.jpg";

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
  { icon: Target, title: "Mission", text: "To deliver accessible, affordable, and high-quality healthcare services while promoting medical excellence, advanced diagnostics, and patient-centered treatment for all." },
  { icon: Eye, title: "Vision", text: "To be the leading healthcare institution in Gilgit-Baltistan, providing world-class medical services through excellence, innovation, and compassionate patient care." },
  { icon: HeartHandshake, title: "Compassion", text: "We treat every patient with dignity, empathy, and respect, ensuring that care is delivered with kindness, understanding, and a commitment to improving lives." },
  { icon: ShieldCheck, title: "Integrity", text: "We uphold the highest standards of honesty, transparency, professionalism, and ethical conduct in every aspect of patient care and healthcare management." },
];

const FOUNDERS = [
  {
    name: "Major R. Muhammad Anoosh",
    role: "Founder & CEO, ADC Marketing (Pvt.) Ltd. & Neuro Care",
    bio: `Major R. Muhammad Anoosh is a visionary entrepreneur, business leader, and the Founder & Chief Executive Officer of ADC Marketing (Pvt.) Ltd. & Neuro Care. With a strong foundation in leadership, strategic planning, and business development, he has successfully established ADC Marketing as a diversified business group operating across multiple industries. His commitment to excellence, integrity, and innovation has enabled the company to build a reputation for delivering quality services and creating long-term value for clients and stakeholders.

Under his leadership, ADC Marketing has expanded its presence in Real Estate, Construction & Infrastructure Development, Healthcare & Diagnostic Services, Marketing & Advertising Solutions, and Corporate Investments. By combining modern business practices with a customer-centric approach, Major Anoosh continues to drive sustainable growth, foster strategic partnerships, and contribute to the economic development of Pakistan.`,
    image: founderAnoosh,
  },
  {
    name: "Rizwan Yousaf",
    role: "Managing Director, ADC Marketing (Pvt.) Ltd. & Neuro Care",
    bio: `Rizwan Yousaf is a seasoned business professional and MD of Neuro care with over 10 years of experience in Sales, Marketing, Business Development, and Operations Management across the Insurance and Real Estate sectors.

He began his professional journey in 2015 in the insurance industry and, through dedication, strong leadership, and consistent performance, progressed from an entry-level position to the role of Regional Sales Head by 2021. During this period, he successfully led operations across the Northern Region of Pakistan, driving business growth, managing high-performing teams, and implementing effective sales and marketing strategies.

Throughout his insurance career, he gained extensive experience in Life Insurance, Health Insurance, and General Insurance, delivering customer-focused solutions while overseeing sales operations, market expansion initiatives, and strategic partnerships.

Building on this foundation, Rizwan transitioned into the real estate sector, where he has been actively involved in project development, investment planning, sales and marketing, and operational management. His expertise includes evaluating and managing residential and commercial projects, identifying growth opportunities, and creating value-driven solutions for clients and investors.

Currently, he serves as the Managing Director of an emerging real estate and marketing organization and MD of Neuro care, where he leads corporate strategy, business development, sales and marketing operations, and overall organizational growth. Under his leadership, the company is focused on delivering innovative real estate solutions, maintaining high professional standards, and building long-term relationships with clients and stakeholders.

Rizwan’s professional philosophy is centered on integrity, strategic vision, customer satisfaction, and sustainable business growth.`,
    image: founderRizwan,
  },
  {
    name: "Muhammad Usman",
    role: "Director, ADC Marketing (Pvt.) Ltd. & Neuro Care",
    bio: `Mr. HM Usman is a dynamic business professional and qualified engineer with over five years of experience in sales and marketing across diverse industries. Combining technical expertise with strong business acumen, he has successfully contributed to business development, strategic planning, client relationship management, and market expansion initiatives.

As the Chief Financial Officer (CFO), Mr. Usman plays a pivotal role in overseeing the organization’s financial operations, budgeting, financial planning, and strategic decision-making. His analytical approach, leadership skills, and commitment to operational excellence have been instrumental in driving sustainable growth and organizational success. With a strong focus on innovation, financial discipline, and business development, he continues to contribute significantly to the achievement of the company’s long-term objectives.`,
    image: founderUsman,
  },
  {
    name: "Wali Ahmed",
    role: "Director, ADC Marketing (Pvt.) Ltd. & Neuro Care",
    bio: `I am a business professional with extensive experience in construction tendering, sales, marketing, and investment consultancy.

With over 8 years of experience in preparing and managing tender documentation for construction projects, I have developed strong expertise in project bidding, contract documentation, cost estimation, and procurement processes.

I am currently serving as Director Sales & Marketing at ADC Marketing Pvt. Ltd., where I have been working for the past 5 years. In this role, I am responsible for business development, strategic marketing, client relationship management, and investment consultancy. Throughout my tenure, I have successfully secured authorized dealership agreements for various housing societies and residential apartment projects, contributing significantly to business growth and market expansion. My experience also includes identifying growth opportunities, advising clients on investment strategies, and leading successful sales and marketing initiatives.

My professional approach is centered on delivering excellence, fostering long-term business relationships, and creating value for clients through strategic planning and effective execution.`,
    image: founderAli,
  },
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
          <div className="mt-14 grid lg:grid-cols-[320px_1fr] gap-8 items-start bg-card border border-border/60 rounded-3xl overflow-hidden shadow-elevated p-6 md:p-8">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted relative shrink-0">
              <img
                src={drArif}
                alt="Dr. Muhammad Arif"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-4">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  Lead Doctor
                </span>
                <h3 className="mt-2 text-3xl font-bold text-foreground">Dr. Muhammad Arif</h3>
                <p className="text-sm text-primary font-semibold mt-1">Consultant Neurologist & Stroke Specialist • MBBS, FCPS (Neurology)</p>
              </div>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base">
                {`Dr. Muhammad Arif, MBBS, FCPS (Neurology) is a highly qualified and accomplished Consultant Neurologist and Stroke Specialist with extensive expertise in the diagnosis, treatment, and management of disorders affecting the brain, spinal cord, nerves, and muscles. With a strong commitment to clinical excellence, evidence-based medicine, and compassionate patient care, he has established himself as a trusted name in the field of neurology.

Dr. Arif is currently serving at Shaheed Saif ur Rehman Government Teaching Hospital, Gilgit, where he not only provides advanced neurological and stroke care services but also plays a significant role in the administration and management of the hospital. His leadership and dedication contribute to the continuous improvement of healthcare services and patient outcomes in the region.

Prior to his current appointment, Dr. Arif served as Registrar Neurology at Fauji Foundation Hospital, Rawalpindi, one of Pakistan’s leading tertiary care institutions, where he gained extensive experience in managing complex neurological disorders and acute stroke cases. He also serves as a Visiting Consultant at Aga Khan Hospital, Gilgit, where he offers specialized neurological consultation and treatment services.

In addition to his clinical responsibilities, Dr. Arif is currently managing the Neuro Diagnostic Center on behalf of the Board of Directors, overseeing clinical operations, strategic planning, service development, and the implementation of high-quality neurological diagnostic services. His administrative capabilities, combined with his medical expertise, have enabled him to contribute effectively to both healthcare management and patient care.

Dr. Arif specializes in the management of stroke, epilepsy, headaches and migraines, Parkinson’s disease, neuropathies, multiple sclerosis, movement disorders, neuromuscular diseases, dementia, and other complex neurological conditions. He is widely recognized for his patient-centered approach, accurate diagnosis, and commitment to delivering the highest standards of neurological care.

Through his clinical expertise, leadership, and unwavering dedication to improving neurological healthcare, Dr. Muhammad Arif continues to make a significant contribution to the advancement of neurology services in Gilgit-Baltistan and across Pakistan.`}
              </p>
              <div className="pt-2 border-t border-border/60">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consulting hours: <span className="text-foreground font-semibold">Mon – Sat, 5:00 PM – 9:00 PM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Founders list */}
          <div className="mt-14 space-y-8">
            {FOUNDERS.map((f) => (
              <Card key={f.name} className="overflow-hidden hover-lift border-border/60 gradient-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-full sm:w-72 md:w-64 shrink-0 aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-sm">
                    {f.image ? (
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-center p-4">
                        <div>
                          <User className="h-12 w-12 mx-auto text-muted-foreground/30 mb-2" />
                          <p className="text-xs font-medium text-muted-foreground/50">Photo Placeholder</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">{f.name}</h4>
                      <p className="text-sm font-semibold text-primary mt-1">{f.role}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base">{f.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
