import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import "../index.css";
import { useSiteContext } from "../context/SiteContext";

function Navbar() {
  let navigate = useNavigate();
  const { user, setUser } = useSiteContext();
  const [icon, setIcon] = useState(true);
  const handleIcon = () => {
    setIcon(!icon);
  };

  console.log(user);

  Axios.defaults.withCredentials = true;

  const deleteCookie = () => {
    Axios.post("/delete-cookie").then((response) => {
      console.log(response);
      setUser(false);
      navigate({
        pathname: "/home",
      });
    });
  };

  return (
    <div>
      <div className="w-full bg-[#D3D3D3] h-16 fixed left-0 top-0 shadow-xl z-50">
        <div className="h-full w-full flex flex-row justify-around items-center text-xl">
          <div
            className={
              icon
                ? "sm:hidden flex items-center justify-center"
                : "flex items-center justify-center sm:flex sm:flex-col sm:bg-[#DFE8CC] sm:absolute sm:justify-start sm:items-center sm:-right-full sm:h-screen sm:w-full sm:top-16 sm:z-50 left-0"
            }
          >
            <Link to="/profile">
              <button className="p-2 hover:cursor-pointer sm:mt-8 sm:ml-0 ml-2">
                Anasayfa
              </button>
            </Link>
            <Link to="/products">
              <button className="p-2 hover:cursor-pointer sm:mt-8 sm:ml-0 ml-2">
                Ürünler
              </button>
            </Link>
            <Link to="/profile">
              <button className="p-2 hover:cursor-pointer sm:mt-8 sm:ml-0 ml-2">
                Grafikler
              </button>
            </Link>
          </div>

          <div
            className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
            onClick={handleIcon}
          >
            <i className={icon ? "fa-solid fa-bars" : "fa-solid fa-xmark"} />
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <p className="text-xl ">{user.username}</p>

              <button onClick={deleteCookie}>
                <i className="fa fa-sign-out text-red-700 p-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
