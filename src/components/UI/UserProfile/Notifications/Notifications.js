import React from "react";

import classes from "./Notifications.module.css";

const Notifications = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form className={classes.form}>
          <h4>Notifications</h4>
          <a>Choose notifications type</a>
          <br />
          <select>
            <option value="SMS">SMS</option>
            <option value="Phone call">Phone call</option>
          </select>
          <button type="submit">Change</button>
        </form>
      </div>
    </div>
  );
};
export default Notifications;
