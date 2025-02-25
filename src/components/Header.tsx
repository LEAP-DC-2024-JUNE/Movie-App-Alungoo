import React from "react"
import MovieZLight from "../../svg/MovieZLight";
import HeaderClient from "./HeaderClient";
import GenreMovies from "./GenreMovies";

const Header = () => {
  return (
    <div className="flex flex-row items-center w-full h-[59px] justify-between px-5">
     
      <div>
        <MovieZLight />
      </div>
      <div>
        <GenreMovies/>

        </div>

      <div>

      <HeaderClient/>
        </div>


      
      
    </div>
  )
};

export default Header;
