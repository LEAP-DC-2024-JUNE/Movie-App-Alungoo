import { Movie } from "@/utils/types";
import React from "react";
import { Star } from "lucide-react";
import SeeMoreButton from "./SeeMoreButton";

type SearchResultProps = {
  movie: Movie;
};
const SearchResultCard = ({ movie }: SearchResultProps) => {
  return (
    <>
      <div className=" flex gap-3 p-2 ">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
            className=" rounded-[8px] p-0 w-[80px] h-[100px] grayscale-[0.5] hover:grayscale-0"
          />
        </div>
        <div className=" flex flex-col gap-2 justify-start">
          <div>
            <h1 className=" text-[#09090B] dark:bg-zinc-800 dark:text-white text-[16px]/4 font-bold line-clamp-1">
              {movie.title}
            </h1>
          </div>
          <div className="flex flex-row items-center">
            <Star fill="#FDE047" strokeWidth={0} size={16} />

            <p className="text-[12px]/4  font-medium  pl-1">
              {movie.vote_average.toFixed(1)}
            </p>
            <p className="text-[12px]/4  text-[#71717A] font-normal">/10</p>
          </div>

          <div className=" flex gap-12">
            <div className=" text-[14px] font-medium">
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : "N/A"}
            </div>
            <div className=" pt-3">{/* <SeeMoreButton/> */}</div>
          </div>
        </div>
      </div>
      <div className=" border-[1px] border-zinc-100 w-full mb-2"></div>
    </>
  );
};

export default SearchResultCard;
