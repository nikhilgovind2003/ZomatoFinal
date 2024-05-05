import { IoLocationSharp } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const NavbarLg = () => {
  return (
    <div>
      
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
