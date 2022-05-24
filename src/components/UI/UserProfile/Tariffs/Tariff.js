import React from "react";

import classes from "./Tariff.module.css";

function removeFirstWord(str) {
    const indexOfSpace = str.indexOf(' ');
  
    if (indexOfSpace === -1) {
      return '';
    }
  
    return str.substring(indexOfSpace + 1);
}

const Tariff = (props) => {
  return (
      <div className={classes.card}>
        <h1>{props.name}</h1>
        <p className={classes.price}>{props.price} zl/month</p>
        <b>{removeFirstWord(props.name)} MBit/s</b>

        <p>
          <button
            onClick={() => {
              //TODO send connection request to administrator with userID and service that user would like to connect
            }}
          >
            Change
          </button>
        </p>
      </div>
  );
};

export default Tariff;
