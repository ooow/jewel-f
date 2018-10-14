/* eslint-disable no-undef,no-underscore-dangle */
import { createStore } from 'redux';
import reducers from '../reducers';

function initStore() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    /* Redux devtools is available on dev env.
       Please add to your Crhome "Redux DevTools" extension. */
    return createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
  }

  return createStore(reducers);
}

/**
 * The project store.
 */
const store = initStore();

export default store;
