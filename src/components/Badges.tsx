import { Badge } from "@/components/ui/badge"
import { MovieGenre } from "./GenreMovies"
import { ChevronRight } from "lucide-react"
 type GenresProps = {
  eachGenres: MovieGenre
 }
export function Badges({eachGenres}:GenresProps) {
  return (
    <div className="flex flex-wrap gap-2">
<Badge variant="outline" className=" font-normal flex items-center gap-1 w-[100px] gap-x-2">{eachGenres.name} 
  <ChevronRight className=""
  size={13}/>
  </Badge>
    </div>
  ) 
}