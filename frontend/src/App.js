import React, { Fragment, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/layout/NavBar';

import PrivateRoute from './components/routing/PrivateRoute';
import Home from './components/auth/Home';
import Register from './components/auth/Register';
import About from './components/about/About';
import HowTo from './components/howto/HowTo';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

const App = () => {
  console.log(localStorage.jwt)

  useEffect(() => {
    setAuthToken(localStorage.jwt);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route
                exact
                path='/'
                render={() => {
                  return <Redirect to='/home' />;
                }}
            />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/home' component={Home} />
            <Route path='/register' component={Register} />
            <Route exact path='/about' component={About} />
            <Route exact path='/howto' component={HowTo} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

