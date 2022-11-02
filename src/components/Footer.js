import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="lg:container mx-auto w-8/12 lg:w-full pb-5 space-y-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white  font-apocalypse tracking-[12px] uppercase lg:text-[70px] text-[50px] lg:pt-6 pt-2">
            dokuji
          </h1>
          {/* lg:text-[130px] text-[80px] */}
          <div className="flex items-center space-x-2">
            <p className="text-gray-400 text-[12px] tracking-[10px] uppercase">
              sui
            </p>
            <p className="text-gray-400  text-[12px] tracking-[10px] uppercase">
              generis
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:pt-5 lg:items-center items-center justify-center space-y-2  pb-4 lg:pb-0">
          <div className="flex items-center justify-between space-x-4">
            <Link to="/email">
              <FiMail className="text-slate-400 h-6 w-6 md:h-7 md:w-7 cursor-pointer" />
            </Link>

            <Link to="/instagram" className="lg:pt-0">
              <BsInstagram className="text-slate-400 h-6 w-6 md:h-7 md:w-7 cursor-pointer" />
            </Link>
            <Link to="/twitter">
              <BsTwitter className="text-slate-400 h-6 w-6 md:h-7 md:w-7 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
