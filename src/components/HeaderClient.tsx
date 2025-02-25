"use client";

import { Button } from "@/components/ui/button";
import { Search, Moon,Sun } from "lucide-react";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { motion } from "motion/react";
import { useTheme } from "next-themes"

const HeaderClient = () => {
  const [isClicked, setIsClicked] = useState(false);
  const {theme, setTheme } = useTheme();

  return isClicked ? (
    <SearchInput onClose={() => setIsClicked(false)} />
  ) : (
    <motion.div    key="headerClient"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }} className="flex flex-row items-center w-full h-[59px] justify-between ">
     
      <div className="flex gap-3">
        <Button variant="outline" size="icon" onClick={() => setIsClicked(true)}>
          <Search />
        </Button>
        {theme === "dark" ? (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("light")}
            
          >
            <Sun  />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("dark")}
           
          >
            <Moon />
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default HeaderClient;
