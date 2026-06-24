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
} from "./ui/dialog";
import { useEffect, useState } from "react";
import { cfImage } from "@/config";

export type Image = {
  src: string;
  title: string;
  description: string;
  link?: string;
};

type CustomCarouselProps = {
  images: Image[];
};

export default function CustomCarousel({ images }: CustomCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [startIndex, setStartingIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <>
      <Carousel className="mt-6 md:flex">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              className="w-[40rem] h-[40rem] sm:basis-1/3 lg:basis-1/5 2xl:basis-1/7 relative group"
              key={index}
            >
              <img
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:cursor-pointer"
                src={cfImage(image.src, { width: 600, fit: "cover" })}
                srcSet={`${cfImage(image.src, {
                  width: 600,
                  fit: "cover",
                })} 1x, ${cfImage(image.src, { width: 1200, fit: "cover" })} 2x`}
                alt={image.title}
                onClick={() => {
                  setStartingIndex(index);
                  setOpen(!open);
                }}
              />

              <div className="absolute top-0 left-4 right-0 bottom-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center text-white transition-opacity pointer-events-none">
                <div className="p-2 ">
                  <p className="font-playfair italic">{image.title}</p>
                  <p className="font-default">{image.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-8 left-1/2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="lg:h-[85vh] w-[95vw] flex flex-col gap-2">
          <div className="flex-1 min-h-0 flex">
            <Carousel setApi={setApi} opts={{ startIndex: startIndex }}>
              <CarouselContent>
                {images.map((img, idx) => (
                  <CarouselItem
                    key={idx}
                    className="basis-full flex justify-center relative"
                  >
                    <img
                      decoding="async"
                      className="h-full w-full object-contain"
                      src={cfImage(img.src, { width: 1800 })}
                      alt={img.title}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <DialogHeader className="shrink-0 gap-1 pl-2 text-left">
            <DialogTitle className="font-playfair italic">
              {images[current].title}
            </DialogTitle>
            <DialogDescription className="font-default">
              {images[current].description}
              {images[current].link && (
                <a
                  href={images[current].link}
                  className="underline text-blue-400"
                >
                  {images[current].link}
                </a>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
