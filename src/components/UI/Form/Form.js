import react from "react";
import classes from "./Form.module.css"

const Form = () => {

    return(
            <div className={classes.user__form}>
            <div className={classes.form__text}>
                <h1>Would you like to connect?</h1>
                <h3>If so, then enter information below and we will try to help you.</h3>
            </div>
            <div className={classes.form__inputs}>
                <div className={classes.form__input__group}>
                    <b>Email</b>
                    <input type='text' autocomplete='email' name='email' placeholder='Your email'></input>
                </div>
                <div className={classes.form__input__group}>
                    <b>Name</b>
                    <input type='text' autocomplete='name' name='name' placeholder='Your name'></input>
                </div>
                <div className={classes.form__input__group}>
                    <b>Phone</b>
                    <input type='tel' autocomplete='tel' name='Phone' placeholder='Your phone' pattern="[0-9]*"></input>
                </div>        
                <div className={classes.form__input__group}>
                    <b>Address</b>
                    <input type='text' autocomplete='Address' name='address' placeholder='Your address'></input>
                </div>  
            </div>
            <div className={classes.form__radio}>
                <input id="basic" type="radio" name="radio" value="basic" checked/>
                <label for="basic">Basic</label>
            </div>
            
            <div className={classes.form__radio}>
                <input id="pro" type="radio" name="radio" value="pro"/>
                <label for="pro">Pro</label>
            </div>
            
            <div className={classes.form__radio}>
                <input id="enterprise" type="radio" name="radio" value="enterprise"/>
                <label for="enterprise">Enterprise</label>
            </div>
            <div className={classes.form__submit}>
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Form;