import { createContext, useContext, useState } from "react";

export const Context = createContext();

function Provider({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setloginStatus] = useState([]);

  const [user, setUser] = useState(false);

  const data = {
    username,
    setUsername,
    password,
    setPassword,
    loginStatus,
    setloginStatus,
    user,
    setUser,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useUsername = () => useContext(Context);
export const usePassword = () => useContext(Context);
export const useLoginStatus = () => useContext(Context);
export const useUser = () => useContext(Context);

export default Provider;
