import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

function Provider({ children }) {
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  
  //Kullanıcı Kontrolü
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setloginStatus] = useState(null);
  const [user, setUser] = useState(false);
  //Ürünler
  const [product_name, setProduct_name] = useState("");
  const [stock, setStock] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=>{
    setTimeout(() => {
      setIsAuthLoading(false)
    }, 3000);
  },[])

  if (isAuthLoading) {
    return <div>Loading...</div>;
  }

  const datatype = {
    user,
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
