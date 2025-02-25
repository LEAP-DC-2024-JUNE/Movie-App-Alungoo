"use client"
import { Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

type NowPlayingMovie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};

type CarouselCardProps = {
  currentMovies: NowPlayingMovie[];
};

const CarouselCard = ({ currentMovies }: CarouselCardProps) => {
  return (
    <Carousel
      plugins={[Autoplay()]}
      opts={{

        loop: true,
      }}
      className="w-full relative"
    >
      <CarouselContent>
        {currentMovies.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col w-full">
              <div className="w-full object-contain ">
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className="w-full h-"
                />
              </div>
              <div className="rounded-none flex flex-col justify-start">
                <div className="p-0 container">
                  <div>
                    <div className="h-[224px] bg-[#FAFAFA] dark:bg-black dark:text-white p-5 self-stretch flex flex-col gap-[16px]">
                      <div className="flex justify-between items-start">
                        <div className="max-w-[252px]">
                          <p className="text-[#09090B] text-sm font-normal dark:text-white">Now Playing</p>
                          <p className="text-[24px] font-normal truncate dark:text-white">{movie.title}</p>
                        </div>
                        <div className="flex flex-row items-center">
                          <Star fill="#FDE047" strokeWidth={0} size={16} />
                          <p className="text-[12px] font-medium font-Inter pl-1 dark:text-white">{movie.vote_average.toFixed(1)}</p>
                          <p className="text-[12px] text-[#71717A] font-normal dark:text-gray-400">/10</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#09090B] text-sm font-normal line-clamp-5 font-Inter leading-5 dark:text-white">{movie.overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-0 px-5 pb-5 bg-[#FAFAFA] dark:bg-black dark:text-white">
                  <Button className="dark:bg-zinc-800 dark:text-white">
                    <Play className="mr-2 h-4 w-4" /> Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
   
    </Carousel>
  );
};

export default CarouselCard;