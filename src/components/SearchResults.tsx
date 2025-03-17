"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchMovies } from "@/utils/data-fetching";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/utils/types";
import { LoadingMovieCard } from "@/components/LoadingMovieCard";
import { fetchGenreMovies } from "@/utils/data-fetching";
import { Badges } from "../components/Badges";
import { Separator } from "./ui/separator";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const genreParam = searchParams.get("genre");
  const [selectedGenres, setSelectedGenres] = useState<number[]>(
    genreParam ? genreParam.split(",").map(Number) : []
  );
  const { data, error, isLoading } = useSWR(
    query ? `/search/movie?query=${query}&language=en-US` : null,
    fetchMovies
  );
  const { data: MovieGenre } = useSWR(
    "/genre/movie/list?language=en",
    fetchGenreMovies
  );
  console.log(MovieGenre, "<< movie janar");

  if (isLoading) return <LoadingMovieCard />;
  if (error) return <p>Error loading search results.</p>;
  if (!data?.results?.length) return <p>No results found.</p>;

  return (
    <div className=" md:flex md:gap-2 ">
      <div className=" md:w-2/3">
        <p className=" font-semibold text-[24px]  md:pl-[80px] p-5">
          {" "}
          Search results
        </p>
        <p className=" pl-5  md:px-[80px] font-semibold text-[18px]">
          {data?.results?.length} results for "{query}"{" "}
        </p>
        <div className=" grid px-5  md:pl-[80px] grid-cols-2 gap-4 mt-6 md:grid-cols-4">
          {data?.results?.map((movies: Movie) => (
            <MovieCard key={movies.id} movie={movies} />
          ))}
        </div>
      </div>
      <div className="hidden md:flex md:w-[1px] md:bg-gray-100 md:self-stretch md:h-auto md:mt-20"></div>

      <div className=" flex flex-col justify-start px-5 gap-3 mt-4 mb-3 md:w-1/3 md:mt-20">
        <p className=" text-[20px] font-semibold"> Search by genre</p>
        <p className=" text-[16px] font-normal">
          {" "}
          See lists of movies by genre
        </p>
        <div className="flex flex-row gap-2 flex-wrap  ">
          {MovieGenre?.map((genre: any) => (
            <Badges
              key={genre.id}
              eachGenres={genre}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
