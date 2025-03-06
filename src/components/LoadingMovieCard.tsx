import { Skeleton } from "@/components/ui/skeleton"

export function LoadingMovieCard() {
  return (

    <div className=" flex flex-col justify-start gap-4 px-5">
      <Skeleton className="h-4 w-[100px]" />
      <div className=" flex gap-5">

      <Skeleton className="h-[309px] w-[185px] rounded-xl" />
      <Skeleton className="h-[309px] w-[185px] rounded-xl" />
      </div>
    </div>
  )
}
