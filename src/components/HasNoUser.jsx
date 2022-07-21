import React from "react";
import { Link } from "react-router-dom";
function HasNoUser() {
  return (
    <div>
      <Link to="/">
        <div className="flex justify-center items-center">
          <button className="bg-gray-200 mt-8 text-3xl p-8">
            Giriş Yetkiniz Yoktur! Anasayfaya dönünüz.
          </button>
        </div>
      </Link>
    </div>
  );
}

export default HasNoUser;
