import {fetchMovies} from "@/utils/data-fetching"
import CarouselCard from "./CarouselCard"



export type NowPlayingMovie = {
  id: number
  title: string
  poster_path: string
  vote_average: number
  overview: string
}

const CarouselContainer = async () => {
  const nowPlaying:NowPlayingMovie[] = await fetchMovies("/movie/now_playing?language=en-US&page=1")

  return (
    <div className="">
                <CarouselCard currentMovies={nowPlaying} />
    </div>
  )
}

export default CarouselContainer

