import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from './app/configs/router/Router';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/scss/bootstrap.scss';

class Index extends Component {
  render() {
    return <Router />;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
