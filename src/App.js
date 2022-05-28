import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Fragment } from "react/cjs/react.development";
import "./App.css";
import AdminLoginPage from "./components/pages/AdminLoginPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import UserPage from "./components/pages/UserPage";
import AuthContext from "./components/store/AuthContext";

import Layout from "./components/UI/Helpers/Layout/Layout";
import Profile from "./components/UI/UserProfile/Profile/Profile";
import Statistics from "./components/UI/UserProfile/Statistics/Statistics";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Switch>
        <Route path="/admin" exact>
          <AdminLoginPage />
        </Route>
        <Layout>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {!authCtx.isLogged && (
            <Route path="/login">
              <LoginPage />
            </Route>
          )}
          <Route path="/profile" exact>
            {!authCtx.isLogged && <Redirect to="/login" />}
            {authCtx.isLogged && <UserPage />}
          </Route>
          <Route path="/profile/statistics" exact>
            {!authCtx.isLogged && <Redirect to="/login" />}
            {authCtx.isLogged && <Statistics />}
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Layout>
      </Switch>
    </Fragment>
  );
}

export default App;
