"use client"
import {fetchGenreMovies} from "@/utils/data-fetching";
import React from "react"
import GenreMoviesDropDown from "./GenreMoviesDropDown";
import useSWR from "swr";
export type MovieGenre = {
  id:number;
  name:string;

}
const GenreMovies = () => {
  const {data, error, isLoading} = useSWR("/genre/movie/list?language=en", fetchGenreMovies )

  if (isLoading) return <div>Loading genres...</div>;
  if (error) return <div>Failed to load genres</div>;
  console.log(data)
  return (
    <div className=""><GenreMoviesDropDown genres={data}/></div>
  )
};

export default GenreMovies;
