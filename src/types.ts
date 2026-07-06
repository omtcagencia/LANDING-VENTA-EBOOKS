export interface ModuleItem {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
  details: string[];
}

export interface BonusItem {
  id: string;
  num: string;
  title: string;
  value: string;
  description: string;
  bullets: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  ageAndLocation: string;
  image: string;
  quote: string;
  highlight: string;
  stars: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
