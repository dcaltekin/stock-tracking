import React from "react";

function Footer() {
  return (
    <div>
      <footer className=" text-center text-white bg-gray-600 w-full bottom-0 mt-32 sm:mt-48 ">
        <div className="flex justify-center items-center p-4">
          <img className="w-16 h-16" src="/images/logo.png" alt="" />
        </div>

        <div className="flex justify-center items-center p-2 pb-4">
          © 2022 Copyright:
          <a className="text-white" href="#">
            Nox Yazılım
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
