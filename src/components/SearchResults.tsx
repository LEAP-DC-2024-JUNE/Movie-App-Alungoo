"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchMovies } from "@/utils/data-fetching";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/utils/types";
import { LoadingMovieCard } from "@/components/LoadingMovieCard";
import GenreMoviesDropDown from "./GenreMoviesDropDown";
import GenreMovies from "./GenreMovies";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const { data, error, isLoading } = useSWR(
    query ? `/search/movie?query=${query}&language=en-US` : null,
    fetchMovies
  );

  if (isLoading) return <LoadingMovieCard />;
  if (error) return <p>Error loading search results.</p>;
  if (!data?.results?.length) return <p>No results found.</p>;

  return (
    <>
      <p className=" font-bold text-[26px] p-5"> Search results</p>
      <p className=" pl-5 font-bold text-[18px]">
        {data?.results?.length} results for "{query}"{" "}
      </p>
      <div className=" grid px-5 grid-cols-2 gap-4">
        {data?.results?.map((movies: Movie) => (
          <MovieCard key={movies.id} movie={movies} />
        ))}
      </div>
      <div>{/* <PaginationControls /> */}</div>
      <GenreMovies />
    </>
  );
};

export default SearchResults;
