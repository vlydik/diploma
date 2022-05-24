import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import classes from './Header.module.css';

const Header = () => {

  const history = useHistory();
  const authCtx = useContext(AuthContext);
  

  const isLoggedIn = authCtx.isLogged;
  
  const loginHandler = () => {
    if(authCtx.isLogged){
      history.push('/profile');
      }
    else{
      history.push('/login');
    }
    }

  const logoutHandler = () => {
    authCtx.logout();
  }
  const handleClick = (id) => {
    if(id == null){
      return;
    }else{
      id.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }
  }


    return (
        <header className={classes.header}>
          <div className={classes.logo} onClick={() => {
                  history.push('/');
                  const section = document.querySelector( '#main' );
                  handleClick(section);
                }}>Flex</div>
            <nav>
              <ul>
                {!isLoggedIn && <li><a onClick={() => {
                  const section = document.querySelector( '#about' );
                  handleClick(section);
                }}>About</a></li>}
                {!isLoggedIn && <li><a onClick={() => {
                  const section = document.querySelector( '#plans' );
                  handleClick(section);
                }}>Tariffs</a></li>}
                {!isLoggedIn && <li><a onClick={() => {
                  const section = document.querySelector( '#request' );
                  handleClick(section);
                }}>Request</a></li>}
                <button onClick={loginHandler}>My profile</button>
                {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
              </ul>
            </nav>
          </header>
    );
}

export default Header;