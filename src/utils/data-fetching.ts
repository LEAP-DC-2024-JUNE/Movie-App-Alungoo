import axios from "axios";

type Movie = {
  poster_path: string;
  vote_average: number;
  title: string;
};

export default async function fetchPopularMovies(url: any) {
  const response = await axios.get(`https://api.themoviedb.org/3${url}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmZiMzUxYzgwODViNzQzYzFiMzNhNWRkNGQ4ZGJjOSIsIm5iZiI6MTczOTkzMjcyNy40MjksInN1YiI6IjY3YjU0NDM3NjBiMThhNTY5OGRmYTZmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ot7UWepDF0MvV2ttBkkHKNV1VikNGZ13eN4Z7dK_Ti8",
    },
  });
  const data = response.data.results;
  console.log(data);
  return data;
}
