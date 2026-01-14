import type { icons } from "@lucide/astro";
import type { ImageMetadata } from "astro";

export interface Header {
  logoTitle: string;
}

export interface Footer {
  content: string;
}

export interface NavItem {
  href: string;
  label: string;
}

interface IconLink {
  icon: keyof typeof icons;
  href: string;
}

interface WorkExperience {
  title: string;
  timeline: string;
  company: string;
  description?: string[];
}

interface Education {
  title: string;
  timeline: string;
  institution: string;
  description: string[];
}

export interface About {
  headLine: string;
  tagLine: string;
  profilePic: ImageMetadata;
  description: string;
  links: IconLink[];
  resumeHref: string;
  workExperience: WorkExperience[];
  education: Education[];
  contact: {
    phone: string;
    email: string;
  };
}

export interface Service {
  title: string;
  description: string;
}

export interface Pricing {
  title: string;
  amount: string;
  features: string[];
  contactHref: string;
}

export interface Project {
  logoImage?: ImageMetadata;
  title: string;
  techs: string[];
  description: string;
  sourceHref?: string;
  liveHref?: string;
}
