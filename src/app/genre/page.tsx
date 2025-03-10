import { LoadingMovieCard } from "@/components/LoadingMovieCard";
import MoviesByGenre from "@/components/MoviesByGenre";
import React, { Suspense } from "react";

const Genre = () => {
  return (
    <div>
      <Suspense fallback={<LoadingMovieCard />}>
        <MoviesByGenre />
      </Suspense>
    </div>
  );
};

export default Genre;
