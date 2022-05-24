import React, {useState } from 'react';
import classes from "./Form.module.css";
import useInput from "../../../hooks/use-input-form";
import ErrorHandlerModal from "../../Helpers/ErrorHandler/ErrorHandlerModal";

const Form = () => {
  const [enteredPlan, setEnteredPlan] = useState(null);
  const [enteredPlanIsValid, setEnteredPlanIsValid] = useState(false);
  const [enteredHouseType, setEnteredHouseType] = useState(null);
  const [enteredHouseTypeIsValid, setEnteredHouseTypeIsValid] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  let formIsValid = false;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(
    (value) => value.trim() !== "" && value.trim().match("[0-9]*") !== "false"
  );

  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput((value) => value.trim() !== "");

  if (
    enteredEmailIsValid &&
    enteredNameIsValid &&
    enteredPhoneIsValid &&
    enteredAddressIsValid &&
    enteredPlanIsValid &&
    enteredHouseTypeIsValid
  ) {
    formIsValid = true;
  }

  const errorHandler = () => {
    setShowErrorModal(false);
  };

  const successHandler = () => {
    setShowSuccessModal(false);
    window.location.reload();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setShowErrorModal(true);
    }

    if (formIsValid) {
      console.log(enteredName);
      console.log(enteredEmail);
      console.log(enteredAddress);
      console.log(enteredHouseType);
      console.log(enteredPhone);
      console.log(enteredPlan);
      resetAllInputs();
      setShowSuccessModal(true);
    }

    return;
  };

  const planChangeHandler = (event) => {
    setEnteredPlan(event.target.value);
    setEnteredPlanIsValid(true);
  };
  const houseTypeChangeHandler = (event) => {
    setEnteredHouseType(event.target.value);
    setEnteredHouseTypeIsValid(true);
  };
  const resetAllInputs = () => {
    resetNameInput();
    resetEmailInput();
    resetAddressInput();
    resetPhoneInput();
  };

  return (
    <div className={classes.user__form} href="#request" id="request">
      {showErrorModal && (
        <ErrorHandlerModal
          data="Please check whether you have entered all the information!"
          onConfirm={errorHandler}
        />
      )}
      {showSuccessModal && (
        <ErrorHandlerModal
          data="The data has been sent successfully!"
          onConfirm={successHandler}
        />
      )}
      <div className={classes.form__text}>
        <h1>Would you like to connect?</h1>
        <h3>
          If so, then enter information below and we will try to help you.
        </h3>
      </div>
      <form onSubmit={formSubmitHandler} className={classes.general__rorm}>
        <div className={classes.form__inputs}>
          <div className={classes.form__input__group}>
            <b>Email</b>
            <input
              type="text"
              autoComplete="email"
              name="email"
              id="email"
              placeholder="Your email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p>Please provide correct email.</p>}
          </div>
          <div className={classes.form__input__group}>
            <b>Name</b>
            <input
              type="text"
              autoComplete="name"
              name="name"
              id="name"
              placeholder="Your name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && <p>Please provide correct name.</p>}
          </div>
          <div className={classes.form__input__group}>
            <b>Phone</b>
            <input
              type="tel"
              autoComplete="tel"
              name="Phone"
              id="phone"
              placeholder="Your phone"
              pattern="[0-9]*"
              value={enteredPhone}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
            />
            {phoneHasError && <p>Please provide correct phone number.</p>}
          </div>
          <div className={classes.form__radio}>
            <input
              id="apartment_buildings"
              type="radio"
              name="house"
              value="Apartment building"
              onChange={houseTypeChangeHandler}
            />
            <label htmlFor="apartment_buildings">Apartment building</label>
          </div>
          <div className={classes.form__radio}>
            <input
              id="low_rise_buildings"
              type="radio"
              name="house"
              value="Low-rise building"
              onChange={houseTypeChangeHandler}
            />
            <label htmlFor="low_rise_buildings">Low-rise building</label>
          </div>
          <div className={classes.form__radio}>
            <input
              id="private"
              type="radio"
              name="house"
              value="Private location/house"
              onChange={houseTypeChangeHandler}
            />
            <label htmlFor="private">Private location/house</label>
          </div>
          <div className={classes.form__radio}>
            <input
              id="office"
              type="radio"
              name="house"
              value="office"
              onChange={houseTypeChangeHandler}
            />
            <label htmlFor="office">Office</label>
          </div>
          <div className={classes.form__input__group}>
            <b>Address</b>
            <input
              type="text"
              autoComplete="Address"
              name="address"
              id="address"
              placeholder="Your address"
              value={enteredAddress}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
            />
            {addressHasError && <p>Please provide correct address.</p>}
          </div>
        </div>
        <div className={classes.form__radio}>
          <input
            id="basic"
            type="radio"
            name="package"
            value="basic"
            onChange={planChangeHandler}
          />
          <label htmlFor="basic">Basic</label>
        </div>

        <div className={classes.form__radio}>
          <input
            id="pro"
            type="radio"
            name="package"
            value="pro"
            onChange={planChangeHandler}
          />
          <label htmlFor="pro">Pro</label>
        </div>
        <div className={classes.form__radio}>
          <input
            id="enterprise"
            type="radio"
            name="package"
            value="enterprise"
            onChange={planChangeHandler}
          />
          <label htmlFor="enterprise">Enterprise</label>
        </div>
        <div className={classes.form__submit}>
          <button onClick={formSubmitHandler}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
