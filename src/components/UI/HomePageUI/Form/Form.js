import { useState } from "react";
import classes from "./Form.module.css"
import useInput from "../../../hooks/use-input-form";

const Form = (props) => {

    const [enteredPlan, setEnteredPlan] = useState();
    const [enteredPlanIsValid, setEnteredPlanIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const{
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput((value) => value.trim().includes("@"));

    const{
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput((value) => value.trim() !== '');

    const{
        value: enteredPhone,
        isValid: enteredPhoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhoneInput
    } = useInput((value) => !isNaN(value) & value.trim() !== '');

    const{
        value: enteredAddress,
        isValid: enteredAddressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddressInput
    } = useInput((value) => value.trim() !== '');



    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(enteredEmailIsValid 
            && enteredNameIsValid 
            && enteredPhoneIsValid 
            && enteredAddressIsValid 
            && enteredPlanIsValid 
            && formIsValid){
                setFormIsValid(true);
                console.log(enteredName);
                console.log(enteredEmail);
                console.log(enteredAddress);
                console.log(enteredPhone);
                console.log(enteredPlan);
                resetAllInputs();
        }
        return;
        
    }
    const planChangeHandler = event => {
        setEnteredPlan(event.target.value);
        setEnteredPlanIsValid(true);
    }
    const resetAllInputs = () => {
        resetNameInput();
        resetEmailInput();
        resetAddressInput();
        resetPhoneInput();
    }


    return(
            <div className={classes.user__form} href="#request" id='request'>
            <div className={classes.form__text}>
                <h1>Would you like to connect?</h1>
                <h3>If so, then enter information below and we will try to help you.</h3>
            </div>
            <form onSubmit={formSubmitHandler}>
            <div className={classes.form__inputs}>
                <div className={classes.form__input__group}>
                    <b>Email</b>
                    <input 
                        type='text' 
                        autoComplete='email' 
                        name='email' 
                        id='email'
                        placeholder='Your email' 
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}/>
                        {emailHasError && (
                            <p>Please provide correct email.</p>
                            )}
                </div>
                <div className={classes.form__input__group}>
                    <b>Name</b>
                    <input 
                        type='text' 
                        autoComplete='name' 
                        name='name' 
                        id='name'
                        placeholder='Your name' 
                        value={enteredName}
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}/>
                        {nameHasError && (
                            <p>Please provide correct name.</p>
                            )}
                </div>
                <div className={classes.form__input__group}>
                    <b>Phone</b>
                    <input 
                        type='tel' 
                        autoComplete='tel' 
                        name='Phone' 
                        id='phone'
                        placeholder='Your phone' 
                        pattern="[0-9]*" 
                        value={enteredPhone}
                        onChange={phoneChangeHandler}
                        onBlur={phoneBlurHandler}/>
                        {phoneHasError && (
                            <p>Please provide correct phone number.</p>
                            )}
                </div>        
                <div className={classes.form__input__group}>
                    <b>Address</b>
                    <input 
                        type='text' 
                        autoComplete='Address' 
                        name='address' 
                        id='address'
                        placeholder='Your address' 
                        value={enteredAddress}
                        onChange={addressChangeHandler}
                        onBlur={addressBlurHandler}
                        />
                        {addressHasError && (
                            <p>Please provide correct address.</p>
                            )}
                </div>  
            </div>
            <div className={classes.form__radio}>
                <input 
                    id="basic" 
                    type="radio" 
                    name="radio" 
                    value="basic"
                    onChange={planChangeHandler}
                    />
                <label htmlFor="basic">Basic</label>
            </div>
            
            <div className={classes.form__radio}>
                <input 
                    id="pro" 
                    type="radio" 
                    name="radio" 
                    value="pro"
                    onChange={planChangeHandler}
                    />
                <label htmlFor="pro">Pro</label>
            </div>
            
            <div className={classes.form__radio}>
                <input 
                    id="enterprise" 
                    type="radio" 
                    name="radio" 
                    value="enterprise"
                    onChange={planChangeHandler}
                    />
                <label htmlFor="enterprise">Enterprise</label>
            </div>
            <div className={classes.form__submit}>
                <button>Submit</button>
            </div>
            </form>
        </div>
    );
}

export default Form;