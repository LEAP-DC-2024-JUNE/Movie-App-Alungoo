import { Badge } from "@/components/ui/badge";
import { ChevronRight, X } from "lucide-react";
import { MovieGenre } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
type GenresProps = {
  eachGenres: MovieGenre;
};
export function Badges({ eachGenres }: GenresProps) {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const handleBadgeClick = () => {
    setClicked(!clicked);
    router.push(`/genre/?genre=${eachGenres.id}`);
  };
  console.log(eachGenres.id, " eahchGenreID");
  return (
    <Badge
      onClick={handleBadgeClick}
      variant="outline"
      className=" rounded-full flex items-center text-[12px] gap-4 cursor-pointer hover:bg-black hover:text-white "
    >
      {eachGenres.name}
      {clicked ? <X size={13} /> : <ChevronRight size={13} />}
    </Badge>
  );
}
