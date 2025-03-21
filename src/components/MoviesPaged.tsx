"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchMovies } from "@/utils/data-fetching";
import MovieContainer from "@/components/MovieContainer";
import { LoadingMovieCard } from "@/components/LoadingMovieCard";
import PaginationControls from "../components/MoviePagination";

const MoviesPaged = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "popular";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    const fetchMoviesByCategory = async () => {
      if (type) {
        const data = await fetchMovies(
          `/movie/${type}?language=en-US&page=${currentPage}`
        );
        setMovies(data?.results);
        setTotalPages(Math.min(data?.total_pages, 5));
        setLoading(false);
      }
    };

    fetchMoviesByCategory();
  }, [type, currentPage]);

  if (loading) return <LoadingMovieCard />;
  if (!movies.length) return <p>No movies found in this category.</p>;

  const formattedTitle = type
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <div className=" flex flex-col gap-5 pt-7">
        <MovieContainer title={formattedTitle} type={type} movies={movies} />
      </div>
      <div className="md:pr-[80px] md:flex md:justify-end">
        <div className="md:mt-5">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl={`/movies?type=${type}`}
          />
        </div>
      </div>
    </>
  );
};
export default MoviesPaged;
