import workAtlas from "@/assets/work-atlas.jpg";
import workBeacon from "@/assets/work-beacon.jpg";
import workRelay from "@/assets/work-relay.jpg";
import workPulse from "@/assets/work-pulse.jpg";
import workMeridian from "@/assets/work-meridian.jpg";
import workKindred from "@/assets/work-kindred.jpg";
import workHalo from "@/assets/work-halo.jpg";
import funDoodle from "@/assets/fun-doodle.jpg";
import funPixel from "@/assets/fun-pixel.jpg";
import funPhoto from "@/assets/fun-photo.jpg";

export interface Project {
  title: string;
  tagline: string;
  meta: string;
  year: string;
  image: string;
  featured?: boolean;
}

export const workProjects: Project[] = [
  {
    title: "Atlas",
    tagline: "Roadmapping for teams that ship weekly",
    meta: "ATLAS · SHIPPED",
    year: "2026",
    image: workAtlas,
    featured: true,
  },
  {
    title: "Beacon",
    tagline: "Onboarding that cut time-to-value in half",
    meta: "BEACON · SHIPPED",
    year: "2025",
    image: workBeacon,
  },
  {
    title: "Relay",
    tagline: "Realtime alerts for on-call engineers",
    meta: "RELAY · SHIPPED",
    year: "2025",
    image: workRelay,
  },
  {
    title: "Pulse",
    tagline: "Product analytics for non-analysts",
    meta: "PULSE · SHIPPED",
    year: "2024",
    image: workPulse,
  },
  {
    title: "Meridian",
    tagline: "A calmer way to run payments ops",
    meta: "MERIDIAN · SHIPPED",
    year: "2024",
    image: workMeridian,
  },
  {
    title: "Kindred",
    tagline: "Community tools for local groups",
    meta: "KINDRED · CONCEPT",
    year: "2023",
    image: workKindred,
  },
  {
    title: "Halo",
    tagline: "An ambient AI assistant for your inbox",
    meta: "HALO · CONCEPT",
    year: "2023",
    image: workHalo,
  },
];

export const funProjects: Project[] = [
  {
    title: "Doodle Club",
    tagline: "A weekly drawing prompt with friends",
    meta: "SIDE PROJECT · ONGOING",
    year: "2026",
    image: funDoodle,
  },
  {
    title: "Tiny Peaks",
    tagline: "An 8-bit hiking game built in a weekend",
    meta: "GAME JAM · SHIPPED",
    year: "2025",
    image: funPixel,
  },
  {
    title: "Golden Hour",
    tagline: "Street photography from four cities",
    meta: "PHOTOGRAPHY · ONGOING",
    year: "2024",
    image: funPhoto,
  },
];

export const workHistory = [
  { year: "2026", company: "Northwind", role: "Senior Product Manager" },
  { year: "2025", company: "Lakeside Labs", role: "Product Manager" },
  { year: "2024", company: "Foundry", role: "Product Manager" },
  { year: "2023", company: "Cartelle", role: "Associate Product Manager" },
  { year: "2022", company: "Beacon & Co", role: "Product Analyst" },
];

export const socials = [
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "EMAIL", href: "mailto:hello@tiannepane.com" },
  { label: "X", href: "https://x.com" },
  { label: "GITHUB", href: "https://github.com" },
];
