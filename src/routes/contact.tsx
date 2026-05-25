import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/common/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Neuro Care and Diagnostic Center" },
      { name: "description", content: "Reach our clinic team — phone, email, address, and clinic timings. Send a message and we'll get back to you." },
      { property: "og:title", content: "Contact Neuro Care and Diagnostic Center" },
      { property: "og:description", content: "We're here to help — call, email, visit, or send us a message." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    (e.currentTarget as HTMLFormElement).reset();
    toast.success("Message sent!", { description: "Our team will get back to you shortly." });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're here to help — get in touch"
        subtitle="Call, email, or send us a message. Our team is happy to answer your questions and help you book a visit."
      />

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="space-y-4">
            <Card className="p-6 gradient-card border-border/60">
              <h3 className="font-semibold text-foreground">Clinic Information</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary shrink-0">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                    <a href={`tel:${SITE.phone}`} className="font-medium text-foreground hover:text-primary">{SITE.phone}</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary shrink-0">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                    <a href={`mailto:${SITE.email}`} className="font-medium text-foreground hover:text-primary">{SITE.email}</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary shrink-0">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Address</p>
                    <p className="font-medium text-foreground">{SITE.address}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary shrink-0">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Clinic Timings</p>
                    <p className="font-medium text-foreground">Mon – Sat: 9:00 AM – 10:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Emergency / Limited Hours</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-0 overflow-hidden border-border/60">
              <div className="aspect-[4/3] gradient-soft flex items-center justify-center text-center p-6">
                <div>
                  <MapPin className="h-10 w-10 mx-auto text-primary" />
                  <p className="mt-3 font-semibold">Find us on the map</p>
                  <p className="text-sm text-muted-foreground">{SITE.address}</p>
                  <p className="mt-2 text-xs text-muted-foreground">Google Maps embed will appear here.</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-7 lg:p-9 gradient-card border-border/60 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              <MessageSquare className="h-4 w-4" /> Send a message
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">We'd love to hear from you</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">Fill in the form and our team will get back shortly.</p>

            <form onSubmit={onSubmit} className="mt-7 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="c-name">Full Name</Label>
                  <Input id="c-name" required placeholder="Your name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-phone">Phone Number</Label>
                  <Input id="c-phone" required type="tel" placeholder="+92 ..." />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-email">Email</Label>
                <Input id="c-email" required type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-msg">Message</Label>
                <Textarea id="c-msg" required rows={5} placeholder="How can we help?" />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full gradient-cta border-0 text-primary-foreground">
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
