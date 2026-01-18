import CustomSection from "./components/CustomSection";
import { type Image } from "./components/CustomCarousel";
import CustomCarousel from "./components/CustomCarousel";
import { R2_BASE_URL } from "./config";

const images: Image[] = [
  {
    src: `${R2_BASE_URL}/art/painting (13).jpg`,
    title: "Trompe l'oeil",
    description: "White marble",
  },
  {
    src: `${R2_BASE_URL}/art/painting (14).jpg`,
    title: "Trompe l'oeil",
    description: "Rose de Valence",
  },
  {
    src: `${R2_BASE_URL}/art/painting (15).jpg`,
    title: "Trompe l'oeil",
    description: "Jaune Sainte Beaume",
  },
  {
    src: `${R2_BASE_URL}/art/painting (9).jpg`,
    title: "Trompe l'oeil",
    description: "Medusa on Napoleon marble",
  },
  {
    src: `${R2_BASE_URL}/art/painting (7).jpg`,
    title: "Trompe l'oeil",
    description: "French lily on Napoleon marble",
  },
  {
    src: `${R2_BASE_URL}/art/painting (8).jpg`,
    title: "Trompe l'oeil",
    description: "Abstract motive in green onyx",
  },
  {
    src: `${R2_BASE_URL}/art/painting (6).jpg`,
    title: "Trompe l'oeil",
    description: "Floral motive on white marble",
  },
  {
    src: `${R2_BASE_URL}/art/lichtelementVertAntique.jpg`,
    title: "Wall lighting",
    description: "Vert Antique",
  },
  {
    src: `${R2_BASE_URL}/art/lichtelementSchilpad.jpg`,
    title: "Wall lighting Ecaille",
    description: "Mixed techniques with watercolours, beer, and oilpaint",
  },
  {
    src: `${R2_BASE_URL}/art/lichtelementJauneDeSiennne.jpg`,
    title: "Wall lighting",
    description: "Jaune de Sienne",
  },
  {
    src: `${R2_BASE_URL}/art/zwarteKat.jpg`,
    title: "Statue",
    description: "Ptolemaic period, goddess Bastet, oil paint",
  },
  {
    src: `${R2_BASE_URL}/art/egyptischBrons.jpg`,
    title: "Statue",
    description: "Ptolemaic period, goddess Bastet, Edyptian bronze",
  },
  {
    src: `${R2_BASE_URL}/art/torsoRodinBrons.jpg`,
    title: "Torso",
    description: "Egyptian bronze",
  },
  {
    src: `${R2_BASE_URL}/art/medusa.jpg`,
    title: "Bass relief",
    description: "Medusa, Hellenistic period, Egyptian bronze",
  },
  {
    src: `${R2_BASE_URL}/art/lichtelementDruif.jpg`,
    title: "Wall lighting",
    description: "Caseïn paint, gilding with copper leaf",
  },
  {
    src: `${R2_BASE_URL}/art/sluitsteen.jpg`,
    title: "Keystone",
    description: "Charcoal, shellac, oil paint, wax",
  },
  {
    src: `${R2_BASE_URL}/art/hoofdCaseïne.jpg`,
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
