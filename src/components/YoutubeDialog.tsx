"use client";
import { Play, X } from "lucide-react";
import React from "react";
import YouTube from "react-youtube";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

type YoutubeTrailerClientProps = {
  trailerKey: Array<{ key: string }>;
  isDetailPage?: boolean;
};

const YoutubeDialog = ({
  trailerKey,
  isDetailPage = false,
}: YoutubeTrailerClientProps) => {
  const opts = {
    height: "520",
    width: "100%",
    // playerVars: {
    //   autoplay: 1,
    // },
  };
  const buttonClass = isDetailPage
    ? "bg-transparent text-white md:hover:bg-transparent"
    : "dark:bg-zinc-800 dark:text-white md:bg-zinc-100 md:text-black md:hover:bg-transparent md:hover:bg-zinc-100";
  const playIconClass = isDetailPage
    ? "flex items-center justify-center bg-white text-black rounded-full p-1 mr-2 h-10 w-10"
    : "mr-2 h-4 w-4";
  console.log(trailerKey);
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <p
            className={`${buttonClass} flex items-center justify-center p-4 py-2 rounded-md md:bg-transparent bg-black text-white`}
          >
            {isDetailPage ? (
              <div className={`${playIconClass} mr-2`}>
                <Play size={14} strokeWidth={2} />
              </div>
            ) : (
              <Play className={`${playIconClass} mr-2`} />
            )}
            Watch Trailer
          </p>
        </DialogTrigger>
        <DialogContent className="w-full md:border-none max-w-screen-md p-0 bg-[#080808] md:bg-transparent h-screen max-h-screen flex flex-col justify-center md:max-w-screen-lg">
          <div className="relative w-full">
            <DialogClose className="absolute right-2 top-2 z-10 rounded-full hover:bg-black/40 hover:text-white p-2">
              <X className="h-4 w-4 text-white" />
            </DialogClose>

            <DialogHeader className="p-4">
              <DialogTitle></DialogTitle>
            </DialogHeader>
            <div className="w-full px-4 pb-4 ">
              {trailerKey ? (
                <div className=" ">
                  <YouTube
                    videoId={trailerKey[0]?.key}
                    opts={opts}
                    className="w-full"
                  />
                </div>
              ) : (
                <div className="text-white py-8 text-center">
                  No trailer available
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default YoutubeDialog;
