import CustomSection from "./components/SectionHeading";

import p6 from "@/assets/art/painting (6).jpg";
import p7 from "@/assets/art/painting (7).jpg";
import p8 from "@/assets/art/painting (8).jpg";
import p9 from "@/assets/art/painting (9).jpg";
import p13 from "@/assets/art/painting (13).jpg";
import p14 from "@/assets/art/painting (14).jpg";
import p15 from "@/assets/art/painting (15).jpg";
import lichtelementVertAntique from "@/assets/art/lichtelementVertAntique.jpg";
import lichtelementSchilpad from "@/assets/art/lichtelementSchilpad.jpg";
import lichtelementJauneDeSiennne from "@/assets/art/lichtelementJauneDeSiennne.jpg";
import zwarteKat from "@/assets/art/zwarteKat.jpg";
import egyptischBrons from "@/assets/art/egyptischBrons.jpg";
import torsoRodinBrons from "@/assets/art/torsoRodinBrons.jpg";
import lichtelementDruif from "@/assets/art/lichtelementDruif.jpg";
import sluitsteen from "@/assets/art/sluitsteen.jpg";
import hoofdCaseïne from "@/assets/art/hoofdCaseïne.jpg";

import { type Image } from "./components/CustomCarousel";

import CustomCarousel from "./components/CustomCarousel";

const images: Image[] = [
  {
    src: p13,
    title: "White marble",
    alt: "Painting 13",
    description: "",
  },
  {
    src: p14,
    title: "Rose de Valence",
    alt: "Painting 14",
    description: "",
  },
  {
    src: p15,
    title: "Jaune Sainte Beaume",
    alt: "Painting 15",
    description: "",
  },
  {
    src: p9,
    title: "Medusa on Napoleon marble",
    alt: "Painting 9",
    description: "",
  },
  {
    src: p7,
    title: "French lily on Napoleon marble",
    alt: "Painting 7",
    description: "",
  },
  {
    src: p8,
    title: "Abstract motive in green onyx",
    alt: "Painting 8",
    description: "",
  },
  {
    src: p6,
    title: "Floral motive on white marble",
    alt: "Painting 6",
    description: "",
  },
  {
    src: lichtelementVertAntique,
    title: "Wall lighting Vert Antique",
    alt: "lichtelement vert antique",
    description: "",
  },
  {
    src: lichtelementSchilpad,
    title: "Wall lighting Ecaille",
    alt: "lichtelement schilpad",
    description:
      "Ecaille, mixed techniques with watercolours, beer, and oilpaint",
  },
  {
    src: lichtelementJauneDeSiennne,
    title: "Wall lighting Jaune De Siennne",
    alt: "lichtelement jaune de siennne",
    description: "",
  },
  {
    src: zwarteKat,
    title: "Statue",
    alt: "statue",
    description: "Ptolemaic period, goddess Bastet, oil paint",
  },
  {
    src: egyptischBrons,
    title: "Statue",
    alt: "statue",
    description: "Ptolemaic period, goddess Bastet, Edyptian bronze",
  },
  {
    src: torsoRodinBrons,
    title: "Torso",
    alt: "torso",
    description: "Egyptian bronze",
  },
  {
    src: lichtelementDruif,
    title: "Wall lighting",
    alt: "wall lighting",
    description: "Caseïn paint, gilding with copper leaf",
  },
  {
    src: sluitsteen,
    title: "Keystone",
    alt: "Keystone",
    description: "Charcoal, shellac, oil paint, wax",
  },
  {
    src: hoofdCaseïne,
    title: "Facade ornament",
    alt: "Facade ornament",
    description: "Caseïn paint gilding with copper leaf",
  },
];

export default function PortfolioSection() {
  return (
    <CustomSection name="Portfolio" id="portfolio" className="xl:mx-0 md:mx-0">
      <CustomCarousel images={images} />
    </CustomSection>
  );
}
