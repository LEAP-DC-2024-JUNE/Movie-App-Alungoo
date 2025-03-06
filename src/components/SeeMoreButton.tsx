"use client";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

type seeMoreButtonProps = {
  categoryType: string;
};
const SeeMoreButton = ({ categoryType }: seeMoreButtonProps) => {
  const router = useRouter();
  const handleSeeMore = () => {
    router.push(`/movies?type=${categoryType}`);
  };
  return (
    <div className=" flex gap-2">
      <Button
        variant="ghost"
        className=" hover:bg-inherit text-[13px] cursor-pointer"
        onClick={handleSeeMore}
      >
        See more <MoveRight />
      </Button>
    </div>
  );
};

export default SeeMoreButton;
