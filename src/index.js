import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import registerServiceWorker from './registerServiceWorker';
import Router from './app/router';
import store from './app/redux/store';
import './index.scss';

/** The Jewel. */
class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

library.add(faSearch);
library.add(faTimes);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
