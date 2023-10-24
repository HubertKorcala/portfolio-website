import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer z-20 border border-t-[#33353F] border-l-trasparent border-r-transparent border-l-transparent">
      <div className="flex justify-between py-8 px-2 sm:p-12">
        <div className="relative w-48 h-8 sm:w-80 sm:h-12">
          <Image
            className=""
            sizes="(max-width: 500px) 10px,      
                   10px"
            src={"/images/logo.svg"}
            alt="logo"
            fill
          />
        </div>{" "}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
