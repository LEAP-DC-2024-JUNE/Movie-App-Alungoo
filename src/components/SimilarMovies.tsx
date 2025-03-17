"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { fetchMovies } from "@/utils/data-fetching";
import { useState, useEffect } from "react";
import { Movie } from "@/utils/types";
import MovieCard from "@/components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const SimilarMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchParams = useSearchParams();
  const movieId = searchParams.get("id");
  useEffect(() => {
    const fetchMoviesByCategory = async () => {
      if (movieId) {
        const data = await fetchMovies(
          `/movie/${movieId}/similar?language=en-US&${currentPage}`
        );
        setMovies(data?.results || []);
        setTotalPages(Math.min(data?.total_pages || 0, 2));
        console.log(data, "similar data");
      }
    };

    fetchMoviesByCategory();
  }, [movieId, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      window.scrollTo(0, 0);
    }
  };
  return (
    <div className=" px-5 md:px-[80px] flex flex-col gap-5 py-5">
      <p className=" font-semibold text-[26px]">More like this </p>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
        {movies?.map((movie: Movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      {/* {totalPages > 1 && (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => handlePageChange(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )} */}
    </div>
  );
};
export default SimilarMovies;
