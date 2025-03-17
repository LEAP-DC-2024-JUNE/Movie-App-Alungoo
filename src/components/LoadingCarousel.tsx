import { Skeleton } from "@/components/ui/skeleton";

export function LoadingCarousel() {
  return (
    <div className="flex flex-col space-y-6 px-5">
      <Skeleton className="h-[345px] w-full " />
      <div className="space-y-2 flex justify-between md:hidden">
        <div className=" flex flex-col gap-2">
          <Skeleton className="h-3 w-[250px] rounded-xl" />
          <Skeleton className="h-5 w-[250px] rounded-xl" />
        </div>
        <div>
          <Skeleton className="h-3 w-[100px] rounded-xl" />
        </div>
      </div>
      <div className="space-y-2 md:hidden">
        <Skeleton className="h-5 w-full rounded-xl" />
        <Skeleton className="h-5 w-full rounded-xl" />
        <Skeleton className="h-5 w-full rounded-xl" />
      </div>
    </div>
  );
}
