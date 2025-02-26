import React from "react";
import PopularMovieCard from "@/components/popularMovieCard";
import {fetchMovies } from "../utils/data-fetching";
import { MoveRight } from 'lucide-react';

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;

 
};
const popularMovieContainer = async () => {
  const popularMovie:Movie[] = await fetchMovies(
    "/movie/popular?language=en-US&page=1"
  );

  return (
    <div className=" px-[20px] flex flex-col gap-[32px] w-full">
      <div className=" flex flex-row items-center justify-between">
        <p className=" text-[24px] font-normal tracking-[-0.6px]">Popular</p>
        <div className=" flex gap-2">

        <p> See more </p>
        <p> <MoveRight /> </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-5">
        {popularMovie?.map((movie: Movie) => {
          return <PopularMovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default popularMovieContainer;
