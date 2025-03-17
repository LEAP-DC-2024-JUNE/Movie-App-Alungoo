"use client";
import { fetchMovies } from "@/utils/data-fetching";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import MovieCard from "./MovieCard";
import { useRouter } from "next/navigation";
import YoutubeDialog from "./YoutubeDialog";
import MovieDetailDesktop from "./MovieDetailDesktop";

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

  const handleSimilarMovie = () => {
    router.push(`/similarMovies/?id=${id}`);
    console.log(movieSimilar?.results, ">>Similar movie");
  };
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

  console.log(movieVideo, "<<<< movieVideo id bn");

  return (
    <>
      <div className=" pt-8 flex justify-between px-5  md:px-[150px] pb-4">
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
      <div className=" md:hidden contents">
        <div className="relative flex flex-col md:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w400${movieDetail?.backdrop_path}`}
            alt="movie poster"
            className="w-full min-h-[211px] "
          />

          <div className="absolute bottom-4 left-4 flex items-center gap-3 cursor-pointer">
            <YoutubeDialog trailerKey={videos} isDetailPage={true} />
          </div>
        </div>

        <div className=" flex gap-8 px-5  md:px-[150px] pt-8">
          <img
            src={`https://image.tmdb.org/t/p/w400${movieDetail?.poster_path}`}
            alt="movie poster"
            className="  p-0 w-[100px] h-[148px]"
          />
          <div className="flex flex-wrap gap-2">
            {movieDetail?.genres?.map((genre: any) => (
              <Badge
                variant="outline"
                key={genre.id}
                className="rounded-full  text-center"
              >
                {genre?.name}
              </Badge>
            ))}
            <p className="text-sm leading-relaxed overflow-auto ">
              {movieDetail?.overview}
            </p>
          </div>
        </div>
      </div>
      <div className=" hidden md:contents">
        <MovieDetailDesktop />
      </div>
      <div className=" flex flex-col px-5  md:px-[150px] gap-5 pt-5">
        <div className=" flex gap-[53px] items-center">
          <p className=" font-bold">Director:</p>
          <p className="">
            {movieCredits?.crew
              ?.slice(0, 1)
              .map((writers: any, index: number, array: any) => (
                <span className=" text-sm" key={writers.id}>
                  {writers.name}
                  {index !== array.length - 1 ? " • " : ""}
                </span>
              ))}
          </p>
        </div>
        <Separator orientation="horizontal" />
        <div className=" flex gap-[57px] items-center">
          <p className=" font-bold">Writers:</p>
          <p className="">
            {movieCredits?.crew
              ?.slice(0, 3)
              .map((writers: any, index: number, array: any) => (
                <span className=" text-sm" key={writers.id}>
                  {writers.name}
                  {index !== array.length - 1 ? " • " : ""}
                </span>
              ))}
          </p>
        </div>
        <Separator orientation="horizontal" />
        <div className="flex gap-[65px] items-center">
          <p className=" font-bold">Stars:</p>
          <p className=" ">
            {movieCredits?.cast && movieCredits.cast.length > 0 ? (
              movieCredits.cast
                .slice(0, 3)
                .map((stars: any, index: number, array: any) => (
                  <span className=" text-sm" key={index}>
                    {stars.name}
                    {index !== array.length - 1 ? " • " : ""}
                  </span>
                ))
            ) : (
              <p>No cast members available</p>
            )}
          </p>
        </div>
        <Separator orientation="horizontal" />
      </div>
      <div className=" flex flex-col justify-start px-5  md:px-[150px] py-8">
        <div className=" flex justify-between items-center">
          <p className=" font-semibold text-[24px]">More like this</p>
          <p
            className=" cursor-pointer text-[14px]"
            onClick={handleSimilarMovie}
          >
            See more →
          </p>
        </div>
        <div className="grid gap-5 grid-cols-2 mt-4 md:grid-cols-5">
          {movieSimilar ? (
            <>
              <div className="contents md:hidden">
                {movieSimilar?.results.slice(0, 2).map((movie: any) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))}
              </div>

              <div className="hidden md:contents">
                {movieSimilar?.results.slice(0, 5).map((movie: any) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))}
              </div>
            </>
          ) : (
            <p className="font-bold ">"Oops, no similar movies available"</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
