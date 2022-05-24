import { useHistory } from "react-router-dom";
import React from "react";
import classes from "./Controls.module.css";

const Controls = () => {
  const history = useHistory();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <button
          className={classes.button}
          onClick={() => {
            history.push("/profile/statistics");
          }}
        >
          Check statistics
        </button>
        <button className={classes.button}>Top-up Balance</button>
        <button className={classes.button}>Freeze account</button>
      </div>
    </div>
  );
};

export default Controls;
