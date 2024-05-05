import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const HeadLine = () => {
  return (
    <>
      <div className=" absolute z-10 left-0 gap-9 text-center w-full flex items-center flex-col justify-center">
        <div className=" w-[300px]">
          <img
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            className=" w-full h-full"
            alt="logo"
          />
        </div>
        <h1 className=" text-[40px] font-xl text-white">
          Discover the best food & drinks in Palakkad
        </h1>
        <div className=" flex px-3 py-3 gap-4 rounded-md items-center justify-between bg-white">
          <div className=" flex items-center justify-center gap-4">
            <FaLocationDot size={20} className=" text-red-400" />
            <input
              type="text"
              className=" border-none outline-none w-[200px] h-8"
            />
            <FaSortDown size={20} className=" mb-2" />
          </div>
          <span className=" text-gray-400">|</span>
          <div className=" w-full flex gap-4 items-center justify-between">
            <CiSearch size={20} />
            <input
              type="text"
              placeholder="Search for restaurant, dishes, etc..."
              className=" border-none outline-none  h-8 w-[450px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadLine;
