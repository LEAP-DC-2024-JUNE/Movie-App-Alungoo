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
  profile_path: string;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

export interface MovieGenre {
  id: number;
  name: string;
}
