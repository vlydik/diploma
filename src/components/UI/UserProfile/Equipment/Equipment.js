import React from "react";

import classes from "./Equipment.module.css";

const Equipment = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form className={classes.form}>
          <h4>Choose internet equipment</h4>
          <a>
            Please choose from the list the equipment that will be capable of
            your needs.
          </a>
          <br />
          <select>
            <option value="Mikrotik RB952Ui-5ac2nD">
              Mikrotik RB952Ui-5ac2nD
            </option>
            <option value="Mikrotik RB2011UIAS-2HND-IN">
              Mikrotik RB2011UIAS-2HND-IN
            </option>
            <option value="Mikrotik RB760iGS HEX S SFP">
              Mikrotik RB760iGS HEX S SFP
            </option>
          </select>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};
export default Equipment;
