/* eslint-disable no-undef,no-underscore-dangle */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

function generateStore() {
  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    /* Redux devtools is available on dev env.
       Please add to your Crhome "Redux DevTools" extension. */
    return createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(...middleware),
    );
  }

  return createStore(reducers, applyMiddleware(...middleware));
}

/**
 * The project store.
 */
const store = generateStore();

export default store;
