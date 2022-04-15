import react, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from './Login.module.css';
import AuthContext from "../../store/AuthContext";

const Login = () => {
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const submitLoginHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        console.log(enteredEmail);
        console.log(enteredPassword);
    }

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