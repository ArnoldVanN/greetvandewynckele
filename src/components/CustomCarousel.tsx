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
                        className="w-[40rem] h-[40rem] sm:basis-1/3 md:basis-1/5 lg:basis-1/7 relative"
                        key={index}>
                        <Dialog>
                            <DialogTrigger asChild>
                                <img
                                    className="w-full h-full object-cover"
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </DialogTrigger>
                            <DialogContent className=" min-h-128 min-w-2/3 ">
                                <div className="flex max-h-[90vh]">
                                    <Carousel opts={{ startIndex: index }} className="max-w-4/5">
                                        <CarouselContent>
                                            {images.map((img, idx) => (
                                                <CarouselItem key={idx} className="basis-full flex justify-center relative ">
                                                    <img
                                                        className="h-full max-h-[90vh]"
                                                        src={img.src}
                                                        alt={img.alt}
                                                    />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                    </Carousel>
                                    <DialogHeader className="self-start pl-2 w-1/3">
                                        <DialogDescription className="font-playfair italic text-lg">
                                            {image.description}
                                        </DialogDescription>
                                    </DialogHeader>
                                </div>
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