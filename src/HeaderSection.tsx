import header_image from "@/assets/header_img.jpg";
export default function HeaderSection() {
	return (
		<section id="header" className="pb-12 text-center">
			<div className="relative grid text-center columns-1 items-end justify-center h-[32rem]">
				<p className="z-10 top-[2rem] right-[8rem] absolute text-white text-lg">
					Faux marbres, Faux bois, Trompe l'œil directly inspired by nature...
				</p>
				<img
					src={header_image}
					className="max-w-full absolute w-full h-full object-cover mb-4"
					alt="header image"
				/>
				<div className="z-10 mb-12">
					<h1 className="text-4xl  font-bold mb-2">Greet Vandewynckele</h1>
					<p className="text-lg text-gray-600">Master decorative painter</p>
				</div>
			</div>
		</section>
	);
}
