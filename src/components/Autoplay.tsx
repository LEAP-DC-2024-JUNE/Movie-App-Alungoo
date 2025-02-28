"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type AutoplayCarouselProps = {
  children: any;
};

const AutoplayCarousel = ({ children }: AutoplayCarouselProps) => {
  return (
    <Carousel plugins={[Autoplay()]} opts={{ loop: true }}>
      <CarouselContent>{children}</CarouselContent>
    </Carousel>
  );
};

export default AutoplayCarousel;
