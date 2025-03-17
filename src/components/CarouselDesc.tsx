import React from "react";
import YoutubeTrailer from "./Youtube";
import { Star } from "lucide-react";
import { NowPlayingMovie } from "./CarouselContainer";
type CarouselDescProps = {
  movie: NowPlayingMovie;
};
const CarouselDesc = ({ movie }: CarouselDescProps) => {
  return (
    <div className="rounded-none flex flex-col justify-start ">
      <div className="h-[224px] bg-[#FAFAFA] md:bg-transparent md:bg-opacity-60 md:z-50 dark:bg-black dark:text-white p-5 self-stretch flex flex-col gap-[16px] md:dark:bg-transparent">
        <div className="flex justify-between items-start md:flex-col">
          <div className="max-w-[262px]">
            <p className="text-[#09090B] text-sm font-normal dark:text-[]#FFF md:text-[#FFF]">
              Now Playing:
            </p>
            <p className="text-[36px] font-bold truncate dark:text-white md:text-[#FFF]">
              {movie.title}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Star fill="#FDE047" strokeWidth={0} size={16} />
            <p className="text-[12px] font-medium font-Inter pl-1 md:text-[#FFF]">
              {movie.vote_average.toFixed(1)}
            </p>
            <p className="text-[12px] text-[#71717A] font-normal dark:text-gray-400 md:text-[#71717A]">
              /10
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#09090B] md:text-[#FFF]  text-sm font-normal line-clamp-5 leading-5 dark:text-[#FFF]">
            {movie.overview}
          </p>
        </div>
      </div>
      <div className=" pl-5 pt-5  bg-[#FAFAFA] md:bg-transparent md:bg-opacity-0 md:z-50 dark:bg-black dark:text-[#FFF] pb-6 hover:bg-[#FAFAFA] md:hover:bg-transparent md:dark:bg-transparent">
        <YoutubeTrailer movieId={movie.id} />
      </div>
    </div>
  );
};

export default CarouselDesc;
