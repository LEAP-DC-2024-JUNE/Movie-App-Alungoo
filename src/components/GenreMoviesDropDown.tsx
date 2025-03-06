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
import { MovieGenre } from "@/utils/types";

type DropDownProps = {
  genres: MovieGenre[];
  withButton: boolean;
};

const GenreMoviesDropDown = ({ genres, withButton }: DropDownProps) => {
  return (
    <div>
      <DropdownMenu>
        {!withButton && (
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
        )}
        <DropdownMenuContent className="w-[372px] h-auto px-5 mx-5 ">
          <DropdownMenuLabel className=" text-[24px]">Genres</DropdownMenuLabel>
          <DropdownMenuLabel className=" text-[16px] font-normal">
            See lists of movies by genre
          </DropdownMenuLabel>
          <DropdownMenuSeparator className=" border-[1px]" />
          <div className="flex flex-row gap-1 flex-wrap py-2 ">
            {genres.map((movieGenre) => (
              <DropdownMenuItem key={movieGenre.id} className="">
                <Badges eachGenres={movieGenre} />
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default GenreMoviesDropDown;
