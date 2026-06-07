import drArif from "@/assets/doctor-arif.jpg";

export interface Doctor {
  slug: string;
  name: string;
  speciality: string;
  qualification: string;
  bio: string;
  days: string;
  timings: string;
  image?: string;
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
    slug: "dr-munam-ali",
    name: "Dr. Munam Ali",
    speciality: "Cardiology",
    qualification: "MBBS (UHS), FCPS Cardiology (RIC)",
    bio: "Dr. Munam Ali Khan is a highly accomplished and internationally trained Consultant Cardiologist with extensive experience in the diagnosis, treatment, and prevention of cardiovascular diseases. He holds an MBBS degree along with prestigious qualifications including FCPS Cardiology (RIC). Dr. Munam is currently serving as a Consultant Cardiologist at Neuro Care Clinic & Diagnostic Center Gilgit and has earned recognition for his commitment to delivering advanced, patient-centered cardiac care.\n\nHe is a Member of the European Board of Echocardiography, reflecting his expertise in advanced cardiac imaging and echocardiographic diagnostics. Dr. Munam is also registered with the Irish Medical Council, demonstrating his adherence to international medical standards and best clinical practices. Furthermore, he holds a Certificate in Health Professions Education (CHPE), highlighting his dedication to medical education, professional development, and mentoring future healthcare professionals.\n\nWith a strong focus on evidence-based medicine, preventive cardiology, and comprehensive heart health management, Dr. Munam Ali Khan provides expert care for patients suffering from coronary artery disease, hypertension, heart failure, arrhythmias, and other cardiovascular conditions. His combination of international exposure, academic excellence, and compassionate patient care has established him as one of the trusted cardiac specialists serving the people of Gilgit-Baltistan and beyond.",
    days: "Monday – Saturday",
    timings: "By Appointment",
  },
  {
    slug: "dr-raja-ehsan",
    name: "Dr. Raja Ehsan",
    speciality: "Nephrology",
    qualification: "MBBS (KE), FCPS (Nephrology)",
    bio: "Dr. Raja Ehsan is a highly qualified and dedicated Consultant Nephrologist, Diabetologist, and Physician with extensive expertise in the diagnosis and management of kidney diseases, diabetes, hypertension, and complex medical disorders. He holds an MBBS degree from King Edward Medical College (K.E.) and has completed FCPS in Nephrology, demonstrating advanced specialization in kidney care and renal medicine.\n\nDr. Raja Ehsan is a respected member of the International Society of Nephrology (ISN) and the Pakistan Society of Nephrology (PSN), reflecting his commitment to maintaining the highest standards of clinical excellence and continuous professional development. He also serves as a Visiting Consultant Nephrologist at Aga Khan Hospital Gilgit, where he contributes his expertise in managing acute and chronic kidney diseases, dialysis care, diabetic kidney disease, electrolyte disorders, and hypertension.\n\nKnown for his patient-centered approach and evidence-based medical practice, Dr. Raja Ehsan is dedicated to providing comprehensive healthcare solutions tailored to each patient’s needs. His vast experience, compassionate care, and commitment to medical excellence have earned him the trust of patients across Gilgit-Baltistan. Through his services at Neuro Care Clinic & Diagnostic Center Gilgit, he strives to improve kidney health, promote disease prevention, and enhance the overall quality of life for his patients.",
    days: "Monday – Saturday",
    timings: "By Appointment",
  },
];
