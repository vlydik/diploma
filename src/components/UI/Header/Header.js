import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
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
    authCtx.logout();
  }


    return (
        <header className={classes.header}>
          <div className={classes.logo} onClick={() => {
                  history.push('/');
                  const section = document.querySelector( '#main' );
                  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                }}>Flex</div>
            <nav>
              <ul>
                {!isLoggedIn && <li><a onClick={() => {
                  const section = document.querySelector( '#about' );
                  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                }}>About</a></li>}
                {!isLoggedIn && <li><a onClick={() => {
                  const section = document.querySelector( '#plans' );
                  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                }}>Tariffs</a></li>}
                {!isLoggedIn && <li><a onClick={() => {
                  const section = document.querySelector( '#request' );
                  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                }}>Request</a></li>}
                {!isLoggedIn && <button onClick={loginHandler}>Login</button>}
                {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
              </ul>
            </nav>
          </header>
    );
}

export default Header;