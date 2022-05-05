import classes from './Services.module.css';


const Services = () => {
    return(
        <div className={classes.container}>
            <div className={classes.services}>
                <h3>
                    Additional services
                </h3>
                <a>
                    Make your internet safer.
                </a>
            </div>
            <div className={classes.product__container}>
                <div className={classes.product__card}>
                    <div className={classes.product__card__wrapper}>
                        <h3>Static IP</h3>
                        <div className={classes.product__card__content}>

                        </div>
                    </div>
                </div>
                <div className={classes.product__card}>
                    <div className={classes.product__card__wrapper}>
                        <h3>Static IP</h3>
                        <div className={classes.product__card__content}>

                        </div>
                    </div>
                </div>
                <div className={classes.product__card}>
                    <div className={classes.product__card__wrapper}>
                        <h3>Static IP</h3>
                        <div className={classes.product__card__content}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Services;