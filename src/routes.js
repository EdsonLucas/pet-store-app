import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
