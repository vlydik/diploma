import React from "react";
import classes from "./Balance.module.css";

const Balance = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__value}>30zl</div>
      <div className={classes.container__label}>Your balance</div>
    </div>
  );
};

export default Balance;
