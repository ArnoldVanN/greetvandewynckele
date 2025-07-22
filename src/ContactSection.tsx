import SectionHeading from "./components/SectionHeading";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
	return (
		<section id="contact" className="min-h-[400px]">
			<SectionHeading>Contact</SectionHeading>
			<div className="w-fit mx-auto mt-8">
				<ul className="text-lg">
					<li className="flex items-center justify-center gap-2">
						<FaInstagram />
						<a
							href="https://www.instagram.com/greet.vw"
							target="_blank"
							rel="noopener noreferrer">
							@greet.vw
						</a>
					</li>
					<li className="flex items-center justify-center gap-2">
						<FaEnvelope />
						<a href="mailto:greet.vdw.gv@gmail.com">greet.vdw.gv@gmail.com</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
