import react, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from './Login.module.css';
import AuthContext from "../../store/AuthContext";
import ErrorHandlerModal from '../ErrorHandler/ErrorHandlerModal';

const Login = () => {
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    

    const [isLoading, setIsLoading] = useState(false);

    const [isError, setIsError] = useState(false);

    const submitLoginHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        console.log(enteredEmail);
        console.log(enteredPassword);

        setIsLoading(true);

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoLdVRZ5gvoLjhuhyTfvesjujjiNmQx7w';

        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                    //secureToken
                }),
                headers:{
                    'Content-Type' : 'application/json',
                },
            }).then((res) => {
                setIsLoading(false);
                if(res.ok){
                    console.log(res);
                    console.log("success!")
                    return res.json();
                }
                else{
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed! Please try again.';
                        <ErrorHandlerModal data={errorMessage}/>
                    })
                }
            })
            .then((data) => {
                authCtx.login(data.idToken);
                history.replace('/');
            }).catch((err) => {
                console.log("error");
                let errorMessage = 'Authentication failed! Please try again.';
                <ErrorHandlerModal data={errorMessage}/>
            });
    };

    return(
        <div className={classes.login__container}>
            <div className={classes.login__form}>
                <h1>Authorization</h1>
                <form>
                    <div className={classes.login__form__wrap}>
                        <div className={classes.login__item}>
                            <h4>Email</h4>
                            <input name="email" placeholder="email@example.com" type="text" ref={emailInputRef} required></input>
                        </div>
                        <div className={classes.login__item}>
                            <h4>Password</h4>
                            <input name="password" placeholder="password" type="password" ref={passwordInputRef} required></input>
                        </div>
                        <button onClick={submitLoginHandler}>
                            Enter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;