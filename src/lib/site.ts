export const SITE = {
  name: "Neuro Care and Diagnostic Center",
  short: "Neuro Care",
  tagline: "Advanced Healthcare, Trusted Diagnostics, Compassionate Care.",
  phone: "+92 333 6667578",
  email: "info@neurocare.example",
  address: "123 Wellness Avenue, Medical District, Gilgit",
  hours: "Mon – Sat: 9:00 AM – 10:00 PM • Sun: Emergency / Limited Hours",
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/facilities", label: "Facilities" },
  { to: "/specialities", label: "Specialities" },
  { to: "/doctors", label: "Doctors" },
  { to: "/contact", label: "Contact Us" },
] as const;
