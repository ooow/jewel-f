/* eslint-disable no-underscore-dangle */
import window from 'global/window';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import EnvService from '../../services/EnvService';
import { fetchAdverts } from '../../services/api/AdvertService';

/**
 * Returns configured store for current environment.
 */
function generateStore() {
  const middleware = [thunk];

  if (!EnvService.isProdEnv()) {
    /**
     * Redux devtools is available on dev env.
     * Please, add to your Crhome "Redux DevTools" extension.
     *
     * @link https://chrome.google.com/webstore/detail/redux-devtools
     * /lmhkpmbekcpmknklioeibfkpmmfibljd
     */
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

/** Tries to fetch initial adverts for displaying on home page. */
store.dispatch(fetchAdverts());

export default store;
