"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchMovies, fetchGenreMovies } from "@/utils/data-fetching";
import { Movie } from "@/utils/types";
import MovieCard from "@/components/MovieCard";
import { Badges } from "@/components/Badges";
import PaginationControls from "@/components/MoviePagination";
import { Separator } from "@/components/ui/separator";

const MoviesByGenre = () => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const searchParams = useSearchParams();
  const genreId = searchParams.get("genre");
  const genreIds = genreId
    ? genreId.split(",").map((id) => Number(id.trim()))
    : [];
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  // const { data } = useSWR(
  //   `/discover/movie?language=en&with_genres=${genreId}`,
  //   fetchMovies
  // );
  const { data: MovieGenre } = useSWR(
    "/genre/movie/list?language=en",
    fetchGenreMovies
  );

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      if (genreId) {
        setLoading(true);
        try {
          const data = await fetchMovies(
            `/discover/movie?language=en&with_genres=${genreIds}&page=${currentPage}`
          );
          console.log(data, "<<< data fetched");
          setMovies(data?.results || []);
          setTotalPages(Math.min(data?.total_pages || 1, 5));
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
        setLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [genreId, currentPage]);

  console.log(movies, "<<movie by genre");
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row md:px-[80px] ">
        <div className="flex flex-col justify-start px-5 gap-3 mt-4 md:w-1/3">
          <p className="hidden md:block md:text-[24px] md:font-semibold md:col-span-full">
            Search filter
          </p>
          <p className="text-[20px] font-bold md:hidden">Search by genre</p>
          <p className="text-[20px] font-bold hidden md:block">Genres</p>
          <p className="text-[16px] font-normal">
            {" "}
            See lists of movies by genre
          </p>
          <div className="flex flex-row gap-2 flex-wrap">
            {MovieGenre?.map((genre: any, index: any) => (
              <Badges
                key={index}
                eachGenres={genre}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:block md:border-r-[1px] border-zinc-200  md:h-auto md:mt-16 "></div>

        <div className="grid px-5 grid-cols-2 gap-4 md:grid-cols-4 md:w-2/3 md:pt-16">
          {movies?.map((movie: Movie, index: any) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
      <div className="md:pr-[100px] md:flex md:justify-end">
        <div className="md:mt-5">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl={`/genre/?genre=${genreId}`}
          />
        </div>
      </div>
    </>
  );
};

export default MoviesByGenre;
