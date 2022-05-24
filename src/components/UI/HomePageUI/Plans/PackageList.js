import React from "React";

import classes from "./PackageList.module.css";

const PackageList = (props) => {
  if (props.items.length === 0) {
    return <h2>Found no packages. Seems something is wrong.</h2>;
  }

  return (
    <ul className={classes.planList}>
      {props.items.map((plan) => {
        <Package
          key={plan.id}
          nameOfPackage={plan.nameOfPackage}
          price={plan.price}
          speed={plan.speed}
        />;
      })}
    </ul>
  );
};
