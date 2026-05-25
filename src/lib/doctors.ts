import drArif from "@/assets/doctor-arif.jpg";
import drSara from "@/assets/doctor-sara.jpg";
import drAhmed from "@/assets/doctor-ahmed.jpg";
import drFatima from "@/assets/doctor-fatima.jpg";

export interface Doctor {
  slug: string;
  name: string;
  speciality: string;
  qualification: string;
  bio: string;
  days: string;
  timings: string;
  image: string;
  lead?: boolean;
}

export const DOCTORS: Doctor[] = [
  {
    slug: "dr-arif",
    name: "Dr. Arif",
    speciality: "Neurology",
    qualification: "MBBS, FCPS (Neurology)",
    bio: "Lead consultant neurologist with extensive experience in stroke care, epilepsy, and cognitive disorders. Known for clear explanations and a patient-first approach.",
    days: "Monday – Saturday",
    timings: "5:00 PM – 9:00 PM",
    image: drArif,
    lead: true,
  },
  {
    slug: "dr-sara-khan",
    name: "Dr. Sara Khan",
    speciality: "General Physician",
    qualification: "MBBS, MRCP",
    bio: "Family medicine specialist focused on preventive health, chronic care, and warm, attentive consultations for patients of all ages.",
    days: "Monday – Friday",
    timings: "10:00 AM – 2:00 PM",
    image: drSara,
  },
  {
    slug: "dr-ahmed-raza",
    name: "Dr. Ahmed Raza",
    speciality: "Cardiologist",
    qualification: "MBBS, FCPS (Cardiology)",
    bio: "Interventional cardiologist with deep expertise in heart-disease prevention, ECG interpretation, and long-term cardiac wellness.",
    days: "Tue, Thu, Sat",
    timings: "6:00 PM – 9:00 PM",
    image: drAhmed,
  },
  {
    slug: "dr-fatima-ali",
    name: "Dr. Fatima Ali",
    speciality: "ENT Specialist",
    qualification: "MBBS, FCPS (ENT)",
    bio: "ENT surgeon caring for ear, nose, throat, and sinus conditions in adults and children with modern, evidence-based treatments.",
    days: "Mon, Wed, Fri",
    timings: "4:00 PM – 8:00 PM",
    image: drFatima,
  },
];
