import p6 from "@/assets/art/painting (6).jpg";
import p7 from "@/assets/art/painting (7).jpg";
import p8 from "@/assets/art/painting (8).jpg";
import p9 from "@/assets/art/painting (9).jpg";
import p13 from "@/assets/art/painting (13).jpg";
import p14 from "@/assets/art/painting (14).jpg";
import p15 from "@/assets/art/painting (15).jpg";
import lichtelementVertAntique from "@/assets/art/lichtelementVertAntique.jpg";
import lichtelementSchilpad from "@/assets/art/lichtelementSchilpad.jpg";
import lichtelementJauneDeSienne from "@/assets/art/lichtelementJauneDeSiennne.jpg";
import zwarteKat from "@/assets/art/zwarteKat.jpg";
import egyptischBrons from "@/assets/art/egyptischBrons.jpg";
import torsoRodinBrons from "@/assets/art/torsoRodinBrons.jpg";
import lichtelementDruif from "@/assets/art/lichtelementDruif.jpg";
import sluitsteen from "@/assets/art/sluitsteen.jpg";
import hoofdCaseïne from "@/assets/art/hoofdCaseïne.jpg";
import medusa from "@/assets/art/medusa.jpg";

import CustomSection from "./components/CustomSection";
import { type Image } from "./components/CustomCarousel";
import CustomCarousel from "./components/CustomCarousel";

const images: Image[] = [
  {
    src: p13,
    title: "Trompe l'oeil",
    description: "Witte marmer",
  },
  {
    src: p14,
    title: "Trompe l'oeil",
    description: "Rose de Valence",
  },
  {
    src: p15,
    title: "Trompe l'oeil",
    description: "Jaune Sainte Beaume",
  },
  {
    src: p9,
    title: "Trompe l'oeil",
    description: "Medusa on Napoleon marble",
  },
  {
    src: p7,
    title: "Trompe l'oeil",
    description: "French lily on Napoleon marble",
  },
  {
    src: p8,
    title: "Trompe l'oeil",
    description: "Abstract motive in green onyx",
  },
  {
    src: p6,
    title: "Trompe l'oeil",
    description: "Floral motive on white marble",
  },
  {
    src: lichtelementVertAntique,
    title: "Wall lighting",
    description: "Vert Antique",
  },
  {
    src: lichtelementSchilpad,
    title: "Wall lighting Ecaille",
    description:
      "Ecaille, mixed techniques with watercolours, beer, and oilpaint",
  },
  {
    src: lichtelementJauneDeSienne,
    title: "Wall lighting",
    description: "Wall lighting Jaune de Sienne",
  },
  {
    src: zwarteKat,
    title: "Statue",
    description: "Ptolemaic period, goddess Bastet, oil paint",
  },
  {
    src: egyptischBrons,
    title: "Statue",
    description: "Ptolemaic period, goddess Bastet, Edyptian bronze",
  },
  {
    src: torsoRodinBrons,
    title: "Torso",
    description: "Egyptian bronze",
  },
  {
    src: medusa,
    title: "Bass relief",
    description: "Medusa, Hellenistic period, Egyptian bronze",
  },
  {
    src: lichtelementDruif,
    title: "Wall lighting",
    description: "Caseïn paint, gilding with copper leaf",
  },
  {
    src: sluitsteen,
    title: "Keystone",
    description: "Charcoal, shellac, oil paint, wax",
  },
  {
    src: hoofdCaseïne,
    title: "Facade ornament",
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
