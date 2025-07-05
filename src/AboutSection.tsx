import SectionHeading from "./components/SectionHeading";
import aboutImage from "./assets/about_img.jpg";

export default function AboutSection() {
	return (
		<section
			id="about"
			className="min-h-[400px] mx-[5%] sm:mx-[10%] md:mx-[20%] xl:mx-[30%] py-16">
			<SectionHeading>about</SectionHeading>
			<img src={aboutImage} alt="About Me" className="mx-auto mt-8" />
			<div className="mt-10 ">
				<p className="">
					I always had a passion for art and craftsmanship. I started with
					evening classes “drawing” at the art school Saint-Lucas in Ghent.
				</p>
				<p>
					Meanwhile, I worked as a therapist in a psychiatric institute where I
					established an art studio for its clients.
				</p>
				<p>
					Soon thereafter, however, I chose to focus more on what I really
					wanted to achieve and earned my diploma for master painter at the
					Meylemans Institute.
				</p>
				<p className="pt-3">
					Over the course of this training I've learned to apply a variety of
					old techniques to decorate churches, castles and mansions using only
					high-quality watercolors and oil paints.
				</p>
				<p className="pt-3">
					I accept small and personal projects such as wood-and marble painting,
					Faux-bronze, turtle and stone, letter painting, "trompe l’oeil" and
					gilding.
				</p>
				<div className="pt-6">
					<p className="font-bold  text-amber-950">My portfolio consists of:</p>
					<ul className="list-disc pl-8 pt-3">
						<li>wood- and marble painting</li>
						<li>Faux bronze, turtle and stone</li>
						<li>patinating, gilding and polychromies</li>
						<li>trompe l’oeil and chinoiserie</li>
						<li>gilding and letter painting</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
