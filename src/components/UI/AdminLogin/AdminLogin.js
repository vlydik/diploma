import React from "react";

import classes from "./AdminLogin.module.css";

import { useHistory } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import AdminAuthContext from "../../store/AdminAuthContext";
import ErrorHandlerModal from "../Helpers/ErrorHandler/ErrorHandlerModal";

const AdminLogin = () => {



    const history = useHistory();
  const loginInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AdminAuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const errorHandler = () => {
    setIsError(null);
  };

  const submitLoginHandler = (event) => {
    event.preventDefault();
    const enteredLogin = loginInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredLogin);
    console.log(enteredPassword);

    setIsLoading(true);

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoLdVRZ5gvoLjhuhyTfvesjujjiNmQx7w";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        login: enteredLogin,
        password: enteredPassword,
        returnSecureToken: true,
        //secureToken
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          console.log(res);
          console.log("success!");
          return res.json();
        } else {
          return res.json().then((data) => {
            setIsError(true);
            setIsLoading(false);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace("/");
      })
      .catch((err) => {
        let errorMessage = "Authentication failed! Please try again.";
        console.log(errorMessage);
        setIsError(true);
        setIsLoading(false);
      });
  };

    return(
        <React.Fragment>
      {isError && (
        <ErrorHandlerModal
          data="Authentication failed! Please try again!"
          onConfirm={errorHandler}
        />
      )}
      <div className={classes.login__container}>
        <div className={classes.login__form}>
          <h1>Admin Login</h1>
          <form>
            <div className={classes.login__form__wrap}>
              <div className={classes.login__item}>
                <h4>Login</h4>
                <input
                  name="login"
                  type="text"
                  ref={loginInputRef}
                  required
                ></input>
              </div>
              <div className={classes.login__item}>
                <h4>Password</h4>
                <input
                  name="password"
                  type="password"
                  ref={passwordInputRef}
                  required
                ></input>
              </div>
              {isLoading && <p>Loading...</p>}
              <button onClick={submitLoginHandler}>Enter</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
    )
}

export default AdminLogin;