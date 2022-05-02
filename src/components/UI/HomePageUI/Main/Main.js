import React, { Fragment } from "react";
import classes from './Main.module.css';
import star from '../../../../gallery/star.svg';
import chat from '../../../../gallery/chat.svg';
import man from '../../../../gallery/man.svg';
import Form from "../Form/Form";

const Main = () => {
    return(
        <Fragment>
        <section className={classes.starting} href="#main" id="main">
            <h1>We connect people around Poland</h1>
            <h2>Everything that you dreamed of can be brought to life exactly at the moment when you decide to win.</h2>
            <button>Connect now!</button>
        </section>
        <section className={classes.about} href="#about" id="about">
            <h1>Why choose us?</h1>
            <a>We work hard every day to make life of our clients better and happier</a>
            <div className={classes.about_icons}>
                <div className={classes.about_icons__row}>
                    <div className={classes.about_icons__row__valign}>
                        <div className={classes.about_icons__row__valign__img}>
                            <img src={star}/>
                        </div>
                    </div>
                    <div className={classes.about_textwrapper}>
                        <h2>High quality</h2>
                        <a>We are a leading firm in providing quality and value to our customers. Each member of our team has at least 5 years of legal experience.</a>
                    </div>
                </div>
                <div className={classes.about_icons__row}>
                    <div className={classes.about_icons__row__valign}>
                        <div className={classes.about_icons__row__valign__img}>
                            <img src={chat}/>
                        </div>
                    </div>
                    <div className={classes.about_textwrapper}>
                        <h2>Good Support</h2>
                        <a>Our managers are always ready to answer your questions. You can call us at the weekends and at night. You can also visit our office for a personal consultation.</a>
                    </div>
                </div>
                <div className={classes.about_icons__row}>
                    <div className={classes.about_icons__row__valign}>
                        <div className={classes.about_icons__row__valign__img}>
                            <img src={man}/>
                        </div>
                    </div>
                    <div className={classes.about_textwrapper}>
                        <h2>Individual Approach</h2>
                        <a>Our company works according to the principle of individual approach to every client. This method allows us to achieve success in problems of all levels.</a>
                    </div>
                </div>
            </div>
        </section>
        <section className={classes.plans} href="#plans" id="plans">
            <h1>Our plans</h1>
            <a>Reliable speed. 24/7 Support. All the time.</a>
        </section>
        <div className={classes.product__cards}>
            <div className={classes.card}>
                <h1>Standard</h1>
                <p className={classes.price}>30zl/month</p>
                <b>100 Mb/s</b>
                <p>Services included:</p>
                <b>Internet Analysis</b>
                <br/><br/><br/>
                <p><button>Join now</button></p>
            </div>
            <div className={classes.card}>
                <h1>Pro</h1>
                <p className={classes.price}>60zl/month</p>
                <b>200 Mb/s</b>
                <p>Services included:</p>
                <b>Internet Analysis</b>
                <br/>
                <b>Static IP</b>
                <br/>
                <b>Parental Control</b>
                <p><button>Join now</button></p>
            </div>
            <div className={classes.card}>
                <h1>Enterprise</h1>
                <p className={classes.price}>from 100zl/month</p>
                <b>500 Mb/s</b>
                <p>Services included:</p>
                <b>Expand internet capacity</b><br/>
                <b>All services from Pro</b><br/>
                <b>Premium support</b><br/>
                <p><button>Join now</button></p>
            </div>
        </div>
        <Form/>
        </Fragment>
    );
}
export default Main;