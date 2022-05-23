import React from "react";

const Payment = (props) => {
  return (
    <li>
      <div className="payment__item">
        <div className="payment__item__number">
          <h3>Payment #{props.payment_id}</h3>
        </div>
        <div className="payment__item__data">
            <b>{props.date}</b>
            <p>+{props.amount}zl</p>
        </div>

      </div>
    </li>
  );
};

export default Payment;
