"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { LoadingCarousel } from "./LoadingCarousel";
import React, { useEffect, useState } from "react";

type AutoplayCarouselProps = {
  children: any;
};

const AutoplayCarousel = ({ children }: AutoplayCarouselProps) => {
    const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  })
    if (loading)
      return  <div>
        <LoadingCarousel/>
        </div>
  return (
    <Carousel plugins={[Autoplay()]} opts={{ loop: true }}>
      <CarouselContent>{children}</CarouselContent>
    </Carousel>
  );
};

export default AutoplayCarousel;
