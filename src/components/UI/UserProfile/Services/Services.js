import React from "react";
import Service from "./Service";

import classes from "./Services.module.css";

const Services = (props) => {
  return (
    <div>
      <section className={classes.services}>
        <h1>Some additional services</h1>
      </section>
      <ul className={classes.product__cards}>
      {props.services.map((services) => (
            <Service
              key={services.service_id}
              service_id={services.service_id}
              additionalService={services.additionalService}
              additionalServicePrice={services.additionalServicePrice}
            />
          ))}
          </ul>



      {/* <div className={classes.product__cards}>
        <div className={classes.card}>
          <h1>Static IP</h1>
          <p className={classes.price}>70zl/month</p>
          <p>Dedicated IP Address</p>
          <p>Reliable connection</p>
          <p>Suitable for IP cameras</p>
          <p>
            <button
              onClick={() => {
                //TODO send connection request to administrator with userID and service that user would like to connect
              }}
            >
              Connect
            </button>
          </p>
        </div>
        <div className={classes.card}>
          <h1>Parental Control</h1>
          <p className={classes.price}>30zl/month</p>
          <p>Block websites</p>
          <p>Block IP addresses</p>
          <p>Make internet safer</p>
          <p>
            <button
              onClick={() => {
                //TODO send connection request to administrator with userID and service that user would like to connect
              }}
            >
              Connect
            </button>
          </p>
        </div>
        <div className={classes.card}>
          <h1>IPTV</h1>
          <p className={classes.price}>20zl/month per device</p>
          <p>40+ TV Channels</p>
          <p>20+ Full HD TV Channels</p>
          <p>Reliable connection</p>
          <p>
            <button
              onClick={() => {
                //TODO send connection request to administrator with userID and service that user would like to connect
              }}
            >
              Connect
            </button>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
