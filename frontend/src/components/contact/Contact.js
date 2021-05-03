import React, { Fragment } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ContactForm from './ContactForm';
import ContactSuccess from './ContactSuccess';

const Contact = () => {
  let { path } = useRouteMatch();

  return (
    <Fragment>
      <Switch>
        <Route exact path={path} component={ContactForm} />
        <Route exact path={`${path}/success`} component={ContactSuccess} />
      </Switch>
    </Fragment>
  );
};

export default Contact;
