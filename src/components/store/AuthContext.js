import React, {useState, useEffect, useCallback} from "react";

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLogged: false,
    login: (token) => {},
    logout: () => {},
});
    
export default AuthContext;