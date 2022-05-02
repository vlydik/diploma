import react from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

import Header from './components/UI/Header/Header';
import Layout from './components/UI/Layout/Layout';
import Main from './components/UI/HomePageUI/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path='/login'>
            <LoginPage/>
          </Route>
        </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
