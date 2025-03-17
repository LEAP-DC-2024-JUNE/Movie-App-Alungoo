"use client";
import MovieZLight from "../../svg/MovieZLight";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { motion } from "motion/react";
import Link from "next/link";
import ThemeToggles from "./ThemeToggles";

const HeaderIPhone = () => {
  const [isClicked, setIsClicked] = useState(false);

  return isClicked ? (
    <SearchInput onClose={() => setIsClicked(false)} />
  ) : (
    <motion.div
      key="HeaderIPhone"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-row items-center w-full h-[59px] justify-between md:justify-evenly"
    >
      <div className=" flex justify-between items-center w-full">
        <Link href="/">
          <MovieZLight />
        </Link>

        <div className=" flex gap-3 ">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsClicked(true)}
          >
            <Search />
          </Button>
          <ThemeToggles />
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderIPhone;
