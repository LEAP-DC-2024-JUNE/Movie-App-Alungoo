"use client";
import { fetchGenreMovies } from "@/utils/data-fetching";
import React from "react";
import GenreMoviesDropDown from "./GenreMoviesDropDown";
import useSWR from "swr";
import { Loader2 } from "lucide-react";

const GenreMovies = () => {
  const { data, error, isLoading } = useSWR(
    "/genre/movie/list?language=en",
    fetchGenreMovies
  );

  if (isLoading)
    return (
      <div>
        <Loader2 />
      </div>
    );
  if (error) return <div>Failed to load genres</div>;
  console.log(data, ">>genre types");
  return (
    <div className="">
      <GenreMoviesDropDown genres={data} />
    </div>
  );
};

export default GenreMovies;
