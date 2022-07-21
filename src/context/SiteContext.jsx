import { createContext, useContext, useState } from "react";

export const Context = createContext();

function Provider({ children }) {
  //Kullanıcı Kontrolü
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setloginStatus] = useState([]);
  const [user, setUser] = useState(false);
  //Ürünler
  const [product_name, setProduct_name] = useState("");
  const [stock, setStock] = useState("");
  const [data, setData] = useState([]);

  const datatype = {
    username,
    setUsername,
    password,
    setPassword,
    loginStatus,
    setloginStatus,
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

export const useUsername = () => useContext(Context);
export const usePassword = () => useContext(Context);
export const useLoginStatus = () => useContext(Context);
export const useUser = () => useContext(Context);
export const useProduct_name = () => useContext(Context);
export const useStock = () => useContext(Context);
export const useData = () => useContext(Context);

export default Provider;
