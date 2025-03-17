"use client";
import React, { useState } from "react";
import MovieZLight from "../../svg/MovieZLight";
import SearchInput from "./SearchInput";
import Link from "next/link";
import ThemeToggles from "./ThemeToggles";

const DesktopHeader = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/">
        <MovieZLight />
      </Link>

      <div className="flex-grow mx-8 max-w-md">
        <SearchInput onClose={() => setIsClicked(false)} />
      </div>

      <ThemeToggles />
    </div>
  );
};

export default DesktopHeader;
