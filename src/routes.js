import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Address from './pages/Address';
import NewAddress from './pages/NewAddress';
import About from './pages/About';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Dashboard} />
      <Route path="/product" component={Product} />
      <Route path="/cart" component={Cart} />
      <Route path="/address" component={Address} />
      <Route path="/new-address" component={NewAddress} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
