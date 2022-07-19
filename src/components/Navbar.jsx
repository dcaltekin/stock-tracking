import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import { useLoginStatus } from "../context/SiteContext";

function Navbar() {
  const { loginStatus, setLoginStatus } = useLoginStatus();
  return (
    <div>
      <div className="w-full bg-[#D3D3D3] h-24 fixed left-0 top-0 shadow-xl z-50">
        <div className="h-full w-full flex flex-row justify-around items-center text-3xl">
          <div className="hover:cursor-pointer">
            <a href="home">
              <i className="fa-solid fa-blog fa-xl"></i>
            </a>
          </div>

          <div className="sm:hidden md:block lg:block xl:block">
            <div className="flex justify-center items-center">
              <p className="text-2xl">Hoş geldin, {loginStatus}</p>
              <a href="home">
                <i className="fa fa-sign-out text-red-700 p-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
