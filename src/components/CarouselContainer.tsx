import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

import AutoplayCarousel from "./Autoplay";
import { fetchMovies } from "@/utils/data-fetching";
import CarouselDesc from "./CarouselDesc";

export type NowPlayingMovie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};
export type MovieResponse = {
  results: NowPlayingMovie[];
};
const CarouselContainer = async () => {
  const nowPlaying: MovieResponse = await fetchMovies(
    "/movie/now_playing?language=en-US&page=1"
  );

  return (
    <AutoplayCarousel>
      {nowPlaying?.results?.map((movie, index) => (
        <CarouselItem key={index}>
          <div className="flex flex-col w-full">
            <div className="w-full  relative md:max-h-[650px]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt="Cover Example"
                className="w-full object-cover md:object-center "
              />
              <div className="md:absolute md:top-[200px] md:left-[140px]  md:w-[400px] ">
                <CarouselDesc movie={movie} />
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </AutoplayCarousel>
  );
};

export default CarouselContainer;
