import React from "react"
import { Button } from "./ui/button";
import { X, Search, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import GenreMovies from "./GenreMovies";


interface SearchInputProps {
  onClose: () => void;
}
const SearchInput = ({onClose}:SearchInputProps) => {

  return (
    <motion.div    key="search"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}>

        
    

      <div className=" flex gap-4 items-center px-5 h-[58px]">
        <div className=" flex items-center ">
          <Search size={16} strokeWidth={2} color="#71717A"/>
          <input className=" w-[240px] h-[20px] py-[12px] px-[12px]" type=" text" placeholder="Search ... "/>
        </div>
        <Button variant="outline" size="icon" onClick={onClose}>
          <X/>
        </Button>
      </div>
      


    </motion.div>
  )
};

export default SearchInput;