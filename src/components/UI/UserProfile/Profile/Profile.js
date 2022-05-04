import React, { Fragment } from "react";
import Layout from "../../Helpers/Layout/Layout";
import Balance from "../Balance/Balance";
import Tariffs from "../Tariffs/Tariffs";

const Profile = () => {
    return (
    <Fragment>
        <Balance/>
        <Tariffs/>
        {console.log("rendering....")}
    </Fragment>
    );
}

export default Profile;