import React from "react";
import Layout from "../../Helpers/Layout/Layout";
import Tariffs from "../Tariffs/Tariffs";

const Profile = () => {
    return(<Layout>
        <Tariffs/>
        {console.log("rendering....")}
    </Layout>);
}

export default Profile;