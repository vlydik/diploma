import React, { useState, useCallback } from "react";

const AuthContext = React.createContext({
  token: "",
  isLogged: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    console.log("setting token...");
    localStorage.setItem("token", token);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
  }, []);

  const contextValue = {
    token: token,
    isLogged: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
