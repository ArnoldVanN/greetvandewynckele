import CustomCarousel, { type Image } from "./components/CustomCarousel";
import CustomSection from "./components/CustomSection";

const images: Image[] = [
  {
    src: "/art/projects/pauw.jpg",
    title: "Mansion hall restoration",
    description: "Cleaning and restoration of oilpaint", // TODO: add link to https://auvio.rtbf.be/emission/une-brique-dans-le-ventre-22
  },
  {
    src: "/art/projects/floralMotif.jpg",
    title: "Mansion hall restoration",
    description: "Cleaning and restoration floral motifs",
  },
  {
    src: "/art/projects/angel.jpg",
    title: "Mansion hall restoration",
    description: "Cleaning",
  },
  {
    src: "/art/projects/asianTree.jpg",
    title: "Chinoiserie",
    description: "Oil paint on copper leaf and mixtion",
  },
  {
    src: "/art/projects/onyxLabrizering1.jpg",
    title: "Wall paneling",
    description: "Onyx",
  },
  {
    src: "/art/painting (2).jpg",
    title: "Wall paneling",
    description: "Vert Antique",
  },
  {
    src: "/art/projects/tafelblad.jpg",
    title: "Table top",
    description: "Marquetry marble",
  },
  {
    src: "/art/projects/tabletopCeltic.jpg",
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
