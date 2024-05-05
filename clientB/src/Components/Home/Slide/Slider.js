import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Slider = (props) => {
  return (
    <>
      <Link to={`/${props.title}`} className=" flex items-center justify-between bg-white border hover:shadow-md border-gray-400 my-4 rounded-xl mr-4 px-[1.2rem] py-[1rem]">
        <div className=" flex flex-col text-gray-700">
            <h1 className=" text-2xl font-lg">{props.title}</h1>
            <h2>{props.places} places</h2>
        </div>
        <MdKeyboardArrowRight />
      </Link>
    </>
  );
};

export default Slider;
