import { Skeleton } from "@/components/ui/skeleton";

export function LoadingMovieCard() {
  return (
    <div className=" flex flex-col justify-start gap-4 px-5 md:px-[180px]">
      <Skeleton className="h-4 w-[100px]" />
      <div className=" flex gap-5">
        <Skeleton className="h-[300px] w-[158px] md:w-[230px] rounded-xl" />
        <Skeleton className="h-[300px] w-[158px] md:w-[230px] rounded-xl" />
        <Skeleton className="h-[300px] w-[158px] md:w-[230px] rounded-xl hidden md:block" />
        <Skeleton className="h-[300px] w-[158px] md:w-[230px] rounded-xl hidden md:block" />
        <Skeleton className="h-[300px] w-[158px] md:w-[230px] rounded-xl hidden md:block" />
      </div>
    </div>
  );
}
