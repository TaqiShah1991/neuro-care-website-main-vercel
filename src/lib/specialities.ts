import {
  Heart, Stethoscope, Ear, Brain, Bone, Baby, Flower2, Sparkles, Activity, ScanLine,
  type LucideIcon,
} from "lucide-react";

export interface Speciality {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SPECIALITIES: Speciality[] = [
  { slug: "cardiology", title: "Cardiology", icon: Heart,
    description: "Comprehensive heart care — diagnosis, prevention, and treatment of cardiovascular conditions." },
  { slug: "general-physician", title: "General Physician", icon: Stethoscope,
    description: "Primary care, routine check-ups, and management of common medical conditions." },
  { slug: "ent", title: "ENT", icon: Ear,
    description: "Expert care for ear, nose, throat, sinus, and voice-related concerns." },
  { slug: "neurology", title: "Neurology", icon: Brain,
    description: "Specialized treatment for the brain, spine, and nervous system disorders." },
  { slug: "orthopedics", title: "Orthopedics", icon: Bone,
    description: "Bone, joint, and muscle care including sports injuries and joint replacements." },
  { slug: "pediatrics", title: "Pediatrics", icon: Baby,
    description: "Gentle, attentive medical care for infants, children, and adolescents." },
  { slug: "gynecology", title: "Gynecology", icon: Flower2,
    description: "Women's health, wellness checks, and reproductive-care expertise." },
  { slug: "dermatology", title: "Dermatology", icon: Sparkles,
    description: "Modern treatments for skin, hair, and nail conditions, plus aesthetic care." },
  { slug: "gastroenterology", title: "Gastroenterology", icon: Activity,
    description: "Digestive-system care covering liver, stomach, and intestinal conditions." },
  { slug: "radiology", title: "Radiology / Diagnostics", icon: ScanLine,
    description: "Advanced imaging and accurate diagnostic reporting for confident treatment." },
];
