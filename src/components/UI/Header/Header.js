import React, {useContext, useCallback, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import classes from './Header.module.css';

const Header = () => {

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLogged;
  
  const loginHandler = () => {
    history.push('/login');
  }
  const logoutHandler = () => {

  }
  const mainPageHandler = () => {
    history.push('/')
  }

    return (
        <header className={classes.header}>
          <div className={classes.logo} onClick={mainPageHandler}>Flex</div>
            <nav>
              <ul>
                {!isLoggedIn && <li><a onClick={mainPageHandler}>About</a></li>}
                {!isLoggedIn && <li><a onClick={mainPageHandler}>Tariffs</a></li>}
                {!isLoggedIn && <li><a onClick={mainPageHandler}>Request</a></li>}
                {!isLoggedIn && <button onClick={loginHandler}>Login</button>}
                {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
              </ul>
            </nav>
          </header>
    );
}

export default Header;