import { fetchMovies } from "@/utils/data-fetching";
import YoutubeDialog from "./YoutubeDialog";

type YoutubeProps = {
  movieId: number;
};

const YoutubeTrailer = async ({ movieId }: YoutubeProps) => {
  const trailerData = await fetchMovies(
    `/movie/${movieId}/videos?language=en-US`
  );

  return <YoutubeDialog trailerKey={trailerData} />;
};

export default YoutubeTrailer;
