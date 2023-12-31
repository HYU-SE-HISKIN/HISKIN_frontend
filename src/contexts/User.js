import React, { useState, createContext } from "react";

const UserContext = createContext({
  user: { id: null, password: null },
  dispatch: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const dispatch = ({ id, password }) => {
    setUser({ id, password });
  };
  const value = { user, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
