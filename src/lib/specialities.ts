import {
  Heart, Wind, Brain, ScanLine, Activity,
  type LucideIcon,
} from "lucide-react";

export interface Speciality {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  doctorSlug?: string;
}

export const SPECIALITIES: Speciality[] = [
  {
    slug: "cardiology",
    title: "Cardiology",
    icon: Heart,
    description: "Comprehensive heart care — diagnosis, prevention, and treatment of cardiovascular conditions.",
    doctorSlug: "dr-munam-ali",
  },
  {
    slug: "pulmonology",
    title: "Pulmonologist & Medical Specialist",
    icon: Wind,
    description: "Expert diagnosis and treatment of lung conditions, respiratory disorders, and comprehensive internal medicine care.",
    doctorSlug: "dr-muhammad-ikhlaq",
  },
  {
    slug: "radiology",
    title: "Radiology / Diagnostics",
    icon: ScanLine,
    description: "Advanced diagnostic imaging facilities including high-resolution Ultrasound and X-ray diagnostics for accurate medical reporting.",
  },
  {
    slug: "neurology",
    title: "Neurology",
    icon: Brain,
    description: "Specialized treatment for the brain, spine, and nervous system disorders.",
    doctorSlug: "dr-arif",
  },
  {
    slug: "nephrology",
    title: "Nephrology",
    icon: Activity,
    description: "Specialized kidney care — diagnosis, management, and treatment of kidney diseases, hypertension, and renal disorders.",
    doctorSlug: "dr-raja-ehsan",
  },
];
