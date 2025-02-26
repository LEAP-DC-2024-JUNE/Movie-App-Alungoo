import React from "react";
import CarouselContainer from "@/components/CarouselContainer";
import PopularMovieContainer from "@/components/popularMovieContainer";
import YouTube from "react-youtube";
export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};
const Home = async () => {
 

  return (
    <div className=" flex flex-col justify-center gap-[32px]">
      <CarouselContainer/>
      <PopularMovieContainer/>
    </div>
  );
};
export default Home;
