import MovieLight from "@/app/svg/MovieZLight";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div
      className=" flex 
   flex-row items-center w-[380px] h-[59px] mt-[50px] justify-between px-4"
    >
      <div>
        <MovieLight />
      </div>
      <div className=" flex gap-3">
        <Button variant="outline" size="icon">
          <Search />
        </Button>
        <Button variant="outline" size="icon">
          <Moon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
