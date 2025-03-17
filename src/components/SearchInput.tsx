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
import { Movie } from "@/utils/types";

interface SearchInputProps {
  onClose: () => void;
}

const SearchInput = ({ onClose }: SearchInputProps) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false);
  const { data, error, isLoading } = useSWR(
    `/search/movie?query=${searchInput}&language=en-US`,
    fetchMovies
  );

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    router.push(`/search?query=${searchInput}`);
    setOpen(false);
  };

  const closeDropDown = () => {
    setOpen(false);
  };

  console.log(data, "input");
  return (
    <div className=" flex flex-row items-center w-full h-[59px] ">
      <div className="relative flex w-full gap-2 items-center">
        <GenreMovies />
        <div className="flex items-center flex-1 relative">
          <Search
            size={16}
            strokeWidth={2}
            color="#71717A"
            className="absolute left-3 z-10"
          />
          <Input
            className="w-full h-[36px] pl-10 pr-4"
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
          <div className="absolute z-50 top-10 left-0 right-0 w-full rounded-md border bg-popover shadow-md animate-in fade-in-80">
            <div className="px-3">
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <Loader2 className="animate-spin" />
                </div>
              ) : data?.results && data.results.length > 0 ? (
                data.results
                  .slice(0, 5)
                  .map((movie: Movie) => (
                    <SearchResultCard
                      key={movie.id}
                      movie={movie}
                      onSelect={closeDropDown}
                    />
                  ))
              ) : (
                <div className="p-2 text-center">No results found</div>
              )}
            </div>
            <Button
              className="pl-6 pt-0 text-zinc-800 cursor-pointer dark:text-white"
              onClick={handleSearch}
              variant="ghost"
            >
              See all results for "{searchInput}"
            </Button>
          </div>
        )}
        <Button
          className="text-zinc-800 cursor-pointer dark:text-white md:hidden"
          variant="ghost"
          size="icon"
          onClick={onClose}
        >
          <X />
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
