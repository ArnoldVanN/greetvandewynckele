import SectionHeading from "./components/SectionHeading";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./components/ui/carousel";

export default function PortfolioSection() {
	return (
		<section id="portfolio" className="min-h-[400px]">
			<SectionHeading>Portfolio</SectionHeading>
			<Carousel>
				<CarouselContent>
					<CarouselItem></CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}
