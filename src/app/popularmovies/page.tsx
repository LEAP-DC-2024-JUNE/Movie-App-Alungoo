"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PopularMovie() {
  const [popularMovie, setPopularMovie] = useState([]);

  const getPopularMovie = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmZiMzUxYzgwODViNzQzYzFiMzNhNWRkNGQ4ZGJjOSIsIm5iZiI6MTczOTkzMjcyNy40MjksInN1YiI6IjY3YjU0NDM3NjBiMThhNTY5OGRmYTZmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ot7UWepDF0MvV2ttBkkHKNV1VikNGZ13eN4Z7dK_Ti8",
        },
      }
    );
    const data = response.data;
    setPopularMovie(data.results);
  };

  useEffect(() => {
    getPopularMovie();
  }, []);

  return (
    <div>
      {popularMovie?.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
