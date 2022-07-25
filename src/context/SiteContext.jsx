import { createContext, useContext, useEffect, useState } from "react";

import Axios from "axios";

export const Context = createContext();

function Provider({ children }) {
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  //Kullanıcı Kontrolü
  const [user, setUser] = useState(null);
  //Ürünler
  const [product_name, setProduct_name] = useState("");
  const [stock, setStock] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUser(response.data.user);
      } else {
        setUser(null);
      }
      setIsAuthLoading(false);
    });
  }, []);

  if (isAuthLoading) {
    return <div>Loading...</div>;
  }

  const datatype = {
    user,
    setUser,
    product_name,
    setProduct_name,
    stock,
    setStock,
    data,
    setData,
  };
  return <Context.Provider value={datatype}>{children}</Context.Provider>;
}

export const useSiteContext = () => useContext(Context);

export default Provider;
