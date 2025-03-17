import React, { Suspense } from "react";
import SimilarMovies from "@/components/SimilarMovies";

const SimilarMovie = () => {
  return (
    <Suspense>
      <SimilarMovies />
    </Suspense>
  );
};

export default SimilarMovie;
