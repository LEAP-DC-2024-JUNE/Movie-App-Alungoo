import MoviesPaged from "@/components/MoviesPaged";
import React, { Suspense } from "react";

const Movies = () => {
  return (
    <div>
      <Suspense>
        <MoviesPaged />
      </Suspense>
    </div>
  );
};

export default Movies;
