import React from "react";

import classes from "./Service.module.css";

const Service = (props) => {
  return (
    <div className={classes.card}>
      <h1>{props.additionalService}</h1>
      <p className={classes.price}>{props.additionalServicePrice} zl/month</p>
      <button
        onClick={() => {
          //TODO send connection request to administrator with userID and service that user would like to connect
        }}
      >
        Connect
      </button>
    </div>
  );
};
export default Service;
