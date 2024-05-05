import React from "react";

const Card = (props) => {
  return (
    <div className="">
      <div className=" lg:w-[500px] mt-10 border border-spacing-2 rounded-xl border-gray-700">
        <div className=" w-full h-[150px]">
          <img
            className=" w-full object-cover h-[150px] rounded-tl-xl rounded-tr-xl"
            src={props.image}
            alt=""
          />
        </div>
        <div className=" p-4">
          <h1 className=" text-xl">{props.title}</h1>
          <h2 className=" tex-md">
            {props.sub}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
