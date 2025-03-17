import React from "react";
import HeaderIPhone from "./HeaderIPhone";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
  return (
    <div className=" h-[59px] px-5 md:px-[80px]">
      <div className="md:hidden">
        <HeaderIPhone />
      </div>
      <div className="hidden md:block">
        <HeaderDesktop />
      </div>
    </div>
  );
};

export default Header;
