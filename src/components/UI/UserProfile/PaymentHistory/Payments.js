import React from "react";
import Payment from "./Payment";
import classes from "./Payments.module.css";

const Payments = (props) => {
  if (props.items.length === 0) {
    return <h2>Found no payments.</h2>;
  }

  return (
    <React.Component>
      <div className={classes.general}>
        <h1>Payment history</h1>
      </div>
      <div className={classes.payments}>
        <Payment payment_id={props.payment_id} date={props.date} amount={props.amount}/>
      </div>
    </React.Component>
  );
};

export default Payments;
