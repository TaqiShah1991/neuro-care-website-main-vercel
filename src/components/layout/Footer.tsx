import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { SITE, NAV } from "@/lib/site";

const facilities = [
  { label: "OPD Services", to: "/facilities" },
  { label: "MRI Diagnostics", to: "/facilities" },
  { label: "Lab & Diagnostics", to: "/facilities" },
  { label: "On-site Pharmacy", to: "/facilities" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              A modern polyclinic and diagnostic facility dedicated to expert consultations,
              reliable diagnostics, and compassionate, patient-centered care.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
                { icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
                { icon: Twitter, href: SITE.social.twitter, label: "Twitter" },
                { icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Facilities</h4>
            <ul className="space-y-2.5 text-sm">
              {facilities.map((f) => (
                <li key={f.label}>
                  <Link to={f.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {f.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{SITE.phone}</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{SITE.email}</span></li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{SITE.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 {SITE.name}. All rights reserved.</p>
          <p>Crafted with care for patient wellbeing.</p>
        </div>
      </div>
    </footer>
  );
}
