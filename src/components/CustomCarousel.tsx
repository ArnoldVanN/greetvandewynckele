import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "./ui/dialog";

export type Image = {
    src: string;
    alt: string;
    description: string;
};

type CustomCarouselProps = {
    images: Image[];
};

export default function CustomCarousel({ images }: CustomCarouselProps) {

    return (
        <Carousel className="mt-6 md:flex ">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem
                        className="w-[40rem] h-[40rem] sm:basis-1/3 md:basis-1/5 lg:basis-1/7 overflow-hidden relative"
                        key={index}>
                        <Dialog>
                            <DialogTrigger asChild>
                                <img
                                    className="w-full h-full object-cover"
                                    src={image.src}
                                    alt={`Painting ${index + 1}`}
                                />
                            </DialogTrigger>
                            <DialogContent className=" min-h-128 min-w-2/3 ">
                                <div className="flex max-h-[60vw]">
                                    <img
                                        className="w-2/3 object-contain"
                                        src={image.src}
                                        alt={`Painting ${index + 1}`}
                                    />
                                    <DialogHeader className="self-start pl-2 w-1/3">
                                        <DialogDescription className="font-playfair italic text-lg">
                                            {image.description}
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
            <div className="absolute -bottom-8 left-1/2">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    )
}