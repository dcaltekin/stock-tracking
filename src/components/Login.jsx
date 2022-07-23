import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import {
  useUsername,
  usePassword,
  useUser,
  useLoginStatus,
} from "../context/SiteContext";

function Login() {
  const { username, setUsername } = useUsername();
  const { password, setPassword } = usePassword();
  const { loginStatus, setloginStatus } = useLoginStatus();
  const { user, setUser } = useUser();

  Axios.defaults.withCredentials = true;
  console.log(loginStatus);

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        toast.error("Kullancı adı veya şifre hatalı!");
      } else {
        setloginStatus(response.data[0].username);
        toast.success(response.data[0].username + " giriş yaptı.");
        setUser(true);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="flex items-center justify-center mt-32">
        <div className="px-12 py-12 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">
            Hesabınıza giriş yapınız
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="name">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Kullanıcı Adı"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Şifre</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Şifre"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="">
                {(user && (
                  <div>
                    <Navigate to="/profile" replace={true} />
                  </div>
                )) || (
                  <button
                    onClick={login}
                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 w-full"
                  >
                    Giriş Yap
                  </button>
                )}
                <Toaster></Toaster>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
