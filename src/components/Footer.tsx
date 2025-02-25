import React from "react";
import MovieZ from "../../svg/MovieZDark";
import Mail from "../../svg/Mail";
import Phone from "../../svg/Phone";

const Footer = () => {
  return (
    <div className=" mt-[32px] bg-indigo-700 w-full flex flex-col gap-6 px-5 py-6 text-white">
      <div className=" flex flex-col gap-2 ">
        <MovieZ />
        <p>© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className=" flex flex-row justify-between">
        <div className=" flex flex-col gap-4">
          <p>Contact Information</p>
          <div className=" flex flex-row items-center gap-4">
            <Mail />
            <div className=" flex flex-col">
              <strong>Email:</strong>
              <p>support@movieZ.com</p>
            </div>
          </div>
          <div className=" flex flex-row items-center gap-4">
            <Phone />
            <div className=" flex flex-col">
              <strong>Phone:</strong>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-4 pr-6">
          <p>Follow us</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
