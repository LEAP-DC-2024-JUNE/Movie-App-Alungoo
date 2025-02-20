import React from "react";

import MovieCard from "@/components/MovieCard";
import fetchPopularMovies from "../utils/data-fetching";
export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};
const Home = async () => {
  const popularMovie = await fetchPopularMovies(
    "/movie/popular?language=en-US&page=1"
  );

  return (
    <>
      <div className=" grid grid-cols-2 gap-2">
        {popularMovie?.map((movie: Movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
};
export default Home;
