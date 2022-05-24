import React from "react";
import Tariff from "./Tariff";

import classes from "./Tariffs.module.css";

const Tariffs = (props) => {
  return (
    <div>
      <section className={classes.plans} href="#plans" id="plans">
        <h1>Our plans.</h1>
        <a>Reliable speed. 24/7 Support. All the time.</a>
      </section>
      <ul className={classes.product__cards}>
      {props.tariffs.map((tariffs) => (
            <Tariff
              key={tariffs.tariff_id}
              tariff_id={tariffs.tariff_id}
              name={tariffs.name}
              price={tariffs.price}
            />
          ))}
          </ul>
    </div>
  );
};

export default Tariffs;
