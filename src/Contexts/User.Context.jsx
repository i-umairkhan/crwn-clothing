import { useState, createContext, useEffect } from "react";
import { onAuthStateChangeListner } from "../Utils/Firebase/Firebase.Utils.js";

export const userContext = createContext({
  currentUser: null,
  setCurrentuser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentuser] = useState(null);
  const value = { currentUser, setCurrentuser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      console.log(user);
    });
    return unsubscribe;
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
