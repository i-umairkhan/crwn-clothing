import { useState, createContext } from "react";

export const userContext = createContext({
  currentUser: null,
  setCurrentuser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentuser] = useState(null);
  const value = { currentUser, setCurrentuser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
