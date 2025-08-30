import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import React from "react";

export type Image = {
  src: string;
  title: string;
  description: string;
};

type CustomCarouselProps = {
  images: Image[];
};

export default function CustomCarousel({ images }: CustomCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  }, []);

  // TODO: refactor so that every CarouselItem doesnt have to render a separate Dialog containing a whole ass other carousel..
  return (
    <Carousel className="mt-6 md:flex ">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            className="w-[40rem] h-[40rem] sm:basis-1/3 lg:basis-1/5 2xl:basis-1/7 relative group"
            key={index}
          >
            <Dialog>
              <DialogTrigger asChild>
                <img
                  loading="lazy"
                  className="w-full h-full object-cover hover:cursor-pointer"
                  src={image.src}
                  alt={image.title}
                />
              </DialogTrigger>

              <div
                className="absolute top-0 left-4 right-0 bottom-0 
             bg-black/60 opacity-0 group-hover:opacity-100 
             flex flex-col items-center justify-center text-center text-white 
             transition-opacity pointer-events-none"
              >
                <div className="p-2 ">
                  <p className="font-playfair italic">{image.title}</p>
                  <p className="font-default">{image.description}</p>
                </div>
              </div>
              <DialogTitle>{image.title}</DialogTitle>
              <DialogContent>
                <div className="flex max-h-[90vh]">
                  <Carousel
                    setApi={(api: CarouselApi) => {
                      if (!api) return;
                      api.on("select", onSelect);
                    }}
                    opts={{ startIndex: index }}
                  >
                    <CarouselContent>
                      {images.map((img, idx) => (
                        <CarouselItem
                          key={idx}
                          className="basis-full flex justify-center relative"
                        >
                          <img
                            className="h-full object-contain max-h-[90vh]"
                            src={img.src}
                            alt={img.title}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>

                <DialogHeader className="self-start pl-2 text-left">
                  <DialogTitle className="font-playfair italic">
                    {images[activeIndex].title}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="font-default pl-2 text-left">
                  {images[activeIndex].description}
                </DialogDescription>
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
  );
}
