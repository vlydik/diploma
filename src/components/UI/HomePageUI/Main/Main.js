import React, { Fragment, useState } from "react";
import classes from "./Main.module.css";
import star from "../../../../gallery/star.svg";
import chat from "../../../../gallery/chat.svg";
import man from "../../../../gallery/man.svg";
import Form from "../Form/Form";
import Tariffs from "../Plans/Tariffs";

const DUMMY_TARIFFS = [
  {
    tariff_id: "1",
    name: "Standard 100",
    price: 30.0,
  },
  {
    tariff_id: "2",
    name: "Pro 200",
    price: 60.0,
  },
  {
    tariff_id: "3",
    name: "Enterprise 500",
    price: 100.0,
  },
];

const Main = () => {
  const [packages, setPackages] = useState(DUMMY_TARIFFS);

  return (
    <Fragment>
      <section className={classes.starting} href="#main" id="main">
        <h1>We connect people around Poland</h1>
        <h2>
          Everything that you dreamed of can be brought to life exactly at the
          moment when you decide to win.
        </h2>
        <button>Connect now!</button>
      </section>
      <section className={classes.about} href="#about" id="about">
        <h1>Why choose us?</h1>
        <a>
          We work hard every day to make life of our clients better and happier
        </a>
        <div className={classes.about_icons}>
          <div className={classes.about_icons__row}>
            <div className={classes.about_icons__row__valign}>
              <div className={classes.about_icons__row__valign__img}>
                <img src={star} />
              </div>
            </div>
            <div className={classes.about_textwrapper}>
              <h2>High quality</h2>
              <a>
                We are a leading firm in providing quality and value to our
                customers. Each member of our team has at least 5 years of legal
                experience.
              </a>
            </div>
          </div>
          <div className={classes.about_icons__row}>
            <div className={classes.about_icons__row__valign}>
              <div className={classes.about_icons__row__valign__img}>
                <img src={chat} />
              </div>
            </div>
            <div className={classes.about_textwrapper}>
              <h2>Good Support</h2>
              <a>
                Our managers are always ready to answer your questions. You can
                call us at the weekends and at night. You can also visit our
                office for a personal consultation.
              </a>
            </div>
          </div>
          <div className={classes.about_icons__row}>
            <div className={classes.about_icons__row__valign}>
              <div className={classes.about_icons__row__valign__img}>
                <img src={man} />
              </div>
            </div>
            <div className={classes.about_textwrapper}>
              <h2>Individual Approach</h2>
              <a>
                Our company works according to the principle of individual
                approach to every client. This method allows us to achieve
                success in problems of all levels.
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.plans} href="#plans" id="plans">
      <Tariffs tariffs={packages} />
      </section>

      <Form />
    </Fragment>
  );
};
export default Main;
