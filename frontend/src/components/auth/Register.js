import React, { Fragment } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import RegisterForm from './RegisterForm';
import RegisterWaiting from './RegisterWaiting';
import RegisterSuccess from './RegisterSuccess';

const Register = () => {
  let { path } = useRouteMatch();

  return (
    <Fragment>
      <Switch>
      <Route exact path={path} component={RegisterForm} />
        <Route exact path={`${path}/waiting`} component={RegisterWaiting} />
        <Route exact path={`${path}/success`} component={RegisterSuccess} />
      </Switch>
    </Fragment>
  );
};

export default Register;