# Neuro Care and Diagnostic Center — Build Plan

A premium, trustworthy healthcare website built as a multi-page TanStack Start app with a calm blue/teal/white medical palette, soft gradients, rounded cards, and subtle shadows.

## Design System

- **Palette (oklch tokens in `src/styles.css`)**: deep medical blue primary, teal secondary, soft sky accent, near-white background, slate foreground, subtle gradient (`--gradient-hero`, `--gradient-card`), elegant shadow tokens (`--shadow-soft`, `--shadow-elevated`).
- **Typography**: "Plus Jakarta Sans" for headings (modern, trustworthy), "Inter" for body. Loaded via Google Fonts in `__root.tsx`.
- **Components**: shadcn buttons/cards/inputs styled through tokens; custom variants for `hero` and `cta` buttons.
- **Motion**: gentle fade-in / slide-up on scroll, hero carousel auto-advance, hover-lift on cards.
- **Logo**: generated SVG-style PNG — stylized brain + neural-network nodes in primary blue/teal, used in navbar and footer.

## Routes (file-based, `src/routes/`)

```
__root.tsx          shared shell: <Navbar/> + <Outlet/> + <Footer/>, fonts, global meta
index.tsx           Home
about.tsx           About Us + founders & lead doctor
facilities.tsx      OPD / Pharmacy / Lab
specialities.tsx    10 specialities grid
doctors.tsx         Doctor profiles
contact.tsx         Contact info + form + map placeholder
appointment.tsx     Booking form (InstaCare-ready)
```

Each route sets its own `head()` with unique title, description, and og tags. Leaf routes with hero images add `og:image`.

## Page Contents

**Home** — Hero carousel (5 slides: clinic, diagnostics, doctor, lab offers, health packages) with overlaid headline "Advanced Healthcare, Trusted Diagnostics, Compassionate Care." and two CTAs (Book Appointment / View Services). Sections: Clinic overview, Why Choose Us (4 trust pillars), Facilities preview (3 cards linking to /facilities), Popular Specialities (6 of 10), Featured Doctors (4), Health Packages strip, 4-step appointment process, Testimonials carousel, Contact CTA band.

**About** — Mission intro, story, values grid, then Leadership section with 5 profile cards (Dr. Arif highlighted as lead with larger card + accent border, then Usman, Rizwan, Ali, Taqi as founders).

**Facilities** — Three full-width alternating image/text rows (OPD, Pharmacy, Lab) with icons, descriptions, bullet benefits, and CTA buttons.

**Specialities** — Responsive grid of 10 cards (Cardiology, General Physician, ENT, Neurology, Orthopedics, Pediatrics, Gynecology, Dermatology, Gastroenterology, Radiology) with lucide icons and "Learn More" link.

**Doctors** — Grid of doctor cards (Dr. Arif, Dr. Sara Khan, Dr. Ahmed Raza, Dr. Fatima Ali) with photo, name, speciality, qualification, bio, days, timings, Book Appointment button (links to /appointment with pre-filled doctor).

**Contact** — Two-column layout: left = clinic info (phone, email, address, timings), right = contact form (name/phone/email/message). Below: full-width map placeholder + CTA band.

**Appointment** — Centered card with form: Name, Phone, Email, Doctor (select), Speciality (select), Date, Time, Message. Submit shows toast "Appointment request received". Note about InstaCare integration + placeholder hook point.

## Reusable Components (`src/components/`)

```
layout/Navbar.tsx        sticky, blurred bg on scroll, hamburger on mobile, highlighted Book CTA
layout/Footer.tsx        logo, description, quick links, facilities, contact, socials, copyright
home/HeroCarousel.tsx    embla-based, auto-advance, dots + arrows
home/SectionHeading.tsx  eyebrow + heading + subheading
cards/DoctorCard.tsx
cards/FacilityCard.tsx
cards/SpecialityCard.tsx
cards/TestimonialCard.tsx
forms/ContactForm.tsx
forms/AppointmentForm.tsx
common/CtaBand.tsx
common/TrustPillar.tsx
```

## Assets

Generated via `imagegen` into `src/assets/`:
- `logo.png` (transparent) — brain + neural nodes mark
- 5 hero slide images (clinic exterior, diagnostic equipment, doctor consultation, lab tech, family healthcare)
- 3 facility images (OPD waiting area, pharmacy counter, lab equipment)
- 5 portrait placeholders for founders/lead doctor
- 4 doctor portraits

## Technical Details

- shadcn `Carousel` (embla) for hero + testimonials with autoplay plugin.
- `react-hook-form` + `zod` for both forms; `sonner` toasts for submit feedback.
- All colors via semantic tokens — no hardcoded hex in components.
- Tailwind utility `animate-fade-in`, `hover-lift` added in `styles.css`.
- Form submissions are frontend-only (no backend); appointment form structured so a future serverFn / InstaCare call is a one-line swap in `onSubmit`.
- Mobile-first responsive breakpoints; hamburger menu via `Sheet`.
- Each route includes proper SEO meta + single H1.

## Out of Scope (frontend-only for now)

- No Lovable Cloud / database — forms log + toast only.
- No real InstaCare integration — placeholder section noted.
- All copy, phone, email, address are placeholders for later replacement.
