import SectionHeading from "./components/SectionHeading";

import p1 from "@/assets/art/painting (1).jpg";
import p2 from "@/assets/art/painting (2).jpg";
import p3 from "@/assets/art/painting (3).jpg";
import p4 from "@/assets/art/painting (4).jpg";
import p5 from "@/assets/art/painting (5).jpg";
import p6 from "@/assets/art/painting (6).jpg";
import p7 from "@/assets/art/painting (7).jpg";
import p8 from "@/assets/art/painting (8).jpg";
import p9 from "@/assets/art/painting (9).jpg";
import p10 from "@/assets/art/painting (10).jpg";
import p11 from "@/assets/art/painting (11).jpg";
import p12 from "@/assets/art/painting (12).jpg";
import p13 from "@/assets/art/painting (13).jpg";
import p14 from "@/assets/art/painting (14).jpg";
import p15 from "@/assets/art/painting (15).jpg";

import { type Image } from "./components/CustomCarousel";

import CustomCarousel from "./components/CustomCarousel";

const images: Image[] = [
	{
		src: p1,
		alt: "Painting 1",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p2,
		alt: "Painting 2",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p3,
		alt: "Painting 3",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p4,
		alt: "Painting 4",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p5,
		alt: "Painting 5",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p6,
		alt: "Painting 6",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p7,
		alt: "Painting 7",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p8,
		alt: "Painting 8",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p9,
		alt: "Painting 9",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p10,
		alt: "Painting 10",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p11,
		alt: "Painting 11",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p12,
		alt: "Painting 12",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p13,
		alt: "Painting 13",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p14,
		alt: "Painting 14",
		description: "Trompe l'oeil Rose de Valence"
	},
	{
		src: p15,
		alt: "Painting 15",
		description: "Trompe l'oeil Rose de Valence"
	},
];

export default function PortfolioSection() {
	return (
		<section id="portfolio" className="min-h-[400px] mt-16">
			<SectionHeading>Portfolio</SectionHeading>
			<CustomCarousel images={images} />
		</section>
	);
}
