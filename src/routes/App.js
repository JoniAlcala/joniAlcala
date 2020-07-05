import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Layout from '../components/Layout';
import NotFoun from '../containers/NotFoun';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFoun} />
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
