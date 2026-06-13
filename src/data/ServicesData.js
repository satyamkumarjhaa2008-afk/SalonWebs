// servicesData.js

import GlossImg from "../assets/gloss.jpg";
import SingleProcessImg from "../assets/singleprocess.jpg";
import DoubleProcessImg from "../assets/doubleprocess.jpg";
import HighlightsImg from "../assets/highlights.jpg";

import HaircutImg from "../assets/haircut.jpg";
import ClipperCutImg from "../assets/clipper-cut.jpg";
import CezanneBangsImg from "../assets/cezannebangs.png";

import BlowoutImg from "../assets/blowout.jpg";

import CezanneImg from "../assets/Cezanne.jpg";
import K18Img from "../assets/K18.jpg";
import StrengthCureImg from "../assets/StrengthCure.jpg";
import LorealImg from "../assets/loreal.jpg";

const services = [
  // =========================
  // HAIRCUTS
  // =========================

  {
    id: 1,
    slug: "haircut",
    name: "Haircut",
    category: "Haircuts",
    imageUrl: HaircutImg,
    priceRange: "$90.00 - $150.00",
    duration: "60 minutes",
    description:
      "A customized haircut designed to complement your face shape, lifestyle, and hair texture.",
  },

  {
    id: 2,
    slug: "clipper-cut",
    name: "Clipper Cut",
    category: "Haircuts",
    imageUrl: ClipperCutImg,
    priceRange: "$70.00 - $100.00",
    duration: "30 minutes",
    description:
      "Our clipper cuts offer precision and style, perfect for achieving a sleek, modern look tailored to your preference. Trust our skilled stylists to deliver a polished finish every time.",
  },

  {
    id: 3,
    slug: "cezanne-bangs",
    name: "Cezanne Bangs",
    category: "Haircuts",
    imageUrl: CezanneBangsImg,
    priceRange: "$30.00 - $60.00",
    duration: "20 minutes",
    description:
      "A bang-focused styling service designed to frame the face beautifully.",
  },

  // =========================
  // HAIR COLOR
  // =========================

  {
    id: 4,
    slug: "single-process",
    name: "Single Process",
    category: "Hair Color",
    imageUrl: SingleProcessImg,
    priceRange: "$120.00 - $220.00",
    duration: "90 minutes",
    description:
      "One-step color application for root touch-ups, gray coverage, or all-over color.",
  },

  {
    id: 5,
    slug: "double-process",
    name: "Double Process",
    category: "Hair Color",
    imageUrl: DoubleProcessImg,
    priceRange: "$250.00 - $450.00",
    duration: "180 minutes",
    description:
      "Lightening followed by toning to achieve brighter and more vibrant hair colors.",
  },

  {
    id: 6,
    slug: "gloss",
    name: "Gloss",
    category: "Hair Color",
    imageUrl: GlossImg,
    priceRange: "$65.00 - $130.00",
    duration: "29 minutes",
    description:
      "A Gloss helps to add vibrancy and shine to your hair no matter what your lighting situation is. Whether you choose a tint of color or stick to your color with a clear gloss service, a gloss treatment enhances your hair's natural shine for sleek, reflective hair.",
  },

  {
    id: 7,
    slug: "highlights",
    name: "Highlights",
    category: "Hair Color",
    imageUrl: HighlightsImg,
    priceRange: "$180.00 - $400.00",
    duration: "150 minutes",
    description:
      "Strategically placed lighter strands that add dimension, brightness, and movement.",
  },

  // =========================
  // HAIR STYLING
  // =========================

  {
    id: 8,
    slug: "blowout",
    name: "Blowout",
    category: "Hair Styling",
    imageUrl: BlowoutImg,
    priceRange: "$55.00 - $95.00",
    duration: "45 minutes",
    description:
      "Professional wash and blow dry service for smooth, polished, and voluminous hair.",
  },

  // =========================
  // HAIR TREATMENTS
  // =========================

  {
    id: 9,
    slug: "cezanne",
    name: "Cezanne",
    category: "Hair Treatments",
    imageUrl: CezanneImg,
    priceRange: "$250.00 - $450.00",
    duration: "180 minutes",
    description:
      "A smoothing treatment that reduces frizz while maintaining natural body and movement.",
  },

  {
    id: 10,
    slug: "k18",
    name: "K18",
    category: "Hair Treatments",
    imageUrl: K18Img,
    priceRange: "$50.00 - $120.00",
    duration: "30 minutes",
    description:
      "Advanced peptide-powered treatment that repairs damaged hair at the molecular level.",
  },

  {
    id: 11,
    slug: "strength-cure",
    name: "Strength Cure",
    category: "Hair Treatments",
    imageUrl: StrengthCureImg,
    priceRange: "$40.00 - $90.00",
    duration: "30 minutes",
    description:
      "Deep conditioning treatment designed to strengthen weak and damaged hair.",
  },

  {
    id: 12,
    slug: "loreal",
    name: "L'Oreal",
    category: "Hair Treatments",
    imageUrl: LorealImg,
    priceRange: "$45.00 - $100.00",
    duration: "30 minutes",
    description:
      "Professional restorative treatment that nourishes, hydrates, and enhances shine.",
  },
];

export default services;