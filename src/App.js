import { Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';

import Header from './components/UI/Header/Header';
import Layout from './components/UI/Layout/Layout';
import Main from './components/UI/Main/Main';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
