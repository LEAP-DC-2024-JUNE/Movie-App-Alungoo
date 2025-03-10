"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetchMovies, fetchGenreMovies } from "@/utils/data-fetching";
import { Movie } from "@/utils/types";
import MovieCard from "@/components/MovieCard";
import { Badges } from "@/components/Badges";
import PaginationControls from "@/components/MoviePagination";

const MoviesByGenre = () => {
  const searchParams = useSearchParams();
  const genreId = searchParams.get("genre");
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
            `/discover/movie?language=en&with_genres=${genreId}&page=${currentPage}`
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
    <div className=" flex flex-col gap-10">
      <div className=" flex flex-col justify-start px-5 gap-3 mt-4">
        <p className=" text-[20px] font-bold"> Search by genre</p>
        <p className=" text-[16px] font-normal">
          {" "}
          See lists of movies by genre
        </p>
        <div className="flex flex-row gap-2 flex-wrap  ">
          {MovieGenre?.map((genre: any, index: any) => (
            <Badges key={index} eachGenres={genre} />
          ))}
        </div>
      </div>
      <p>{/* {data?.results?.length} results for "{MovieGenre.name}" */}</p>
      <div className=" grid gap-5 grid-cols-2 px-5">
        {movies?.map((movie: Movie, index: any) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl={`/genre/?genre=${genreId}`}
      />
    </div>
  );
};

export default MoviesByGenre;
