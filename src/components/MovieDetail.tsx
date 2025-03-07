"use client";
import { fetchMovies } from "@/utils/data-fetching";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
import { Badge } from "./ui/badge";
import YouTube from "react-youtube";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import MovieCard from "./MovieCard";
import SeeMoreButton from "./SeeMoreButton";
import { useRouter } from "next/navigation";

const MovieDetail = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const { data: movieDetail } = useSWR(
    `/movie/${id}?language=en-US`,
    fetchMovies
  );
  const { data: movieVideo } = useSWR(
    `/movie/${id}/videos?language=en-US`,
    fetchMovies
  );
  const { data: movieCredits } = useSWR(
    `/movie/${id}/credits?language=en-US`,
    fetchMovies
  );
  const { data: movieSimilar } = useSWR(
    `/movie/${id}/similar?language=en-US`,
    fetchMovies
  );

  const opts = {
    height: "212",
    width: "100%",
  };

  // const handleMoviesPage = () => {
  //   router.push("/")

  // }
  const videos = movieVideo?.results || movieVideo || [];
  const videoKey = videos.length > 0 ? videos[0]?.key : null;
  const formatRevenue = (num: number | undefined) => {
    if (!num) return "N/A";
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 10_000) return Math.round(num / 1_000) + "K";
    return num.toLocaleString();
  };
  const formatRuntime = (minutes: number | undefined) => {
    if (!minutes) return "N/A";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  console.log(movieSimilar, "<<<< moviesimilr id bn");

  return (
    <>
      <div className=" flex justify-between px-5">
        <div>
          <div className=" font-bold">{movieDetail?.title}</div>
          <div className=" flex  gap-1 items-center">
            <p className="text-[12px]/4">{movieDetail?.release_date}</p>
            <span>•</span>
            <p className="text-[12px]/4">
              {formatRuntime(movieDetail?.runtime)}
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className=" flex">
            <Star fill="#FDE047" strokeWidth={0} size={24} />
            <div className=" flex flex-col justify-start">
              <div className=" flex">
                <p className="text-[11px]/4  font-bold pl-1">
                  {movieDetail?.vote_average.toFixed(1)}
                </p>
                <p className="text-[11px]/4  text-[#71717A] font-normal">/10</p>
              </div>
              <p className="text-[11px]/4  text-[#71717A]">
                {formatRevenue(movieDetail?.revenue)}
              </p>
            </div>
          </div>
        </div>
      </div>
      {videoKey ? (
        <div className="w-full  overflow-hidden">
          <YouTube videoId={videoKey} opts={opts} className="w-full" />
        </div>
      ) : (
        <div className="w-full h-[412px] bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">
            No trailer available
          </p>
        </div>
      )}
      <div className=" flex gap-4 px-5 mt-4">
        <img
          src={`https://image.tmdb.org/t/p/w400${movieDetail?.poster_path}`}
          alt="movie poster"
          className="  p-0 w-[100px] h-[148px] grayscale-[0.5] hover:grayscale-0"
        />
        <div className="flex flex-wrap gap-2 pl-4">
          {movieDetail?.genres?.map((genre: any) => (
            <Badge
              variant="outline"
              key={genre.id}
              className="rounded-full px-3 w-22 text-center"
            >
              {genre?.name}
            </Badge>
          ))}
          <p className="text-xs leading-relaxed overflow-auto px-3">
            {movieDetail?.overview}
          </p>
        </div>
      </div>
      <div className=" flex flex-col px-5 gap-4 text-[12px]/4 mt-4">
        <div className=" flex gap-[99px]">
          <p className=" font-bold">Writers:</p>
          <p className="  ">
            {movieCredits?.crew?.slice(0, 3).map((writers: any) => (
              <span key={writers.id}>{writers.name} •</span>
            ))}
          </p>
        </div>
        <Separator orientation="horizontal" />
        <div className="flex gap-[50px]">
          <p className=" font-bold">Stars:</p>
          <p className=" flex flex-row">
            {movieCredits?.cast && movieCredits.cast.length > 0 ? (
              movieCredits.cast
                .slice(0, 3)
                .map((stars: any, index: any) => (
                  <p key={index}>{stars.name} •</p>
                ))
            ) : (
              <p>No cast members available</p>
            )}
          </p>
        </div>
        <Separator orientation="horizontal" />
      </div>
      <div className=" flex flex-col justify-start px-5 mt-4">
        <div className=" flex justify-between">
          <p className=" font-bold text-[20px]">More like this</p>
          {/* <p onClick={handleMoviesPage}>
            <SeeMoreButton categoryType="More like this" />
          </p> */}
        </div>
        <div className=" flex flex-row gap-3 mt-4">
          {movieSimilar?.results.slice(0, 2).map((movie: any) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
