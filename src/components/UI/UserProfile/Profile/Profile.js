import React, { Fragment } from "react";
import Layout from "../../Helpers/Layout/Layout";
import Balance from "../Balance/Balance";
import Tariffs from "../Tariffs/Tariffs";
import Services from "../Services/Services";
import Controls from "../Controls/Controls";
import Notifications from "../Notifications/Notifications";
import Equipment from "../Equipment/Equipment";
import Payments from "../PaymentHistory/Payments";

const Profile = () => {
    return (
    <Fragment>
        <Balance/>
        <Tariffs/>
        <Services/>
        <Controls/>
        <Notifications/>
        <Equipment/>
        <Payments/>
    </Fragment>
    );
}

export default Profile;