import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Import Containers
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';
import Login from '../containers/Login1';

const Routes = () => (
  <Suspense fallback="Loading......">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
