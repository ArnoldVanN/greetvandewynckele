import CustomSection from "./components/CustomSection";
import { type Image } from "./components/CustomCarousel";
import CustomCarousel from "./components/CustomCarousel";

const images: Image[] = [
  {
    src: "/art/painting (13).jpg",
    title: "Trompe l'oeil",
    description: "White marble",
  },
  {
    src: "/art/painting (14).jpg",
    title: "Trompe l'oeil",
    description: "Rose de Valence",
  },
  {
    src: "/art/painting (15).jpg",
    title: "Trompe l'oeil",
    description: "Jaune Sainte Beaume",
  },
  {
    src: "/art/painting (9).jpg",
    title: "Trompe l'oeil",
    description: "Medusa on Napoleon marble",
  },
  {
    src: "/art/painting (7).jpg",
    title: "Trompe l'oeil",
    description: "French lily on Napoleon marble",
  },
  {
    src: "/art/painting (8).jpg",
    title: "Trompe l'oeil",
    description: "Abstract motive in green onyx",
  },
  {
    src: "/art/painting (6).jpg",
    title: "Trompe l'oeil",
    description: "Floral motive on white marble",
  },
  {
    src: "/art/lichtelementVertAntique.jpg",
    title: "Wall lighting",
    description: "Vert Antique",
  },
  {
    src: "/art/lichtelementSchilpad.jpg",
    title: "Wall lighting Ecaille",
    description: "Mixed techniques with watercolours, beer, and oilpaint",
  },
  {
    src: "/art/lichtelementJauneDeSiennne.jpg",
    title: "Wall lighting",
    description: "Jaune de Sienne",
  },
  {
    src: "/art/zwarteKat.jpg",
    title: "Statue",
    description: "Ptolemaic period, goddess Bastet, oil paint",
  },
  {
    src: "/art/egyptischBrons.jpg",
    title: "Statue",
    description: "Ptolemaic period, goddess Bastet, Edyptian bronze",
  },
  {
    src: "/art/torsoRodinBrons.jpg",
    title: "Torso",
    description: "Egyptian bronze",
  },
  {
    src: "/art/medusa.jpg",
    title: "Bass relief",
    description: "Medusa, Hellenistic period, Egyptian bronze",
  },
  {
    src: "/art/lichtelementDruif.jpg",
    title: "Wall lighting",
    description: "Caseïn paint, gilding with copper leaf",
  },
  {
    src: "/art/sluitsteen.jpg",
    title: "Keystone",
    description: "Charcoal, shellac, oil paint, wax",
  },
  {
    src: "/art/hoofdCaseïne.jpg ",
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
