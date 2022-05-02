import react, { useContext } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import AuthContext from './components/store/AuthContext';

import Header from './components/UI/Header/Header';
import Layout from './components/UI/Helpers/Layout/Layout';
import Main from './components/UI/HomePageUI/Main/Main';
import Profile from './components/UI/UserProfile/Profile/Profile';

function App() {
  const authCtx = useContext(AuthContext);

  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          {!authCtx.isLogged && (
          <Route path='/login'>
            <LoginPage/>
          </Route>
          )}
          <Route path='/profile'>
            {authCtx.isLogged && <Profile/>}
            {!authCtx.isLogged && <Redirect to='/login'/>}
          </Route>
          <Route path='*'>
          <Redirect to='/' />
        </Route>
        </Switch>
    </Layout>
  );
}

export default App;
