import { IoLocationSharp } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavbarLg = () => {
  return (
    <div className=" mt-2 flex w-full items-center">
      <div className=" m-0 h-6 max-w-[100px] flex items-center">
        <img
          className=""
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
        />
      </div>

      <div className=" bg-white shadow-lg py-2 px-4 flex items-center rounded-md ml-4 mr-12 w-[60%]">
        <div className="flex items-center flex-2 gap-12">
          <div className=" flex items-center gap-4">
            <CiLocationOn className=" text-red-400" size={15} />
            <div>Bangluru</div>
          </div>
          <Link>
            <FaCaretDown />
          </Link>
        </div>
        <div className=" h-[20px] border w-[2px] bg-black mx-4 "></div>
        <div className=" flex flex-1 items-center gap-4 w-[50%] ml-4">
          <Link>
            <FaSearch />
          </Link>
          <input
            className=" w-full"
            type="text"
            placeholder="Search for tthe restaurant, cuisine or a dish"
          />
        </div>
      </div>
      {/* Login signup */}
      <div className=" flex items-center justify-center gap-4 text-gray-600 font-thin">
        <Link to="/login">Login</Link>
        <Link to="/signup">SIgn Up</Link>
      </div>
    </div>
  );
};

const NavSm = () => {
  return (
    <div className=" bg-white">
      <nav className=" flex justify-between items-center py-2 px-4 shadow-md bg-white fixed w-full z-10">
        <div className=" w-24">
          <img
            className=" w-full h-full"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
          />
        </div>
        <div className=" flex gap-4 items-center">
          <button className=" bg-red-500 rounded-3xl text-white px-2 py-1">
            Use App
          </button>
          <div className=" rounded-full p-2 border-2 border-gray-500 text-red-500">
            <FaUserLarge />
          </div>
        </div>
      </nav>
      <section>
        <div>
          <IoLocationSharp />
          <h1>Kochi</h1>
        </div>
        <div>
          <CiSearch />
        </div>
      </section>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <div className=" hidden lg:flex">
        <NavbarLg />
      </div>

      <div className="lg:hidden">
        <NavSm />
      </div>
    </>
  );
};

export default Navbar;
