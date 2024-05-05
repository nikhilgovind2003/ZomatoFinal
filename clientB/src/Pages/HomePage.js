import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import Card from "../Components/Home/Card/Card";
import { FaCaretRight } from "react-icons/fa";
import Slider from "../Components/Home/Slide/Slider";
const HomePage = () => {
  return (
    <div>
      {/* Main */}
      <section>
        <div className=" w-full  h-[60vh] relative">
          <img
            className=" w-full h-full object-cover"
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
            alt="bg"
          />
        </div>
        <section className="absolute lg:top-24 top-36 text-white w-full">
          <div className=" text-center flex flex-col lg:gap-12 items-center my-2 justify-center text-white">
            <div className=" w-44 lg:w-64">
              <img
                className=" w-full h-full"
                src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                alt="logo"
              />
            </div>
            <p className=" lg:text-4xl mb-5">
              Discover the best food & drinks in Kochi
            </p>
          </div>

          <div className=" lg:container lg:mx-auto lg:px-44">
            <div className=" text-black container h-14 mx-auto lg:w-[800px] lg:bg-white lg:rounded-lg lg:flex lg:items-center">
              <Link className=" h-10 flex lg:w-96 justify-between bg-white px-2 lg:rounded-r-none rounded-lg items-center w-full">
                <div className="flex items-center gap-2">
                  <IoLocationSharp className=" text-red-500" size={25} />
                  <select
                    name="Places"
                    id="places"
                    className=" border-none outline-none"
                  >
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Palakkad">Palakkad</option>
                    <option value="Trivandram">Trivandram</option>
                    <option value="Calicut">Calicut</option>
                  </select>
                </div>
              </Link>
              <div className=" w-1 h-2 flex items-center justify-center text-gray-500">
                |
              </div>
              <Link className=" bg-white h-10 flex gap-4 lg:rounded-l-none  justify-between px-4 rounded-lg items-center w-full">
                <CiSearch size={25} className=" text-gray-500" />
                <input type="text" className=" w-full" />
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* Home */}
      <section className=" lg:ontainer lg:mx-auto lg:px-44">
        {/* card */}
        <section className="flex items-center justify-center gap-4 mb-10">
          <Link to="/">
            <Card
              image="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              title="Order Online"
              sub="Stay home and order to your doorstep"
            />
          </Link>
          <Link to="/">
            <Card
              image="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              title="Dining"
              sub="View the cities favouriet dining venue"
            />
          </Link>
        </section>

        {/* Collections */}
        <section className=" px-20">
          <h1 className=" text-2xl text-gray-800 lg:text-3xl mb-2">
            Collections
          </h1>
          <div className=" flex  items-center justify-between mb-3">
            <p>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Kochi, based on trends
            </p>

            <div className=" text-red-500 lg:flex lg:items-center lg:gap-2 hidden">
              <Link to="/collections">All collections in Kochi</Link>
              <FaCaretRight />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
