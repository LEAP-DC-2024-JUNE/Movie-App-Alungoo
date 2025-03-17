import { Badge } from "@/components/ui/badge";
import { ChevronRight, X } from "lucide-react";
import { MovieGenre } from "@/utils/types";
import { useRouter, useSearchParams } from "next/navigation";

type GenresProps = {
  eachGenres: MovieGenre;
  setSelectedGenres: (genres: number[]) => void;
  selectedGenres: number[];
};

export function Badges({
  eachGenres,
  setSelectedGenres,
  selectedGenres,
}: GenresProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const genreParam = searchParams.get("genre");
  const selectedIds = genreParam ? genreParam.split(",").map(Number) : [];

  const isSelected = selectedIds.includes(eachGenres.id);

  const handleBadgeClick = () => {
    const updatedGenres = isSelected
      ? selectedIds.filter((id) => id !== eachGenres.id)
      : [...selectedIds, eachGenres.id];

    setSelectedGenres(updatedGenres);
    router.push(
      updatedGenres.length
        ? `/genre?genre=${updatedGenres.join(",")}`
        : "/genre"
    );
  };

  return (
    <Badge
      variant="outline"
      onClick={handleBadgeClick}
      className={`rounded-full flex items-center text-[12px] gap-3 cursor-pointer hover:bg-white hover:text-black ${
        isSelected ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {eachGenres.name}{" "}
      {isSelected ? <X size={13} /> : <ChevronRight size={13} />}
    </Badge>
  );
}
