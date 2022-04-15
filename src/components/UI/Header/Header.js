import React, {useContext, useCallback} from "react";
import {Link, useHistory} from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import classes from './Header.module.css';

const Header = () => {

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLogged;

  const loginHandler = useCallback(() => history.push('/login'), [history]);
  const logoutHandler = () => {

  }

    return (
        <header className={classes.header}>
          <div className={classes.logo}>Flex</div>
            <nav>
              <ul>
                {!isLoggedIn && <li><a>About</a></li>}
                {!isLoggedIn && <li><a>Tariffs</a></li>}
                {!isLoggedIn && <li><a>Request</a></li>}
                {!isLoggedIn && <button onClick={loginHandler}>Login</button>}
                {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
              </ul>
            </nav>
          </header>
    );
}

export default Header;