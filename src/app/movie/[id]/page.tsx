import { LoadingMovieCard } from "@/components/LoadingMovieCard";
import MovieDetail from "@/components/MovieDetail";
import React, { Suspense } from "react";

const Movie = () => {
  return (
    <div>
      <Suspense fallback={<LoadingMovieCard />}>
        <MovieDetail />
      </Suspense>
    </div>
  );
};

export default Movie;
