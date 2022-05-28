import React, { useState, useCallback } from "react";

const AdminAuthContext = React.createContext({
  token: "",
  isLogged: false,
  login: (token) => {},
  logout: () => {},
});

export const AdminAuthContextProvider = (props) => {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken);
  const userIsLoggedIn = !!token;

  const adminLoginHandler = (token) => {
    setToken(token);
    console.log("setting token...");
    localStorage.setItem("token", token);
  };

  const adminLogoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
  }, []);

  const contextValue = {
    token: token,
    isLogged: userIsLoggedIn,
    login: adminLoginHandler,
    logout: adminLogoutHandler,
  };

  return (
    <AdminAuthContext.Provider value={contextValue}>
      {props.children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthContext;
