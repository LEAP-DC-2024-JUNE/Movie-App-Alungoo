import React from "react";
import CarouselContainer from "../components/CarouselContainer";
import MovieContainer from "@/components/MovieContainer";
import { fetchMovies } from "@/utils/data-fetching";

const Home = async () => {
  const [popular, upcoming, top_rated] = await Promise.all([
    fetchMovies("/movie/popular?language=en-US&page=1"),
    fetchMovies("/movie/upcoming?language=en-US&page=1"),
    fetchMovies("/movie/top_rated?language=en-US&page=1"),
  ]);
  return (
    <div className=" flex flex-col justify-center gap-[32px] md: flex-wrap">
      <CarouselContainer />
      <MovieContainer
        title="Upcoming"
        type="upcoming"
        movies={upcoming.results.slice(0, 10)}
      />
      <MovieContainer
        title="Top Rated"
        type="top_rated"
        movies={top_rated.results.slice(0, 10)}
      />
      <MovieContainer
        title="Popular"
        type="popular"
        movies={popular.results.slice(0, 10)}
      />
    </div>
  );
};
export default Home;
