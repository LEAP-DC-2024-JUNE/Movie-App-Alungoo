"use client";

import { useState } from "react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Badges } from "./Badges";
import { MovieGenre } from "@/utils/types";

type DropDownProps = {
  genres: MovieGenre[];
};

const GenreMoviesDropDown = ({ genres }: DropDownProps) => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const handleGenreClick = (id: number) => {
    const updatedGenres = selectedGenres.includes(id)
      ? selectedGenres.filter((genreId) => genreId !== id)
      : [...selectedGenres, id];

    setSelectedGenres(updatedGenres);
  };

  return (
    <div className="relative w-full max-w-[537px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="px-3 w-full">
            <span className="hidden md:flex items-center">
              <ChevronDown className="mr-1" /> Genre
            </span>
            <ChevronDown className="md:hidden" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className=" w-[345px] md:w-[450px]  p-2 md:p-4"
          sideOffset={6}
        >
          <DropdownMenuLabel className="text-xl md:text-2xl p-0">
            Genres
          </DropdownMenuLabel>
          <DropdownMenuLabel className="text-sm md:text-base font-normal p-0 pb-2">
            See lists of movies by genre
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="border-[1px] w-full" />
          <div className="flex flex-row pt-2 flex-wrap ">
            {genres?.map((movieGenre: MovieGenre) => (
              <DropdownMenuItem
                key={movieGenre.id}
                onSelect={(e) => e.preventDefault()}
              >
                <Badges
                  eachGenres={movieGenre}
                  selectedGenres={selectedGenres}
                  setSelectedGenres={setSelectedGenres}
                />
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default GenreMoviesDropDown;
