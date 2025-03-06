"use client";

import { Button } from "./ui/button";
import { X, Search, Loader2 } from "lucide-react";
import GenreMovies from "./GenreMovies";
import { fetchMovies } from "@/utils/data-fetching";
import { useState, useEffect } from "react";
import useSWR from "swr";
import SearchResultCard from "./SearchResultCard";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  name: string;
}

interface SearchInputProps {
  onClose: () => void;
}

const SearchInput = ({ onClose }: SearchInputProps) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false);
  const { data, error, isLoading } = useSWR(
    searchInput.length > 0
      ? `/search/movie?query=${searchInput}&language=en-US`
      : null,
    fetchMovies,
    {
      onSuccess: (data) => console.log("Search results:", data),
      onError: (err) => console.error("Search error:", err),
    }
  );

  useEffect(() => {
    if (error) {
      console.error("Error fetching search results:", error);
    }
  }, [error]);

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    router.push(`/search?query=${searchInput}`);
    setOpen(false);
  };
  console.log(data, "input");
  return (
    <>
      <div className=" relative flex gap-4 items-center h-auto">
        <GenreMovies />
        <div className="flex items-center">
          <Search
            size={16}
            strokeWidth={2}
            color="#71717A"
            className="absolute left-20 z-10"
          />
          <Input
            className="w-[240px] h-[40px] pl-10 pr-4"
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              if (e.target.value.length > 0) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
          />
        </div>
        {open && searchInput.length > 0 && (
          <div className="absolute z-50 top-12 w-[362px] rounded-md border bg-popover shadow-md animate-in fade-in-80 ">
            <div className=" p-2">
              {isLoading ? (
                <div className=" flex justify-center items-center">
                  <Loader2 className=" animate-spin" />
                </div>
              ) : data?.results && data.results.length > 0 ? (
                data.results
                  .slice(0, 5)
                  .map((movie: Movie) => (
                    <SearchResultCard key={movie.id} movie={movie} />
                  ))
              ) : (
                <div className="p-2 text-center">No results found</div>
              )}
            </div>
            <Button
              className=" pl-4 pb-4 text-zinc-800 cursor-pointer"
              onClick={handleSearch}
              variant="ghost"
            >
              See all results for "{searchInput}"
            </Button>
          </div>
        )}
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X />
        </Button>
      </div>
    </>
  );
};

export default SearchInput;
