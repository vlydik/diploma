import React from "react";

import classes from "./Tariffs.module.css"

const Tariffs = () => {
console.log("Rendering...");
return (
    <div>
        <section className={classes.plans} href="#plans" id="plans">
            <h1>Would you like to change your plan?</h1>
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
    </div>
)
    
}

export default Tariffs;