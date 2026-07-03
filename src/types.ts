export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  pricing: string;
  iconName: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  preorderPrice: number;
  normalPrice: number;
  paystackLink: string;
  pillar: "Verbal" | "Vocal" | "Visual" | "Bundle";
  whatsappMessage: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: "V3 Method" | "Pre-order" | "Coaching" | "General";
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  text: string;
  category: string;
  rating: number;
}
