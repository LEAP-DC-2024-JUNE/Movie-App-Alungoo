import SearchResults from "@/components/SearchResults";
import { Suspense } from "react";
import { LoadingMovieCard } from "@/components/LoadingMovieCard";
export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingMovieCard />}>
      <SearchResults />
    </Suspense>
  );
}
