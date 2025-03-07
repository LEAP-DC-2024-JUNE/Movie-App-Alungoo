"use client";
import React, { useEffect, useState } from "react";
import { Movie } from "../utils/types";
import { Card, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { LoadingMovieCard } from "./LoadingMovieCard";
import { useRouter } from "next/navigation";

type MovieCardProps = {
  movie: Movie;
};
const MovieCard = ({ movie }: MovieCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movie/${movie.id}`);
    console.log(movie.id, "moviecard bn");
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  });
  if (loading)
    return (
      <div>
        <LoadingMovieCard />
      </div>
    );

  return (
    <Card className=" w-[180px] h-auto " onClick={handleClick}>
      <CardTitle className=" p-0">
        <img
          src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`}
          alt={movie?.title}
          className=" rounded-t-[8px] p-0 w-[180px] h-[233.1px] grayscale-[0.5] hover:grayscale-0"
        />
        <div className="h-[60px] rounded-b-[8px] bg-[#F4F4F5]  dark:bg-zinc-800 dark:text-white self-stretch flex flex-col gap-1 p-2">
          <div className="flex flex-row items-center">
            <Star fill="#FDE047" strokeWidth={0} size={16} />

            <p className="text-[12px]/4  font-medium font-Inter pl-1">
              {movie?.vote_average ? movie?.vote_average.toFixed(1) : "N/A"}
            </p>
            <p className="text-[12px]/4  text-[#71717A] font-normal">/10</p>
          </div>
          <div>
            <p className=" text-[#09090B] dark:bg-zinc-800 dark:text-white text-[12px]/4 font-normal font-Inter">
              {movie?.title}
            </p>
          </div>
        </div>
      </CardTitle>
    </Card>
  );
};

export default MovieCard;
