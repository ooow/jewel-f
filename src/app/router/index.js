import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../pages/TempApp/App';
import NotFound from '../pages/NotFound/index';

/**
 * Main project routing configuration.
 */
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />,
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
