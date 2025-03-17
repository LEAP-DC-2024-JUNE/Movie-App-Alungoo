import React from "react";
import MovieZ from "../../svg/MovieZDark";
import Mail from "../../svg/Mail";
import Phone from "../../svg/Phone";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className=" mt-auto bg-indigo-700 w-full flex flex-col gap-6 px-5 py-6 text-white">
      <div className=" flex flex-col gap-2 ">
        <MovieZ />
        <p>{`© ${currentYear} Movie Z. All Rights Reserved`}</p>
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
        <div className=" flex flex-col gap-4 pr-6 cursor-pointer">
          <Link href="/">Follow us</Link>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
