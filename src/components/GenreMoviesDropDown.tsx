"use client";

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
import { MovieGenre } from "./GenreMovies";

type DropDownProps = {
  genres: MovieGenre[];
};

const GenreMoviesDropDown = ({ genres }: DropDownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
       <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[335px] h-[513px] px-5">
        <DropdownMenuLabel className=" text-[24px]">Genres</DropdownMenuLabel>
        <DropdownMenuLabel className=" text-[16px] font-normal">See lists of movies by genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {genres.map((movieGenre) => (
            <DropdownMenuItem key={movieGenre.id} className="cursor-pointer">
              <Badges eachGenres={movieGenre} />
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreMoviesDropDown;
