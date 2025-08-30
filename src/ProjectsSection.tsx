import p2 from "@/assets/art/painting (2).jpg";
import pauw from "@/assets/art/projects/pauw.jpg";
import floralMotif from "@/assets/art/projects/floralMotif.jpg";
import angel from "@/assets/art/projects/angel.jpg";
import onyx from "@/assets/art/projects/onyxLabrizering1.jpg";
import tabletop from "@/assets/art/projects/tafelblad.jpg";
import tabletopCeltic from "@/assets/art/projects/tabletopCeltic.jpg";
import asianTree from "@/assets/art/projects/asianTree.jpg";

import CustomCarousel, { type Image } from "./components/CustomCarousel";
import CustomSection from "./components/CustomSection";

const images: Image[] = [
  {
    src: pauw,
    title: "Mansion hall restoration",
    description: "Cleaning and restoration of oilpaint", // TODO: add link to https://auvio.rtbf.be/emission/une-brique-dans-le-ventre-22
  },
  {
    src: floralMotif,
    title: "Mansion hall restoration",
    description: "Cleaning and restoration floral motifs",
  },
  {
    src: angel,
    title: "Mansion hall restoration",
    description: "Cleaning",
  },
  {
    src: asianTree,
    title: "Chinoiserie",
    description: "Oil paint on copper leaf and mixtion",
  },
  {
    src: onyx,
    title: "Wall paneling",
    description: "Onyx",
  },
  {
    src: p2,
    title: "Wall paneling",
    description: "Vert Antique",
  },
  {
    src: tabletop,
    title: "Table top",
    description: "Marquetry marble",
  },
  {
    src: tabletopCeltic,
    title: "Table top",
    description: "Celtic motive, copper leave on mixtion",
  },
];

export default function ProjectsSection() {
  return (
    <CustomSection name="Projects" id="projects" className="xl:mx-0 md:mx-0">
      <div className="@container w-full font-playfair text-center pt-6">
        <p>A brief overview of completed assignments</p>
      </div>
      <CustomCarousel images={images} />
    </CustomSection>
  );
}
