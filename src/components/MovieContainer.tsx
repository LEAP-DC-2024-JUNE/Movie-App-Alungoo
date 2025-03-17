"use client";
import React, { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard";
import { Movie } from "../utils/types";
import SeeMoreButton from "./SeeMoreButton";
import { LoadingMovieCard } from "./LoadingMovieCard";
import { usePathname } from "next/navigation";

type MovieContainerProps = {
  movies: Movie[];
  title: string;
  type: string;
};
const MovieContainer = ({ movies, title, type }: MovieContainerProps) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    setLoading(false);
  });
  if (loading)
    return (
      <div>
        <LoadingMovieCard />
      </div>
    );
  const isOnMoviePage = pathname.startsWith("/movies");
  return (
    <div className="px-[20px] flex flex-col gap-7 justify-evenly  md:px-[80px] ">
      <div className="flex items-start justify-between w-full">
        <p className="text-[24px] tracking-[-0.6px] font-semibold">{title}</p>
        {!isOnMoviePage && <SeeMoreButton categoryType={type} />}
      </div>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-5 w-full">
        {movies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default MovieContainer;
