import SectionHeading from "./components/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./components/ui/dialog";

const images = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-[400px]">
      <SectionHeading>Portfolio</SectionHeading>
      <Carousel className="mt-6 ">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              className="w-[40rem] h-[40rem] basis-1/7 overflow-hidden relative"
              key={index}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={`Painting ${index + 1}`}
                  />
                </DialogTrigger>
                <DialogContent className=" min-h-128 min-w-2/3 ">
                  <div className="flex max-h-[60vw]">
                    <img
                      className="w-2/3 object-contain"
                      src={image}
                      alt={`Painting ${index + 1}`}
                    />
                    <DialogHeader className="self-start pl-2 w-1/3">
                      <DialogDescription className="font-playfair italic text-lg">
                        Trompe l'oeil Rose de Valence
                      </DialogDescription>
                    </DialogHeader>
                  </div>

                  {/* <DialogFooter className="sm:justify-start">
										<DialogClose asChild>
											<Button type="button" variant="secondary">
												Close
											</Button>
										</DialogClose>
									</DialogFooter> */}
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
