import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import { useLoginStatus } from "../context/SiteContext";

function Navbar() {
  const { loginStatus, setLoginStatus } = useLoginStatus();
  const [icon, setIcon] = useState(true);
  const handleIcon = () => {
    setIcon(!icon);
  };
  return (
    <div>
      <div className="w-full bg-[#D3D3D3] h-24 fixed left-0 top-0 shadow-xl z-50">
        <div className="h-full w-full flex flex-row justify-around items-center text-3xl">
          <div
            className={
              icon
                ? "sm:hidden flex items-center justify-center"
                : "flex items-center justify-center sm:flex sm:flex-col sm:bg-[#DFE8CC] sm:absolute sm:justify-start sm:items-center sm:-right-full sm:h-screen sm:w-full sm:top-24 sm:z-50 left-0"
            }
          >
            <a href="#">
              <button className="p-2 hover:cursor-pointer sm:mt-8 sm:ml-0 ml-2">
                Anasayfa
              </button>
            </a>
            <a href="#">
              <button className="p-2 hover:cursor-pointer sm:mt-8 sm:ml-0 ml-2">
                Ürünler
              </button>
            </a>
            <a href="#">
              <button className="p-2 hover:cursor-pointer sm:mt-8 sm:ml-0 ml-2">
                Grafikler
              </button>
            </a>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <p className="text-2xl ">{loginStatus}</p>
              <a href="home">
                <i className="fa fa-sign-out text-red-700 p-2"></i>
              </a>
            </div>
          </div>
          <div
            className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
            onClick={handleIcon}
          >
            <i className={icon ? "fa-solid fa-bars" : "fa-solid fa-xmark"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
