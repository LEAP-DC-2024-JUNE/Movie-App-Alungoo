
import { fetchGenreMovies } from "@/utils/data-fetching";
import React from "react"
import GenreMoviesDropDown from "./GenreMoviesDropDown";
 

export type MovieGenre = {
  id:number;
  name:string;

}
const GenreMovies = async () => {
  const moviesByGenre:MovieGenre[] = await fetchGenreMovies("/genre/movie/list?language=en")
  console.log(moviesByGenre)
  return (
    <div className=""><GenreMoviesDropDown genres={moviesByGenre}/></div>
  )
};

export default GenreMovies;
