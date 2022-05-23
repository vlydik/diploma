import React from "react";

import classes from "./Payment.module.css";

const Payment = (props) => {
  return (
    <li className={classes.list__item}>
      <div className={classes.payment__item}>
        <div className={classes.payment__item__number}>
          <h4>Payment #{props.payment_id}</h4>
        </div>
        <div className={classes.payment__item__data}>
            <b>{props.date.toLocaleString('en-US', { dateStyle: 'long' })}</b>
            <p>+{props.amount}zl</p>
        </div>

      </div>
    </li>
  );
};

export default Payment;
