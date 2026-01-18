import CustomCarousel, { type Image } from "./components/CustomCarousel";
import CustomSection from "./components/CustomSection";
import { R2_BASE_URL } from "./config";

const images: Image[] = [
  {
    src: `${R2_BASE_URL}/art/projects/pauw.jpg`,
    title: "Mansion hall restoration",
    description:
      "Cleaning and restoration of oilpaint. A documentary series by RTFB about the restoration of this mansion is available at: ",
    link: `${R2_BASE_URL}/emission/une-brique-dans-le-ventre-22`,
  },
  {
    src: `${R2_BASE_URL}/art/projects/floralMotif.jpg`,
    title: "Mansion hall restoration",
    description: "Cleaning and restoration floral motifs",
  },
  {
    src: `${R2_BASE_URL}/art/projects/angel.jpg`,
    title: "Mansion hall restoration",
    description: "Cleaning",
  },
  {
    src: `${R2_BASE_URL}/art/projects/asianTree.jpg`,
    title: "Chinoiserie",
    description: "Oil paint on copper leaf and mixtion",
  },
  {
    src: `${R2_BASE_URL}/art/projects/onyxLabrizering1.jpg`,
    title: "Wall paneling",
    description: "Onyx",
  },
  {
    src: `${R2_BASE_URL}/art/painting (2).jpg`,
    title: "Wall paneling",
    description: "Vert Antique",
  },
  {
    src: `${R2_BASE_URL}/art/projects/tafelblad.jpg`,
    title: "Table top",
    description: "Marquetry marble",
  },
  {
    src: `${R2_BASE_URL}/art/projects/tabletopCeltic.jpg`,
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
