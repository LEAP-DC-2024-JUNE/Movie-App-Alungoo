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
};

const YoutubeDialog = ({ trailerKey }: YoutubeTrailerClientProps) => {
  const opts = {
    height: "412",
    width: "100%",
    // playerVars: {
    //   autoplay: 1,
    // },
  };
  console.log(trailerKey);
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="dark:bg-zinc-800 dark:text-white">
            <Play className="mr-2 h-4 w-4" /> Watch Trailer
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-screen-md p-0 bg-[#080808] h-screen max-h-screen flex flex-col justify-center">
          <div className="relative w-full">
            <DialogClose className="absolute right-2 top-2 z-10 rounded-full hover:bg-black/40 hover:text-white p-2">
              <X className="h-4 w-4 text-white" />
            </DialogClose>

            <DialogHeader className="p-4">
              <DialogTitle></DialogTitle>
            </DialogHeader>
            <div className="w-full px-4 pb-4">
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
