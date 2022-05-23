import React, { Fragment, useState } from "react";
import Layout from "../../Helpers/Layout/Layout";
import Balance from "../Balance/Balance";
import Tariffs from "../Tariffs/Tariffs";
import Services from "../Services/Services";
import Controls from "../Controls/Controls";
import Notifications from "../Notifications/Notifications";
import Equipment from "../Equipment/Equipment";
import Payments from "../PaymentHistory/Payments";

const DUMMY_PAYMENTS = [
  {
    payment_id: "123",
    date: new Date(2022, 5, 2),
    amount: 50.0,
  },
  { payment_id: "234", date: new Date(2022, 6, 3), amount: 30.0 },
  { payment_id: "345", date: new Date(2022, 7, 4), amount: 20.0 },
];

const Profile = () => {
  const [payments, setPayments] = useState(DUMMY_PAYMENTS);

  return (
    <Fragment>
      <Balance />
      <Tariffs />
      <Services />
      <Controls />
      <Notifications />
      <Equipment />
      <Payments payments={payments} />
    </Fragment>
  );
};

export default Profile;
