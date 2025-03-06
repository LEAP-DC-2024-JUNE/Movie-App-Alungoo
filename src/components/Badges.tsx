import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { MovieGenre } from "@/utils/types";
type GenresProps = {
  eachGenres: MovieGenre;
};
export function Badges({ eachGenres }: GenresProps) {
  return (
    <Badge
      aria-multiselectable
      variant="outline"
      className=" rounded-full flex items-center text-[12px] gap-4 cursor-pointer hover:bg-black hover:text-white "
    >
      {eachGenres.name}
      <ChevronRight className="" size={13} />
    </Badge>
  );
}
