import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import Advert from '../pages/Advert';

/**
 * Main project routing configuration.
 */
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />,
          <Route path='/advert/:id' component={Advert} />,
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
