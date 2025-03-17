import React from "react";
import YoutubeDialog from "./YoutubeDialog";
import useSWR from "swr";
import { fetchMovies } from "@/utils/data-fetching";
import { useParams } from "next/navigation";
import { Badge } from "./ui/badge";
import Image from "next/image";

const MovieDetailDesktop = () => {
  const params = useParams();
  const id = params.id;
  const { data: movieDetail } = useSWR(
    `/movie/${id}?language=en-US`,
    fetchMovies
  );
  const { data: movieVideo } = useSWR(
    `/movie/${id}/videos?language=en-US`,
    fetchMovies
  );
  const videos = movieVideo?.results || movieVideo || [];
  // console.log(movieVideo, "<<desktopmovieVideo");
  // console.log("Poster Path:", movieDetail?.poster_path);
  // console.log("Backdrop Path:", movieDetail?.backdrop_path);

  return (
    <div className="flex flex-col justify-start gap-[32px] px-[150px]">
      <div className="flex gap-5">
        <div className="w-1/4">
          <div className="relative w-full aspect-[2/3]">
            <Image
              src={`https://image.tmdb.org/t/p/w400${movieDetail?.poster_path}`}
              alt="movie poster"
              fill
              className="object-cover rounded-[4px] shadow-lg"
            />
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative w-full h-full">
            <Image
              src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`}
              alt="movie backdrop"
              fill
              className="shadow-lg object-cover rounded-[4px]"
            />
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-3 cursor-pointer">
            <YoutubeDialog trailerKey={videos} isDetailPage={true} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {movieDetail?.genres?.map((genre: any) => (
          <Badge
            variant="outline"
            key={genre.id}
            className="rounded-full text-center"
          >
            {genre?.name}
          </Badge>
        ))}
        <p className="text-sm leading-relaxed overflow-auto">
          {movieDetail?.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetailDesktop;
