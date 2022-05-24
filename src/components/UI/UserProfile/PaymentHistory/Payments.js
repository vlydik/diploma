import React from "react";
import Payment from "./Payment";
import classes from "./Payments.module.css";

const Payments = (props) => {
  if (props.payments.length === 0) {
    return <h2 className={classes.h2}>Found no payments.</h2>;
  }

  return (
    <div className={classes.global}>
      <div className={classes.general}>
        <h1>Payment history</h1>
      </div>
      <div className={classes.payments}>
        <ul className={classes.payments__list}>
          {props.payments.map((payments) => (
            <Payment
              key={payments.payment_id}
              payment_id={payments.payment_id}
              date={payments.date}
              amount={payments.amount}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Payments;
