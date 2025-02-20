import React from "react";
import { Movie } from "@/app/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

type MovieCardProps = {
  movie: Movie;
};
const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card className=" w-[158px] h-[309px] bg-pink-300">
      <CardHeader>
        <CardTitle>
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
            width={157}
            className=" rounded-t-lg overflow-hidden"
          />
          <div className=" flex flex-col gap-3  bg-zinc-200">
            <div className=" flex items-center">
              <p className=" text-yellow-800">
                <Star fill="yellow" strokeWidth={0} />
              </p>
              <p className=" text-zinc-500">{movie.vote_average} / 10</p>
            </div>
            <div>
              <p>{movie.title}</p>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default MovieCard;
